import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainpage from "./pages/MainPage";
import CatsPage from "./pages/CatsPage";
import CatDetails from "./pages/CatDetails";
import AdminPage from "./pages/AdminPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetails from "./pages/ArticleDetails";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={"/"} element={<Mainpage />} />

			<Route path="/cats" element={<CatsPage />} />
			<Route path="/cat/:id" element={<CatDetails />} />

			<Route path="/article" element={<ArticlePage />} />
			<Route path="/article/:id" element={<ArticleDetails />} />

			<Route path="/admin" element={<AdminPage />} />
		</>
	)
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
