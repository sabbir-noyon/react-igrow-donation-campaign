
// eslint-disable-next-line react/prop-types
const CardDescription = ({newData}) => {

    console.log(newData);
  
    
  
    return (
       
           <div className="px-24 w-full">
                <p>{newData.category}</p>
                <h1>{newData.title}</h1>
                <h5>${newData.price}</h5>
                <div className="w-full h-full">
                    <img src="../../public/Health_Image_1.png"></img>
               
                </div>
                

           </div>
           
        
    );
};

export default CardDescription;


// rgba(11, 11, 11, 0.50

//  #0B0B0B80