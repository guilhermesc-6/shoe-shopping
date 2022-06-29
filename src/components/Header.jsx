import { Link } from "react-router-dom";
import { House, ShoppingBagOpen, ShoppingBag } from "phosphor-react";

export const Header = ({ cart, isCartActive, setIsCartActive }) => {
  return (
    <header className="flex w-full items-center justify-between py-4 px-7 bg-[#17181f]">
      <div>Logo</div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-gray-300 hover:scale-105"
            >
              <House size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center gap-1 hover:text-gray-300 hover:scale-105"
            >
              <ShoppingBagOpen size={18} />
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="relative flex flex-col items-center cursor-pointer hover:scale-105"
        onClick={() => {
          setIsCartActive(!isCartActive);
        }}
      >
        <span className="h-4 w-4 bg-black text-gray-50 text-xs text-center rounded-full absolute top-4">
          {cart.length > 0
            ? cart.reduce((acc, cur) => acc + cur.units, 0)
            : cart.length}
        </span>
        <ShoppingBag size={28} weight="fill" />
      </div>
    </header>
  );
};
