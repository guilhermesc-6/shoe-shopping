import { shoes } from "../data/data";
import { PlusCircle, MinusCircle, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Slider } from "../components/Slider";

export const ProductPage = () => {
  const [units, setUnits] = useState(1);
  const [cart, setCart] = useState([]);
  const { shoe } = useParams();

  const shoeData = shoes.filter(
    (item) => item.name === shoe.replace(/[-]/g, " ")
  );

  useEffect(() => {
    if (units < 1) {
      setUnits(1);
    }
  }, [units]);

  const addToCart = () => {
    if (cart.some((item) => item.name === shoeData[0].name)) {
      cart.map((item) => {
        if (item.name === shoeData[0].name) {
          item.units = units;
        }
      });
    } else {
      console.log(false);
      setCart(cart.concat({ ...shoeData[0], units }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-8 bg-gradient-to-r from-zinc-100 to-zinc-300 relative">
      <div className="flex flex-col items-center text-stone-900 absolute right-32 top-10 z-50">
        <strong className="text-2xl">{shoeData[0].name}</strong>
        <span className="text-xl">{`$ ${shoeData[0].price}`}</span>
      </div>
      <Slider slides={shoeData[0].images} />
      <div className="flex flex-col mt-6 gap-2 items-center">
        <div className="flex items-center gap-4">
          <MinusCircle
            size={24}
            weight="fill"
            color="#17181f"
            className="cursor-pointer"
            onClick={() => {
              setUnits(units - 1);
            }}
          />
          <span className="text-zinc-900">{units}</span>
          <PlusCircle
            size={24}
            weight="fill"
            color="#17181f"
            className="cursor-pointer"
            onClick={() => {
              setUnits(units + 1);
            }}
          />
        </div>
        <button
          className="flex items-center gap-2 py-3 px-5 bg-[#17181f] rounded-3xl hover:bg-[#17181f]/60 transition-colors"
          onClick={addToCart}
        >
          <ShoppingCart size={24} weight="duotone" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
