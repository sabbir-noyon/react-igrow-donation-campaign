import { Link } from "react-router-dom";


const SingleCard = () => {
    return (
        <Link>
        
            <div className="card bg-sky-300 " style={{}}>
                <div>
                    <img className="w-screen" src="/src/Health_Image_1.png"></img>
                </div>
            
                <div className="px-2 py-4" >
                    <button className=" text-left bg-slate-400 w-[70px] public/Health_Image_1.png public/Health_Image_2.png rounded-md px-3 py-1 my-2 ml-3 mt-2" style={{}}>Health</button>
                    <h2 className="ml-3 text-xl font-semibold" style={{}}>Clean water for children</h2>
               
                </div>
            </div>
        </Link>
    );
};

export default SingleCard;