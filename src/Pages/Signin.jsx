import React from "react";

export default function Signin() {
  return (
    <>
      <div>
        <div className="back-img">
          <img src="./image293.svg" alt="" />
        </div>
        <div class="bg-img">
          <div class="container">
            <form action="/action_page.php">
              <center>
                <img
                  src="./image 289.svg"
                  alt="Digitalflake Admin Logo"
                  class="logo"
                />
                <h4>Welcome to Digitalflake Admin</h4>
              </center>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <p className="forgot">
                <a href="/Components/Reset.html">Forgot Password?</a>
              </p>
              <button type="submit" class="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
