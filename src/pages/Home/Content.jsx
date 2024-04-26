import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import GradientButton from "../../components/GradientButton";
import HEROMAGE from "../../assets/HEROMAGE.png";
import box from "../../assets/box.png";
import LooperGroup from "../../assets/LooperGroup.png";
import Bitcoin from "../../assets/Bitcoin.png";
import bnb from "../../assets/Bnb.png";
import eth from "../../assets/Eth.png";
import Dorge from "../../assets/Doge.png";
import youtubeT from "../../assets/youtubeT.png";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";
import Framew from "../../assets/Framew.png";
import service1 from "../../assets/service1.png";
import pinkcircle from "../../assets/pinkcircle.png";
import arrow_forward_ios from "../../assets/arrow_forward_ios.png";
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
const Content = () => {
  return (
    <Main>
      <div className="hero relative">
        <Navbar />
        <img src={HEROMAGE} alt="" className="absolute top-0 heroimg w-full" />
        <img
          src={box}
          alt=""
          className="absolute box"
          style={{ width: "206.31px" }}
        />
        <img src={LooperGroup} alt="" className="absolute LooperGroup" />

        <div className="flex justify-center items-center flex-col text-center pt-36 ">
          <p className="gradient_color font-bold text-8xl">
            Get the best marketing & PR for your project
          </p>
          <p className="text-4xl pt-6 pb-28 text-white">Tech & Web3</p>
          <GradientButton />
          <div className="flex absolute bottom-10">
            <img src={Bitcoin} alt="" srcset="" />
            <img src={eth} alt="" srcset="" />
            <img src={bnb} alt="" srcset="" />
            <img src={Dorge} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="nav relative overflow-hidden b">
        <img src={Framew} alt="" className="absolute Framew z-1" />

        <div className="grid grid-cols-2 px-24 pt-6 about pb-32">
          <div className="mr-8 flex flex-col items-center">
            <p className="text-center text-4xl text-white">
              Welcome to Nexusphere
            </p>
            <p
              className="text-white text-base flex pt-5 pb-3"
              style={{ width: "413px" }}
            >
              <span>
                Where innovation meets impact, and your brand journey takes
                center stage.{" "}
              </span>
            </p>
            <p className="text-white " style={{ width: "413px" }}>
              <span style={{ color: "#FF99FF" }}>
                What sets us apart is our unique selling point:
              </span>{" "}
              a commitment to grassroots marketing that goes beyond the surface,
              reaching the heart of your target audience through a dynamic blend
              of both digital and traditional channels.
            </p>
          </div>
          <img src={youtubeT} alt="" />
        </div>
        <div className="brands">
          <p className="text-white text-center text-xl font-medium pb-12 pt-1">
            Trusted by
          </p>
          <div className="flex justify-center z">
            <div className="flex pb-20">
              <img src={Frame1} alt="" />
              <img src={Frame2} alt="" />
              <img src={Frame3} alt="" />
              <img src={Frame4} alt="" />
              <img src={Frame5} alt="" />
              <img src={Frame6} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center nav">
        <div className="">
          <p className="pt-8 pb-5 text-center text-4xl text-white">
            Exceptional services we render{" "}
          </p>
          <p className="text-center desc pb-32 text-sm text-white">
            Nexusphere offers a diverse array of expertly crafted services,
            seamlessly merging creativity and technology to deliver solutions
            that exceed expectations and drive success to your project.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 px-36 gap-5 pb-36">
          {[1, 2, 3, 4, 3, 3].map((val) => (
            <div className="service flex flex-col items-center">
              <img src={service1} alt="" />
              <div className=" px-6  mb-5">
                <p className="text-center pt-5 text-xl text-white">MARKETING</p>
                <p className="text-center text-white borderBottom text-sm py-5">
                  We offer comprehensive range of promotional solutions, from
                  digital marketing to traditional campaigns, all tailored to
                  meet your unique needs...
                </p>
              </div>
              <Button className="rounded-2xl mb-12 py-2 px-2 text-white text-base font-500 font-semibold">
                Learn more
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative nav Framew"
        style={{ background: "rgb(26 26 26)" }}
      >
        {" "}
        <img
          src={pinkcircle}
          alt=""
          className="absolute b"
          // style={{ height: "1328px" }}
        />
        <p className="text-white pt-80 text-center text-4xl">
          Projects we’ve worked on
        </p>
        <div className=" pt-24">
          <div className="grid lg:grid-cols-3 place-items-center px-36">
            <div className="borderRight borderBottom h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame1} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
            <div className="borderRight borderBottom  h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame2} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
            <div className="borderBottom  h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame3} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
            <div className="borderRight  h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame4} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
            <div className="borderRight  h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame5} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
            <div className="h-60 w-full flex flex-col items-center justify-center">
              <div>
                <img src={Frame6} alt="" />
                <div className="flex items-center">
                  <p className="text-white py-10 pr-3">Learn more</p>
                  <img src={arrow_forward_ios} alt="" />
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="projects">
            <div className="flex flex-col items-center">
              <p
                className="text-white text-center text-4xl py-5"
                style={{ width: "500px" }}
              >
                What types of project does Nexusphere work with?
              </p>
              <p className=" text-center pb-20">
                We work with a variety of web3 and tech projects, including
              </p>
            </div>
            <div className="grid lg:grid-cols-4 px-48 gap-5 pb-20 ">
              {[1, 2, 2, 2, 2, 2, , 2, 2].map((val) => (
                <div className="purpleBox flex items-center justify-center mb-10">
                  <p className="text-white text-center text-xs ">
                    Decentralized finance (DeFi) platforms
                  </p>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
      <Gradient />
      <div className="nav pb-28 relative">
        <img src={map} alt="" className="absolute right-10 top-10" />
        <div className="flex flex-col justify-center items-center">
          <p
            className="pt-32 text-4xl pb-4 text-center text-white"
            style={{ width: "500px" }}
          >
            What our customers are saying about us
          </p>
          <p style={{ width: "768px" }} className="text-sm pb-28 text-white">
            At Nexusphere, we take pride in delivering exceptional services that
            drive success for our clients. Here's what some of our satisfied
            customers have to say about their experience working with us
          </p>
        </div>
        <div className="flex overflow-x-scroll">
          {[1].map((val) => (
            <div className="reviews flex flex-col justify-ceneter mx-3 px-5 pt-10">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={woman} alt="" className="profile" />
                  <p className="text-black text-base pl-2">Jassica homes </p>
                </div>
                <div>
                  <img src={rating} alt="" className="stars" />
                </div>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Nunc purus at diam massa
                fames lorem diam. Lorem integer tempus egestas quisque leo sed
                nec pretium faucibus. Maecenas scelerisque.
              </p>
              <p style={{ color: "#00000066" }} className="text-sm">
                BINANCE AFRICA
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#2A1745" }}>
        <div className="flex flex-col justify-center items-center">
          <p
            className="pt-32 text-4xl pb-4 text-center text-white"
            style={{ width: "500px" }}
          >
            Be a part of our community
          </p>
          <p
            style={{ width: "768px" }}
            className="text-center text-sm pb-16 text-white"
          >
            Become Part of Our Vibrant Communities, Connect, Collaborate, and
            Create with Innovators Like You. Join Us Now lets Shape the Future
            of your project together.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 px-96 pb-40">
          <img src={facebookName} alt="" />
          <img src={instaName} alt="" />
          <img src={linkedinName} alt="" />
          <img src={telegramName} alt="" />
          <img src={twitterName} alt="" />
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
  .reviews {
    height: 270px;
    border-radius: 47.65px;
    width: 773.47px !important;
    background-color: white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .profile {
      width: 69.88px;
      height: 69.88px;
    }
    .stars {
      height: 25.56px;
    }
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
    background: linear-gradient(119.65deg, #110e15 6.11%, #5d445d 100.73%);
  }
  .borderBottom {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  .desc {
    width: 816px;
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
    background: rgba(71, 71, 71, 0.1);
  }

  .hero {
    background: linear-gradient(0deg, #252525 0%, rgba(22, 14, 51, 0) 31.25%);
    height: 1024px;

    .gradient_color {
      background: linear-gradient(96.88deg, #ffffff 36.68%, #ff65ff 91.17%);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      width: 779px;
    }
    .heroimg {
      z-index: -12222;
    }
    .LooperGroup {
      bottom: 0px;
      left: -100px;
    }
    .box {
      bottom: 170px;
      right: 100px;
    }
  }
`;
