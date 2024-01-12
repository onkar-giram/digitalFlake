import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Label, Select } from "flowbite-react";
import { TextInput } from "flowbite-react";
import SideBar from "../Components/SideBar";
import {Link} from 'react-router-dom'

export default function AddProduct() {
  return (
    <>
      {" "}
      <div className="flex">
        <SideBar />
        <div className="w-full mx-2 my-5 shadow-2xl">
          <div className="flex justify-between my-10 mx-5">
            <div className="font-bold text-[28px] flex ml-5">
              <Link to='/products'>

              <FaArrowLeft className="mt-2" />
              </Link>
              <p className="mx-5">Add Product</p>
            </div>
          </div>
          <div className="">
            <div>
              <Label htmlFor="category" value="Select Category" />
              <Select className="" id="category" required>
                <option>Milk</option>
                <option>Fruits</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="name" value="Product Name" />
              <TextInput className="w-400px" id="name" type="text" required />
            </div>

            <div>
              <Label htmlFor="size" value="Product Size" />
              <TextInput className="max-w-md" id="size" type="text" required />
            </div>

            <div>
              <Label htmlFor="mrp" value="MRP" />
              <TextInput className="max-w-md" id="mrp" type="text" required />
            </div>

            <div>
              <Label htmlFor="image" value="Product Image" />
              <TextInput className="max-w-md" id="image" type="text" required />
            </div>

            <div>
              <Label htmlFor="status" value="Status" />
              <TextInput
                className="max-w-md"
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
