
// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {
    console.log(newData);
  
    return (
      <div className="px-24 w-full">
        <p>{newData.category}</p>
        <h1>{newData.title}</h1>
        <h5>${newData.price}</h5>
        <div className="w-full h-full">
          <img
            src={
              newData.category === 'Health'
                ? '../../public/Health_Image_1.png'
                : newData.category === 'Education'
                ? '../../public/Education_Image_1.png'
                : newData.category === 'Clothing'
                ? '../../public/Clothing_Image_1.png'
                : newData.category === 'Food'
                ? '../../public/Food_Image_1.png'
                : '' // Add a default image path or empty string for other categories
            }
            alt={newData.category}
          ></img>
        </div>
      </div>
    );
  };
  
  export default CardDescription;