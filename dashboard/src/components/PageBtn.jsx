import React from "react";
import { useStateContext } from "../contexts/contextsProvider";

function PageBtn({ bgColor, color, size, text, borderRadius }) {
  const { setModalSettings, modalSettings } = useStateContext();
  return (
    <div>
      <button
        type="button"
        style={{ background: bgColor, color, borderRadius }}
        className={`text-${size} p-3 hover:drop-shadow-xl`}
        onClick={() => {
          setModalSettings(true);
          // console.log("is clicked");
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default PageBtn;
