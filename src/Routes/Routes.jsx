import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddArtAndCraft from "../Pages/AddArtAndCraft";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update";
import ViewDetails from "../Pages/ViewDetails";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/assignment')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add',
                element:<PrivateRoute><AddArtAndCraft></AddArtAndCraft></PrivateRoute>
            },
            {
                path:'/update',
                element:<PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params})=> fetch (`http://localhost:5000/assignment/${params.id}`)
                
            }
        ]
    }
]);

export default router;