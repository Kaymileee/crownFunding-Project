import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const CampView = () => {
  const slug = useParams();
  // console.log(slug);
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl"></div>
    </Fragment>
  );
};

export default CampView;
