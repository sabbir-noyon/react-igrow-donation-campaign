// eslint-disable-next-line react/prop-types
const Banner = ({ searchText, setSearchText }) => {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] lg:h-[90vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center items-center px-4">
        <h1 className="font-serif text-center text-3xl md:text-4xl lg:text-6xl text-[#0B0B0B] font-bold mb-6 md:mb-10 lg:mb-14 leading-tight">
          I grow by helping those in need
        </h1>
        <div className="flex items-center w-full max-w-[90%] sm:max-w-md gap-0 overflow-hidden">
      <input
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 px-3 py-2 lg:px-4 lg:py-3 bg-white border border-gray-300 text-black rounded-l-md outline-none text-sm sm:text-base"
      />
      <button
        className="px-4 lg:px-6 py-2 lg:py-3 bg-[#FF444A] text-white rounded-r-md text-sm sm:text-base cursor-default"
      onMouseEnter={(e) => e.preventDefault()}
      >
        Search
      </button>
    </div>
      </div>
    </div>
  );
};

export default Banner;
