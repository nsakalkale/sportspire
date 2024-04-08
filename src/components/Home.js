import React from "react";
import Navbar from "../essentials/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <h1 className="newrocker title-main">
            Welcome to Climate Chronicle !!!
          </h1>
        </div>
      </div>
    </>
  );
}
