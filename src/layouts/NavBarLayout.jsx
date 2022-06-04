import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const NavBarLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBarLayout;