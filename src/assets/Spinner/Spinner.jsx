import React from "react";
import { BeatLoader, PropagateLoader } from "react-spinners";

const spinnerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const propagateStyle = {
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  color: '#ffff',
  paddingTop:'0px'
};

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <BeatLoader cssOverride={{color:'white'}} size={15} />
    </div>
  );
};

export const PropagateLoaders = () => (
    <PropagateLoader size={4} cssOverride={propagateStyle} />
);

export default Spinner;