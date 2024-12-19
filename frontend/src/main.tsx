import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import PetChoice from "./pages/PetChoice/PetChoice.tsx";
import BublikPage from "./pages/BublikPage/BublikPage.tsx";
import Mainpage from "./pages/mainpage.tsx";
import PetsPage from "./pages/PetsPage/PetsPage.tsx";
import PetDetails from "./pages/PetDetails/PetDetails.tsx";

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
                path="/pets"
                element={<PetsPage/>}
            />

            {/* Страница с информацией о конкретном питомце */}
            <Route path="/pet/:id" element={<PetDetails />} />

        </>
    )
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)

