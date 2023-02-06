import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import CamCategory from "./parts/CamCategory";
import CampDesc from "./parts/CampDesc";
import CampImg from "./parts/CampImg";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampView = () => {
  const slug = useParams();
  // console.log(slug);
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white mb-10"
        style={{
          backgroundImage: `linear-gradient(
    179.14deg,
    rgba(32, 18, 63, 0) -7.14%,
    #000000 87.01%
  ), url(https://source.unsplash.com/random)`,
        }}
      >
        <h1 className="font-bold text-[40px]">Education</h1>
      </div>
      <div className="flex gap-x-[10px] items-center w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImg
            img="https://source.unsplash.com/random"
            className="h-[398px] "
          ></CampImg>
        </div>
        <div className="flex-1 max-w-[443px] h-[398px] flex-col justify-between">
          <CamCategory text="Architecture" className="text-sm"></CamCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            {" "}
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-4 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <div className="w-full rounded-full bg-[#EFEFEF] mb-4 h-[5px] ">
            <div className="w-2/4 h-full rounded-full bg-primary "></div>
          </div>
          <div className="flex items-start justify-between mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big" amount="173" text="Total backers"></CampMeta>
            <CampMeta size="big" amount="30" text="Day left"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CampView;
