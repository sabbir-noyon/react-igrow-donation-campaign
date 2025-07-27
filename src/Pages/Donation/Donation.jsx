import { useEffect, useState } from "react";
import swal from "sweetalert";

const Donation = () => {
	const [donation, setDonation] = useState([]);
	const [noDonation, setNoDonation] = useState(false);
	const [donationComplete, setDonationComplete] = useState(false);

	useEffect(() => {
		const donatedMoney = JSON.parse(localStorage.getItem("donated"));
		const isDonatedFinal = localStorage.getItem("donationComplete");

		if (donatedMoney && donatedMoney.length > 0) {
			setDonation(donatedMoney);
		} else {
			setNoDonation("You have not donated yet! Please donate.");
		}

		// Keep donate button disabled after reload if donation was completed
		if (isDonatedFinal === "true") {
			setDonationComplete(true);
		}
	}, []);

	const handleFinalDonate = () => {
		swal(
			"🎉 Donation Successful!",
			"We’ve received your donation. You’ll be notified shortly.",
			"success"
		);
		setDonationComplete(true);
		localStorage.setItem("donationComplete", "true");
	};

	const handleReset = () => {
		localStorage.removeItem("donated");
		localStorage.removeItem("donationComplete");
		window.location.reload();
	};

	const totalAmount = donation.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className="pb-12 lg:pb-24">
			{noDonation ? (
				<h1 className="font-mono mt-48 lg:mt-[260px] text-2xl text-center lg:text-3xl text-[#FF444A] font-semibold lg:font-bold flex justify-center items-center">
					{noDonation}
				</h1>
			) : (
				<>
					{/* Cards */}
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 container lg:mt-8 my-0 mx-auto py-2 lg:py-4 px-10 lg:px-24">
						{donation.map((newData, index) => (
							<div
								key={index}
								className="card w-auto h-auto lg:w-[660px] lg:h-[230px] flex lg:flex-row flex-col flex-wrap"
								style={{ backgroundColor: newData.cardColorBg }}
							>
								<img
									className="w-screen lg:w-fit lg:h-[230px]"
									src={newData.imgTwo}
									alt={newData.category}
								/>
								<div className="lg:ml-6 lg:mt-10 px-4 py-2">
									<button
										className="mb-2 px-2 py-1 rounded-sm text-sm"
										style={{
											backgroundColor: newData.categoryBg,
											color: newData.textColors,
										}}
									>
										{newData.category}
									</button>
									<h1 className="text-xl font-semibold">{newData.title}</h1>
									<p
										className="text-lg font-semibold mb-2"
										style={{ color: newData.textColors }}
									>
										${newData.price}
									</p>
									<button
										onClick={() => {
											const updated = donation.filter((_, i) => i !== index);
											setDonation(updated);
											localStorage.setItem("donated", JSON.stringify(updated));
										}}
										className="text-white text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Total and Donate Button */}
					{donation.length > 0 && (
						<div className="text-center mt-8 space-y-4">
							<p className="text-xl font-bold text-[#333]">
								✅ Total Donation:{" "}
								<span className="text-green-600">${totalAmount}</span>
							</p>
							<button
								onClick={handleFinalDonate}
								disabled={donationComplete}
								className={`${
									donationComplete
										? "bg-gray-400 cursor-not-allowed"
										: "bg-[#009444] hover:bg-green-700"
								} px-6 py-3 rounded-md text-white font-semibold text-lg transition-all duration-200`}
							>
								{donationComplete ? "Thanks for Donating!" : "Donate Now"}
							</button>

							<div className="mt-6">
								<button
									onClick={handleReset}
									className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md transition"
								>
									Reset All Donations
								</button>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Donation;
