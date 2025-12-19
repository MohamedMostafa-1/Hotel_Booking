import { Suspense } from "react";
import BookingClient from "@/app/booking/BookingClient/page";

export const dynamic = "force-dynamic";

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <BookingClient />
    </Suspense>
  );
}
