import './App.css';
import React from "react";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
        ]
    },
]);


function App() {
    return <RouterProvider router={router}/>;
}

export default App;
