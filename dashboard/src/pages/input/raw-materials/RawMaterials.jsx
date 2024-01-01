import React from "react";
import HeaderSec from "../../../components/HeaderSec";
// import Modal from "../components/Modal";
import Modal from "../../../components/Modal";
import { useStateContext } from "../../../contexts/contextsProvider";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { RawMaterialAvalible, RawMaterialAvalibleGrid, RawMaterialSupplier, RawMaterialSupplierGrid, tryMap } from "../../../data/rawMaterialsData";

const RawMaterials = () => {
  const { modalSettings } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl -z-0">
      {modalSettings && <Modal />}
      <HeaderSec category="Input" title="Raw Materials " />
      {/* RAW MATERIALS AVALIBLE */}
      <GridComponent
        dataSource={RawMaterialAvalible}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {RawMaterialAvalibleGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>

      {/* RAW MATERIALS SUPPLIER DETAILS */}

      <GridComponent
        dataSource={RawMaterialSupplier}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        // editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {RawMaterialSupplierGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default RawMaterials;
