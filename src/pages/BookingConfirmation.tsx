import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BookingConfirmation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 ">
      {/* Success Icon and Message */}
      <div className="flex 
                      flex-col
                      items-center 
                       justify-center 
                       w-[846px] h-[199px] 
                      top-[51px] left-[260px]
                      gap-[23px]">
        <CheckCircleIcon className="h-[100px] w-[100px] text-[#31A91D] " />
        <div className="flex flex-col justify-center items-center w-[846px] h-[76px] gap-[10px]">
          <div className="font-sans font-semibold text-[32px] leading-[43.58px] w-[835px] h-[44px] text-[#31A91D]">
            Congratulations! You have successfully booked tickets
          </div>
          <div className="font-sans font-semibold text-[16px] leading-[21.79px]  text-center text-[#808080] w-[846px] h-[22px]">
            Please carry ERS / VRM / SMS / Mail sent to your contact details, along
            with a relevant ID proof while travelling.
          </div>
        </div>

      </div>
      <div className=" flex flex-col
                       w-[781.5999755859375px]
                       h-[432.2001953125px]
                        top-[274px] left-[292px]
                         gap-[24px] rounded-[8px]
                         border-[0.8px] 
                         border-[#808080] p-[40px]">
        <div className="flex flex-col 
        w-[701.5999755859375px] 
        h-[135.2001953125px] gap-4">
          {/* Ticket Details Card */}
          
            <div className="flex items-center w-[701.5999755859375px] h-[20px] justify-between">
              <span className="text-[#202020] font-sans font-normal text-[14.8px] leading-[20.15px] w-[146px] h-[20px] text-center">PNR No: 1234567890</span>
              <span className="text-[#202020] font-sans font-normal text-[14.8px] leading-[20.15px] w-[239px] h-[20px] text-center">Transaction ID: 351511859256378</span>
            </div>

            {/* Flight Details */}

            <p className="font-sans font-bold text-[16px] leading-[21.79px]  w-[701.6px] h-[22px] text-[#202020]">Airbus A350-900</p>

            <div className="flex justify-between items-center w-[701.5999755859375px] h-[61.2001953125px] gap-[45.6px]">
              <div className="flex flex-col w-[61px] h-[61.2001953125px] ">
                <p className="font-sans font-semibold text-[12.8px] leading-[17.43px]  w-[43px] h-[17px] text-[#202020]">Nov 16</p>
                <p className="font-sans font-normal text-[12.8px] leading-[17.43px]  w-[61px] h-[34px] text-[#202020]  top-[27.2px]">12:15 - New Delhi</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-Poppins font-medium text-[9.6px] leading-[14.4px] w-[92px] h-[14px]">2 hours 20 minutes</span>
                <div className="w-[497.4px] border-[0.8px] border-[#808080BF]"></div>
              </div>
              <div>
                <p className="font-sans font-semibold text-[12.8px] leading-[17.43px]  w-[43px] h-[17px] text-[#202020]">Nov 17</p>
                <p className="font-sans font-normal text-[12.8px] leading-[17.43px]  w-[61px] h-[34px] text-[#202020]  top-[27.2px]">06:00 - Mumbai</p>
              </div>

            </div>

          

          {/* Passenger Info */}
          <div className="flex w-[701.5999755859375px] h-[34px] justify-between">
            <p className="font-sans font-normal text-[12.8px] leading-[17.43px] w-[158px] h-[17px] text-[#202020]">


              E-Tickets have been sent to:
            </p>
            <p className="font-sans font-normal text-[12.8px] leading-[17.43px] w-[137px] h-[34px] text-right">
              Anshul Choudhry anshul***@*****.com</p>
            {/* <p className="text-sm text-gray-600">anshul***@*****.com</p> */}
          </div>

          <div className="flex flex-col w-[701.5999755859375px] h-[89px] gap-2">
            <p className="font-sans font-semibold text-[16px] leading-[21.79px] w-[701.6px] h-[22px] text-[#202020]">
              Traveller Details</p>
            <p className="font-sans font-normal text-[12.8px] leading-[17.43px] tracking-[0] w-[104px] h-[17px] text-[#202020]">Anshul Choudhry</p>
            <div className="flex justify-between w-[701.5999755859375px] h-[34px] ">
              <p className="w-[84px] h-[34px] font-sans font-normal text-[12.8px] leading-[17.43px] text-[#606060]">
                Age: 24 Yrs Gender: Male</p>

              <p className="flex flex-col flex-start w-[163px] h-[34px] font-sans font-normal text-[12.8px] leading-[17.43px] text-[#606060]"><span className="text-right">Booking Status: Confirmed</span><span className="text-right">Seat No: 22A</span> </p>
            </div>

          </div>

          {/* Fare Details */}
          <div className="flex w-[701.5999755859375px] h-[22px] justify-between">
            <p className="w-[77px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] text-[#202020]">Total Fare:</p>
            <span className="w-[37px] h-[22px] font-sans font-semibold text-[16px] leading-[21.79px] text-[#404040]">$300</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookingConfirmation;

