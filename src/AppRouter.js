import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useAuth } from './Contexts/AuthContext';
import Spinner from './assets/Spinner/Spinner';

const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));

const AppRouter = () => {
    const { user, loading } = useAuth();

    const router = createBrowserRouter([
        { path: "/login", element: user ? <Navigate to="/home" /> : <Login /> },
        { path: "/signup", element: user ? <Navigate to="/home" /> : <Login /> },
        { path: "/home", element:  <Home /> },
        { path: "/", element: <Home /> },
    ]);
    if (loading){
        return <Spinner />
    }

    return (
        <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppRouter;