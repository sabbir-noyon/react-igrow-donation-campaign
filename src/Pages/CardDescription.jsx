// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {
    console.log(newData);
  
    return (
        <div className="relative">
            {/* The image */}
            <img className="lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.category === 'Health'? '../../public/health-rec.png': newData.category === 'Education'? '../../public/Rectangle 4288.png': newData.category === 'Clothing'? '../../public/cloth-rec.png': newData.category === 'Food'? '../../public/food-rec.png': '' } alt={newData.category} />

            {/* The overlay */}
            <div className=" absolute bottom-0 left-[260px] lg:w-[1400px] lg:h-[130px] bg-opacity-50 bg-black">
                {/* Inside the overlay */}
                <button className="px-4 py-2 text-white">Your Button</button>
            </div>
        </div>
    );
};

export default CardDescription;
