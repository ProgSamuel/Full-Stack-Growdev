import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";
import Transacoes from "../pages/transacoes";

export const routes = createBrowserRouter([
 
    // {
    //     path: "/",
    //     element: <Home />,
    // },
    {
        path:'/',
        element: <Transacoes />
    }
    
]);