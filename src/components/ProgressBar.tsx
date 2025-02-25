import React from "react";
import Step from "./Step";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  // Determine each step’s status based on `currentStep`
  const step1Status =
    currentStep > 1 ? "completed" : currentStep === 1 ? "inprogress" : "pending";
  const step2Status =
    currentStep > 2 ? "completed" : currentStep === 2 ? "inprogress" : "pending";
  const step3Status =
    currentStep === 3 ? "inprogress" : currentStep > 3 ? "completed" : "pending";

  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Booking Information</h1>
      </div>

      {/* Stepper container */}
      <div className="flex justify-center relative my-6 w-full">
      <div className="absolute top-[16%] left-[250px] w-[230px] h-0.5 bg-gray-300 -translate-y-1/2"></div>
        <div className="relative flex items-center justify-between w-[700px] h-16">
          {/* The background line behind all steps */}
          {/* <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2"></div> */}

          {/* Step 1 */}
          
          <Step
            stepNumber={1}
            label="Passenger Details"
            status={step1Status}
          />

          {/* Step 2 */}
          <Step
            stepNumber={2}
            label="Additional Information"
            status={step2Status}
          />
          <div className="absolute top-[16%] left-[370px] w-[254px] h-0.5 bg-gray-300 -translate-y-1/2"></div>
          {/* Step 3 */}
          <Step
            stepNumber={3}
            label="Review and Submit"
            status={step3Status}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
