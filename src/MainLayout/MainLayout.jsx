import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="px-4 py-3 lg:py-0 lg:px-0">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
          
            
        </div>
    );
};

export default MainLayout;