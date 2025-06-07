import axios from "axios";
import { type Article } from "../types";

export async function getAllArticles(): Promise<Article[]> {
  const response = await axios.get<Article[]>("http://localhost:3000/api/articles/");
  return response.data;
}

export async function getArticle(id: string): Promise<Article> {
  const response = await axios.get<Article>(`http://localhost:3000/api/articles/${id}`);
  return response.data;
} 