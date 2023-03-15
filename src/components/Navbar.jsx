import React from "react";
import { PrimaryBtn, DangerBtn } from "./buttons";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-[100] w-full absolute">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">
            Netflix
          </h1>
        </Link>
        {user?.email ? (
          <div className="flex gap-4">
            <Link to="/account">
              <PrimaryBtn>Account</PrimaryBtn>
            </Link>
            <DangerBtn onClick={handleLogout}>Log out</DangerBtn>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <PrimaryBtn>Sign In</PrimaryBtn>
            </Link>
            <Link to="/signup">
              <DangerBtn>Sign up</DangerBtn>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
