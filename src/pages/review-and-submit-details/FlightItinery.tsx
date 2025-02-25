export default function FlightItinerary() {
    return (
      
        <div className="flex flex-col justify-between w-full">
          {/* Departure */}
          <div className="flex items-center space-x-4">
            <span className="text-black font-semibold text-[14px]">12:15</span>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                <span className="font-semibold text-[#2D2D2D]">New Delhi</span>
                <span className="text-gray-500">. Indira Gandhi Airport, Terminal T3</span>
              </div>
            </div>
          </div>
  
          {/* Duration Line */}
          <div className="flex items-center ml-[4.5rem]">
          <div className="w-0.5 h-6 border-l-2 border-dashed border-gray-400 ml-[-25px]"></div>
          <span className="text-[#626262] text-[14px] text-normal font-sans mx-2">2h 20m</span>
          
        </div>
  
          {/* Arrival */}
          <div className="flex items-center space-x-4">
            <span className="text-black font-semibold text-[14px]">06:00</span>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 border border-gray-500 rounded-full ml-[-6px]"></span>
                <span className="font-semibold text-[#2D2D2D]">Mumbai</span>
                <span className="text-gray-500">. Chhatrapati Shivaji International Airport, Terminal T2</span>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
  