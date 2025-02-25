import Sidebar from "../components/SideBar";
import ProgressBar from "../components/ProgressBar";
import BaggageOptions from "./additional-details/BookingOptions";
import TripSecurity from "./additional-details/TripSecurity";
import CompletedStep from "../components/CompletedStep";
import Footer from "../components/Footer";

const AdditionalInfo=()=>{
    
  return (
    <div className="flex  h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col gap-24">
      <div className="flex flex-col flex-1 gap-4 pl-6 ">
        

        {/* Progress Bar */}
        <ProgressBar currentStep={2} />

        <CompletedStep step={2} detail={"Additional Information"}/>
        {/* Sections */}
        <BaggageOptions step={2}/>
        <TripSecurity />

       

       
      </div>

      <Footer step={2} label={"Next"}/>
      </div>
    </div>
  );
};




export default AdditionalInfo;