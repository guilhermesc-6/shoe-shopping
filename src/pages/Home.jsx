import hero from "../assets/air-jordan.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#17181f] flex flex-col items-center py-5 relative">
      <h1 className="text-9xl font-bold text-zinc-200 z-20">For all styles</h1>
      <img
        src={hero}
        alt="hero image"
        className="w-[600px] -rotate-[35deg] -translate-x-20 z-10 "
      />
      <span className="text-[16rem] font-bold text-zinc-500 absolute top-80 z-0 tracking-[2.25rem]">
        Shoes
      </span>
      <Link to="/products" className="z-20 text-2xl hover:opacity-25">
        The best shoes in one click!
      </Link>
    </div>
  );
};
