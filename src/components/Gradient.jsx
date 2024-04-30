import React from "react";
import styled from "styled-components";
import looper1 from "../assets/Looper-2.png";
import { motion } from "framer-motion";

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
      <motion.p
        className="text-center lg:text-4xl text-xl heading text-white pb-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: "-100%",
            opacity: 0,
          },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 1, duration: 2 }}
      >
        Marketing services for tech and web3 <br /> project/ product.
      </motion.p>
      <div className="grid lg:grid-cols-2 grid-cols-2 lg:gap-x-20 gap-y-5">
        {data.map((val) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: "-40%",
                opacity: 0,
              },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ delay: 0.8 }}
            className="gradient"
            whileHover={{ scaleX: 1.1 }}
          >
            <div> {val}</div>
          </motion.div>
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
