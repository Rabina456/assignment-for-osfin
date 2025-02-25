import Logo from '../components/Logo'
import loginImage from '../assets/login.png'
import { useNavigate } from "react-router-dom";





const Login = () => {

    
  
    const navigate = useNavigate();

    const handleLogin = (isLogin:Boolean) => {
        
        navigate("/passengers-detail",{
            state:{ isLogin : isLogin }
        }); 
      };

    return (
        <div className="flex h-screen">
            <div className="flex w-[60%] h-full">
                <img src={loginImage} alt="login_img" className="w-full h-full object-cover" />
            </div>
            <div className="flex w-full h-full  flex-1 justify-center items-center p-6">
                <div className="flex flex-col  w-[360px] h-[462.5px] gap-6">
                    <Logo/>
                   
                    <div className="flex flex-col justify-center items-center w-[360px] h-[382.5px] gap-6 border-b border-[#E5E5E5]">
                    <div className="w-[360px] gap-6 ">
                        <div className=" flex w-[120.41218566894531] h-[32] gap-2 ">
                            <div className="w-[360px] h-[234px] gap-6 ">
                                <div className="font-sans font-semibold text-[20px] leading-[28px] tracking-normal mb-6">Nice to see you again</div>
                                <div className="flex flex-col w-[360px] h-[63px] gap-1">
                                    <div className="w-[360px] h-[142px] gap-4">
                                        <label className="font-sans font-semibold text-sm leading-[19.07px]">Email:</label>
                                        <input type="email"
                                            placeholder="Enter Email address"
                                            className="w-[360px] h-[40px] rounded pt-2 pr-[11px]
                             pb-2 pl-[11px] gap-[10px] bg-[#F6F6F6]
                            placeholder:font-sans placeholder:font-normal 
                            placeholder:text-sm placeholder:leading-[19.07px] 
                            placeholder:tracking-tight"/>
                                    </div>
                                    <div className="relative w-[360px] h-[63px] gap-1">
                                        <label className="font-sans font-semibold text-sm leading-[19.07px]">Password:</label>
                                        <input type="password"
                                            placeholder="Enter Password"
                                            className="w-[360px] h-[40px] rounded pt-2 pr-[11px]
                                 pb-2 pl-[11px] gap-[10px] bg-[#F6F6F6]
                                placeholder:font-sans placeholder:font-normal 
                                placeholder:text-sm placeholder:leading-[19.07px] 
                                placeholder:tracking-tight"/>

                                        <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 w-[16px] mt-[-28px]  text-[#4D4D4D]" fill="none" viewBox="0 0 24 24" stroke="#4D4D4D">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4 7-9 7s-9-3-9-7 4-7 9-7 9 3 9 7z" />
                                        </svg>

                                    </div>

                                    <div className="flex w-[360px] h-[20px] gap-4">
                                        <div className="switcher-item-left flex w-[172px] h-[20px] gap-2">

                                            <label className="relative inline-flex items-center cursor-pointer w-[40px] h-[20px]">
                                                <input type="checkbox" className="sr-only peer w-[20px] h-[20px]" />
                                                <div className="w-10 h-5 bg-[#F2F2F2] border border-[#E5E5E5] rounded-[36.5px]">
                                                    <div className="knob-20 w-4 h-4 top-[2px] left-[2px]
                                     rounded-full bg-white shadow-[1px_1px_2px_-1px_#3333334D]
                                      absolute  peer-checked:translate-x-5"></div>
                                                </div>
                                            </label>

                                            <p className="font-sans font-normal text-xs leading-5 tracking-[0.3px]">Remember me</p>
                                        </div>
                                        <p className="font-sans font-normal text-xs leading-5 tracking-[0.3px] text-right text-[#007AFF]"
                                        >Forgot Password?</p>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex '>
                    <button className="w-[360px] h-[40px] rounded-[6px] px-[24px] py-[10px] bg-[#2D2D2D] text-white " onClick={()=>handleLogin(true)}>Login</button>
                    </div>
                    
                    </div>
                    <div className="flex mx-auto justify-center items-center w-[239px] h-[20px] gap-2">
                        <div className="font-sans m-0 p-0 font-normal text-[12px] leading-[20px] tracking-[0.3px] w-[139px] h-[20px] text-[#1A1A1A]">Continue without login?</div>
                        <div className="font-sans m-0 p-0 font-bold text-[12px] leading-[20px] tracking-[0.3px] text-right w-[92px] h-[20px] text-[#007AFF]" onClick={()=>handleLogin(false)} >Go to platform</div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Login;