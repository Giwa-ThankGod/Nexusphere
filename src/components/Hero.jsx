import React from "react";
import abouthome from "../assets/abouthome.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Main className="ctn relative flex flex-col justify-center items-center">
      <img src={abouthome} alt="" className="absolute top-0 left-0 z-1" />
      <p className="text-5xl text-white">About Us</p>
      <p className="text-center pt-5 text-white text">
        Our team is a mix of creative thinkers and strategic planners. We use
        the latest tools to make sure your brand not only stands out but also
        connects with your audience. Whether it's marketing, PR, consulting,
        event management for your web3 and Tech Agency – Nexusphere is here for
        your brand's success
      </p>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  height: 530px;
  img {
    height: 530px;
    z-index: -1;
  }
  .text {
    width: 663px;

    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
