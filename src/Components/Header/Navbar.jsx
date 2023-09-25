import { NavLink } from "react-router-dom";

<index className="css"></index>

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex gap-5">
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