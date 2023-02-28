import { Axiosuser } from "./axiosinstance";

export const SignupForm = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/signup", data)
      .then(() => resolve())
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const OTP = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/otp", data)
      .then(() => resolve())
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const LoginForm = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/login", data)
      .then(() => {
        console.log("login success");
        resolve();
      })
      .catch((err) => reject(err?.response?.data?.message));
  });
};
