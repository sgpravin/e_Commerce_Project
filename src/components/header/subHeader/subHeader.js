import React from "react";

const SubHeader = ({ showPrd }) => {

  return (
    <div className="col-sm-1">
      <button type="button" className="btn" onClick={showPrd}>All Products</button>
    </div>
  );
};

export default SubHeader;
