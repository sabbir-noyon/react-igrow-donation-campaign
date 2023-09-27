import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import EachCard from "../Pages/EachCard/EachCard";

const myCreatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        
        children:[
            {
             path:"/",
             element:<Home></Home>,
             loader: ()=> fetch('/public/data.json')
            
            },

            {
                path:"/donation",
                element:<Donation></Donation>
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },

            {
                path:"/dataForCards/:category",
                element:<EachCard></EachCard>,
                loader: ()=> fetch("/public/data.json")
            }
        ]

    },
])
  

export default myCreatedRouter;