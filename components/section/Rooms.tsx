"use client";

import React from "react";
import Image from "next/image";
import { rooms } from "@/data/rooms";

import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";


const Rooms = () => {
  return (
    <section className="bg-[#FFF5E6] py-16 px-4 md:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2F27]">
          Our <span className="text-[#E67E22]">Luxury Rooms</span>
        </h2>
        <p className="text-[#8B5E3C] mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Choose from our collection of elegant rooms designed for comfort, elegance, and breathtaking views.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 }, // mobile landscape
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative w-full h-56 md:h-64">
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

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3E2F27] line-clamp-1">
                  {room.name}
                </h3>
                <p className="text-[#8B5E3C] text-sm mt-1">{room.type}</p>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <span className="text-[#E67E22] font-medium">
                    ⭐ {room.rating}
                  </span>
                  <span className="text-[#3E2F27]">{room.guests} Guests</span>
                </div>

               <Link href={`/rooms/${room.id}`}>
                  <button className="mt-5 w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition font-semibold cursor-pointer">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Rooms;