import { Axiosuser } from "./axiosinstance";

export const turfRegister = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/turf/register", data)
      .then(() => resolve())
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const turfLogin = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/turf/login", data)
      .then(() => resolve())
      .catch((err) => reject(err?.response?.data?.message));
  });
};
