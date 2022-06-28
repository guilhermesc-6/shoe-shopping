import { Link } from "react-router-dom";

export const Card = ({ shoe }) => {
  return (
    <Link
      to={`/product/shoe/${shoe.name.replaceAll(" ", "-")}`}
      className="w-80 h-96 rounded-xl bg-neutral-100 border-4 border-[#17181f] text-neutral-900 flex flex-col items-center justify-around hover:scale-105 cursor-pointer transition-transform"
    >
      <div className="w-[250px] h-[250px] overflow-hidden mx-auto rounded-md">
        <img src={shoe.images[0]} alt="" className="" />
      </div>
      <span className="px-2 text-center font-medium">{shoe.name}</span>
      <span className="text-2xl font-bold">{`$${shoe.price}`}</span>
    </Link>
  );
};
