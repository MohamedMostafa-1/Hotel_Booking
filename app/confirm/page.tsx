import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";

interface ConfirmPageProps {
  searchParams: {
    roomId?: string;
  };
}

export default function ConfirmPage({ searchParams }: ConfirmPageProps) {
  const room = rooms.find(
    (r) => r.id === Number(searchParams.roomId)
  );

  return (
    <section className="min-h-screen bg-[#FFF5E6] px-4 md:px-10 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#3E2F27]">
            Booking <span className="text-[#E67E22]">Confirmed</span>
          </h1>
          <p className="text-[#8B5E3C] mt-3">
            Thank you for choosing DesertStay. Your reservation details are below.
          </p>
        </div>

        {/* Room Info */}
        {room && (
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={room.images}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#3E2F27]">
                {room.name}
              </h2>
              <p className="text-[#8B5E3C] mt-1">{room.type}</p>

              <ul className="mt-4 space-y-2 text-[#3E2F27]">
                <li>👥 Guests: {room.guests}</li>
                <li>🛏 Bed Type: {room.bedType}</li>
                <li>⭐ Rating: {room.rating}</li>
                <li className="font-semibold text-[#E67E22] text-lg">
                  ${room.pricePerNight} / night
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Booking Summary */}
        <div className="border-t pt-6 text-[#3E2F27]">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Check-in</span>
            <span>—</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Check-out</span>
            <span>—</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span className="text-[#E67E22]">
              ${room?.pricePerNight}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link
            href="/"
            className="w-full text-center bg-[#3E2F27] hover:bg-[#2b201a] text-white py-3 rounded-xl font-semibold transition"
          >
            Back to Home
          </Link>

          <Link
            href="/rooms"
            className="w-full text-center bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-xl font-semibold transition"
          >
            Explore More Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
