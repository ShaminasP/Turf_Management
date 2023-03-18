import { Axiosuser } from "./axiosinstance";

export const turfRegister = async (data) => {
  try {
    console.log(data);
    await Axiosuser.post("/turf/register", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return;
  } catch (error) {
    return error.response;
  }
};

export const turfLogin = async (data) => {
  try {
    await Axiosuser.post("/turf/login", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return;
  } catch (error) {
    return error.response;
  }
};

export const viewTurfByOwner = (data) => {
  try {
    Axiosuser.get("/turf/viewturfowner", { headers: { Authorization: data } });
    return;
  } catch (error) {
    return error.response;
  }
};
