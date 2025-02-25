

const PassengerDetails = () => {
  return (
    <div className=" h-[144px]  gap-2   ">
      <div className="flex w-auto h-[25px] gap-[13px]">
      <div className="text-[18px] leading-[24.51px] font-semibold font-sans text-[#000000]">Passenger Details</div>
      </div>
      <div className="flex flex-wrap justify-between w-auto h-auto rounded-lg gap-2 p-[18px] bg-[#F6F6F6]">
        
      <div className="flex flex-row gap-24">
        <span className="text-normal font-sans text-[14px] leading-[19.07px] text-[#626262]">Full Name</span>
        <span className="font-semibold text-[14px] leading-[19.07px] text-black">Anshul Choudhry</span>
      </div>

      <div className="flex flex-row gap-24">
        <span className="text-normal font-sans text-[14px] leading-[19.07px] text-[#626262]">Date of Birth</span>
        <span className="font-semibold text-[14px] leading-[19.07px] text-black">04-08-96</span>
      </div>

      <div className="flex flex-row gap-24">
        <span className="text-normal font-sans text-[14px] leading-[19.07px] text-[#626262]">Gender</span>
        <span className="font-semibold text-[14px] leading-[19.07px] text-black">Male</span>
      </div>

      <div className="flex flex-start gap-24">
      <div className="flex flex-row gap-24 w-full">
        <span className="text-normal font-sans text-[14px] leading-[19.07px] text-[#626262]">Phone No.</span>
        <span className="font-semibold text-[14px] leading-[19.07px] text-black">47659843501</span>
      </div>

      <div className="flex flex-row gap-24 ml-[35px]">
        <span className="flex  text-normal font-sans text-[14px] leading-[19.07px] text-[#626262]">Email Address</span>
        <span className="font-semibold text-[14px] leading-[19.07px] text-black">anshul***@*****.com</span>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PassengerDetails;
