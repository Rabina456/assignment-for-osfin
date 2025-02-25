import Sidebar from "../components/SideBar";
import ProgressBar from "../components/ProgressBar";
import FlightDetails from "./review-and-submit-details/FlightDetails";
import PassengerDetails from "./review-and-submit-details/SubmittedPassengerDetails";
import BaggageOptions from "./additional-details/BookingOptions";
import CompletedStep from "../components/CompletedStep";
import Footer from "../components/Footer";

const ReviewSubmit=()=>{
   
   
    
   
      return (
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
    
          {/* Main Content */}
          <div className="flex-1 pl-6">
           
    
            {/* Progress Bar */}
            <ProgressBar currentStep={3} />
    
            
            <CompletedStep step={3} detail={"Review and Submit"}/>
    
            {/* Sections */}
            <div className="w-auto h-[442px]  gap-6">
 

            <FlightDetails />
            <PassengerDetails />
            <BaggageOptions step={3}/>

            </div>
    
            

        <Footer step={3} label={"Submit"} />
        </div>
        </div>
        
        
      );
    };
    
    
    
     

export default ReviewSubmit;