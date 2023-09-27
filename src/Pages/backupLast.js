import swal from "sweetalert";

// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {

    const {id, category,img,title,cardColorBg,categoryBg,textColors} = newData || {}
    


    const handleDonate = ()=>{
        // console.log(newData);
        // localStorage.setItem('test', 'hints');

        const addedDonateArray = [];

        const donatedMoney = JSON.parse(localStorage.getItem('donated'));

        if(!donatedMoney) {
            addedDonateArray.push(newData)
            localStorage.setItem('donated',JSON.stringify(addedDonateArray))
            swal("First Time ?!", "You clicked the button!", "success");

        }

        else{

            const isExist = donatedMoney.find(newData=>newData.category==category)

            if(!isExist){

                addedDonateArray.push(...donatedMoney,newData) 

            localStorage.setItem('donated',JSON.stringify(addedDonateArray))
            swal("Good job!", "You clicked the button!", "success");

            }

            else{
                swal("Fuck", "You donation has received!", "success");
            }
            

        }









    }



  
    return (
        <>
        
            <div className="relative">
                {/* The image */}
                <img className="lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.category === 'Health'? '../../public/health-rec.png': newData.category === 'Education'? '../../public/Rectangle 4288.png': newData.category === 'Clothing'? '../../public/cloth-rec.png': newData.category === 'Food'? '../../public/food-rec.png': '' } alt={newData.category} />

                {/* The overlay */}
                <div className=" absolute bottom-0 left-[254px] lg:w-[1400px] lg:h-[130px] bg-opacity-50 bg-black">
                    {/* Inside the overlay */}
                    <button onClick={handleDonate} className="  hover:bg-[#d0290c] lg:mt-[37px] ml-[] lg:ml-[37px] rounded-[4px] lg:w-[179px] lg:h-[56px] bg-[#FF444A] text-[16px] md:text-[20px] lg:text-[20px] font-medium md:font-semibold  lg:font-semibold px-4 py-2 lg:px-4 lg:py-2 text-white" type="submit" style={{backgroundColor:newData.categoryBg}} >Donate ${newData.price}</button>
                </div>
                
            </div>

            <div className="lg:px-64 lg:pb-20 pb-10 lg:pt-0">
                <h1 className=" text-center md:text-left lg:text-left lg:mt-14 mt-6 text-[30px] lg:text-[40px] font-bold text-[#0B0B0B]">{newData.title}</h1>
                <p className="lg:mt-6 mt-4 text-[18px] text-[#0B0B0B] font-normal">{newData.description}</p>

            </div>

        </>

        
            


    );
};

export default CardDescription;
