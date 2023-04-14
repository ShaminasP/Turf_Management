import { Axiosuser } from "./axiosinstance";

export const turfRegister = async (data, token) => {
  try {
    const response = await Axiosuser.post("/turf/register", data, {
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const viewTurfByOwner = async (data) => {
  try {
    const response = await Axiosuser.get("/turf/viewturfowner", {
      headers: { Authorization: data },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const toUpdateTufDetails = async (token, data) => {
  try {
    const response = await Axiosuser.put(
      "/turf/update",
      { data },
      { headers: { Authorization: token } }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const toGetBookings = async (token) => {
  try {
    const response = await Axiosuser.get("/turf/booking", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const toGetBookingReport = async (token) => {
  try {
    const response = await Axiosuser.get("/turf/booking-report", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const toGetBookingCount = async (token) => {
  try {
    const response = await Axiosuser.get("/turf/counts", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
