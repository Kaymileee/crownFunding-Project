import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import CamCategory from "./parts/CamCategory";
import CampDesc from "./parts/CampDesc";
import CampImg from "./parts/CampImg";
import CampMeta from "./parts/CampMeta";
import CampPerk from "./parts/CampPerk";
import CampSupport from "./parts/CampSupport";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

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
      <div className="flex gap-x-[10px] items-start w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImg
            img="https://source.unsplash.com/random"
            className="h-[398px] mb-8"
          ></CampImg>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <div className="w-[90px] h-[70px] cursor-pointer" key={index}>
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px] h-[398px]">
          <CamCategory text="Architecture" className="text-sm"></CamCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            {" "}
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-4 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] mb-4 h-[5px] ">
            <div className="w-2/4 h-full rounded-full bg-primary "></div>
          </div>
          <div className="flex items-start justify-between mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big" amount="173" text="Total backers"></CampMeta>
            <CampMeta size="big" amount="30" text="Day left"></CampMeta>
          </div>
          <Button className="w-full mt-auto text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white shadow-sm p-5 mb-6">
        <div className="flex gap-x-[60px]">
          <span className="text-sm font-medium cursor-pointer text-text3 active:text-secondary">
            Campaign
          </span>
        </div>
        <Button className="text-white bg-primary w-[208px]">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div></div>
        <div>
          <CampSupport></CampSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-8">
            <CampPerk></CampPerk>
            <CampPerk></CampPerk>
            <CampPerk></CampPerk>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CampView;
