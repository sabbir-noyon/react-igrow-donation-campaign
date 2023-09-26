
const Banner = () => {
    return (
        <div className="relative h-[38vh] lg:h-[68vh] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('banner.jpg')` }}>
            <div className="absolute inset-0 bg-white opacity-90 flex flex-col justify-center items-center">
                <h1 className="hero-title text-center text-4xl lg:text-6xl text-[#0B0B0B] font-bold mb-8 lg:mb-14">I Grow By Helping People In Need</h1>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search here....."
                        className="lg:w-96 px-3 lg:px-4 py-2 lg:py-3 bg-white border border-gray-300 text-black rounded-md outline-none"
                    />
                    <button className="px-4 lg:px-6 py-2 lg:py-3 bg-[#FF444A] hover:bg-red-700 text-white rounded-r-md">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
