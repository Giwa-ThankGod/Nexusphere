import React from "react";
import styled from "styled-components";
import looper1 from "../assets/Looper-2.png";

const Gradient = () => {
  const data = [
    "NFT",
    "EXCHANGES ",
    "DEFI",
    "FINTECH",
    "AGRIFI",
    "BLOCKCHAIN",
    "GAMFI",
    "METAVERSE",
    "DAPPS",
    "EDUTECH",
  ];

  return (
    <Main className="nav relative pt-20 pb-40 overflow-hidden flex flex-col items-center">
      <img src={looper1} alt="" className=" imgLooper lg:block hidden " />
      <p className="text-center lg:text-4xl text-xl heading text-white pb-10">
        Marketing services for tech and web3 <br /> project/ product.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-2 lg:gap-x-20 gap-y-5">
        {data.map((val) => (
          <div className="gradient">{val}</div>
        ))}
      </div>
    </Main>
  );
};

export default Gradient;
const Main = styled.div`
  .imgLooper {
    top: 0px;
    left: 0px;
    position: absolute;
    /* background-color: aliceblue; */
    width: 1683.49px;
    object-fit: cover;
    height: auto;
  }
  .gradient {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    background: linear-gradient(
      91.17deg,
      rgba(90, 67, 90, 0) 0.45%,
      #c200c2 103.42%
    );
    width: 239px;
    height: 56px;
    border-radius: 10px;
    font-weight: 700;

    @media (max-width: 768px) {
      width: 150px;
      height: 50px;
    }
  }
`;
