import { shoes } from "../data/data";
import { PlusCircle, MinusCircle } from "phosphor-react";

export const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-8 bg-gradient-to-r from-zinc-100 to-zinc-300 relative">
      <div className="flex flex-col items-center text-stone-900 absolute right-32 top-10">
        <strong className="text-2xl">{shoes[0].name}</strong>
        <span className="text-xl">{`$ ${shoes[0].price}`}</span>
      </div>
      <div className="flex items-center h-[680px] rounded-xl overflow-hidden">
        <img src={shoes[0].images[1]} alt="" className="w-[750px]" />
      </div>
      <div className="flex flex-col mt-6 gap-2 items-center">
        {/* <input type="number" className="w-16 rounded-md pl-1 outline-none" /> */}
        <div className="flex items-center gap-4">
          <MinusCircle
            size={24}
            weight="fill"
            color="#17181f"
            className="cursor-pointer"
          />
          <span className="text-zinc-900">{1}</span>
          <PlusCircle
            size={24}
            weight="fill"
            color="#17181f"
            className="cursor-pointer"
          />
        </div>
        <button className="py-3 px-5 bg-[#17181f] rounded-3xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
