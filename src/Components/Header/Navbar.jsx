import { NavLink } from "react-router-dom";
import Logo from "./Logo";

<index className="css"></index>

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col lg:flex-row lg:justify-between items-center py-8 px-10 lg:py-12 lg:px-24 ">
                <Logo></Logo>
                <ul className="flex gap-10">
                    <li className="text-2xl font-medium text-[#0B0B0B]">
                    <NavLink to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] font-semibold underline":""}>Home
                    </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]" >
                    <NavLink to="/donation"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] font-semibold underline":""}>Donation
                    </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]" >
                    <NavLink to="/statistics"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] font-semibold underline":""}>Statistics
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;