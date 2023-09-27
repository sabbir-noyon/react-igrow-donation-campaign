import { useEffect, useState } from "react";
import SingleCard from "../../Components/Header/Cards/SingleCard";



const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noDonation, setNoDonation] = useState(false);



    useEffect(()=>{

        const donatedMoney = JSON.parse(localStorage.getItem('donated'));
        
        if(donatedMoney){
            setDonation(donatedMoney)
        }
        
        else{
            console.log("No Data Found");

            setNoDonation('You have not donated yet !')
        }


    },[])

    console.log(donation)




    return (
        <div>
           {noDonation ? <h1 className=" mt-40 lg:mt-60 text-3xl lg:text-4xl text-rose-600 font-semibold flex justify-center items-center">{noDonation}</h1> : 
           
           <div>
            
                <div>
                    {donation.map(newData=> 
                    <div className="" key={newData.category}>
                        <div className=" container mt-8 my-0 mx-auto py-2 lg:py-4 px-10 lg:px-24 ">
                            
                            
                            <div className="card lg:w-[660px] lg:h-[230px]  flex flex-row" style={{backgroundColor:newData.cardColorBg}}>
                                <div>
                                    <img className="lg:h-[230px]" src={newData.imgTwo}></img>
                                </div>
                                <div className="lg:ml-6 lg:mt-10">
                                    <button className="w-fit px-2 py-1    mb-2 rounded-sm bg-slate-500" style={{backgroundColor:newData.categoryBg, color:newData.textColors}} >{newData.category}</button>
                                    <h1 className="text-[26px] font-semibold">{newData.title}</h1>
                                    <p className="text-[18px] font-semibold mb-2 rounded-md" style={{color:newData.textColors}} >${newData.price}</p>
                                    <button className="lg:w-[141px] lg:h-[40px] text-white text-[18px] font-semibold " style={{backgroundColor:newData.textColors}}   >View Details</button>

                                </div>

                            </div>

                        </div>

                        {/* <div className="flex justify-center items-center lg:mt-56">
                            <button className="w-[110px] h-[48px] bg-[#009444] rounded-md text-white text-[18px] font-semibold ">See All</button>
                        </div> */}

                    </div>)}

                </div>
            
            
            
            
            </div>}
        
        
        </div>
    );
};

export default Donation;