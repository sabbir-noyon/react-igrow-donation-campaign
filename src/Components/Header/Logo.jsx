import { NavLink } from "react-router-dom";

const Logo = () => {
	return (
		<NavLink to="/">
			<div className="w-40 lg:w-44 mb-10 mt-6 lg:mb-0 lg:mt-0">
				<img src="/images/Logo.png"></img>
			</div>
		</NavLink>
	);
};

export default Logo;
