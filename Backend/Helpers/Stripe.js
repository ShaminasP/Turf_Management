import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const domain = process.env.Client_Side_URL;
export const paymentStripe = async (fee, turfName, email, id) => {
  console.log(fee, turfName, email, id);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "INR",
          product_data: { name: turfName + "- Turf Slot Booking" },
          unit_amount: fee * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}/success/${id}`,
    cancel_url: `${domain}/failed/${id}`,
    customer_email: email,
  });

  return session.id;
};
