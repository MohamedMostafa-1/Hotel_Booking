import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <div className="relative m-0 p-0 w-full h-screen">
      {/* خلفية الصورة */}
      <Image
        src="/Hero1.jpg"
        alt="Hero section"
        fill
        className="object-cover"
        priority
      />

      {/* طبقة داكنة خفيفة فوق الصورة (اختياري) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* النص فوق الصورة */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Export Egypt <br /> to the World
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Discover the finest Egyptian products and global trade opportunities.
        </p>
      </div>
    </div>

  )
}

export default Hero