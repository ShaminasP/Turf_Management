import React, { useState } from "react";
import { OTP } from "../../API/UserAuth";

function OtpForm({ formData }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const onOtpChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);

    if (e.target.value.length === 1 && index < 5) {
      document.getElementsByTagName("input")[index + 1].focus();
    }
  };

  const submitOtp = (e) => {
    e.preventDefault();
    const otpJoined = otp.join("");
    formData.otp = otpJoined;
    OTP(formData).then(() => {

        setOtp(['','','','','',''])
    });
  };

  return (
    <div className="bg-white mb-3 pb-5 px-11 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div className="flex justify-evenly">
        <h2 className="text-2xl font-[Poppins] font-bold pt-5 pb-3 sm:p-6 sm:pb-4">
          Enter the OTP send to your number <br />
          <span className="text-blue-800 ml-[108px]"> </span>{" "}
        </h2>
      </div>
      <form className="flex justify-evenly" onSubmit={submitOtp}>
        {otp.map((digit, index) => (
          <div key={index} className="mr-2 rounded-3xl">
            <input
              type="text"
              value={digit}
              onChange={(e) => onOtpChange(e, index)}
              maxLength={1}
              className="w-11 h-11 border border-gray-400 rounded text-center text-xl font-medium focus:outline-none"
            />
          </div>
        ))}
        <div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-medium py-2 px-5 ml-5 rounded hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default OtpForm;
