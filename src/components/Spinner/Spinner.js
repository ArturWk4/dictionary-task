import React from "react";
import "./Spinner.scss"
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <Oval />
    </div>
  );
};

export default Spinner;
