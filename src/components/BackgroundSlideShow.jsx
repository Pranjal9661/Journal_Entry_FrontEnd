import { useEffect,useState } from "react";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";
import bg4 from "../assets/bg-4.jpg";
import bg5 from "../assets/bg-5.jpg";

const images = [bg1, bg2, bg3, bg4, bg5];

export default function BackgroundSlideShow(){
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* optional overlay so text stays readable */}
      <div className="absolute inset-0 bg-white/50" />
    </div>
  );
}
