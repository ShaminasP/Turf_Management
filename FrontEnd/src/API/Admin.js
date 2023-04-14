import { Axiosuser } from "./axiosinstance";

export const adminLogin = async (data) => {
  try {
    const response = await Axiosuser.post("/admin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTurfs = async (token) => {
  try {
    const response = await Axiosuser.get("/admin/turfs", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getRequestedTurf = async (data) => {
  try {
    const response = await Axiosuser.get("/admin", {
      headers: { Authorization: data },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const changeStatus = async (ID, token) => {
  try {
    const response = await Axiosuser.patch("/admin/status", {
      ID,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteRequest = async (ID, token) => {
  try {
    const response = await Axiosuser.delete("/admin/status", {
      headers: { Authorization: token },
      data: { id: ID },
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const getUsers = async (token) => {
  try {
    const response = await Axiosuser.get("/admin/users", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getSalesReport = async (token) => {
  try {
    const response = await Axiosuser.get("/admin/reports", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getCounts = async (token) => {
  try {
    const response = await Axiosuser.get("/admin/counts", {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
