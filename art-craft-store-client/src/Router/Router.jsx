import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import AddItems from "../Pages/Add/AddItems.jsx";
import HomeCardDetails from "../Pages/HomeCardDetails/HomeCardDetails.jsx";
import UserItemList from "../Pages/UserItemList/UserItemList.jsx";
import AllItems from "../Pages/Allitems/AllItems.jsx";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://art-craft-store.vercel.app/')
            },

            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addItems",
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: "/UserItemList",
                element: <PrivateRoute><UserItemList></UserItemList></PrivateRoute>,
                loader: () => fetch('https://art-craft-store.vercel.app/items')
            },
            {
                path: "updateItem/:_id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`https://art-craft-store.vercel.app/UserItemList/${params._id}`)
            },
            {
                path: "/allItems",
                element: <AllItems></AllItems>

            },
            {
                path: "/homeCardDetails/:_id",
                element: <PrivateRoute><HomeCardDetails></HomeCardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://art-craft-store.vercel.app/homeCardDetails/${params._id}`)
            }
        ],
    },
]);

export default Router;