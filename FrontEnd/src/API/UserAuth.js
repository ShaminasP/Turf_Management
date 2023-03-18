import { Axiosuser } from "./axiosinstance";

export const SignupForm = async (data) => {
  try {
    await Axiosuser.post("/signup", data);
    return;
  } catch (error) {
    return error.response;
  }
};

export const OTP = async (data) => {
  try {
    await Axiosuser.post("/otp", data);
    return;
  } catch (error) {
    return error.response;
  }
};

export const LoginForm = async (data) => {
  try {
    const response = await Axiosuser.post("/login", data);
    return response.data;
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
