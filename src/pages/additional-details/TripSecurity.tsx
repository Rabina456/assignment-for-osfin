import { useState } from "react";

import { BsSuitcase2 } from "react-icons/bs";
import { LuAmbulance } from "react-icons/lu";
import { TbClockExclamation } from "react-icons/tb";

const TripSecurity = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className=" flex flex-col h-[144px]  gap-2   ">
      <div className="flex w-auto h-[25px] gap-[13px]">
        <div className="text-[18px] leading-[24.51px] font-semibold font-sans text-[#000000]">Make Your Trip Secure</div>
      </div>
      <div className="bg-[#FDF1DC] p-4 rounded-md mb-4">
        <div className="flex flex-col h-[90px] w-auto gap-2">
          <p className="font-sans font-semibold text-[18px] leading-[24.51px]  h-[25px]"
          >360 $  <span className="font-sans font-normal text-[12px] leading-[16.34px]"
          >/ Traveller(18% GST included)</span></p>
          <div className="flex flex-row h-[57px] gap-6">
            <div className="flex  w-[220px] rounded-1 p-2 gap-2 bg-white">
              <BsSuitcase2 className="w-6 h-6"
               />
              <div className="flex flex-col w-[110px] h-[41px]">
                <p className="text-[18px] font-semibold font-sans leading-[24.51px] text-green-600">24x7 <span> </span>
                  <span className="text-[12px] leading-[16.34px] font-semibold font-sans text-black">support</span></p>
                <p className="text-[12px] leading-[16.34px] font-normal font-sans">Baggage Assistance</p>
              </div>
              
            </div>
            <div className="flex  rounded-1 p-2 gap-2 bg-white w-[220px]">
              <LuAmbulance  className="w-6 h-6" />
              
            <div className="flex flex-col w-[110px] h-[41px]">
            <p className="text-[12px] leading-[16.34px] font-semibold font-sans">Flat <span> </span>
                <span className="text-[18px] font-semibold font-sans leading-[24.51px] text-green-600 ">$ 50,000 
                 </span></p>
                <p className="text-[12px] leading-[16.34px] font-normal font-sans">Personal Accident</p>
              </div>
              </div>
            <div className="flex  rounded-1 p-2 gap-2 bg-white w-[220px]">
              <BsSuitcase2  className="w-6 h-6"/>
              <div className="flex flex-col w-full h-[41px]">
            <p className="text-[12px] leading-[16.34px] font-semibold font-sans">Flat <span> </span>
                <span className="text-[18px] font-semibold font-sans leading-[24.51px] text-green-600 ">$ 2,500
                 </span></p>
                <p className="text-[12px] leading-[16.34px] font-normal font-sans">Loss of checked in Baggage</p>
              </div>
              </div>
            <div className="flex items-center rounde-1 p-2 gap-2 bg-white w-[220px]">
              <TbClockExclamation  className="w-6 h-6" />
              <div className="flex flex-col w-full h-[41px]">
            <p className="text-[12px] leading-[16.34px] font-semibold font-sans">Flat <span> </span>
                <span className="text-[18px] font-semibold font-sans leading-[24.51px] text-green-600 ">$ 2,500
                 </span></p>
                <p className="text-[12px] leading-[16.34px] font-normal font-sans">Delay in checked in Baggage</p>
              </div>
              </div>
            
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[252px] h-[54px]  top-[624px] left-[288px]  gap-4"
      >
        <label className="flex items-center space-x-2">
          <input type="radio" name="insurance" checked={selected} onChange={() => setSelected(true)}  className="w-4 h-4  peer-checked:border-[#8558ED]"/>
          <p className="font-sans font-semibold text-[14px] leading-[19.07px]">Yes, <span className="font-normal">Secure my trip.</span></p>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="insurance" checked={!selected} onChange={() => setSelected(false)}  className="w-4 h-4 peer-checked:border-[#8558ED]" />
          <p className="font-sans font-semibold text-[14px] leading-[19.07px]">No, <span className="font-normal">I will book without trip security.</span></p>
        </label>
      </div>
    </div>
  );
};

export default TripSecurity;
