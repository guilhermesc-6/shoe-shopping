import { Link } from "react-router-dom";
import { House, ShoppingBagOpen } from "phosphor-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-4 px-7 bg-[#17181f]">
      <div>Logo</div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link to="/" className="flex items-center gap-1">
              <House size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center gap-1">
              <ShoppingBagOpen size={18} />
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div>icons</div>
    </header>
  );
};
