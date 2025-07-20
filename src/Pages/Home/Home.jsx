import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Header/Cards/Cards";
import { useState } from "react";

const Home = () => {
	const dataForCards = useLoaderData();
	const [searchText, setSearchText] = useState("");

	// Filter cards based on title or category (case-insensitive)
	const filteredCards = dataForCards.filter(
		(item) =>
			item.title.toLowerCase().includes(searchText.toLowerCase()) ||
			item.category.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<div>
			<Banner searchText={searchText} setSearchText={setSearchText} />
			<Cards dataForCards={filteredCards} />
		</div>
	);
};

export default Home;
