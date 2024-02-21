import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Signup/>,
    }
    
]);