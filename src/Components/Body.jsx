import React from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";

const Body = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost title={"Netflix Originals"} />
      <RowPost isSmall title={"Action"} />
    </>
  );
};

export default Body;
