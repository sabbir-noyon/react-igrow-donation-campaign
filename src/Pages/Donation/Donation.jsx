import { useEffect, useState } from "react";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDonation, setNoDonation] = useState(false);

    useEffect(() => {
        const donatedMoney = JSON.parse(localStorage.getItem('donated'));

        if (donatedMoney) {
            setDonation(donatedMoney);
        } else {
            console.log("No Data Found");
            setNoDonation('You have not donated yet !');
        }
    }, []);

    console.log(donation);

    return (
        <div>
            {noDonation ? (
                <h1 className=" mt-40 lg:mt-60 text-3xl lg:text-4xl text-rose-600 font-semibold flex justify-center items-center">{noDonation}</h1>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 container lg:mt-8 my-0 mx-auto py-2 lg:py-4 px-10 lg:px-24">
                    {donation.map((newData, index) => (
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8" key={newData.category}>
                            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8">
                                <div className="card w-auto h-auto lg:w-[660px] lg:h-[230px]  flex lg:flex-row flex-col flex-wrap" style={{ backgroundColor: newData.cardColorBg }}>
                                    <div>
                                        <img className="w-screen lg:w-fit lg:h-[230px]" src={newData.imgTwo}></img>
                                    </div>
                                    <div className="lg:ml-6 lg:mt-10">
                                        <button className="mt-4 lg:mt-0 w-fit px-2 py-1 mb-2 rounded-sm bg-slate-500" style={{ backgroundColor: newData.categoryBg, color: newData.textColors }}>{newData.category}</button>
                                        <h1 className="text-[20px]  lg:text-[26px] font-semibold">{newData.title}</h1>
                                        <p className="text-[20px] lg:text-[18px] font-semibold mb-2 rounded-md" style={{ color: newData.textColors }}>${newData.price}</p>
                                        <button className="px-2 lg:px-0 py-2 lg:py-0 w-auto h-auto lg:w-[141px] lg:h-[40px] text-white text-[18px] lg:text-[18px] font-semibold " style={{ backgroundColor: newData.textColors }}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                </div>
                
            )}

    {donation.length >= 4 && (
                        <div className="col-span-2 flex justify-center mt-4">
                            <button className=" px-2 lg:px-0 py-2 lg:py-0 w-auto h-auto  lg:w-[110px] lg:h-[48px] bg-[#009444] rounded-md text-white text-[18px] font-semibold ">See All</button>
                        </div>
                    )}

           
        </div>
    );
};

export default Donation;
