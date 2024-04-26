import React from "react";
import abouthome from "../assets/abouthome.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Main className="ctn relative flex flex-col justify-center items-center">
      <img
        src={abouthome}
        alt=""
        className="absolute top-0 left-0 z-1 w-full"
      />
      <p className="lg:text-7xl text-4xl text-white heading">About Us</p>
      <p className="text-center pt-5 text-white lg:text-base text-xs px-5">
        Our team is a mix of creative thinkers and strategic planners. We use
        the latest <br /> tools to make sure your brand not only stands out but
        also connects with your <br /> audience. Whether it's marketing, PR,
        consulting, event management for your <br /> web3 and Tech Agency –
        Nexusphere is here for your brand's success
      </p>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  height: 530px;
  .heading {
    font-family: auto;
  }
  img {
    height: 530px;
    z-index: -1;
  }
  .text {
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
