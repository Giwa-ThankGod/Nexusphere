import React from "react";
import abouthome from "../assets/abouthome.png";
import styled from "styled-components";

const Hero = ({ title, desc }) => {
  return (
    <Main className="ctn relative flex flex-col justify-center items-center">
      <img
        src={abouthome}
        alt=""
        className="absolute top-0 left-0 z-1 w-full"
      />
      <p className="lg:text-9xl text-4xl text-white heading">{title}</p>
      <p className="text-center pt-5 text-white lg:text-xl text-base px-5 desc">
        {desc}
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
  .desc {
    width: 663px;
    @media (max-width: 767px) {
      width: auto;
    }
  }
  .text {
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
