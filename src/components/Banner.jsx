export const Banner = () => {
    return (
      <div className="flex flex-wrap min-h-screen">
        {/* Left Div */}
        <div className="relative w-full md:w-1/2 h-[800px] group bg-gray-200 hover:bg-gray-300">
          <img
            src="/skyscrapper2.jpeg"
            alt="Skyscraper 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-8 py-12 transition duration-300 ease-in-out group-hover:bg-opacity-60">
            <h2 className="text-5xl font-bold mb-6">West Hill Capital</h2>
            <p className="text-lg font-semibold leading-relaxed px-4 mb-8">
              West Hill Capital is a leading private equity and venture capital
              firm that provides EIS qualifying high-growth investments to private individuals.
            </p>
            <button className="bg-white text-black rounded-full py-3 px-6 text-lg flex items-center justify-center shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
              <span>&#x279C;</span>
            </button>
          </div>
        </div>
  
        {/* Right Div */}
        <div className="relative w-full md:w-1/2 h-[800px] group bg-gray-200 hover:bg-gray-300">
          <img
            src="/skyscrapper1.jpeg"
            alt="Skyscraper 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-8 py-12 transition duration-300 ease-in-out group-hover:bg-opacity-60">
            <h2 className="text-5xl font-bold mb-8">West Hill Corporate Finance</h2>
            <button className="bg-white text-black rounded-full py-3 px-6 text-lg flex items-center justify-center shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
              <span>&#x279C;</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  