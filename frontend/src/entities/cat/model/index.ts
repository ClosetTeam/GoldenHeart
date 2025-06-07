import { createEvent, createStore, createEffect } from 'effector';
import { getAllCats, updateCat, removeCat } from '..';
import { type Cat } from '..';

// Events
export const fetchCats = createEvent();
export const updateCatEvent = createEvent<{ id: number; request: Omit<Cat, 'id'> }>();
export const removeCatEvent = createEvent<number>();

// Effects
export const fetchCatsFx = createEffect(async () => {
    const cats = await getAllCats();
    return cats;
});

export const updateCatFx = createEffect(async ({ id, request }: { id: number; request: Omit<Cat, 'id'> }) => {
    await updateCat(id, request);
    return { id, request };
});

export const removeCatFx = createEffect(async (id: number) => {
    await removeCat(id);
    return id;
});

// Stores
export const $cats = createStore<Cat[]>([]);

$cats
    .on(fetchCatsFx.doneData, (_, cats) => cats)
    .on(updateCatFx.doneData, (state, { id, request }) =>
        state.map((cat) => (cat.id === id ? { ...cat, ...request } : cat))
    )
    .on(removeCatFx.doneData, (state, id) => state.filter((cat) => cat.id !== id));

// Link events to effects
fetchCats.watch(fetchCatsFx);
updateCatEvent.watch(updateCatFx);
removeCatEvent.watch(removeCatFx); 