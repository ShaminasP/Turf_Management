import { useState } from "react";
import { turfRegister } from "../../../API/TurfAuth";
const RegistrationForm = () => {
  const intialState = {
    name: "",
    email: "",
    mobile: "",
    place: "",
    district: "",
    state: "",
    password: "",
    image: "",
  };



  const [formData, setFormData] = useState(intialState);
  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleImage = (event) => {
    const img = event.target.files[0];
    setFormData({...formData, image: img });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    turfRegister(formData);
    };
  return (
    <>
      <div className="flex items-center justify-center p-12 bg-white">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={inputChange}
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={inputChange}
                id="email"
                placeholder="turf@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="contactNumber"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Contact Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={inputChange}
                id="contactNumber"
                placeholder="Enter your contactNumber"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="place"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Place
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={formData.place}
                onChange={inputChange}
                placeholder="Type your place"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "}
            <div className="mb-5">
              <label
                htmlFor="District"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                District
              </label>
              <input
                name="district"
                id="District"
                value={formData.district}
                onChange={inputChange}
                placeholder="Type your District"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "} <div className="mb-5">
              <label
                htmlFor="District"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                State
              </label>
              <input
                name="state"
                id="state"
                value={formData.state}
                onChange={inputChange}
                placeholder="Type your District"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "}
            <div className="mb-5">
              <label
                htmlFor="Password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleImage}
                id="image"
                placeholder="Type your Password"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password  "
                name="password"
                id="Password"
                value={formData.password}
                onChange={inputChange}
                placeholder="Type your Password"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm;
