import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const CampView = () => {
  const slug = useParams();
  // console.log(slug);
  return (
    <Fragment>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque natus
      inventore corporis impedit cupiditate quisquam temporibus, facere
      necessitatibus optio quasi minima, molestiae amet! Iure nisi saepe nemo
      delectus, omnis neque.
    </Fragment>
  );
};

export default CampView;
