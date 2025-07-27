// src/Components/Footer/Footer.jsx
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#0B0B0B] text-white text-center py-10  mt-[-50] lg:mt-[-80]">
			<h2 className="text-lg md:text-xl lg:text-xl font-semibold text-[#FF444A]">
				Donation <span className="text-[#585858]">Campaign</span>{" "}
			</h2>
			<p className="text-sm text-gray-400 mt-2">
				© {currentYear} Donation Campaign. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
