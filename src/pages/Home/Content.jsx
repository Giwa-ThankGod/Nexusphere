import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import TradingViewTickerTape from "../../components/TradingViewTickerTape";

import GradientButton from "../../components/GradientButton";
import HEROMAGE from "../../assets/HEROMAGE.png";
import box from "../../assets/box.png";
import LooperGroup from "../../assets/LooperGroup.png";
import Bitcoin from "../../assets/BTC.png";
import BNB from "../../assets/BNB.png";
import eth from "../../assets/ETH.png";
import Dorge from "../../assets/DOGE.png";
import upArrow from "../../assets/VectorA.png";
import downArrow from "../../assets/VectorB.png";
import youtubeT from "../../assets/youtubeT.png";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";
import Framew from "../../assets/Framew.png";
import service1 from "../../assets/services/service1.png";
import service2 from "../../assets/services/service2.png";
import service3 from "../../assets/services/service3.png";
import service4 from "../../assets/services/service4.png";
import service5 from "../../assets/services/service5.png";
import service6 from "../../assets/services/service6.png";
import map from "../../assets/map.png";
import woman from "../../assets/woman.png";
import linkedinName from "../../assets/linkedinName.png";
import telegramName from "../../assets/telegramName.png";
import twitterName from "../../assets/twitterName.png";
import instaName from "../../assets/instaName.png";
import facebookName from "../../assets/facebookName.png";
import rating from "../../assets/rating.png";
import Gradient from "../../components/Gradient";
import Footer from "../../components/Footer";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { motion, useInView } from "framer-motion";

import { Link } from "react-router-dom";

const Content = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const data = [
    "Decentralized finance (DeFi) platforms",
    "Non-fungible token (NFT) projects",
    "Metaverse platforms",
    "Play-to-earn (P2E) games",
    "Educational technology projects",
    "Supply chain management platforms",
    " Data ownership and privacy solutions",
    "Web3 social networks ",
  ];

  const services = [
    {
      title: "MARKETING",
      img: service1,
      text: "We offer comprehensive range of promotional solutions, from digital marketing to traditional campaigns, all tailored to meet your unique needs...",
    },
    {
      title: "COMMUNITY BUILDING",
      img: service2,
      text: "We’re your partner in creating, managing and nurturing dynamic Teach and Web3 communities...",
    },
    {
      title: "BRANDING",
      img: service3,
      text: "Knowing that your brand identity is its most valuable asset, we work closely with you to establish a unique brand image. From Logos, Web development, UI/UX designs to brand guidelines...",
    },
    {
      title: "NEXUSPHERE AFRIMARKET",
      img: service4,
      text: "We leverage on local insights and global best practices to help clients reach their target audience effectively and drive project growth in the dynamic Africa market...",
    },
    {
      title: "CONSULTATION",
      img: service5,
      text: "Reinvent your Web3 Project with our Consultation services At Nexusphere, our Web3 consultation services are your key to unlocking the full potential of decentralized technologies... ",
    },
    {
      title: "OFFLINE MARKETING",
      img: service6,
      text: "Our approach to offline marketing goes beyond traditional strategies . We immerse ourselves in representing your brand as ambassadors, building personal relationship ...",
    },
  ];

  const companies = [
    {
      img: Frame1,
    },
    {
      img: Frame2,
    },
    {
      img: Frame3,
    },
    {
      img: Frame4,
    },
    {
      img: Frame5,
    },
    {
      img: Frame6,
    },
  ];

  return (
    <Main className="overflow-hidden">
      <div className="hero relative">
        <Navbar />
        <img
          src={HEROMAGE}
          alt=""
          className="absolute top-0 heroimg w-full h-full"
          loading="lazy"
        />
        <div class="cube absolute box">
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face left"></div>
          <div class="face right"></div>
          <div class="face front"></div>
          <div class="face back"></div>
        </div>{" "}
        <img src={LooperGroup} alt="" className="absolute LooperGroup" />
        <div className="flex justify-center items-center flex-col text-center pt-36 ">
          <motion.p
            initial={{ x: "-200%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
            className="gradient_color font-bold lg:text-8xl text-3xl"
          >
            Get the best <br /> marketing & PR <br /> for your project
          </motion.p>
          <p className="lg:text-4xl text-xl lg:pt-6 pt-2 lg:pb-28 pb-5 text-white">
            Tech & Web3
          </p>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{
              opacity: 1,
              delay: 3,
              y: 0,
            }}
            transition={{ duration: 2, delay: 2 }}
          >
            <GradientButton />
          </motion.div>
          <div id="tradePrice" className="absolute bottom-10 bg-red-500 w-full">
            {/* <!-- TradingView Widget BEGIN --> */}
              <TradingViewTickerTape />
            {/* <!-- TradingView Widget END --> */}
          </div>
        </div>
      </div>
      <div
        className="nav relative lg:overflow-hidden b"
        style={{ maxWidth: "100%" }}
      >
        <img src={Framew} alt="" className="absolute Framew z-1" />
        <img src={Ellipse2} alt="" className="absolute right-0 bottom-0" />

        <div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            opacity: 1,
            delay: 3,
            x: 0,
          }}
          transition={{ duration: 2, delay: 2 }}
          className="grid md:grid-cols-2 lg:px-24 px-5  pt-6 about lg:pb-32 pb-10"
        >
          <motion.div
            className="lg:mr-8 lg:mb-0 mb-5 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "-100%" },
            }}
          >
            <p className="text-center lg:text-5xl text-2xl text-white">
              Welcome to Nexusphere
            </p>
            <p className="text-white text-lg flex justify-start pt-5 pb-3">
              <span>
                Where innovation meets impact, and your brand <br /> journey{" "}
                takes center stage.{" "}
              </span>
            </p>
            <p className="text-white text-lg justify-start pt-5 pb-3">
              <span style={{ color: "#FF99FF" }}>
                What sets us apart is our unique selling point:
              </span>{" "}
              a <br /> commitment to grassroots marketing that goes <br />{" "}
              beyond the surface, reaching the heart of your <br /> target
              audience through a dynamic blend of both <br /> digital and
              traditional channels.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: "100%" },
            }}
            className="z-20  cursor-pointer"
          >
            {" "}
            <div style={{ position: "relative", overflow: "visible" }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rvAw4fUWK8k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ position: "absolute", zIndex: "20px" }}
              ></iframe>
            </div>
          </motion.div>
        </div>
        <div className="brands">
          <p className="text-white text-center text-xl font-medium pb-12 pt-1">
            Trusted by
          </p>
          <div className="flex lg:justify-center  overflow-scroll">
            <div
              className="flex pb-14"
              // style={{ maxWidth: "100%", height: "300px" }}
            >
              <img src={Frame1} alt="" className="social-img2" />
              <img src={Frame2} alt="" className="social-img2" />
              <img src={Frame3} alt="" className="social-img2" />
              <img src={Frame4} alt="" className="social-img2" />
              <img src={Frame5} alt="" className="social-img2" />
              <img src={Frame6} alt="" className="social-img2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center nav relative">
        <img src={Ellipse1} alt="" className="absolute top-0 right-0 z-1" />
        <div className="">
          <p className="pt-8 pb-5 text-center lg:text-4xl text-2xl text-white">
            Exceptional services we render
          </p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, y: 0, x: 0 },
              hidden: { opacity: 0, y: "100%", x: "-100%" },
            }}
            className="text-center pb-32 lg:text-lg text-xs text-white"
          >
            Nexusphere offers a diverse array of expertly crafted services,
            seamlessly merging creativity and technology to deliver <br />{" "}
            solutions that exceed expectations and drive success to your
            project.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:px-36 px-8 gap-5 pb-36">
          {services.map((val, i) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileInView="visible"
              variants={{
                hidden: {
                  x: i == 0 || i == 3 ? "-100%" : i == 2 || i == 5 ? "100%" : 0,
                  y: i == 1 || i == 4 ? "-20%" : 0,
                  opacity: 0,
                },

                visible: { x: 0, opacity: 1, y: 0 },
              }}
              viewport={{ once: true }}
              initial="hidden"
              transition={{ duration: 1, delay: 0.5 }}
              className="hover service flex flex-col items-center"
            >
              <img src={val.img} alt="" className="w-full" />
              <div className=" px-6  mb-5">
                <p className="text-center pt-5 text-xl text-white">
                  {val.title}
                </p>
                <p className="text-center text-lg text-white borderBottom h-32 text-sm py-5">
                  {val.text}
                </p>
              </div>
              <Link to="/contact">
                <Button className="rounded-2xl lg:mb-12 mb-5 py-2 px-5 text-white text-xl font-500 font-semibold">
                  Learn more
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div
        className="relative nav"
        style={{ background: "rgb(26 26 26)", zIndex: "-2", left: "0px" }}
      >
        {" "}
        <img
          src={pinkcircle}
          alt=""
          className="absolute b"
          // style={{ height: "1328px" }}
        />
        <p className="text-white lg:pt-80 pt-20 text-center lg:text-4xl text-2xl">
          Projects we’ve worked on
        </p>
        <div className=" pt-24">
          <div className="grid lg:grid-cols-3 place-items-center lg:px-36">
            {companies.map((val, i) => (
              <div
                className={`${i == 2 || i == 5 ? "" : "borderRight"} ${
                  i == 3 || i == 4 || i == 5 ? "" : "borderBottom"
                } h-60 w-full flex flex-col items-center justify-center`}
              >
                <motion.div
                  variants={{
                    hidden: {
                      y: "-30%",
                      opacity: 0,
                    },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileInView={"visible"}
                  initial="hidden"
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <img src={val.img} alt="" />
                  <div className="flex items-center">
                    <p className="text-white py-10 pr-3">Learn more</p>
                    <img src={arrow_forward_ios} alt="" />
                  </div>{" "}
                </motion.div>{" "}
              </div>
            ))}
          </div>
          <div className="projects">
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-30%" },
              }}
            >
              <p className="text-white text-center lg:text-4xl text-2xl py-5">
                What types of project does <br /> Nexusphere work with?
              </p>
              <p className=" text-center lg:pb-20 pb-5">
                We work with a variety of web3 and tech projects, including
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:px-48 gap-5 lg:pb-20 pb-10 place-items-center">
              {data.map((val) => (
                <div className="purpleBox hover:bg-white flex items-center justify-center lg:mb-10 z-10">
                  <p className="text-white text-center text-xs ">{val}</p>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>{" "}
      </div> */}
      <Gradient />
      <div className="nav pb-28 relative">
        <img
          src={map}
          alt=""
          className="absolute right-10 top-10 lg:block hidden"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="pt-32 lg:text-4xl text-2xl pb-4 text-center text-white">
            What our customers are saying <br /> about us
          </p>
          <p className="lg:text-sm text-xs lg:pb-28 pb-8 text-white lg:px-0 px-3">
            At Nexusphere, we take pride in delivering exceptional services that
            drive success for our clients. Here's what some of <br /> our
            satisfied customers have to say about their experience working with
            us
          </p>
        </div>
        <div className="">
          <Carousel
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            autoPlay={true}
            stopOnHover={true}
          >
            {[1, 2, 3].map((val) => (
              <div className="flex justify-center">
                <div className="reviews flex flex-col justify-ceneter mx-3 px-5 pt-10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img
                          src={woman}
                          alt=""
                          className="lg:w-16 lg:h-16 w-10 h-10"
                        />
                      </div>
                      <p className="text-black lg:text-base text-sm pl-2">
                        Jassica homes{" "}
                      </p>
                    </div>
                    <div>
                      <img src={rating} alt="" className="lg:h-6 h-2" />
                    </div>
                  </div>
                  <p className="lg:py-5 py-2 lg:text-base text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur. Nunc purus at diam
                    massa fames lorem diam. Lorem integer tempus egestas quisque
                    leo sed nec pretium faucibus. Maecenas scelerisque.
                  </p>
                  <p
                    style={{ color: "#00000066" }}
                    className="lg:text-base text-xs text-left"
                  >
                    BINANCE AFRICA
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div style={{ background: "#2A1745" }}>
        <div className="flex flex-col justify-center items-center">
          <p className="pt-32 lg:text-4xl text-2xl pb-4 text-center text-white lg:pb-16 pb-5">
            Be a part of our community
          </p>
        </div>
        <div className="flex justify-center px-5 pb-40">
          <div className="flex">
            <Link to="https://www.facebook.com/profile.php?id=61557765987604">
              <img srcSet={facebookName} alt="" className="social-img mx-2" />
            </Link>
            <Link to="https://www.instagram.com/sailwith_nexusphere?igsh=MzRlODBiNWFlZA==">
              <img srcSet={instaName} alt="" className="social-img mx-2" />
            </Link>
            <Link to="https://www.linkedin.com/company/nexusphere/">
              <img srcSet={linkedinName} alt="" className="social-img mx-2" />
            </Link>
            <Link to="https://t.me/+87QTjXDts2s5OTdk">
              <img srcSet={telegramName} alt="" className="social-img mx-2" />
            </Link>
            <Link to="https://x.com/nexusphere1?s=21">
              <img srcSet={twitterName} alt="" className="social-img mx-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Content;

const Button = styled.button`
  background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
`;

const Main = styled.div`
  @keyframes turn {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }
    to {
      transform: rotate3d(1, 1, 0, 360deg);
    }
  }

  .cube {
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: turn 5s linear infinite;
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .face {
    width: 100px;
    height: 100px;
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
    border: 2px solid black;
    position: absolute;
    /* opacity: 0.5; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
    transition: transform 500ms;
    @media (max-width: 1130px) {
      width: 50px;
      height: 50px;
    }
  }

  .front {
    transform: translateZ(50px);
    @media (max-width: 768px) {
      transform: translateZ(25px);
    }
  }

  .back {
    transform: translateZ(-50px) rotateY(180deg);
    @media (max-width: 768px) {
      transform: translateZ(-25px) rotateY(180deg);
    }
  }

  .left {
    transform: translateX(-50px) rotateY(-90deg);
    @media (max-width: 768px) {
      transform: translateX(-25px) rotateY(-90deg);
    }
  }

  .right {
    transform: translateX(50px) rotateY(90deg);
    @media (max-width: 768px) {
      transform: translateX(25px) rotateY(90deg);
    }
  }

  .top {
    transform: translateY(-50px) rotateX(90deg);
    @media (max-width: 768px) {
      transform: translateY(-25px) rotateX(90deg);
    }
  }

  .bottom {
    transform: translateY(50px) rotateX(-90deg);
    @media (max-width: 768px) {
      transform: translateY(25px) rotateX(-90deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cube {
      animation: none;
      transform: rotate3d(1, 1, 0, 45deg);
    }
  }

  .social-img {
    height: 118px;
    width: 120px;

    @media (max-width: 1130px) {
      height: 40px;
      width: 40px;
    }
  }
  .social-img2 {
    @media (max-width: 1130px) {
      height: 40px;
      /* width: 40px; */
    }
  }
  .reviews {
    height: 270px !important;
    border-radius: 47.65px;
    width: 773.47px !important;
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  .projects {
    background: rgba(255, 255, 255, 0.3);
  }
  .purpleBox {
    background-color: rgba(140, 0, 138, 1);
    height: 53px;
    border-radius: 10px;
    width: 239px;
  }
  .purpleBox:hover {
    background-color: white;
    color: beige;
  }

  .borderLeft {
    border-left: 2px solid rgba(255, 255, 255, 1);
    /* border-bottom: 2px solid rgba(255, 255, 255, 1); */
  }
  .borderBottom {
    border-bottom: 2px solid rgba(255, 255, 255, 1);
    /* border-bottom: 2px solid rgba(255, 255, 255, 1); */
  }
  .borderRight {
    /* border-bottom: 2px solid rgba(255, 255, 255, 1); */
    border-right: 2px solid rgba(255, 255, 255, 1);
  }

  .service {
    width: 373px;
    background: linear-gradient(119.65deg, #110e15 6.11%, #5d445d 100.73%);
    @media (max-width: 700px) {
      width: auto;
    }
  }
  .borderBottom {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .about {
  }
  .b {
    z-index: -3;
  }
  .z {
    z-index: 222;
  }
  .Framew {
    z-index: -2;
    top: -50px;
    left: 0px;
  }
  .brands {
    z-index: 11;
    background: #4747471a; /* Your specified color */
    backdrop-filter: blur(
      10px
    ); /* Apply a blur effect to the content behind the element */
    border-radius: 10px; /* Optional: Add rounded corners */
    padding: 20px; /* Add some padding inside the element */
  }

  .hero {
    background: linear-gradient(0deg, #252525 0%, rgba(22, 14, 51, 0) 31.25%);
    height: 1024px;

    @media (max-width: 700px) {
      height: 830px;
    }
    .gradient_color {
      background: linear-gradient(96.88deg, #ffffff 36.68%, #ff65ff 91.17%);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      /* width: 779px; */
    }
    .heroimg {
      z-index: -12222;
    }
    .LooperGroup {
      bottom: 0px;
      left: -100px;
    }
    .box {
      bottom: 200px;
      right: 200px;
      /* width: 206.31px; */

      @media (max-width: 700px) {
        bottom: 230px;
        right: 50px;
        /* width: 101px; */
      }
    }
  }
`;
