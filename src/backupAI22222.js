
// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {
    console.log(newData);
  
    return (
      <div className="">
        
        <div className="">
            <img className=" lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.category === 'Health'? '../../public/health-rec.png': newData.category === 'Education'? '../../public/Rectangle 4288.png': newData.category === 'Clothing'? '../../public/cloth-rec.png': newData.category === 'Food'? '../../public/food-rec.png': '' } alt={newData.category}></img>
        </div>
      </div>
    );
  };
  
  export default CardDescription;
  