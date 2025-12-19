
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <section className="bg-[#FFF5E6] min-h-screen px-4 md:px-10 py-16 pt-24">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3E2F27]">
          Explore Our <span className="text-[#E67E22]">Luxury Rooms</span>
        </h1>
        <p className="text-[#8B5E3C] mt-3 max-w-3xl mx-auto text-sm md:text-base">
          Find your perfect stay from our collection of elegant rooms designed for comfort, elegance, and breathtaking views.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 "
          >
            {/* Room Image */}
            <div className="relative w-full h-64">
              <Image
                src={room.images}
                alt={room.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#E67E22] text-white px-3 py-1 text-sm font-semibold rounded-full">
                ${room.pricePerNight}/night
              </div>
            </div>

            {/* Room Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#3E2F27] line-clamp-1">
                {room.name}
              </h3>
              <p className="text-[#8B5E3C] text-sm mt-1">{room.type}</p>

              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="text-[#E67E22] font-medium">⭐ {room.rating}</span>
                <span className="text-[#3E2F27]">{room.guests} Guests</span>
              </div>

              <Link href={`/rooms/${room.id}`}>
                <button className="mt-5 w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-xl transition font-semibold text-sm md:text-base cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
