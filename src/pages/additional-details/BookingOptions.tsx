
import { FaCheckCircle,  } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";


const BaggageOptions = ({step}:any) => {
  return (
    <div className="flex flex-col h-auto  gap-2  ">
      <div className="flex w-auto h-[25px] gap-[13px]">
        <div className="text-[18px] leading-[24.51px] font-semibold font-sans text-[#000000] ">Baggage Options</div>
      </div>
      <div className={`flex flex-col w-auto h-auto rounded-lg   p-[18px] ${step===2 ? "bg-[#F6F6F6]":"bg-[#ECEFFF]"}`}>
        <div className="flex flex-col w-[614px] h-[56px] gap-2" >
          <div className="flex inline-flex">
            <div className="flex inline-flex w-[99px] h-[24px] gap-[8px]">
              <FaCheckCircle className="text-green-600  w-6 h-4" />
              <span className="font-semibold text-[14px] leading-[19.07px] font-sans">Included  </span>
            </div>
            <span className="font-normal text-[14px] leading-[19.07px]">
              - Baggage per person
            </span>
          </div>

          <div className="flex  w-[614px] h-[24px] gap-7  ">
            
            <p className="font-sans font-semibold text-[12px] leading-[16.34px] tracking-[0px] "
            ><span className="w-[24px] h-[24px] gap-[7.83px] p-[2px]"
            > 🛄</span>          Cabin Baggage <span className="font-sans font-normal text-[12px] leading-[16.34px] tracking-[0px]">7 kgs(1 piece only) / Adult</span> </p>
            <p className="font-sans font-semibold text-[12px] leading-[16.34px] tracking-[0px] "
            ><span className="w-[24px] h-[24px] gap-[7.83px] p-[2px]"
            > 🧳</span>          Check-In Baggage <span className="font-sans font-normal text-[12px] leading-[16.34px] tracking-[0px]">15 kgs(1 piece only) / Adult</span></p>
          </div>
          
        </div>
        {step===2 &&<div className="flex flex-row bg-[#ECEFFF] rounded-[8px] p-[12px]">
          <div className="flex h-[38px] w-[805px] gap-[2px]">
          <div>
          <IoMdInformationCircle />
            </div>
            <div className="flex flex-col font-sans font-semibold text-[12px]">
              
              <div>
              One Way Trip Combination
                </div>
                <div className="font-normal text-[12px] font-sans">
                  This trip combines 2 independent one-way with separate terms for changes. For more information,see our Terms and Conditions here.
                </div>
              </div>
              </div>
        </div>}
      </div>

    </div>
  );
};

export default BaggageOptions;
