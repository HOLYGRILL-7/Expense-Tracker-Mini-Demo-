import React from "react";
import { Outlet } from "react-router-dom";
import FormSec from "./FormSec";
import ListSec from "./ListSec";

function Home() {
  return (
    <div className="flex justify-center items-center  h-screen gap-11">
        HomePage
      <FormSec />
      <ListSec />
      <Outlet />
    </div>
  );
}

export default Home;
