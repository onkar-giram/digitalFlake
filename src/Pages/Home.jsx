import React from "react";
import SideBar from "../Components/SideBar";
import CompanyLogo from "../assets/front-logo.jpeg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <div>
            <div className="user">
              {/* <img
          src="/user-logo.jpg"
          alt="User Logo"
          style={{ width: "30px", height: "30px" }}
        /> */}
            </div>

            <div className="content">
              <img
                src={CompanyLogo}
                style={{ width: "270px", height: "160px" }}
              />
              {/* <p>Welcome to Digitalflake Admin</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
