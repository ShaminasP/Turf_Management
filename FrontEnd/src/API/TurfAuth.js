import { Axiosuser } from "./axiosinstance";

export const turfRegister = (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Axiosuser.post("/turf/register", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(() => resolve())
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const turfLogin = (data) => {
  return new Promise((resolve, reject) => {
    Axiosuser.post("/turf/login", data)
      .then((data) => resolve(data))
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const getTurfs = () => {
  return new Promise((resolve, reject) => {
    Axiosuser.get("/turf/viewturfs")
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => reject(err?.response?.data?.message));
  });
};

export const getTurf = (id) => {
  return new Promise((resolve, reject) => {
    Axiosuser.get(`/turf/viewturf/${id}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => reject(err?.response?.data?.message));
  });
};
