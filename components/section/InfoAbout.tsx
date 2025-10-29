import Image from "next/image";
import React from "react";

const InfoAbout = () => {
  return (
    <section className="bg-[#FFF5E6] py-20 px-6">
      {/* العنوان والوصف */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2F27]">
          Discover <span className="text-[#E67E22]">Egypt’s Heritage</span>
        </h2>
        <p className="text-[#8B5E3C] mt-4 max-w-2xl mx-auto">
          A journey through time — from golden masks to timeless pyramids.
          Experience the beauty and mystery of ancient Egypt.
        </p>
      </div>

      {/* Layout الصور */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
        {/* العمود الأيسر */}
        <div className="flex flex-col gap-6 text-center">
          <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <Image
              src="/A gold mask on a black background.jpg"
              alt="Golden Mask"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg">
            Ancient Treasures
          </h3>

          <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <Image
              src="/download (1).jpg"
              alt="Ancient Statue"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg">
            Eternal Culture
          </h3>
        </div>

        {/* الصورة الكبيرة في النص */}
        <div className="text-center flex flex-col items-center">
          <div className="relative w-80 h-96 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
            <Image
              src="/download.jpg"
              alt="Desert Landscape"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-[#3E2F27] font-semibold text-xl">
            The Heart of the Desert
          </h3>
        </div>

        {/* العمود الأيمن */}
        <div className="flex flex-col gap-6 text-center">
          <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <Image
              src="/Patung piramida.jpg"
              alt="Pyramids"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg">
            Timeless Wonders
          </h3>

          <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <Image
              src="/horas.jpg"
              alt="Egyptian Symbol"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-[#3E2F27] font-semibold text-lg">
            Spirit of the Nile
          </h3>
        </div>
      </div>
    </section>
  );
};

export default InfoAbout;
