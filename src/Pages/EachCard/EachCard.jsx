import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDescription from "../CardDescription";

const EachCard = () => {
	const [newData, setNewData] = useState({});

	const { category } = useParams();
	const loadedData = useLoaderData();

	useEffect(() => {
		const findLoadedData = loadedData?.find((xyz) => xyz.category === category);
		setNewData(findLoadedData);
	}, []);

	return (
		<div>
			<CardDescription newData={newData} />
		</div>
	);
};

export default EachCard;
