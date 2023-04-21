import { useEffect, useState } from "react";
import {
  toUpdateProfile,
  toViewProfile,
  toGetBookings,
} from "../../../API/UserAuth";
import { FormValidate } from "../../../Helpers/Helpers.js";
import { useSelector } from "react-redux";
import ProfilePhoto from "./ProfilePhoto";
import BookingDetails from "./BookingDetails";

const UserProfile = () => {
  const { token } = useSelector((state) => state.user);
  const [users, setUsers] = useState({ name: "", mobile: "", email: "" });
  const [dataError, setDataError] = useState("");
  const [edit, setEdit] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  let today = new Date();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let year = today.getFullYear();
  let formattedDate = month + "/" + day + "/" + year;
  const todayDate = new Date(formattedDate);

  const toGetUser = async (token) => {
    const response = await toViewProfile(token);
    if (response.status === 200) {
      setUsers(response?.data);
    }
  };

  const fetchBookings = async (token) => {
    const response = await toGetBookings(token);
    if (response.status === 200) {
      setBookings(response?.data);
      const upcomingBooking = response?.data.filter((booking) => {
        const bookedDate = new Date(booking?.bookDate);
        return bookedDate => todayDate;
      });
      setUpcomingBookings(upcomingBooking);

      const previousBooking = response?.data.filter((booking) => {
        const bookedDate = new Date(booking?.bookDate);
        return bookedDate < todayDate;
      });
      setPreviousBookings(previousBooking);
      setShowBookings(true);
    }
  };

  const onChange = (e) =>
    setUsers({ ...users, [e.target.name]: e.target.value });

  const validateForm = () => {
    const errors = FormValidate(users);
    console.log(errors);
    setDataError(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(users);
    const response = await toUpdateProfile(token, users);
    if (response.status === 200) {
      setEdit(false);
    }
  };

  useEffect(() => {
    toGetUser(token);
  }, []);

  return (
    <section className="p-6 bg-white text-gray-900 mt-16 border-3">
      <form
        onSubmit={onSubmit}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <ProfilePhoto name={users?.name} setEdit={setEdit} />
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={onChange}
                value={users?.name}
                disabled={!edit}
                placeholder="Username"
                className="w-full p-2 rounded-md  border-gray-100 text-gray-900"
              />
              {dataError.name && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {dataError.name}
                </p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="mobile" className="text-sm">
                Mobile
              </label>
              <input
                id="Mobile"
                type="text"
                name="mobile"
                onChange={onChange}
                disabled={!edit}
                value={users?.mobile}
                placeholder="Mobile"
                className="w-full py-2 rounded-md  border-gray-100 text-gray-900"
              />
              {dataError.mobile && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {dataError.mobile}
                </p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                disabled={!edit}
                value={users?.email}
                name="email"
                onChange={onChange}
                type="text"
                placeholder="email"
                className="w-full py-2 rounded-md  border-gray-100 text-gray-900"
              />
              {dataError.email && (
                <p className="text-red-500 mt-1 text-xs italic">
                  {dataError.email}
                </p>
              )}
            </div>
            <p
              className="text-blue-400 cursor-pointer"
              onClick={() => fetchBookings(token)}
            >
              View Bookings
            </p>
            {edit && (
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            )}
          </div>
        </fieldset>
      </form>
      {showBookings && <BookingDetails previousbookings={previousBookings} upcomingBooking={upcomingBookings}/>}
    </section>
  );
};
export default UserProfile;
