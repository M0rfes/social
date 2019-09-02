import React from "react";
import { FC } from "react";
import { IUser } from "../interface/User";
import { Link } from "react-router-dom";
import { FaHome, FaHeart } from "react-icons/fa";
type Prop = {
  user: IUser;
};
const Nav: FC<Prop> = props => {
  const { user } = props;
  return (
    <div className="text-center bg-gray-400">
      <nav>
        <div className="">
          <img
            src={user.displayImage}
            className="rounded-full h-16 w-16 p-2 m-auto object-cover"
          />
        </div>
      </nav>
      <div className="flex justify-around mt-1 text-3xl">
        <Link to="/" className="p-1">
          <FaHome />
        </Link>
        <Link to="/app" className="p-1">
          <FaHeart />
        </Link>
        <Link to="/me/edit" className="p-1">
          <FaHome />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
