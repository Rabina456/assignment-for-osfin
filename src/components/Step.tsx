// A small icon for completed steps (you can use any icon library instead)
function CheckIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Step({ stepNumber, label, status }: any) {
  // Circle styling based on status
  const circleStyle =
    status === "completed"
      ? "bg-black text-white" // Filled circle with check
      : status === "inprogress"
      ? "border-2 border-black text-black"
      : "border-2 border-gray-300 text-gray-400";

  // Text for sublabel
  const subLabelText =
    status === "completed" ? "Completed" : status === "inprogress" ? "In progress" : "Pending";

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Circle */}
      <div className="relative flex items-center">
        {stepNumber!=3 && (
          // Connecting line (Only if it's not the last step)
          <div className="absolute w-full h-0.5 bg-gray-300 top-1/2 left-full transform -translate-y-1/2"></div>
        )}
        <div className={`rounded-full w-8 h-8 flex items-center justify-center ${circleStyle} z-10`}>
          {status === "completed" ? <CheckIcon /> : stepNumber}
        </div>
        {/* {stepNumber==1 && <div className="absolute w-full h-0.5 bg-gray-300 top-1/2 left-full transform -translate-y-1/2"></div>} */}
      </div>

      {/* Labels */}
      <span className="mt-2 font-semibold text-sm">{label}</span>
      <span
        className={`text-xs ${
          status === "completed" ? "text-green-600" : status === "inprogress" ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {subLabelText}
      </span>
    </div>
  );
}

export default Step;
