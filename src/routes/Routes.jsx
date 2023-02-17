import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Login from "../components/Authentication/Login";
import SingUp from "../components/Authentication/SingUp";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default router;