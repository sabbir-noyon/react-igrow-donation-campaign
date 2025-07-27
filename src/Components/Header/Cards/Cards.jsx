import SingleCard from "./SingleCard";

// eslint-disable-next-line react/prop-types
const Cards = ({ dataForCards }) => {
	return (
		<div>
			<div className="card-wrapper py-8 lg:py-16 px-2 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:last:grid-cols-4 gap-6 ">
				{
					// eslint-disable-next-line react/prop-types
					dataForCards?.map((eachCard) => (
						<SingleCard
							key={eachCard.category}
							eachCard={eachCard}
						></SingleCard>
					))
				}
			</div>
		</div>
	);
};

export default Cards;
