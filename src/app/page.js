"use client"
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiMapPin } from "react-icons/ci";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Home() {
  const images = [
    { url: "/pozaMobila.jpg" },
    { url: "/pozaMobila2.jpg" },
    { url: "/pozaMobila3.jpg" },
    { url: "/pozaMobila4.jpg" },
    { url: "/pozaMobila5.jpg" },
  ];
  
  return (
    <main>
      <div className="firstHeader">
        <p><MdOutlineMail/> email@yahoo.com</p>
        <p><IoCallOutline/> +407932021</p>
        <p><CiMapPin /> Str. Unirii Nr.123</p>
      </div>

      <div className="secondHeaderWrapper">
        <div className="secondHeader">
          <img src="/logo.svg"/>      
          <p>Bucatarie</p>
          <p>Living</p>
          <p>Dormitor</p>
          <p>Dressing</p>
          <p>Mobilier Copii</p>
          <p>Lucrari</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="sliderDiv">
        <Slider imageList={images} width={1920} height={600} showArrowControls={true}/>
      </div>

      <div className="footer">
        <div>
          <h1>Informatii Utile</h1>
          <h6>Informatii Utile</h6>
          <h6>Informatii Utile</h6>
          <h6>Informatii Utile</h6>
          <h6>Informatii Utile</h6>
        </div>

        <div>
          <h1>Contact</h1>
          <h6>Contact</h6>
          <h6>Contact</h6>
          <h6>Contact</h6>
          <h6>Contact</h6>
        </div>

      </div>
    
    
    </main>
  );
}
