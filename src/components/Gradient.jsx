import React from "react";
import styled from "styled-components";
import looper1 from "../assets/Looper-2.png";

const Gradient = () => {
  return (
    <Main className="nav relative pt-20 pb-40 overflow-hidden flex flex-col items-center">
      <img src={looper1} alt="" className=" imgLooper  " />
      <p className="text-center text-4xl heading text-white pb-10">
        Marketing services for tech and web3 project/ product.
      </p>
      <div className="grid grid-cols-2 gap-x-20 gap-y-5">
        {[1, 3, 4, , 3, 4, 3, 2, 2, 2, 2].map((val) => (
          <div className="gradient">NFT</div>
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
  }
  .heading {
    width: 600px;
  }
`;
