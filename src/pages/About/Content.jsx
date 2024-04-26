import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Hero from "../../components/Hero";
import purpleOne from "../../assets/purple.png";
import sunrise from "../../assets/sunrise.png";
import Gradient from "../../components/Gradient";
import Footer from "../../components/Footer";
import GradientButton from "../../components/GradientButton";

const Content = () => {
  return (
    <Main>
      <div className="nav h-32">
        <Navbar />
      </div>
      <Hero />
      <div className="blueBar">
        <p className="text-white text-2xl font-500">
          Preparing Your Project to Achieve Success
        </p>
      </div>
      <div className="grid grid-cols-2 pt-16 pb-48 nav">
        <div className="pl-40 pt-16">
          <p className="text-white textUnderLine">
            <span className="textUnderLine2">Our Mission</span>
          </p>
          <p className="text-white text2 w-96">
            Our mission is to empower web3 and tech projects to reach their full
            potential.
          </p>
        </div>
        <div className="ml-20">
          <img src={purpleOne} alt="" className="" />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-16 pb-48 relative">
        <img src={sunrise} alt="" className="absolute top-0 left-0 zIndex w" />
        <div className="ml-20">
          <img src={purpleOne} alt="" />
        </div>
        <div className="pl-40 pt-16">
          <p className="text-white textUnderLine">
            <span className="textUnderLine2">Our Vision</span>
          </p>
          <p className="text-white text2 w-96">
            Our mission is to empower web3 and tech projects to reach their full
            potential.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-16 pb-48 relative">
        <div className="pl-40">
          <p className="text-black textUnderLine">
            <span className="textUnderLine2">Our Vision</span>
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold">Expertise and Experience:</span> Our
            team of seasoned professionals brings a wealth of knowledge and
            experience across various industries. We have successfully executed
            numerous marketing campaigns and developed innovative solutions for
            our clients.
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold">Holistic Approach:</span>
            We believe in a Holistic approach to marketing, combining digital
            and traditional strategies to maximize your brand's reach and
            impact. We tailor our services to your specific needs, ensuring a
            comprehensive and integrated marketing solution.
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold">Tech-Focused:</span> As a web3
            agency, we have a deep understanding of emerging technologies and
            their potential to revolutionize project. We stay ahead of the curve
            to provide you with the latest insights and solutions in the tech
            marketing landscape. clients.
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold">Customized Solutions:</span>
            We understand that every brand is unique. That's why we take the
            time to understand your goals, target audience, and industry to
            create customized strategies that deliver results. Our solutions are
            tailored to your specific needs and objectives.
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold"> Results-Driven:</span> We are
            committed to delivering tangible results for our clients. Whether
            it's increasing brand awareness, driving website traffic, or
            generating leads, we focus on measurable outcomes that align with
            your brand’s objectives.
          </p>
          <p className="text-black text2 pb-2">
            <span className="font-semibold">Collaborative Approach:</span> We
            believe in building strong partnerships with our clients. We work
            closely with you throughout the entire process, ensuring open
            communication, transparency, and collaboration. Your success is our
            success.
          </p>
        </div>
        <div className="ml-20  pt-16">
          <img src={purpleOne} alt="" />
        </div>
      </div>
      <Gradient />
      <div className="blueBar">
        <GradientButton />
      </div>
      <Footer />
    </Main>
  );
};

export default Content;

const Main = styled.div`
  .zIndex {
    z-index: -1;
  }
`;
