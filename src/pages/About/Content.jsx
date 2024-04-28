import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Hero from "../../components/Hero";
import purpleOne from "../../assets/purple.png";
import sunrise from "../../assets/sunrise.png";
import Gradient from "../../components/Gradient";
import Footer from "../../components/Footer";
import GradientButton from "../../components/GradientButton";
import purple from "../../assets/visiomImgs/purple.png";
import star from "../../assets/visiomImgs/star.png";
import video from "../../assets/visiomImgs/video.png";
import purpleTwo from "../../assets/purpleTwo.png";

const Content = () => {
  return (
    <Main>
      <div className="nav h-32">
        <Navbar />
      </div>
      <Hero
        title="About Us"
        desc="Our team is a mix of creative thinkers and strategic planners. We use the latest tools to make sure your brand not only stands out but also connects with your audience. Whether it's marketing, PR, consulting, event management for your web3 and Tech Agency – Nexusphere is here for your brand's success"
      />
      <div className="blueBar">
        <p className="text-white lg:text-2xl text-base font-500">
          Preparing Your Project to Achieve Success
        </p>
      </div>
      <div className="grid md:grid-cols-2 pt-16 lg:pb-48 pb-10 nav">
        <div className="lg:pl-40 pl-5 pt-16">
          <p className="text-white textUnderLine">
            <span className="textUnderLine2">Our Mission</span>
          </p>
          <p className="text-white text2 lg:text-base text-sm">
            Our mission is to empower web3 and tech projects <br /> to reach
            their full potential.
          </p>
        </div>
        <div className="lg:ml-20 ml-5 mt-5 mr-5">
          <img src={purpleOne} alt="" className="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 pb-48 relative">
        <img
          src={sunrise}
          alt=""
          className="absolute h-full top-0 left-0 zIndex w-full"
        />
        <div className="lg:ml-20 relative">
          <img src={purple} alt="" className="lg:block hidden" />
          <img src={star} alt="" className="lg:block hidden absolute top-12" />
          <img
            src={video}
            alt=""
            className="lg:block hidden absolute left-24 top-20"
          />
        </div>
        <div className="lg:pl-40 pl-5 pt-16">
          <p className="text-white textUnderLine">
            <span className="textUnderLine2">Our Vision</span>
          </p>
          <p className="text-white text2 lg:text-base text-sm">
            At Nexusphere, We aim to become the leading marketing partner <br />{" "}
            for web3 and tech projects, helping them build sustainable and{" "}
            <br />
            impactful brands thats contribute to the adoption of web3.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 lg:pb-48 pb-10 relative">
        <div className="lg:pl-40 pl-5">
          <p className="text-black textUnderLine">
            <span className="textUnderLine2">Our Vision</span>
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold ">Expertise and Experience:</span>{" "}
            Our team of seasoned professionals brings a wealth of knowledge and
            experience across various industries. We have successfully executed
            numerous marketing campaigns and developed innovative solutions for
            our clients.
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold ">Holistic Approach:</span>
            We believe in a Holistic approach to marketing, combining digital
            and traditional strategies to maximize your brand's reach and
            impact. We tailor our services to your specific needs, ensuring a
            comprehensive and integrated marketing solution.
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold ">Tech-Focused:</span> As a web3
            agency, we have a deep understanding of emerging technologies and
            their potential to revolutionize project. We stay ahead of the curve
            to provide you with the latest insights and solutions in the tech
            marketing landscape. clients.
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold ">Customized Solutions:</span>
            We understand that every brand is unique. That's why we take the
            time to understand your goals, target audience, and industry to
            create customized strategies that deliver results. Our solutions are
            tailored to your specific needs and objectives.
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold "> Results-Driven:</span> We are
            committed to delivering tangible results for our clients. Whether
            it's increasing brand awareness, driving website traffic, or
            generating leads, we focus on measurable outcomes that align with
            your brand’s objectives.
          </p>
          <p className="text-black text2 lg:text-base text-sm pb-2">
            <span className="font-semibold ">Collaborative Approach:</span> We
            believe in building strong partnerships with our clients. We work
            closely with you throughout the entire process, ensuring open
            communication, transparency, and collaboration. Your success is our
            success.
          </p>
        </div>
        <div className="lg:ml-40 ml-4 lg:mr-0 mr-2 pt-16 lg:block hidden">
          <img src={purpleTwo} alt="" />
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
