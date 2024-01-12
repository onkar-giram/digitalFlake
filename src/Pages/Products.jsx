import React from "react";
import SideBar from "../Components/SideBar";
import { Table, TextInput } from "flowbite-react";
import Apple from "../assets/Apple.png";
import Amul from "../assets/amul.png";
import Gokul from "../assets/Gokul.png";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Products() {
  const categories = [
    {
      id: 123,
      name: "Amul Taaza",
      Pack_size: "500ml",
      Category: "Milk",
      MRP: "Rs.27",
      Image: <img src={Amul} alt="" />,
      status: "active",
    },
    {
      id: 124,
      name: "Gokul Cow",
      Pack_size: "500ml",
      Category: "Milk",
      MRP: "Rs.27",
      Image: <img src={Gokul} alt="" />,
      status: "active",
    },
    {
      id: 125,
      name: "Shimla Apple",
      Pack_size: "1Kg",
      Category: "Fruits",
      MRP: "Rs.150",
      Image: <img src={Apple} alt="" />,
      status: "inactive",
    },
  ];
  return (
    <div>
      <div className=" flex">
        <SideBar />
        <div className="w-full mx-2 my-5 shadow-2xl">
          <div className="w-full mx-2 my-5 shadow-2xl">
            <div className="flex justify-between my-10 mx-5">
              <div className="font-bold text-[28px] flex ml-5">
                <BsBoxSeam className="relative -bottom-2" />
                <p className="mx-5">Product</p>
              </div>

              <TextInput
                id="search"
                type="search"
                icon={HiSearch}
                className=" w-[500px]"
                required
              />

              <Link
                to={"/add-products"}
                className="py-2 text-white px-4 h-10 text-[15px] bg-[#662671]"
              >
                Add New
              </Link>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    Pack Size
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    Category
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    MRP
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    Image
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold">
                    Status
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold"></Table.HeadCell>
                  <Table.HeadCell className="bg-[#FFF8B7] font-bold"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {categories.map((category) => {
                    return (
                      <Table.Row className="bg-slate-100  ">
                        <Table.Cell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {category.id}
                        </Table.Cell>
                        <Table.Cell>{category.name}</Table.Cell>
                        <Table.Cell>{category.Pack_size}</Table.Cell>
                        <Table.Cell>{category.Category}</Table.Cell>
                        <Table.Cell>{category.MRP}</Table.Cell>
                        <Table.Cell>{category.Image}</Table.Cell>
                        <Table.Cell>
                          {category.status == "active" ? (
                            <p className="text-green-600">Active</p>
                          ) : (
                            <p className="text-red-400">Inactive</p>
                          )}
                        </Table.Cell>
                        <Table.Cell>
                          <FaRegEdit />
                        </Table.Cell>
                        <Table.Cell>
                          <RiDeleteBin6Line />
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
