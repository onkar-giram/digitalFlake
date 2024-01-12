import React from "react";
import { Sidebar } from "flowbite-react";
import { TfiHome } from "react-icons/tfi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <>
      <div className="h-[100vh]">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col justify-center ">
              <Link to={"/"}>
                {" "}
                <Sidebar.Item
                  className="selection:ng-red-700"
                  icon={TfiHome}
                  label=">"
                  labelColor="white"
                >
                  Home
                </Sidebar.Item>
              </Link>
              <Link to={"/category"}>
                <Sidebar.Item icon={BiCategory} label=">" labelColor="white">
                  {" "}
                  Category{" "}
                </Sidebar.Item>
              </Link>
              <Link to={"/products"}>
                <Sidebar.Item
                  icon={MdOutlineProductionQuantityLimits}
                  label=">"
                  labelColor="white"
                >
                  Products
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
