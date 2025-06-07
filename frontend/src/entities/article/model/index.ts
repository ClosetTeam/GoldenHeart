import { createEvent, createStore, createEffect } from 'effector';
import { getAllArticles, getArticle } from '../api';
import { type Article } from '../types';

// Events
export const fetchArticles = createEvent();
export const fetchArticleById = createEvent<string>();

// Effects
export const fetchArticlesFx = createEffect(async () => {
    const articles = await getAllArticles();
    return articles;
});

export const fetchArticleByIdFx = createEffect(async (id: string) => {
    const article = await getArticle(id);
    return article;
});

// Stores
export const $articles = createStore<Article[]>([]);
export const $currentArticle = createStore<Article | null>(null);

$articles
    .on(fetchArticlesFx.doneData, (_, articles) => articles);

$currentArticle
    .on(fetchArticleByIdFx.doneData, (_, article) => article);

// Link events to effects
fetchArticles.watch(fetchArticlesFx);
fetchArticleById.watch(fetchArticleByIdFx); 