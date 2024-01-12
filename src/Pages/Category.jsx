import React from "react";
import SideBar from "../Components/SideBar";
import { Table, TextInput } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Category() {
  const [openModal, setOpenModal] = useState(false);

  const categories = [
    {
      id: 123,
      name: "Milk",
      description: " Lorem, ipsum dolor sit amet consectetur",
      status: "active",
    },
    {
      id: 124,
      name: "Fruits",
      description: " Lorem, ipsum dolor sit amet consectetur",
      status: "active",
    },
    {
      id: 125,
      name: "Vegetables",
      description: " Lorem, ipsum dolor sit amet consectetur",
      status: "inactive",
    },
  ];

  return (
    <>
      <div className="flex ">
        <SideBar active="category" />

        <div className="w-full mx-2 my-5 shadow-2xl">
          <div className="flex justify-between my-10 mx-5">
            <div className="font-bold text-[28px] flex ml-5">
              <BsBoxSeam className="relative -bottom-2" />
              <p className="mx-5">Category</p>
            </div>

            <TextInput
              id="search"
              type="search"
              icon={HiSearch}
              className=" w-[500px]"
              required
            />

            <Link
              to={"/add-cateogory"}
              className=" px-4 py-2 text-white h-10 text-[15px] bg-[#662671]"
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
                  Description
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
                      <Table.Cell>{category.description}</Table.Cell>
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
                        <button
                          className="hover:bg-slate-100 bg-slate-100 text-black"
                          onClick={() => setOpenModal(true)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>

            <Modal
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              popup
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this category?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      {"Cancel"}
                    </Button>
                    <Button
                      className="rounded-lg bg-[#662671]"
                      onClick={() => setOpenModal(false)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
