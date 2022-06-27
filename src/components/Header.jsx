import { House, ShoppingBagOpen } from "phosphor-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-4 px-7 bg-[#17181f]">
      <div>Logo</div>
      <div>
        <ul className="flex gap-3">
          <li>
            <a href="" className="flex items-center gap-1">
              <House size={18} />
              Home
            </a>
          </li>
          <li>
            <a href="" className="flex items-center gap-1">
              <ShoppingBagOpen size={18} />
              Products
            </a>
          </li>
        </ul>
      </div>
      <div>icons</div>
    </header>
  );
};
