import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import PhoneDetails from "../Components/PhoneDetails/PhoneDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/public/phones.json')
            },
            {
                path:'/favorites',
                element:<Favorites></Favorites>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/phones/:id',
                element:<PhoneDetails></PhoneDetails>,
                loader:()=>fetch('/public/phones.json')
                
            }
        ]
    }
])

export default myCreatedRoute;