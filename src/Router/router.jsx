import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/Home";
import Download from "../Download/DOwnload";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true, Component: Login
            },
            {
                path : '/download',
                Component : Download
            },
            {
                path : '/home',
                Component : Home
            },
        ]
    },
]);

export default router;