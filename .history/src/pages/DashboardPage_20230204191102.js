import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
    </LayoutDashboard>
  );
};

export default DashboardPage;
