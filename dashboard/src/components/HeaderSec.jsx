import React from "react";
import PageBtn from "./PageBtn";
import { useStateContext } from "../contexts/contextsProvider";

const HeaderSec = ({ category, title, onClick }) => {
  const { currentColor, setModalSettings } = useStateContext();
  return (
    <div className="md-10 flex justify-between ">
      {" "}
      <div>
        <p className="text-gray-400">{category}</p>
        <p className="sm:text-3xl text-3sm font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
      <div className=" sm:flex block">
        {/* bgColor, color, size, text, borderRadius */}
        <div className="p-2">
          <PageBtn
            color="white"
            bgColor={currentColor}
            text={`Add ${title}`}
            borderRadius="20px"
            size="sm"
          />
        </div>
        <div className="p-2">
          <PageBtn
            color="white"
            bgColor={currentColor}
            text={`Remove ${title}`}
            borderRadius="20px"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSec;
