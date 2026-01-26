import axiosInstance from "./axiosInstance";

export const createPaymentOrder = (amount, order_id) => {
  return axiosInstance.post("/payments/create", null, {
    params: { amount: amount, order_id: order_id },
  });
};

export const handlePaymentResponse = async (res) => {
  return await axiosInstance.post("/payments/verify", {
    razorpayOrderId: res.razorpay_order_id,
    razorpayPaymentId: res.razorpay_payment_id,
    razorpaySignature: res.razorpay_signature,
  });
};
