import React from "react";
import Logo from "../assets/d.jpeg";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <nav className=" w-[full]">
        <div className="flex mx-10 justify-between">
          <div className="flex  mt-3 ">
            <img className="h-[30px] my-auto mx-3" src={Logo} />
            <p className="text-white   text-[30px]">
              <b>digital</b>flake
            </p>
          </div>
          <div className="right-0">
            <FaRegUserCircle className="text-[40px] mt-3 text-white font-thin" />
          </div>
        </div>
      </nav>
    </div>
  );
}
