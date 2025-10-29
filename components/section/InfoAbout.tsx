import Image from "next/image";
import React from "react";

const InfoAbout = () => {
  return (
    <section className="bg-[#FFF5E6] py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* العنوان والوصف */}
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3E2F27] leading-snug">
          Discover <span className="text-[#E67E22]">Egypt’s Heritage</span>
        </h2>
        <p className="text-[#8B5E3C] mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A journey through time — from golden masks to timeless pyramids.
          Experience the beauty and mystery of ancient Egypt.
        </p>
      </div>

      {/* Layout الصور */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12">
        {/* العمود الأيسر */}
        <div className="flex flex-col gap-6 text-center w-full md:w-auto">
          <div className="relative w-80 md:w-50 max-w-[260px] h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform">
            <Image
              src="/A gold mask on a black background.jpg"
              alt="Golden Mask"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg sm:text-xl">
            Ancient Treasures
          </h3>

          <div className="relative w-80 md:w-50 max-w-[260px] h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform ">
            <Image
              src="/download (1).jpg"
              alt="Ancient Statue"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg sm:text-xl">
            Eternal Culture
          </h3>
        </div>

        {/* الصورة الكبيرة في النص */}
        <div className="text-center flex flex-col items-center w-full md:w-auto">
          <div className="relative w-96 md:w-70 max-w-[320px] h-96 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform ">
            <Image
              src="/download.jpg"
              alt="Desert Landscape"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-[#3E2F27] font-semibold text-xl sm:text-2xl">
            The Heart of the Desert
          </h3>
        </div>

        {/* العمود الأيمن */}
        <div className="flex flex-col gap-6 text-center w-full md:w-auto">
          <div className="relative w-80 md:w-50 max-w-[260px] h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform ">
            <Image
              src="/Patung piramida.jpg"
              alt="Pyramids"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg sm:text-xl">
            Timeless Wonders
          </h3>

          <div className="relative w-80 md:w-50 max-w-[260px] h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform ">
            <Image
              src="/horas.jpg"
              alt="Egyptian Symbol"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg sm:text-xl">
            Spirit of the Nile
          </h3>
        </div>
      </div>
    </section>
  );
};

export default InfoAbout;
