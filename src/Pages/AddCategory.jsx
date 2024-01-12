import React from "react";
import SideBar from "../Components/SideBar";
import { FaArrowLeft } from "react-icons/fa";
import { Label, Select } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function AddCategory() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full mx-2 my-5 shadow-2xl">
          <div className="flex justify-between my-10 mx-5">
            <div className="font-bold text-[28px] flex ml-5">
             <Link to='/category'>   <FaArrowLeft className="mt-2" /></Link>
            
             
              <p className="mx-3">Add Category</p>
            </div>
          </div>
          <div className="flex ">
            <div className="mx-4">
              <Label htmlFor="name" value="Category Name" />
              <TextInput
                className="w-[400px]"
                id="product_name"
                type="text"
                required
              />
              
            </div>

            <div className="mx-4 ">
              <Label htmlFor="size" value="Description" />
              <TextInput
                className=" w-[400px]"
                id="description"
                type="text"
                required
              />
            </div>

            <div className="mx-4 ">
              <Label htmlFor="status" value="Status" />
              <TextInput
                className="w-[400px]"
                id="status"
                type="text"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
