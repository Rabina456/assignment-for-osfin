import { useNavigate } from "react-router-dom";

 const Footer=({step,label,isLogin}:any)=>{

    
    localStorage.setItem("login",isLogin);
    const navigate = useNavigate();
    const login=localStorage.getItem("login");
    console.log(login)
    const handleNavigate = () => {
        switch(step){
            
            case 1:
                navigate("/additional-info");
                break;
            case 2:
                navigate("/review-submit");
                break;
            case 3:
                // if(login==false){
                // navigate("/") 
                // }  
                navigate("/booking-confirmation");
                break;
            default:
                navigate("/")
        }
        
      };
    return (
        // <div className="flex justify-between">
        //     <div className=" top-[306px] left-[62px] w-[121px] h-[40px] min-w-[68px] flex gap-[10px] rounded-lg pt-[10px] pr-[24px] pb-[10px] pl-[24px]">
        //     <div className="w-[52px] h-[24px] gap-1">
        //         <div className="font-sans font-semibold text-[16px] leading-[24px] tracking-tighter 
        //     underline decoration-solid decoration-auto 
        //     w-[52px] h-[24px] text-[#000000]">
        //             Cancel
        //         </div>
        //     </div>
        // </div>
        //     <div>
        //     <div className="top-[256px] left-[60px] w-[126px] h-[40px] min-w-[68px] 
        //     flex gap-[10px] rounded-lg 
        //     pt-[10px] pr-[24px] pb-[10px] pl-[24px] bg-[#F6F6F6]">
        //         <div className="w-[78px] h-[24px] gap-1">
        //             <div className="
        //             w-4 h-4">
        //                 </div>
        //                 <div className="font-sans font-semibold text-lg leading-6 tracking-tight text-[#000]">
        //                     Go Back
        //                 </div>
                
        //         </div>
                
        //     </div>
        //     <div className="top-[198px] left-[60px] w-[126px] h-[40px] min-w-[68px] 
        //     flex gap-[10px] rounded-lg 
        //     pt-[10px] pr-[24px] pb-[10px] pl-[24px] bg-[#000]">
        //        <div className="w-[78px] h-[24px] gap-1">
                
        //         </div>
        //         <div className="font-sans font-semibold text-lg leading-6 tracking-tight text-[#FFF]">
        //                     Next
        //                 </div>
        //     </div>
        //     </div>
        // </div>
        
         <div className="flex justify-between mt-6 ml-6">
          <button className="text-gray-500 hover:underline">Cancel</button>
         <div>
          { step !=1 && <button className="mr-4 px-6 py-2 border rounded-md">← Go Back</button>}
           <button  className="bg-black text-white px-6 py-2 rounded-md" onClick={ handleNavigate }>{label}</button>
         </div>
       </div>
       
    )
}

export default Footer;