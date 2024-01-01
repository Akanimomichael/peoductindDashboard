export const RawMaterialAvalible = [
  {
    ProductName: "Milk",
    Quatity: "70 bags",
    LastSupplyDate: "20th may 2021",
  },
  {
    ProductName: "Sugar",
    Quatity: "70 bags",
    LastSupplyDate: "20th may 2021",
  },
  {
    ProductName: "Bottles",
    Quatity: "70 bags",
    LastSupplyDate: "20th may 2021",
  },
];

export const RawMaterialAvalibleGrid = [
  //   { type: "checkbox", width: "50" },
  {
    field: "ProductName",
    headerText: "Product Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Quatity",
    headerText: "Quatity",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "LastSupplyDate",
    headerText: "Last Supply Date",
    width: "150",
    textAlign: "Center",
  },
];


export const RawMaterialSupplier = [
  {
    ProductName: "Milk",
    SupplierName: "70 bags",
    SupplierPhone: "0909203920",
    SupplierAddress: "lagos",
    TotalNumberofOrder: "200",
    PriceHistory: "$300",
    LastSupplyDate: "20th may 2021",
  },
  {
    ProductName: "Milk",
    SupplierName: "70 bags",
    SupplierPhone: "0909203920",
    SupplierAddress: "lagos",
    TotalNumberofOrder: "200",
    PriceHistory: "$300",
    LastSupplyDate: "20th may 2021",
  },
  {
    ProductName: "Milk",
    SupplierName: "70 bags",
    SupplierPhone: "0909203920",
    SupplierAddress: "lagos",
    TotalNumberofOrder: "200",
    PriceHistory: "$300",
    LastSupplyDate: "20th may 2021",
  },
];
export const tryMap = [
  RawMaterialSupplier.map(
    (items, index) => (
      items.PriceHistory,
      items.SupplierAddress,
      items.SupplierPhone,
      items.LastSupplyDate,
      items.ProductName,
      items.TotalNumberofOrder,
      items.SupplierName
    )
  ),
]; 
export const RawMaterialSupplierGrid = [
  //   { type: "checkbox", width: "50" },
  {
    field: "ProductName",
    headerText: "Product Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "SupplierName",
    headerText: "Supplier Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "SupplierPhone",
    headerText: "Supplier Phone",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "SupplierAddress",
    headerText: "Supplier Address",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalNumberofOrder",
    headerText: "Total Number of Order",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "PriceHistory",
    headerText: "Price History",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "LastSupplyDate",
    headerText: "Last Supply Date",
    width: "150",
    textAlign: "Center",
  },
];