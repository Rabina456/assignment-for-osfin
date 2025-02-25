import Sidebar from "../components/SideBar";
import ProgressBar from "../components/ProgressBar";
import { FaChevronUp } from "react-icons/fa";
import FlightCard from "../components/FlightCard";
import CompletedStep from "../components/CompletedStep";
import Footer from "../components/Footer";
import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";



const PassengerDetails = () => {

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
  });

  const validate = (name: any, value: any) => {
    let error = "";

    switch (name) {
      case "name":
        error = value.length >= 3 ? "" : "Name must be at least 3 characters";
        break;

      case "dob":
        const birthYear = new Date(value).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        error = age <= 90 ? "" : "Age cannot be more than 90 years old";
        break;

      case "phone":
        const phonePattern = /^\+91[6789]\d{9}$/;
        error = phonePattern.test(value) ? "" : "Invalid phone number";
        break;

      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = emailPattern.test(value) ? "" : "Invalid email address";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };




  return (
    <div className="flex h-screen ">
      <div className="w-64 bg-gray-100">
        <Sidebar />
      </div>


      {/* Main Content */}
      <div className="flex-1  pl-6 gap-12 ">



        {/* Progress Bar */}

        <ProgressBar currentStep={1} />



        {/* Flight Details */}
        <div className=" w-[1058px] h-[120px]  top-[176px] left-[272px] rounded-[2px] bg-gray-200">


          <FlightCard />
        </div>

        {/* Passenger Details */}

        <CompletedStep step={1} detail={"Passenger Details"} />

        {/* Saved Passengers */}
        <div className="flex flex-col  justify-around  w-[1054px] h-[89px] top-[383px] left-[272px] rounded-[12px] shadow-[0px_0px_12px_0px_#0000001A]">
          <p className="font-sans w-[154px] h-[25px] top-[16px] ml-[16px] font-semibold text-[18px] leading-[24.51px] tracking-[0px] text-black">Saved Passengers</p>
          <div className="flex w-[674px] h-[19px]  top-[54px] ml-[16px] flex gap-[60px]">
            {["Oliver Thompson", "Sophia Martinez", "Liam Johnson", "Ava Williams"].map((name) => (
              <label key={name} className="flex items-center w-[139px] h-[19px] gap-[10px]">
                <input type="checkbox" className="w-4 h-4 gap-[6px]" />
                <span className="w-[113px] h-[19px] font-sans font-normal text-[14px] leading-[19.07px] ">{name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Passenger 1 Details */}
        <div className="mb-4 mt-4 w-[169px] h-[25px] top-[488px] left-[272px] font-sans font-semibold text-[18px]  leading-[24.51px] ">Passenger 1 Details</div>

        <div className="flex flex-row gap-12">
          <div className="w-[308px] h-[63px] top-[536px] left-[272px] gap-1">
            <label className=" font-sans font-semibold text-[14px] leading-[19.07px] tracking-[0px] w-[308px] h-[19px]">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Placeholder"
              className="w-full h-[40px] rounded-md px-3 bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.name && (
              <div className="absolute right-3 top-2/4 transform -translate-y-1/2">
                {errors.name ? (
                  <XCircleIcon className="w-6 h-6 text-red-500" />
                ) : (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                )}
              </div>
            )}
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="w-[308px] h-[63px] top-[536px] left-[272px] gap-1">
            <label className="font-sans font-semibold text-[14px] leading-[19.07px] tracking-[0px] w-[308px] h-[19px]"
            >Date of Birth</label>
            <input type="text" name="dob"
              value={formData.dob}
              onChange={handleChange}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Placeholder" className="w-[308px] h-[40px] rounded-[4px] gap-[10px] pt-[8px] pr-[11px] pb-[8px] pl-[11px] bg-[#F6F6F6]
            placeholder:font-sans placeholder:text-[14px] placeholder:leading-[19.07px] placeholder:tracking-tight placeholder:text-gray-400
            appearance-none text-[#F6F6F6]"
            />
            {formData.dob && (
              <div className="absolute right-3 top-2/4 transform -translate-y-1/2">
                {errors.dob ? (
                  <XCircleIcon className="w-6 h-6 text-red-500 z-10" />
                ) : (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 z-10" />
                )}
              </div>)}
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>



          {/* Gender */}
          <div className="w-[308px] h-[52px] top-[536px] left-[994px] gap-[14px]">
            <div className="w-[308px] h-[19px] gap-1">
              <label className="w-[308px] h-[19px] font-sans font-semibold text-[14px] leading-[19.07px] tracking-[0px]"
              >Gender</label>
            </div>
            <div className="flex w-[308px] h-[40px] rounded-[4px] gap-[10px] px-[11px] py-[8px] "
            >
              {["Male", "Female", "Others"].map((gender) => (
                <label key={gender} className="flex items-center text-sm space-x-2">
                  <input type="radio" name="gender" className="w-4 h-4" />
                  <span className="font-sans font-normal text-lg leading-[21.79px] tracking-tight w-[89px] h-[22px] text-[6B6B6B]"
                  >{gender}</span>
                </label>
              ))}
            </div>


          </div>


        </div>

        <div className="flex flex-start w-[135px] h-[20px] top-[616px] left-[272px] gap-[2px]">
          <div className="w-4 h-4 text-[#6B6B6B]">
            +
          </div>
          <div className="font-inter font-semibold text-md leading-md tracking-tight w-[115px] h-[20px] text-[#6B6B6B]"
          >Add a Passenger</div></div>

        {/* Contact Details */}
        <div className="w-[133px] h-[24px] mt-6 top-[664px] left-[272px] font-sans font-semibold text-[18px] leading-[24.51px] tracking-[0px]">Contact Details</div>
        <div className="mt-4 flex flex-row gap-6">

          <div>
            <label className="w-[330px] h-[19px] font-sans font-semibold text-[14px] leading-[19.07px] tracking-[0px] text-black">
              Phone Number</label>
            <div className="flex  w-[330px] h-[40px] gap-[8px]">
              <div className="flex w-[72.85px] h-[38px] rounded-[4px] bg-[#F6F6F6] pt-[7px] pr-[8px] pb-[7px] pl-[8px]"
              >


                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="mr-2 w-[24.846153259277344px] h-[19px]" />
                <div className="w-[24px] h-[24px]">
                  <FaChevronUp />
                </div>

              </div>
              <input type="tel"
                name="phone"

                inputMode="numeric"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(+91) 999-9999" className="w-[249.15px] h-[40px] rounded-[4px] bg-[#F6F6F6]
              placeholder:font-sans placeholder:text-[14px] placeholder:leading-[19.07px] placeholder:tracking-tight placeholder:text-gray-400"
              />
              {formData.phone && (
                errors.phone ?
                  <XCircleIcon className="w-6 h-6 text-red-500" /> :
                  <CheckCircleIcon className="absolute top-w-6 h-6 text-green-500" />
              )}
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            </div>
          </div>
          <div className=" w-[308px] h-[63px]  top-[713px] left-[634px] gap-[4px]" >
            <label className="w-[330px] h-[19px] font-sans font-semibold text-[14px] leading-[19.07px]  text-black">
              Email Address</label>
            <input type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Placeholder" className="w-[308px] h-[40px] rounded-[4px] gap-[10px] pt-[8px] pr-[11px] pb-[8px] pl-[11px] bg-[#F6F6F6]
            placeholder:font-sans placeholder:text-[14px] placeholder:leading-[19.07px] placeholder:tracking-tight placeholder:text-gray-400"


            />
            {formData.dob && (

              errors.dob ? (
                <XCircleIcon className="w-6 h-6 absolute right-20 top-[6px] text-red-500" />
              ) : (
                <CheckCircleIcon className="w-6 h-6  right-20 top-[6px] text-green-500 " />
              )

            )}
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        <Footer step={1} label={"Next"} />

      </div>
    </div>
  );


}
export default PassengerDetails;