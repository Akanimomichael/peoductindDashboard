import React from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/contextsProvider";

const Modal = () => {
  const [formData, setFormData] = useState({
    item: "",
    customerName: "",
    amount: "",
    orderId: "",
    image: null,
    status: "pending", // Default status
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormData({ ...formData, image: file });
  };
   const addOrder = (newOrder) => {
     setFormData([...formData, newOrder]);
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(formData);
    // Handle form submission, e.g., send data to a server or perform actions.
    console.log("Form data:", formData);
    
    // Reset the form
    setFormData({
      item: "",
      customerName: "",
      amount: "",
      orderId: "",
      image: null,
      status: "pending",
    });
  };

  const { setColor, setMode, currentMode, currentColor, setModalSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 ">
      <div
        className={`float-right h-screen dark:text-gray-200 bg-white dark:[#484852]  w-400 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl ">Modal</p>
          <button
            type="button"
            onClick={() => {
              setModalSettings(false);
              // console.log("from modal");
            }}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="item" className="font-semibold text-lg mt-4">
              Item
            </label>
            <input
              type="text"
              id="item"
              name="item"
              value={formData.item}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 border border-gray-300 rounded-lg h-5 hover:h-12 w-full text-lg font-bold"
              required
            />
            <br />
            <br />

            <label htmlFor="customerName" className="font-semibold text-lg">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 border border-gray-300 h-5 hover:h-12 rounded-lg w-full text-lg font-bold"
              required
            />
            <br />
            <br />

            <label htmlFor="amount" className="font-semibold text-lg">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 border border-gray-300 h-5 hover:h-12 rounded-lg w-full text-lg font-bold"
              required
            />
            <br />
            <br />

            <label htmlFor="customerName" className="font-semibold text-lg">
              Location
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 border border-gray-300 h-5 hover:h-12 rounded-lg w-full text-lg font-bold"
              required
            />
            <br />
            <br />

            <label htmlFor="orderId" className="font-semibold text-lg">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 border border-gray-300 rounded-lg w-full h-5 hover:h-12 text-lg font-bold"
              required
            />
            <br />
            <br />

            <label htmlFor="img" className="font-semibold text-lg">
              Image
            </label>
            <input
              type="file"
              id="img"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-100 p-2 border border-gray-300 rounded-lg w-full text-lg font-bold"
              required
            />
            <br />
            <br />

            <label className="font-semibold text-lg">Status:</label>
            <br />
            <input
              type="radio"
              id="pending"
              name="status"
              className="m-2"
              value="pending"
              checked={formData.status === "pending"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="pending">Pending</label>

            <input
              type="radio"
              id="complete"
              className="m-2"
              name="status"
              value="complete"
              checked={formData.status === "complete"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="complete">Complete</label>

            <input
              type="radio"
              id="active"
              name="status"
              className="m-2"
              value="active"
              checked={formData.status === "active"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="active">Active</label>

            <input
              type="radio"
              id="cancel"
              name="status"
              className="m-2"
              value="cancel"
              checked={formData.status === "cancel"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="cancel">Cancel</label>
            <br />
            <br />
            <div className="flex justify-center mt-1">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ background: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
