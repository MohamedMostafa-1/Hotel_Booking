// app/booking/page.tsx
import BookingClient from "./BookingClient";

export const dynamic = "force-dynamic"; // اجبار Next.js على CSR

export default function BookingPage() {
  return <BookingClient />;
}
