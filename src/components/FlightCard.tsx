import imgsrc from '../assets/Mask group.png'
import CloudTop from '../assets/cloud1.png'
import CloudBottom from '../assets/cloud2.png';
import subtract from '../assets/Subtract.png';
import flightSymbol from '../assets/flightSymbol.png';
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IoAirplaneSharp } from "react-icons/io5";
import { BsArrowDownRightCircle } from "react-icons/bs";

const FlightCard = () => {
    return (
        <div className="relative flex items-center w-full h-full  rounded-lg overflow-hidden p-4"
            style={{
                width: "1058px",
                height: "120px",
                backgroundImage: `url(${subtract})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderWidth: "0.1px",
                borderStyle: "solid",
                borderImageSource: "linear-gradient(90deg, #B5C1FF 0%, #D9D9D9 100%)",
            }}
        >

            {/* <div className="absolute left-[-15px] w-[30px] top-1/2 transform -translate-y-1/2  h-[39px] bg-white rounded-full"></div> */}

            <div
                className="absolute bg-white rounded-full"
                style={{
                    width: "54.46px",
                    height: "54px",
                    top: "34px",
                    left: "-35.28px",
                }}
            ></div>

            <div className="flex flex-col justify-between w-1/3 h-full ">
                <img
                    src={CloudTop}
                    alt="Top Cloud"
                    className=" w-[374px] h-[280px] absolute max-w-[60%] top-[-149px]  opacity-[0.73] transform rotate-180"
                />
                <img
                    src={imgsrc}  // Ensure correct path for the uploaded airplane image
                    alt="Airplane"
                    className="w-[276.5px] h-[120px]  absolute top-[3px] left-[-6px] object-contain"
                />
                <img
                    src={CloudBottom}
                    alt="Bottom Cloud"
                    className=" w-[374px] h-[280px] absolute  max-w-[60%]  opacity-[0.73] transform rotate-180"
                />
            </div>

            {/* Right Side - Flight Info */}
            <div className="flex w-[264px] h-[77px] absolute top-[22px] left-[327px] space-x-[28px] ">
                <div className="w-12 h-12 rounded-full gap-2.5 pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#031B95]">
                    <img src={flightSymbol} className="w-[36px] h-[35px] rounded-full" alt="flightSymbol" />
                </div>


                <div className="flex-1 w-[112px] h-[77px] gap-[10px]">
                    <div className='w-[112px] h-[49px] gap-[5px]'>
                        <p className="w-[116px] h-[25px] font-[600] text-[18px] leading-[24.51px]  font-sans">
                            Indigo Airline
                        </p>
                        <p className="w-[112px] h-[19px] font-sans font-normal text-[14px] leading-[19.07px]  text-[#626262]"
                        > Airbus A350-900</p>
                    </div>
                    <div className='flex w-[65px] h-[18px] gap-1'>
                        <div className='w-[18px] h-[18px]'>
                            <PiAirplaneInFlightFill className="w-[15px] h-[12.69px] top-[3.06px] left-[1.5px]"
                            />
                        </div>
                        <p className="w-[43px] h-[16px] text-[12px] leading-[16.34px] font-open-sans font-normal"
                        >2h 20m</p>
                    </div>
                </div>
            </div>
            <div
                className="absolute bg-white rounded-full"
                style={{
                    width: "54.46px",
                    height: "54px",
                    top: "34px",
                    left: "1032.8px",
                }}
            ></div>

            {/* Dashed Line in the Middle */}
            <div className="absolute top-1/2 left-[600px] -translate-y-1/2 w-[1px] h-[80%] border-l-2 border-dashed border-gray-400"></div>




            {/* Right Section - Flight Timing */}
            <div className="absolute top-[22px] right-[40px] flex items-center space-x-10">
                {/* Departure Time */}
                <div className="text-center">
                    <p className="w-[100px] h-[33px]  top-[20px] left-[663px] text-[24px] leading-[32.68px] font-semibold font-open-sans">12:15</p>
                    <div className="flex justify-center w-[100px] h-[19px]  top-[71px] left-[663px] gap-[7px]"  >
                        <div className='flex justify-center w-[18px] h-[18px]'>
                            <BsArrowDownRightCircle className="w-[14.63px] h-[14.63px]  top-[16.31px] left-[16.31px] " />
                        </div>

                        <p className="w-[71px] h-[19px] font-sans font-normal text-[14px] leading-[19.07px] "
                        >DEL (Delhi)</p>
                    </div>
                </div>


                {/* Flight Route */}
                <div className="flex flex-col items-center ">

                    <div className="flex justify-center w-[52px] h-[24px]  top-[45px] left-[791px] gap-[4px]">
                        <div className="flex justify-center w-6 h-6">
                            <IoAirplaneSharp className="w-[20px] h-[18px]  top-[3px] left-[2px]"
                            />
                        </div>

                    </div>
                    <p className="w-[44px] h-[14px]  top-[74px] left-[795px] text-[#626262] text-[10px] leading-[13.62px] font-open-sans font-normal"
                    > Non-stop</p>
                </div>

                {/* Arrival Time */}
                <div className="text-center">
                    <p className="w-[100px] h-[33px]  top-[20px] left-[663px] text-[24px] leading-[32.68px] font-semibold font-open-sans"
                    >06:00</p>
                    {/* <p className="flex items-center gap-1 text-sm text-gray-600">
                        <BsArrowDownRightCircle className="w-[18px] h-[18px]" />
                        BOM (Mumbai)
                    </p> */}
                    <div className="flex justify-center w-[100px] h-[19px]  top-[71px] left-[663px] m-0"  >
                        <div className="flex justify-center w-[18px] h-[18px] ">
                            <BsArrowDownRightCircle className="w-[14.63px] h-[14.63px]  top-[16.31px] left-[16.31px] " />
                        </div>

                        <p className="m-0  inline-flex w-[71px] h-[19px] font-sans font-normal text-[14px] leading-[19.07px] ">BOM (Mumbai)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
