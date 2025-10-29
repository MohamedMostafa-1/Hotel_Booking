"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const hotel = [
  {
    id: 1,
    name: "Royal Nile View Room",
    type: "Deluxe Room",
    pricePerNight: 220,
    guests: 2,
    bedType: "King Bed",
    rating: 4.8,
    images: "/rooms/room1.webp",
  },
  {
    id: 2,
    name: "Desert Oasis Suite",
    type: "Luxury Suite",
    pricePerNight: 350,
    guests: 4,
    bedType: "2 Queen Beds",
    rating: 4.9,
    images: "/rooms/room2.jpg",
  },
  {
    id: 3,
    name: "Pyramid View Room",
    type: "Standard Room",
    pricePerNight: 150,
    guests: 2,
    bedType: "Queen Bed",
    rating: 4.5,
    images: "/rooms/room3.jpg",
  },
  {
    id: 4,
    name: "Pharaoh Royal Suite",
    type: "Presidential Suite",
    pricePerNight: 500,
    guests: 5,
    bedType: "King Bed + Sofa Bed",
    rating: 5.0,
    images: "/rooms/room4.jpg",
  },
  {
    id: 5,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room5.jpg",
  },
  {
    id: 6,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room6.jpg",
  },
  {
    id: 7,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room7.jpg",
  },
  {
    id: 8,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room8.jpg",
  },
  {
    id: 9,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room9.jpg",
  },
  {
    id: 10,
    name: "Golden Horizon Room",
    type: "Deluxe Suite",
    pricePerNight: 280,
    guests: 3,
    bedType: "King Bed",
    rating: 4.7,
    images: "/rooms/room10.jpg",
  },
];

const Rooms = () => {
  return (
    <section className="bg-[#FFF5E6] py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2F27]">
          Our <span className="text-[#E67E22]">Luxury Rooms</span>
        </h2>
        <p className="text-[#8B5E3C] mt-2">
          Choose from our collection of elegant rooms designed for comfort and beauty.
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {hotel.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              {/* Image */}
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

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3E2F27]">
                  {room.name}
                </h3>
                <p className="text-[#8B5E3C] text-sm mt-1">{room.type}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#E67E22] font-medium">
                    ⭐ {room.rating}
                  </span>
                  <span className="text-sm text-[#3E2F27]">
                    {room.guests} Guests
                  </span>
                </div>

                <button className="mt-5 w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Rooms;
