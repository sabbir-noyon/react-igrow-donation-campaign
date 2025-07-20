import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	const navItemStyle =
		"text-lg font-semibold hover:text-[#FF444A] duration-200"; // increased from text-base to text-lg

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4 lg:px-24 py-5 flex justify-between items-center">
				{/* Changed py-4 to py-5 for slightly more vertical space */}

				{/* Logo */}
				<Logo />

				{/* Desktop Menu */}
				<nav className="hidden lg:flex gap-8">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/donation"
						className={({ isActive }) =>
							isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
						}
					>
						Your Donations
					</NavLink>
					<NavLink
						to="/statistics"
						className={({ isActive }) =>
							isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
						}
					>
						Statistics
					</NavLink>
				</nav>

				{/* Hamburger Button */}
				<div className="lg:hidden">
					<button onClick={toggleMenu} className="text-[#0B0B0B]">
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="lg:hidden bg-white px-6 pb-4 shadow-md">
					<nav className="flex flex-col gap-4 items-center text-center">
						{" "}
						{/* added center alignment */}
						<NavLink
							to="/"
							onClick={closeMenu}
							className={({ isActive }) =>
								isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/donation"
							onClick={closeMenu}
							className={({ isActive }) =>
								isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
							}
						>
							Your Donations
						</NavLink>
						<NavLink
							to="/statistics"
							onClick={closeMenu}
							className={({ isActive }) =>
								isActive ? `${navItemStyle} text-[#FF444A]` : navItemStyle
							}
						>
							Statistics
						</NavLink>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navbar;
