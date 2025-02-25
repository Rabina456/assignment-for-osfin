const CompletedStep=({step,detail}:any)=>{

    return (
        <div className="flex flex-col w-auto h-[47px] mb-4 top-[320px] left-[272px] flex gap-[4px] ">
        <span className="flex w-[206px] h-[16px] text-[#626262] font-[600] text-[12px] leading-[16.34px] tracking-tight font-sans">
          {step}/3 STEP
        </span>

        <span className="flex inline-flex w-auto h-[27px] text-[20px] text-[#000000] font-sans font-bold  leading-[27.24px] tracking-tight">
          {detail}
        </span>

      </div>
    )
}

export default CompletedStep