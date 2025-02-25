import FlightItinerary from "./FlightItinery";


const FlightDetails = () => {
  return (
    <div className="h-[144px]  gap-2   ">
      <div className="flex w-[298px] h-[25px] gap-[13px]">
        <div className="text-[18px] leading-[24.51px] font-semibold font-sans ">Indigo Airline.<span
          className="text-[14px] leading-[19.07px] font-semibold font-sans">  </span>
          <span className="text-[14px] leading-[19.07px] font-normal font-sans">IX3486</span></div>
        <div className=" flex justify-center items-center w-[112px] h-[23px] rounded-full gap-[5px] bg-[#F3F3F3]">
          <span className="font-sans font-normal text-[12px] leading-[16.34px] tracking-[0px]">
            Airbus A350-900
          </span>

        </div>

      </div>
      <div className="w-auto h-[111px] rounded-[8px] gap-[8px] p-[18px] bg-[#F6F6F6]">
  
        <FlightItinerary/>
        {/* <div className="flex justify-between items-center">
          <span className="font-semibold">Indigo Airline</span>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">Airbus A350-900</span>
        </div> */}
        {/* <div className="mt-3 text-sm">
          <div className="flex justify-between">
            <div>
              <span className="text-lg font-semibold">12:15</span>
              <p className="text-gray-700">New Delhi · Indira Gandhi Airport, Terminal T3</p>
            </div>
            <span className="text-gray-600">2h 20m</span>
            <div>
              <span className="text-lg font-semibold">06:00</span>
              <p className="text-gray-700">Mumbai · Chhatrapati Shivaji Airport, Terminal T2</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FlightDetails;
