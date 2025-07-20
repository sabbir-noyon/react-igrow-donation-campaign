import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import EachCard from "../Pages/EachCard/EachCard";
import Error from "../Pages/Error";

const myCreatedRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,

		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/data.json"),
			},
			{
				path: "/donation",
				element: <Donation />,
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/dataForCards/:category",
				element: <EachCard />,
				loader: () => fetch("/data.json"),
			},
		],
	},
]);

export default myCreatedRouter;
