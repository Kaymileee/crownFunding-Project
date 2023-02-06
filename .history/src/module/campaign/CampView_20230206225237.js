import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const CampView = () => {
  const slug = useParams();
  // console.log(slug);
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `linear-gradient(
    179.14deg,
    rgba(32, 18, 63, 0) -7.14%,
    #000000 87.01%
  ), url(https://source.unsplash.com/random)`,
        }}
      ></div>
    </Fragment>
  );
};

export default CampView;
