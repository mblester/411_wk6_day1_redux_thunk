import React, { useEffect } from "react";
import CustomTable from "./Table";
import Button from "@mui/material/Button";


const Import = (props) => {
  // fill out this component
  useEffect(() => {
    console.log(props.makes);
  }, [props.makes]);
  return (
    <div className="importTable">
      <div className="importButton">
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
        </div>
      <CustomTable makes={props.makes} />
    </div>
  );
};

export default Import;
