import React from "react";
import imgLogo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4  flex items-center justify-between">
      <div>
        <img src={imgLogo} />
      </div>
      <ul>
        <li>
          <a href="">Últimas doações</a>
        </li>
        {/* <li>
          <a href="">Admin</a>
        </li> */}
      </ul>
    </nav>
  );
};
