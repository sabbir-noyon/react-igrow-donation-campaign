import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
             path:"/",
             element:<Home></Home>
            },

            {
                path:"/donation",
                element:<Donation></Donation>
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>
            }
        ]

    },
])
  

export default myCreatedRouter;