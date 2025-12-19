"use client";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";
import { useParams } from "next/navigation";


const RoomPage = () => {
  const params = useParams(); // هنا تجيب id من URL
  const room = rooms.find((r) => r.id === Number(params.id));

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-[#3E2F27]">Room not found</p>
        <Link href="/rooms" className="ml-4 text-[#E67E22] hover:underline">
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#FFF5E6] min-h-screen px-4 md:px-10 py-16 mt-15">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={room.images}
            alt={room.name}
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#3E2F27]">{room.name}</h1>
            <p className="text-[#8B5E3C] mt-2 text-lg">{room.type}</p>

            <div className="flex items-center mt-4 space-x-4 text-[#3E2F27]">
              <p className="text-xl font-semibold text-[#E67E22]">
                ${room.pricePerNight}/night
              </p>
              <p>👥 {room.guests} Guests</p>
              <p>🛏 {room.bedType}</p>
              <p>⭐ {room.rating}</p>
            </div>

            <p className="mt-6 text-[#3E2F27] text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae ligula non purus tincidunt gravida. Nulla facilisi.
            </p>
          </div>

          <div className="mt-6 md:mt-auto">
            <Link href={`/booking?roomId=${room.id}`}>
              <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-xl font-semibold text-lg transition cursor-pointer">
                Proceed to Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPage;
