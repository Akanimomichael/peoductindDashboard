import React from "react";
import Button from "./Button";
import { useStateContext } from "../contexts/contextsProvider";

const Header = ({ category, title }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="md-10 flex ">
      {" "}
      <div>
        <p className="text-gray-400">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
