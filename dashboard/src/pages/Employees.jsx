import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject, Toolbar
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import HeaderSec from "../components/HeaderSec";
import { useStateContext } from "../contexts/contextsProvider";
import Modal from "../components/Modal";

const Employees = () => {
  const { modalSettings } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <HeaderSec category="Page" title="Employees" />
      {modalSettings && <Modal />}
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
