import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { avatar } from "../data/avater";
import Button from "./Button";
import { BsBoxSeam } from "react-icons/bs";
import { FiSettings, FiBarChart } from "react-icons/fi";
import { ContextProvider, useStateContext } from "../contexts/contextsProvider";

const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext();
  return (
    <div
      className="bg-white  border-gray-200 border-opacity-50  overflow-hidden border-[2px] absolute  sm:w-[400px] w-[100%] top-[100%] right-2 rounded-lg "
      style={{ zIndex: "1000" }}
    >
      <div className="flex justify-between items-center p-4 ml-4">
        <p className="font-semibold text-xl">User Profile</p>{" "}
        <button
          type="button"
          onClick={() => {
            setIsClicked(false);
            // console.log("no");
          }}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>{" "}
      </div>
      <div className="flex  items-center p-4 mx-4 border-b-2 ">
        <div className=" w-[30%]">
          <img src={avatar} alt="avater" className="w-16 h-16 rounded-full" />
        </div>
        <div className=" ml-2 w-[70%]">
          <p className="text-gray-400 font-bold ml-1 text-15">
            Akanimo Michael
          </p>
          <p className="text-gray-400 text-14">CEO</p>
          <p className="text-gray-400 text-14 overflow-wrap break-words ">
            akanimommichael@gmail.com
          </p>
        </div>
      </div>
      <div className="flex  items-center p-4 mx-4 border-b-2 ">
        <div className="pr-4">
          <button className="text-2xl opacity-0.9 p-2  bg-[#E5FAFB] text-[#03C9D7] rounded-[10px]">
            <FiSettings />
          </button>

          {/* <img src={avatar} alt="avater" className="w-12 h-12 rounded-[10px]" /> */}
        </div>
        <div>
          <p className="text-gray-400 font-bold ml-1 text-15">My Profile</p>
          <p className="text-gray-400 text-14">Account Settings</p>
        </div>
      </div>
      <div className="flex  items-center p-4 mx-4 border-b-2 ">
        <div className="pr-4">
          <button
            className="text-2xl opacity-0.9 p-2 rounded-[10px]"
            style={{
              color: "rgb(255, 244, 229)",
              backgroundColor: "rgb(254, 201, 15)",
            }}
          >
            <BsBoxSeam />
          </button>

          {/* <img src={avatar} alt="avater" className="w-12 h-12 rounded-[10px]" /> */}
        </div>
        <div>
          <p className="text-gray-400 font-bold ml-1 text-15">My Inbox</p>
          <p className="text-gray-400 text-14">Messages & Emails</p>
        </div>
      </div>
      <div className="flex  items-center p-4 mx-4 border-b-2 ">
        <div className="pr-4">
          <button
            className="text-2xl opacity-0.9 p-2 rounded-[10px]"
            style={{
              backgroundColor: "rgb(255, 244, 229)",
              color: "rgb(228, 106, 118)",
            }}
          >
            {" "}
            <FiBarChart />
          </button>

          {/* <img src={avatar} alt="avater" className="w-12 h-12 rounded-[10px]" /> */}
        </div>
        <div>
          <p className="text-gray-400 font-bold ml-1 text-15">My Tasks</p>
          <p className="text-gray-400 text-14">To-do and Daily Task</p>
        </div>
      </div>
      <div className="mt-10 items-center p-4 ">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default UserProfile;
