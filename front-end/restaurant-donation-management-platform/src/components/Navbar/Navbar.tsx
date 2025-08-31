import React, { useState } from "react";
import imgLogo from "../../assets/logo.png";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full px-2 md:px-8 py-4  flex items-center justify-between">
      <div>
        <img src={imgLogo} />
      </div>
      <div className="md:hidden">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <a href="">Últimas doações</a>
        </li>
      </ul>

      <div
        className={`md:hidden bg-white absolute w-full h-full overflow-hidden left-0 transition-all duration-300 ${
          isOpen ? "top-16 opacity-100" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg text-white text-center">
          <li
            className="hover:text-gray-300 w-full py-4 t bg-gray-600 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Últimas doações
          </li>
        </ul>
      </div>
    </nav>
  );
};
