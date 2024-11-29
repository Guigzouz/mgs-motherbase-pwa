import React from "react";

const Base = ({ ...props }) => {
  return (
    <div {...props} className="spinner">
      spinning ...
    </div>
  );
};

export default Base;
