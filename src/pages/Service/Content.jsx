import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Hero from "../../components/Hero";
import eye from "../../assets/eye.png";
import women from "../../assets/women.png";
import BigPurple from "../../assets/BigPurple.png";
import marketing from "../../assets/marketing.png";
import blog from "../../assets/blog.png";
import consultation2 from "../../assets/consultation2.png";
import workers from "../../assets/workers.png";
import Footer from "../../components/Footer";
import circlePurple from "../../assets/circlePurple.png";
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
      <div className="lg:bg-transparent nav bigPurpleCtn relative flex flex-col justify-center">
        <img
          src={BigPurple}
          alt=""
          className="lg:block hidden BigPurple absolute zIndex nav w-full"
        />
        <div className="InnerBigPurple lg:flex items-center lg:justify-around lg:px-0 px-5">
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
          <div className="lg:pt-0 pt-5">
            <img src={marketing} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="nav lg:pb-40 pb-20">
        <div className=" services grid lg:grid-cols-3 gap-5 lg:px-36 px-5 relative">
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
        <div className="flex justify-center pt-10 lg:pt-0">
          <GradientButton />
        </div>
      </div>
      <div className="nav">
        <div className="pt-16 lg:pt-36 grid lg:grid-cols-2 items-start">
          <div className="lg:flex justify-center hidden">
            <img src={women} alt="" srcset="" />
          </div>
          <div className="specificWidth lg:pt-20 pt-0 lg:px-0 px-2">
            <p className="textUnderLine">
              <span className="textUnderLine2 text-white">
                OUR AFRICA OFFLINE SERVICE:
              </span>
            </p>
            <p className="pb-3 text-white lg:text-base text-sm">
              Our approach to offline marketing goes beyond traditional
              strategies . We immerse ourselves in representing your brand as
              ambassadors, building personal relationship with your audience,
              and becoming passionate Advocates for your project.
            </p>
            <p className="pb-3 text-white lg:text-base text-sm">
              We take the time to deeply understand your project, ensuring that
              we possess in-depth knowledge to effectively convey your value
              proposition to the outside world. By doing so, we bring your
              project to life through engaging and authentic interactions in
              diverse offline settings where your projects target audience can
              be found.
            </p>
            <p className="pb-3 text-white lg:text-base text-sm">
              Furthermore, we proactively seek to build partnerships with local
              influencers, reputable individuals, educational institutions and
              other firms to establish meaningful connections and foster trust
              within the community.
            </p>
            <p className="pb-3 text-white lg:text-base text-sm">
              This collaborative approach helps to amplify your brand presence
              and credibility, leveraging the influence and authority of this
              partners to reach and spread the word to the target audience.
              Digital's great, but sometimes you need to go local and real. Our
              traditional marketing magic uses targeted outreach, memorable
              experiences, and deep audience understanding to ensure your
              message connects on a deeper level.
            </p>
            <p className="pb-3 text-white lg:text-base text-sm">
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
      <div className="nav pb-10">
        <div className="pt-5 lg:lg-36 grid lg:grid-cols-2 items-start relative">
          <div className=" lg:pl-56 pl-5 pt-20">
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
          <div className="lg:flex justify-center relative hidden">
            <img src={women} alt="" srcset="" className="z-10" />
            <img src={rollingBox} alt="" srcset="" className="rollingBox z-1" />
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="grid lg:grid-cols-3 py-12 px-5 lg:px-36 gap-5">
          {[1, 3, 4].map((item) => (
            <Blog height={"881px"} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <GradientButton />
        </div>
      </div>
      <div className="nav pb-10 ">
        <div className="lg:pt-36 pt-5 grid lg:grid-cols-2 items-start relative">
          <div className="lg:block hidden">
            <div className="clipArt flex justify-center relative mx-5">
              <img src={workers} alt="" srcset="" className="z-10 clipArtImg" />
            </div>
          </div>
          <div className="lg:pr-24 lg:px-0 px-5 pt-20">
            <p className="textUnderLine pb-20">
              <span className="textUnderLine2 text-white">
                OUR MANAGEMENT SERVICES:{" "}
              </span>
            </p>
            <p className="pb-3 text-white">
              Transform your brand's online game with our stellar social media
              management services. We specialize in crafting captivating digital
              experiences that go beyond the ordinary. Whether it's running
              impactful campaigns that resonate with your audience, hosting live
              events to boost interaction, or managing day-to-day social
              interactions with finesse – we've got it covered. crucial.
            </p>
            <p className="pb-3 text-white">
              Our dedicated team takes care of the nitty-gritty details, from
              strategic planning to creating dynamic content that speaks to your
              audience. Real-time engagement is our forte, ensuring your online
              community has an enjoyable and memorable journey.
            </p>
            <p className="pb-3 text-white">
              Let us be your guide in the vast world of social media. We not
              only make your brand stand out but also shine brightly, leaving a
              lasting impression on the digital landscape. Elevate your online
              presence with Social Media Excellence from Nexusphere.
            </p>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="grid lg:grid-cols-3 grid-cols-1 py-12 lg:px-36 px-5 gap-5">
          {[1, 3, 4].map((item) => (
            <Blog height={"881px"} />
          ))}
        </div>
        <div className="flex justify-center py-10">
          <GradientButton height={"881px"} />
        </div>
      </div>{" "}
      <div className="bigPurpleCtn2 relative flex flex-col nav relative">
        <img
          src={circlePurple}
          alt=""
          className="BigPurple2 lg:block hidden absolute zIndex nav"
        />
        <div className="consulation2 lg:pl-5 pl-5 flex justify-around">
          <div className="lg:mt-16 mt-5">
            <p className="text-white textUnderLine">
              <span className="textUnderLine2">CONSULTATION </span>
            </p>
            <p className="text-white lg:w-80 pb-10">
              Reinvent your Web3 Project with our Consultation services At
              Nexusphere, our Web3 consultation services are your key to
              unlocking the full potential of decentralized technologies.
            </p>
            <p className="text-white">
              Here's a closer look at what sets our offerings apart:
            </p>
          </div>
          <div className="lg:block hidden">
            <img src={consultation2} alt="" srcset="" className="mt-16" />
          </div>
        </div>
        <div className="g grid lg:grid-cols-3 lg:px-32 px-5 gap-5 relative ">
          {[1, 2, 3, 4, 4, 5].map((val) => (
            <div className="box3 flex flex-col px-5 justify-center items-center">
              <p className="text-white font-medium pb-6">COMPREHENSIVE</p>
              <p className="text-white text-sm">
                Our team boasts in-depth knowledge of the Web3 landscape,
                covering blockchain development, smart contracts, decentralized
                applications (DApps), and more. We're not just consultants –
                we're your partners in navigating the complexities of this
                transformative technology.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="nav lg:pt-14 funding flex flex-col items-center justify-center">
        <p className="text-white textUnderLine">
          <span className="textUnderLine2">FUNDING</span>
        </p>
        <p className="text-white fundtingTextP lg:text-2xl text-sm lg:pb-36 pb-5 px-4">
          We offer funding services to Projects <br /> seeking financial
          resources to achieve their goals. We help projects connect with
          various <br /> funding sources, develop funding strategies, and craft
          compelling funding proposals.
        </p>
        <div className="flex justify-center lg:py-10 py-3">
          <GradientButton height={"881px"} />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Content;

const Blog = ({ height }) => {
  return (
    <div className="box2" style={{ height: height }}>
      <img src={blog} alt="" className="w-full h-80 object-cover" />
      <p className="text-center text-white py-8 text-xl">UIUX MASTERY</p>
      <p className="text-white px-5 text-sm">
        At Nexusphere, we make project management a breeze. Our streamlined
        project management services are designed to keep your initiatives on
        track without unnecessary complications. We handle the nitty-gritty
        details of project coordination, timelines, and task assignments, so you
        can focus on what you do best. Whether you're launching a new campaign,
        developing a website, or diving into a marketing strategy, our project
        management services ensure smooth sailing from start to finish. Our goal
        is simple – to take the stress out of project management and let you
        concentrate on achieving your objectives. Trust Nexusphere to be your
        reliable partner in keeping things organized, efficient, and successful.
        Nexusphere – Simplifying Project Management for Your Success.
      </p>
    </div>
  );
};

const Main = styled.div`
  .funding {
    height: 757px;
    @media (max-width: 769px) {
      height: 500px;
    }
  }
  .g {
    top: 50px;
    @media (max-width: 769px) {
      top: 0px;
    }
  }
  .clipArt {
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 16% 96%, 0% 38%);
    height: 700px;
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);

    .clipArtImg {
      width: 483px;
      height: 483px;
    }
  }
  .box3 {
    width: 374px;
    height: 330px;

    @media (max-width: 769px) {
      width: auto;
    }
  }
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
    @media (max-width: 769px) {
      width: auto;
    }
  }
  .services {
    /* margin-top: -100px; */
    top: -100px;
    left: 0;

    @media (max-width: 769px) {
      top: 0px;
    }
  }
  .box {
    height: 373px;
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;
    padding: 45.5px 20px;
  }
  .box2 {
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;
  }
  .box3 {
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;
  }
  .bigPurpleCtn2 {
    height: 1216.96px;
    z-index: 2;

    @media (max-width: 769px) {
      height: auto;
    }
  }
  .BigPurple2 {
    height: 1216.96px;
    /* width: 1199.55px; */
    z-index: 222;
    right: 0px;

    @media (max-width: 769px) {
      height: 800px;
    }
  }
  .consulation2 {
    height: 1216.96px;
    @media (max-width: 769px) {
      height: 800px;
    }
  }

  .bigPurpleCtn {
    height: 1059px;
    @media (max-width: 769px) {
      height: 800px;
    }
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
