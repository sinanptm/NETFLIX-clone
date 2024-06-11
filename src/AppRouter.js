import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from './Contexts/AuthContext';
import Spinner from './assets/Spinner';

const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));

const AppRouter = () => {
    // const { user } = useAuth();
    // const { Navigate } = useNavigate();

    const router = createBrowserRouter([
        // { path: "/login", element: user ? <Navigate to="/home" /> : <Login /> },
        // { path: "/signup", element: user ? <Navigate to="/home" /> : <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/", element: <Login /> },
    ]);

    return (
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
            </Suspense>
    );
};

export default AppRouter;