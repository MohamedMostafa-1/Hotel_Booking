"use client";
import { useState } from "react";
import { rooms } from "@/data/rooms";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";


const BookingPage = () => {
  const params = useSearchParams(); // لجلب roomId من query
  const roomId = params.get("roomId"); // دا ممكن يكون null
  // Fallback: لو roomId مش موجود أو غلط، اختر أول غرفة
  const room = rooms.find((r) => r.id === Number(roomId)) || rooms[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking Confirmed 🎉", {
        description: `
    ${formData.name}
    ${formData.checkIn} → ${formData.checkOut}
    Guests: ${formData.guests}
        `,
    });
  };

  return (
    <section className="bg-[#FFF5E6] min-h-screen flex flex-col items-center px-4 md:px-10 py-16 mt-15">
      <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* صورة الغرفة */}
        <div className="relative w-full h-80 md:h-auto md:min-h-full">
          <Image
            src={room.images}
            alt={room.name}
            fill
            className="object-cover"
          />
        </div>

        {/* نموذج الحجز */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-[#3E2F27] mb-6">{room.name}</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#3E2F27] font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                required
              />
            </div>

            <div>
              <label className="block text-[#3E2F27] font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-[#3E2F27] font-medium mb-1">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-[#3E2F27] font-medium mb-1">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#3E2F27] font-medium mb-1">Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <button
                type="submit"
                className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-xl font-semibold text-lg transition cursor-pointer mt-4"
            >
                Confirm Booking
            </button>
            {/* <Link href={`/confirm?roomId=${room.id}`}>
                <button
                    type="submit"
                    className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-xl font-semibold text-lg transition cursor-pointer mt-4"
                >
                    Confirm Booking
                </button>
            </Link> */}

          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
