import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Mainpage from "./pages/MainPage/ui/mainpage.tsx";
import CatsPage from "./pages/CatsPage/ui/CatsPage.tsx";
import CatDetails from "./pages/CatDetails/ui/CatDetails.tsx";
import AdminPage from "./pages/AdminPage/ui/AdminPage.tsx";
import ArticlePage from "./pages/ArticlePage/ui/ArticlePage.tsx"
import ArticleDetails from "./pages/ArticleDetails/ui/ArticleDetails.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Mainpage/>}
            />
            {/*<Route*/}
            {/*    path={"/OneBublik"}*/}
            {/*    element={<BublikPage/>}*/}
            {/*/>*/}

            <Route
                path="/cats"
                element={<CatsPage/>}
            />

            {/* Страница с информацией о конкретном питомце */}
            <Route path="/cat/:id" element={<CatDetails />} />

            <Route
                path="/article"
                element={<ArticlePage/>}
            />
            <Route path="/article/:id" element={<ArticleDetails />} />

            <Route
                path="/admin"
                element={
                        <AdminPage />
                }
            />

        </>
    )
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)

