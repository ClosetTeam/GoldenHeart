import { createEffect, createStore, sample } from "effector";
import { Cat, CatRequest } from "../types";
import { getAllCats, removeCat, updateCat } from "../api";
import { createGate } from "effector-react";

export const $cats = createStore<Cat[]>([]);

// Эффекты
export const getAllCatsFx = createEffect(getAllCats);
export const updateCatFx = createEffect(
	({ id, request }: { id: number; request: CatRequest }) =>
		updateCat(id, request)
);
export const removeCatFx = createEffect(removeCat);

// Гейты
export const catsGate = createGate();

// Связи для получения всех котов
sample({
	clock: catsGate.open,
	target: getAllCatsFx,
});

sample({
	source: getAllCatsFx.doneData,
	target: $cats,
});

sample({
	clock: removeCatFx.doneData,
	target: getAllCatsFx,
});

sample({
	clock: updateCatFx.doneData,
	target: getAllCatsFx,
});
