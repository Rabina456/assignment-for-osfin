import { FaPlane,   FaTrain, FaBus, FaShieldAlt, FaEllipsisH } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { RiHotelBedFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import Logo from "./Logo";

const SideBar = () => {
  return (
    // <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
    <div className=" w-[240px] h-[921px] border-r border-[#D9D9D9] bg-[#F6F6F6] ">
     <div className="p-4">
     <Logo />
      </div> 
      <ul className="w-[240px] h-[394px] gap-[8px] top-[78px] absolute">
        <li className="w-[240px] h-[42px] border-b border-[#1E1E1E] bg-[#ECEFFF] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <FaPlane className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Flights</div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <RiHotelBedFill className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Hotels</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <IoMdHome  className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Homestays</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
            <GiPalmTree  className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Holiday Plan</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <FaTrain className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Trains</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <FaBus className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Buses</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <FaShieldAlt className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">Travel Insurance</div>
          </div>
          </div>
        </li>
        <li className="w-[240px] h-[42px] border-b border-[#D9D9D9] px-[24px] py-[10px] gap-[10px] flex">
          <div className="flex w-[192px] h-[22px] g-[12px]">
          <div className="flex w-[162px] h-[22px]">
            <div className="flex w-[20px] h-[20px] items-center">
              <FaEllipsisH className="w-[14.0194px] h-[13.9694px] top-[2.77px] left-[3.21px]   " />
            </div>

            <div className="w-[130px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] tracking-[0px] text-[#000000]">More<select></select></div>
          </div>
          </div>
        </li>
        
      </ul>
    </div>
  );
};

export default SideBar;
