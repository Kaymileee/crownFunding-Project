import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = ({ children, heading = "" }) => {
  return (
    <div className="w-full min-h-screen bg-liteBg max-w-[1440px] mx-auto p-10 relative isolate dark:darkBG">
      <img
        srcSet="/ellipse.png"
        alt="bg"
        className="absolute pointer-events-none bottom-0 right-0  z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png" alt="logo" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-7 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
