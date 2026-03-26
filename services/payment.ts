import { PaymentSessionPayload, PaymentSessionResponse } from "@/types";

const PAYMENT_API_BASE_URL =
  process.env.NEXT_PUBLIC_PAYMENT_API_BASE_URL || "https://api.example-payment-gateway.test";

export async function createPaymentSession(
  payload: PaymentSessionPayload
): Promise<PaymentSessionResponse> {
  // Replace this mock with a real POST request to your backend, for example:
  // await fetch(`${PAYMENT_API_BASE_URL}/create-payment-session`, { method: "POST", body: JSON.stringify(payload) })
  // The backend should return a payment_url for the hosted payment page or redirect flow.
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (!payload.courseId || !payload.studentName || !payload.studentEmail) {
    throw new Error("ข้อมูลการสมัครเรียนไม่ครบถ้วน");
  }

  const isFailureScenario = payload.studentEmail.toLowerCase().includes("fail-demo");
  const redirectPath = isFailureScenario ? "/payment/failed" : "/payment/success";

  return {
    sessionId: `sess_${payload.courseId}_${Date.now()}`,
    paymentUrl: `${redirectPath}?course=${encodeURIComponent(payload.courseSlug)}`,
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
  };
}

export function getPaymentApiBaseUrl() {
  return PAYMENT_API_BASE_URL;
}
