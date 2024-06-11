import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useAuth } from './Provider/AuthContext';
import Spinner from './assets/Spinner';
import ErrorBoundary from './Provider/ErrorBoundary'; // Adjust the import path as necessary

// const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));

const AppRouter = () => {
    const { user } = useAuth();

    const router = createBrowserRouter([
        // { path: "/login", element: user ? <Navigate to="/home" /> : <Login /> },
        // { path: "/signup", element: user ? <Navigate to="/home" /> : <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/", element: <Home /> },
    ]);

    return (
        <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRouter;
