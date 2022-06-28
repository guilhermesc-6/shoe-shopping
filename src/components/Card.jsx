export const Card = ({ shoe }) => {
  return (
    <a
      href=""
      className="w-80 h-96 rounded-xl bg-neutral-100 border-4 border-[#17181f] text-neutral-900 flex flex-col items-center justify-around hover:scale-105 cursor-pointer"
    >
      <div className="w-[250px] h-[250px] overflow-hidden mx-auto rounded-md">
        <img src={shoe.images[0]} alt="" className="" />
      </div>
      <span>{shoe.name}</span>
      <span className="text-2xl font-bold">{`$${shoe.price}`}</span>
    </a>
  );
};
