import { Axiosuser } from "./axiosinstance";

export const SignupForm = async (data) => {
  try {
    const response = await Axiosuser.post("/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const OTP = async (data) => {
  try {
    const response = await Axiosuser.post("/otp", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const LoginForm = async (data) => {
  try {
    const response = await Axiosuser.post("/login", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTurfs = async () => {
  try {
    const response = await Axiosuser.get("/viewturfs");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getTurf = async (id) => {
  try {
    const response = await Axiosuser.get(`/viewturf/${id}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const toGetTurfBySearch = async (data) => {
  try {
    const response = await Axiosuser.get(`/turfbylocation/${data}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const toBookTurf = async (turfID, date, time, token) => {
  try {
    const response = await Axiosuser.post(
      "/booking",
      { turfID, date, time },
      {
        headers: { Authorization: token },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const togetBookingslots = async (date, ID) => {
  try {
    const response = await Axiosuser.get("/bookingslots", {
      params: { date, ID },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const payementAction = async (bookingId) => {
  try {
    const response = await Axiosuser.get("/payment", { params: { bookingId } });
    return response;
  } catch (error) {
    console.log(error);
    return error?.response;
  }
};


export const bookingSuccess = async (id) => {
  try {
      const response = await Axiosuser.patch('/booking-success', { id })
      return response
  } catch (error) { return error?.response }
}