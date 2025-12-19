// app/booking/page.tsx
import BookingClient from "./BookingClient";

// لمنع محاولة prerender وفرض CSR
export const dynamic = "force-dynamic";

export default function BookingPage() {
  return <BookingClient />;
}
