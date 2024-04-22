import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Hero from "../../components/Hero";
import eye from "../../assets/eye.png";
import women from "../../assets/women.png";
import BigPurple from "../../assets/BigPurple.png";
import marketing from "../../assets/marketing.png";
import Footer from "../../components/Footer";
import serviceone from "../../assets/serviceone.png";
import GradientButton from "../../components/GradientButton";
import rollingBox from "../../assets/rollingBox.png";

const Content = () => {
  return (
    <Main>
      <div className="nav h-32">
        <Navbar />
      </div>
      <Hero />
      <div className="nav">
        <img src={eye} alt="" />
      </div>
      <div className="bigPurpleCtn relative flex flex-col justify-center">
        <img
          src={BigPurple}
          alt=""
          className="BigPurple absolute zIndex nav "
        />
        <div className="InnerBigPurple flex items-center justify-around">
          <div>
            <p className="text-white textUnderLine">
              <span className="textUnderLine2">MARKETING</span>
            </p>
            <p className="text-white w-80 pb-10">
              At Nexusphere, we offer a comprehensive range of marketing
              services designed to elevate your brand and drive business growth.
              Our expert team combines creativity, data-driven strategies, and
              industry insights to deliver exceptional results.
            </p>
            <p className="text-white">Explore our marketing services below :</p>
          </div>
          <div>
            <img src={marketing} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="nav pb-40">
        <div className=" services grid lg:grid-cols-3 gap-5 px-36 relative">
          {[2, 3, , 4, 3, , 3, 3, 3, , 3, 3, 3, 2, 2].map((val) => (
            <div className="box flex flex-col items-center">
              <img src={serviceone} alt="" srcset="" className="flex " />
              <p className="text-white text-xl font-medium py-5">SEO</p>
              <p className="text-white text-sm">
                We optimize your website and online presence to rank higher in
                search engine results. By conducting thorough keyword research,
                optimizing on-page elements, and building high-quality
                backlinks, we ensure that your web3 or tech project gets
                discovered by your target audience.
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <GradientButton />
        </div>
      </div>
      <div className="nav">
        <div className="pt-36 grid lg:grid-cols-2 items-start">
          <div className="flex justify-center">
            <img src={women} alt="" srcset="" />
          </div>
          <div className="specificWidth pt-20">
            <p className="textUnderLine">
              <span className="textUnderLine2 text-white">
                OUR AFRICA OFFLINE SERVICE:
              </span>
            </p>
            <p className="pb-3 text-white">
              Our approach to offline marketing goes beyond traditional
              strategies . We immerse ourselves in representing your brand as
              ambassadors, building personal relationship with your audience,
              and becoming passionate Advocates for your project.
            </p>
            <p className="pb-3 text-white">
              We take the time to deeply understand your project, ensuring that
              we possess in-depth knowledge to effectively convey your value
              proposition to the outside world. By doing so, we bring your
              project to life through engaging and authentic interactions in
              diverse offline settings where your projects target audience can
              be found.
            </p>
            <p className="pb-3 text-white">
              Furthermore, we proactively seek to build partnerships with local
              influencers, reputable individuals, educational institutions and
              other firms to establish meaningful connections and foster trust
              within the community.
            </p>
            <p className="pb-3 text-white">
              This collaborative approach helps to amplify your brand presence
              and credibility, leveraging the influence and authority of this
              partners to reach and spread the word to the target audience.
              Digital's great, but sometimes you need to go local and real. Our
              traditional marketing magic uses targeted outreach, memorable
              experiences, and deep audience understanding to ensure your
              message connects on a deeper level.
            </p>
            <p className="pb-3 text-white">
              By representing your brand offline in a genuine and informed
              manner, we strive to create impactful and lasting impressions,
              nurturing a strong connection between your project and it audience
              in the physical world.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <GradientButton />
        </div>
      </div>
      <div className="nav">
        <div className="pt-36 grid lg:grid-cols-2 items-start relative">
          <div className=" pl-56 pt-20">
            <p className="textUnderLine">
              <span className="textUnderLine2 text-white">BRANDING: </span>
            </p>
            <p className="pb-3 text-white">
              As a company, what defines your core identity and values? What
              makes you unique in comparison to competitors, and are you
              effectively communicating these distinctions to your intended
              audience? Creating a brand that establishes a genuine connection
              with consumers at every stage of your marketing strategy is
              crucial.
            </p>
            <p className="pb-3 text-white">
              Consistency in conveying this message is key. When executed
              successfully, it has the power to revolutionize the way
              individuals perceive and engage with your business.
            </p>
            <p className="pb-3 text-white">
              Whether you're establishing a new brand, enhancing brand
              visibility, or refining brand reputation, our passionate team
              offers comprehensive services, including brand strategy, style
              guides, design, development, management, and logo creation. Also
              include:
            </p>
          </div>
          <div className="flex justify-center relative">
            <img src={women} alt="" srcset="" className="z-10" />
            <img src={rollingBox} alt="" srcset="" className="rollingBox z-1" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Content;

const Main = styled.div`
  .img {
    z-index: -1;
  }
  .rollingBox {
    position: absolute;
    top: -380px;
    z-index: 2;
  }
  .specificWidth {
    width: 528px;
  }
  .services {
    /* margin-top: -100px; */
    top: -100px;
    left: 0;
  }
  .box {
    height: 373px;
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;
    padding: 45.5px 20px;
  }
  .bigPurpleCtn {
    height: 1059px;
  }
  .BigPurple {
    height: 1059px;
  }
  .zIndex {
    z-index: -1;
  }
  .purple_gradient {
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
  }
`;
