import { PlusCircle, MinusCircle, X } from "phosphor-react";

export const Cart = ({ cart, setCart, isCartActive, setIsCartActive }) => {
  const handleClick = (e, type) => {
    let shoe =
      e.target.parentElement.parentElement.previousSibling.firstChild.innerText;
    let result;

    if (type === "plus") {
      result = cart.map((item) => {
        if (item.name === shoe) {
          item.units = item.units + 1;
        }
        return item;
      });
    }

    if (type === "minus") {
      result = cart.map((item) => {
        if (item.name === shoe) {
          if (item.units === 0) {
            console.log("sold out");
          } else {
            item.units = item.units - 1;
          }
        }
        return item;
      });
    }
    setCart(cart.filter((item) => item.units >= 1));
  };

  return (
    <div
      className={`absolute right-0 w-[400px] min-h-full bg-[#17181f] flex flex-col items-center gap-5 py-5 z-[60] text-zinc-50 rounded-b-lg ${
        isCartActive ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-700`}
    >
      <X
        size={24}
        className="absolute right-4 cursor-pointer hover:scale-110"
        onClick={() => {
          setIsCartActive(false);
        }}
      />
      <strong className="text-2xl">Cart</strong>
      <div className="min-h-[250px] w-full px-5 flex flex-col items-center gap-2">
        {cart.length > 0
          ? cart.map((item) => {
              return (
                <div
                  key={item.name.replace(/\s/g, "-")}
                  className="w-full flex gap-1 items-center justify-between"
                >
                  <div className="w-24 h-24 flex items-center overflow-hidden rounded-[25px]">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-xs">{item.name}</span>
                    <span>${item.price * item.units}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <MinusCircle
                      size={24}
                      weight="fill"
                      className="cursor-pointer"
                      onClick={(e) => {
                        handleClick(e, "minus");
                      }}
                    />
                    <span>{item.units}</span>
                    <PlusCircle
                      size={24}
                      weight="fill"
                      className="cursor-pointer"
                      onClick={(e) => {
                        handleClick(e, "plus");
                      }}
                    />
                  </div>
                </div>
              );
            })
          : "Cart empty"}
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="bg-green-600 p-2 rounded-md hover:bg-green-900 "
          onClick={() => alert("Thank you for purchase.")}
        >
          Checkout
        </button>
        <button
          className="bg-red-600 p-2 rounded-md hover:bg-red-900"
          onClick={() => setCart([])}
        >
          Remove items
        </button>
      </div>
    </div>
  );
};
