import { Axiosuser } from "./axiosinstance";

export const turfRegister = async (data, token) => {
  try {
    console.log(data);
    const response = await Axiosuser.post("/turf/register", data, {
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// export const turfLogin = async (data) => {
//   try {
//     const response = await Axiosuser.post("/turf/login", data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return;
//   } catch (error) {
//     return error.response;
//   }
// };

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
