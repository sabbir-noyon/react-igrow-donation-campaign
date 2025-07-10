import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ eachCard }) => {
  const {
    id,
    category,
    img,
    title,
    cardColorBg,
    categoryBg,
    textColors
  } = eachCard || {};

  return (
    <Link to={`/dataForCards/${category}`}>
      <div className="card rounded-md">
        <div>
          <img className="w-screen" src={img} alt={title} />
        </div>

        <div
          className="px-2 py-4 rounded-md"
          style={{ backgroundColor: cardColorBg }}
        >
          <button
            className="text-left max-w-fit rounded-md px-3 py-1 my-2 ml-3 mt-2"
            style={{ backgroundColor: categoryBg, color: textColors }}
          >
            {category}
          </button>

          <h2 className="ml-3 text-xl font-semibold" style={{ color: textColors }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
