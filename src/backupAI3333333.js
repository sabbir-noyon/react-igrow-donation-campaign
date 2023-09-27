// eslint-disable-next-line react/prop-types
const CardDescription = ({ newData }) => {
    console.log(newData);
  
    return (
        <>
        
            <div className="relative">
                {/* The image */}
                <img className="lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.category === 'Health'? '../../public/health-rec.png': newData.category === 'Education'? '../../public/Rectangle 4288.png': newData.category === 'Clothing'? '../../public/cloth-rec.png': newData.category === 'Food'? '../../public/food-rec.png': '' } alt={newData.category} />

                {/* The overlay */}
                <div className=" absolute bottom-0 left-[254px] lg:w-[1400px] lg:h-[130px] bg-opacity-50 bg-black">
                    {/* Inside the overlay */}
                    <button onClick={{}} className=" hover:bg-[#d0290c] lg:mt-[37px] lg:ml-[37px] rounded-[4px] lg:w-[179px] lg:h-[56px] bg-[#FF444A] text-[16px] lg:text-[20px] font-semibold px-4 py-2 lg:px-4 lg:py-2 text-white" type="submit">Your Button</button>
                </div>
                
            </div>

            <div className="lg:px-64 lg:pb-20 pb-10 lg:pt-0">
                <h1 className="lg:mt-14 mt-6 text-[30px] lg:text-[40px] font-bold text-[#0B0B0B]">Good Education</h1>
                <p className="lg:mt-6 mt-4 text-[18px] text-[#0B0B0B] font-normal">There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>

            </div>

        </>

        
            


    );
};

export default CardDescription;
