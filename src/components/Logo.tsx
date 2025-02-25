 const Logo=()=> {
    return   <div className="flex ">
            {/* <div className="relative w-8 h-8 bg-black rounded-lg flex items-center justify-center">

        <div className="absolute w-[26px] h-[26px] bg-white rounded mt-[3.5px] ml-[-3.09px]"></div>
    </div> */}

            <div className="w-8 h-8 rounded-lg relative left-[-0.59px] flex items-center justify-center bg-[#000000]">
                <div className="absolute w-[26px] h-[26px] rounded-[2px] top-[3.5px] left-[-3.09px] "
                    style={{
                        borderTop: "13px solid transparent",
                        borderBottom: "13px solid transparent",
                        borderLeft: "26px solid white",
                    }}></div>
            </div>

            <p className="text-lg font-bold leading-9 text-gray-800" style={{ fontFamily: "Open Sans, sans-serif" }}>Trailbliss</p>
        </div>

    
};

export default Logo;