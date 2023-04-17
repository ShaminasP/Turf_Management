import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetToken } from "../../../Store/userSlice";

const RegistrationCompleted = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const onComplete = () => {
    Dispatch(resetToken());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("name");
    Navigate("/turf/completed");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl">
        <svg
          className="w-16 h-16 text-green-500 mb-6 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18.707 5.293a1 1 0 00-1.414 0L8 14.586 3.707 10.293A1 1 0 102.293 11.707l5 5a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Your Turf Registered Successfully!
        </h1>
        <div className="bg-gray-200 p-4 mx-5 text-center shadow-2xl  text-lg justify-center rounded-lg mb-6">
          <p>
            Your Turf will be shown to the users after the{" "}
            <span className="font-bold">APPROVAL</span>
          </p>

          <p>
            You can Login to your turf's{" "}
            <span className="font-bold">Dashboard</span> using your{" "}
            <span className="font-bold">Email and Password</span>
          </p>
        </div>{" "}
        <button
          onClick={onComplete}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg block mx-auto"
        >
          Login to your TURF
        </button>
      </div>
    </div>
  );
};

export default RegistrationCompleted;
