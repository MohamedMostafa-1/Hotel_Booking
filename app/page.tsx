import Hero from "@/components/section/Hero";
import InfoAbout from "@/components/section/InfoAbout";
import Rooms from "@/components/section/Rooms";
import Image from "next/image";



export default function Home() {
  return (
    <>
     <div>
       <Hero/>
       <InfoAbout/>
       <Rooms/>
     </div>
    </>
  );
}
