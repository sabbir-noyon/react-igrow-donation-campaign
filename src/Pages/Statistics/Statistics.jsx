import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import dataForCards from "../../data/dataForCards";

const Statistics = () => {
	const [donation, setDonation] = useState([]);
	const [donatedByMe, setDonatedByMe] = useState(0);

	useEffect(() => {
		const donatedMoney = JSON.parse(localStorage.getItem("donated"));

		if (donatedMoney) {
			setDonation(donatedMoney);
			setDonatedByMe(donatedMoney.length);
		}
	}, []);

	const totalAvailable = dataForCards.length;
	const remaining = totalAvailable - donatedByMe;

	const data = [
		{ name: "Donated", value: donatedByMe },
		{ name: "Remaining", value: remaining },
	];

	const COLORS = ["#FF444A", "#00C49F"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="#1e40af"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
				fontSize={14}
			>
				{`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div className="statistic-container flex justify-center items-center mt-11 mb-14 lg:mt-[88px]">
			<PieChart id="pie-chart" width={400} height={400}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={150}
					fill="#8884d8"
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Legend verticalAlign="bottom" height={36} />
			</PieChart>
		</div>
	);
};

export default Statistics;
