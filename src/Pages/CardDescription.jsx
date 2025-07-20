import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {
	const navigate = useNavigate();
	const {
		id,
		category,
		img,
		title,
		cardColorBg,
		categoryBg,
		textColors,
		price,
		description,
	} = newData || {};

	const handleDonate = () => {
		const addedDonateArray = [];
		const donatedMoney = JSON.parse(localStorage.getItem("donated"));

		if (!donatedMoney) {
			addedDonateArray.push(newData);
			localStorage.setItem("donated", JSON.stringify(addedDonateArray));
		} else {
			const isExist = donatedMoney?.find((item) => item.id == id);
			if (!isExist) {
				addedDonateArray.push(...donatedMoney, newData);
				localStorage.setItem("donated", JSON.stringify(addedDonateArray));
			}
		}

		navigate("/donation");
	};

	return (
		<>
			{/* Banner Image */}
			<div className="relative">
				<img
					className="w-full max-h-[700px] object-cover"
					src={
						newData.category === "Health"
							? "../../health-rec.png"
							: newData.category === "Education"
							? "../../Rectangle 4288.png"
							: newData.category === "Clothing"
							? "../../cloth-rec.png"
							: newData.category === "Food"
							? "../../food-rec.png"
							: newData.category === "Shelter"
							? "../../shelter-rec.png"
							: newData.category === "Hygiene"
							? "../../hygiene-rec.png"
							: newData.category === "Employment"
							? "../../employment-rec.png"
							: newData.category === "Mental Health"
							? "../../mental-health-rec.png"
							: newData.category === "Disaster Relief"
							? "../../disaster-relief-rec.png"
							: newData.category === "Technology Access"
							? "../../technology-rec.png"
							: newData.category === "Women Empowerment"
							? "../../women-empowerment-rec.png"
							: newData.category === "Environmental Care"
							? "../../environment-rec.png"
							: ""
					}
					alt={newData.category}
				/>
			</div>

			{/* Content */}
			<div className="lg:px-64 px-4 lg:pb-20 pb-12 lg:pt-16 pt-8 text-center">
				<h1 className="font-sans text-3xl lg:text-5xl font-bold text-[#1A1A1A] mb-10">
					{title}
				</h1>

				<p className="text-base lg:text-xl text-[#3C3C3C] leading-relaxed tracking-wide mb-8">
					{description}
				</p>

				{/* ✅ Donation Amount Display */}
				{price && (
					<div className="mb-5 mt-14">
						<p className="text-[#009444] text-xl lg:text-2xl font-semibold">
							💰{" "}
							<span className="text-[#009444] font-bold">Donation Amount:</span>{" "}
							${price}
						</p>
					</div>
				)}

				{/* Donate Button */}
				<button
					onClick={handleDonate}
					className="bg-[#009444] hover:bg-[#007a37] hover:bg-opacity-90 transition-all duration-200 text-white mt-4 rounded-md px-6 py-3 text-base lg:text-lg font-semibold"
					type="button"
				>
					Press here to donate
				</button>
			</div>
		</>
	);
};

export default CardDescription;
