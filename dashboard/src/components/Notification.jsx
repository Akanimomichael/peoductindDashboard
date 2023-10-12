import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { avatar } from "../data/avater";
import { FiEdit } from "react-icons/fi";
import Button from "./Button";
import { ContextProvider, useStateContext } from "../contexts/contextsProvider";

const Notification = () => {
  const { currentColor, setIsClicked } = useStateContext();
  return (
    <div className="bg-white  border-gray-200 border-opacity-50 border-[2px] right-1 absolute z-[1] sm:w-[250px] w-[80%] top-[100%] rounded-lg">
      <div className="flex justify-between items-center p-4 ml-4">
        <p className="font-semibold text-xl">Notification</p>{" "}
        <button
          type="button"
          onClick={() => {
            setIsClicked(false);
            console.log("notification");
          }}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>{" "}
      </div>
      <div className="flex  items-center p-4 ml-4 border-b-2 ">
        <div className="pr-4">
          <button className="text-2xl opacity-0.9 p-2  bg-[#E5FAFB] text-[#03C9D7] rounded-full">
            <FiEdit />
          </button>
          {/* <img src={avatar} alt="avater" className="w-12 h-12 rounded-full" /> */}
        </div>
        <div>
          <p className="text-gray-400 font-bold ml-1 text-15">latest update</p>
          <p className="text-gray-400 text-14">New update alrts</p>
          <p className="text-gray-400 text-sm italic">10:00pm</p>
        </div>
      </div>
      <div className="mt-10 items-center p-4 ">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all notification"
          borderRadius="10px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Notification;
