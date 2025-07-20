import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
	return (
		<div className="px-4 py-3 lg:py-0 lg:px-0 flex flex-col min-h-screen">
			<Navbar />

			<div className="flex-grow">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default MainLayout;
