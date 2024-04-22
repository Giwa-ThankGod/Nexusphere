import React from "react";
import styled from "styled-components";
import logo2 from "../assets/logo2.png";
import instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <Main className="nav pl-24 pr-20">
      <div className="main pt-32 pb-7">
        <div className="  firstSection">
          <img src={logo2} alt="" />
          <p className="pt-6">
            Elevate your brand with our expert in marketing. From SEO to social
            media, we craft tailored strategies for impactful online presence.
          </p>
          <div className="flex items-center py-6">
            <img src={instagram} alt="" srcset="" className="pr-6" />
            <img src={Facebook} alt="" srcset="" className="pr-6" />
            <img src={twitter} alt="" srcset="" className="pr-6" />
            <img src={linkedin} alt="" srcset="" className="pr-6" />
          </div>
          <p>Subscribe to our newsletter </p>
          <div className="flex pt-5 relative">
            <input
              type="text"
              className="w-full p-5 "
              placeholder="Enter your email"
            />
            <input
              type="text"
              className=" text-lg absolute font-semibold text-center gradient top-7 right-4"
              placeholder="Subscribe"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <p className="title text-xl pb-10">Company</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p>About</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <p className="title text-xl pb-10">Company</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p>About</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <p className="title text-xl pb-10">Company</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p className="pb-2">About</p>
            <p>About</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-6">
        <p className="terms">Copyright © 2022 </p>
        <p className="terms">
          All Rights Reserved |{" "}
          <span className="blue textUnderLine2">
            Terms and Conditions | Privacy Policy
          </span>
        </p>
      </div>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  .terms {
    color: #6f6c90;
    font-size: 16px;
  }
  .blue {
    color: #7682ec;
  }
  .gradient {
    height: 47.43px;
    width: 119.7px;
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
    box-shadow: 0px 3px 12px 0px #4a3aff2e;
  }
  input {
    border-radius: 60px;
    /* width: 9.82px;
    height: 18px; */
  }
  .main {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  .firstSection {
    width: 494px;
  }
  color: white;
`;
