import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Bubliks from "./pages/Bubliks/Bubliks.tsx";
import BublikPage from "./pages/BublikPage/BublikPage.tsx";
import Mainpage from "./pages/mainpage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={"/"}
                element={<Mainpage/>}
            />
            <Route
                path={"/OneBublik"}
                element={<BublikPage/>}
            />

            <Route
                path="/chooseUrBublik"
                element={<Bubliks/>}
            />

        </>
    )
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)

