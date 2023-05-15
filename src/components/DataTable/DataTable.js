import React from "react";
//import DataTables from "./DataPluginReact";
import "./DataTable.css";
import { useSelector } from 'react-redux';
import DataTable from "data-table-react-plugin";
const DataTables = () => {

let state = useSelector(state =>state.reducer);

  const label = [
  {text: "First Name", value:"name"},
  {text: "Last Name", value: "lastname"},
  {text:"Start Date", value:"startdate"},
  {text:"Birth Date", value: "birthdate"},
  {text:"City", value:"city"},
  {text: "Street", value: "street"},
  {text:"State", value: "state"},
  {text: "Sale", value: "department"}
  ];

return <DataTable data={state} labels={label}/>;
};

export default DataTables;
