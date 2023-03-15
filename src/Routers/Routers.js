import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllUser from "../Pages/AllUser/AllUser";
import Home from "../Pages/Home/Home";
import UserDetails from "../Pages/UserDetails/UserDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/users',
                element: <PrivetRoute><AllUser /></PrivetRoute>
            },
            {
                path: '/user',
                element: <PrivetRoute><UserDetails /></PrivetRoute>
            }
        ]
    }
]);

export default router;