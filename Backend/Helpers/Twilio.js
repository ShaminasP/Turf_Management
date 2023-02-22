import dotenv from "dotenv";
import { default as Twilio } from "twilio";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const serviceID = process.env.TWILIO_SESSION_SID;

const client = Twilio(accountSid, authToken);

export const sendSms = (phone) => {
  client.verify.v2
    .services(serviceID)
    .verifications.create({ to: `+91${phone}`, channel: "sms" })
    .then((verification) => console.log(verification.status));
};

export const veryfySms = (phone, otp) => {
  return new Promise((resolve, reject) => {
    client.verify.v2
      .services(serviceID)
      .verificationChecks.create({ to: `+91${phone}`, code: otp })
      .then((response) => {
        resolve(response.valid);
      })
      .catch((error) => reject(error.message));
  });
};
