import React from "react";
import Button from "./Button";
import { useStateContext } from "../contexts/contextsProvider";

const HeaderSec = ({ category, title }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="md-10 flex justify-between ">
      {" "}
      <div>
        <p className="text-gray-400">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
      <div>
        {/* bgColor, color, size, text, borderRadius */}
        <Button
          color="white"
          bgColor={currentColor}
          text={`Add ${title}`}
          borderRadius="20px"
          size="sm"
        />
      </div>
    </div>
  );
};

export default HeaderSec;
