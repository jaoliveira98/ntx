import React, { useState } from "react";
import { PrimaryBtn, DangerBtn } from "./buttons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-[100] w-full absolute">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">
          Netflix
        </h1>
        <div className="flex gap-4">
          <PrimaryBtn>Sign In</PrimaryBtn>
          <DangerBtn>Sign up</DangerBtn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
