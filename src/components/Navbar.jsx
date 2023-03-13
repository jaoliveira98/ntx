import React from "react";
import { PrimaryBtn, DangerBtn } from "./buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-[100] w-full absolute">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">
            Netflix
          </h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/login">
            <PrimaryBtn>Sign In</PrimaryBtn>
          </Link>
          <Link to="/signup">
            <DangerBtn>Sign up</DangerBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
