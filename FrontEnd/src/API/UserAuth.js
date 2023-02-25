import { Axiosuser } from "./axiosinstance"

export const SignupForm = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        Axiosuser.post('/signup', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const OTP = (data) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/otp', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}