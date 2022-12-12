import React from "react";

// gif
import spinner from "./../../assets/gif/Spinner.gif";

const Loader = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <img style={{ width: "200px" }} src={spinner} />
    </div>
  );
};

export default Loader;
