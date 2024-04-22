import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import l from "../assets/l.png";
import telegram from "../assets/telegram.png";

const Navbar = () => {
  return (
    <Main className="grid grid-cols-2 items-center pt-5">
      <div className="flex items-center">
        <img src={logo} alt="" srcset="" className="pr-72 pl-4" />
        <div className="flex">
          <p className="text-white font-medium px-2">Home</p>
          <p className="text-white font-medium px-5">Services</p>
          <p className="text-white font-medium px-2">Blog</p>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={l} alt="" srcset="" className="logo" />
        <img src={telegram} alt="" srcset="" className="logo ml-3" />
        <button className="rounded text-white py-2 px-5 mr-4 ml-12">
          Contact us
        </button>
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  .logo {
    width: 37.5px;
    height: 37.5px;
  }
  button {
    background: #b881ff;
  }
`;
