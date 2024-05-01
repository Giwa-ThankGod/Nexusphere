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
import marketingOne from "../../assets/marketing/1.png";
import marketingTwo from "../../assets/marketing/2.png";
import marketingThree from "../../assets/marketing/3.png";
import marketingFour from "../../assets/marketing/4.png";
import marketingFive from "../../assets/marketing/5.png";
import marketingSix from "../../assets/marketing/6.png";
import marketingSeven from "../../assets/marketing/7.png";
import marketingEight from "../../assets/marketing/8.png";
import marketingNine from "../../assets/marketing/9.png";
import marketingTen from "../../assets/marketing/10.png";
import marketingEleven from "../../assets/marketing/11.png";
import marketingTwelve from "../../assets/marketing/12.png";
import branding from "../../assets/branding.png";
import star from "../../assets/visiomImgs/star.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import { blogs, servicesTwo } from "../../helpers/Static/DummyData";

const Content = () => {
  const data = [
    {
      name: "SEO",
      desc: "We optimize your website and online presence to rank higher in search engine results. By conducting thorough keyword research, optimizing on-page elements, and building high-quality backlinks, we ensure that your web3 or tech project gets discovered by your target audience.",
      img: marketingOne,
    },
    {
      name: "INFLUENCER MARKETING:",
      desc: "We leverage the power of influential figures within the web3 and tech communities to promote your project. Our team identifies and collaborates with relevant influencers who can effectively communicate your unique value proposition, drive engagement, and increase brand visibility.",
      img: marketingTwo,
    },
    {
      name: "Content Writing & Content Marketing",
      desc: "Our skilled content creators develop compelling content tailored to the web3 and tech industry. From blog posts and whitepapers to case studies and technical documentation, we produce valuable content that resonates with your audience, establishes thought leadership, and drives organic traffic to your website. ",
      img: marketingThree,
    },
    {
      name: "AIRDROP MARKETING:",
      desc: "Airdrops can be a powerful tool for web3 and tech projects to gain attention and create a community. We design and execute airdrop campaigns that target relevant communities, manage airdrop distribution, and drive engagement and participation, leading to increased project awareness and user adoption.",
      img: marketingFour,
    },
    {
      name: "LEADS GENERATION:",
      desc: "We implement effective lead generation strategies specifically designed for web3 and tech projects. Through targeted marketing campaigns, landing page optimization, and lead nurturing techniques, we attract high-quality leads interested in your project, converting them into valuable customers or contributors. ",
      img: marketingFive,
    },
    {
      name: "MEDIA RELATIONS:",
      desc: "We build and maintain relationships with web3 and tech journalist, bloggers, event organisers and influencers both internationally and regionally to secure positive media coverage for your web3 or tech project",
      img: marketingSix,
    },
    {
      name: "CRYPTO EXCHANGE LISTING:",
      desc: "We guide web3 and tech projects through the process of getting listed on reputable crypto exchanges. Our team helps navigate the listing requirements, prepares the necessary documentation, and facilitates the application process to ensure successful listings and increased trading opportunities for your token or cryptocurrency. ",
      img: marketingSeven,
    },
    {
      name: "SMART CONTRACT DEVELOPMENT",
      desc: " As a web3 marketing agency, we understand the importance of blockchain technology. Our team of skilled developers can assist you in building secure and efficient smart contracts that power decentralized applications (dApps) and enable seamless transactions within your web3 project. ",
      img: marketingEight,
    },
    {
      name: "PRESS RELEASE:",
      desc: "Our team of experts will craft an engaging press release to announce important milestones, developments, events or even cryptocurrencies related to your project. We will also handle the distribution process to relevant media outlets.",
      img: marketingNine,
    },
    {
      name: "COMMUNITY GROWTH",
      desc: `Building and nurturing a strong community is vital for web3 and tech projects. We employ community management strategies, including social media engagement, forum participation, and targeted outreach, to foster meaningful interactions, cultivate brand advocates, and drive organic growth within your project's community. Boost your brand's visibility by teaming up with our video marketing agency. Step away from the usual and let's take your marketing to the next level. Join forces with our team of experts to create eye-catching videos that make your brand unforgettable. We're here to tell your story in a way that's exciting and different. Partner with us for a video strategy that makes your brand really shine and gets people talking. `,
      img: marketingTen,
    },
    {
      name: "PUBLIC RELATIONS",
      desc: " Building a positive brand image is crucial for long-term success. Our PR services include media relations, press releases, and strategic communications to enhance your brand's reputation and establish thought leadership in your industry. We work with media outlets and influencers to secure media coverage and generate positive publicity for your business.",
      img: marketingEleven,
    },
    {
      name: "VIDEO MARKETING:",
      desc: ` Videos are a strong way to connect with your audience. Unlike text or pictures, videos engage multiple senses, showing your products or services in action, telling a story, and creating a deeper emotional connection with your viewers. 
      At Nexusphere We harness the power of video to showcase the unique features and benefits of your web3 or tech project. Our video marketing services include scriptwriting, video production, editing, and promotion, ensuring that your message is effectively conveyed to your target audience through captivating and informative videos. Our video services are: Whiteboard Animation, 3D animation, Live action videos, Motion graphics. `,
      img: marketingTwelve,
    },
  ];
  return (
    <Main>
      <div className="nav h-32">
        <Navbar />
      </div>
      <Hero
        title="Our Services"
        desc="Our services offers cutting-edge solutions tailored to meet your needs. From innovative technology solutions, we strive to exceed expectations and drive success for your project.  With a focus on quality, reliability, and innovation, we’re here to help you thrive
 in today’s dynamic marketplace."
      />
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
            <p className="text-white lg:text-lg text-base w-80 pb-10">
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
          {data.map((val, i) => (
            <div
              className="box flex flex-col items-center"
              style={{ height: i > 8 ? "539px" : "399px" }}
            >
              <img src={val.img} alt="" srcset="" className="flex mt-5" />
              <p className="text-white text-xl font-medium py-5 text-center">
                {val.name}
              </p>
              <p className="text-white text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10 lg:pt-0">
          <GradientButton />
        </div>
      </div>
      <div className="nav">
        <div className="pt-16 lg:pt-36 grid lg:grid-cols-2 items-start">
          <div className="lg:flex justify-center hidden relative">
            <img src={women} alt="" srcset="" />
            <img src={star} alt="" className="absolute top-42 left-24" />
          </div>
          <div className="lg:pr-24 pr-5  lg:pt-20 pt-0 lg:px-0 px-2">
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
            <img src={branding} alt="" srcset="" className="z-10" />
            <img
              src={rollingBox}
              alt=""
              srcset=""
              className="rollingBox right-0 z-1"
            />
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="grid lg:grid-cols-3 py-12 px-5 lg:px-36 gap-5">
          {blogs.slice(0, 3).map((item) => (
            <Blog height={"613px"} item={item} />
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
          {blogs.slice(3, 6).map((item) => (
            <Blog height={"881px"} item={item} />
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
          <div className="lg:block hidden relative">
            <img src={consultation2} alt="" srcset="" className="mt-16" />
            <img
              src={star}
              alt=""
              className="absolute top-10"
              style={{ left: "-220px" }}
            />
          </div>
        </div>
        <div className="g lg:pt-0 pt-5 grid lg:grid-cols-3 grid-cols-1 place-self-center gap-5 relativec lg:px-0 px-10">
          {servicesTwo.map((val) => (
            <div className="box3 flex flex-col px-5 justify-center items-center">
              <div>
                <p className="text-white text-center font-medium pb-6">
                  {val.title}
                </p>
                <p className="text-white text-sm">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nav lg:pt-14 funding flex flex-col items-center justify-center">
        {/* <img src={gradiente} className="gradient-4-funding" /> */}
        <img src={Ellipse3} className="gradient-4-funding w-full mb-10" />
        <p className="text-white textUnderLine">
          <span className="textUnderLine2">FUNDING</span>
        </p>
        <p className="text-white fundtingTextP lg:text-2xl text-sm lg:pb-36 pb-5 px-4">
          We offer funding services to Projects <br /> seeking financial
          resources to achieve their goals. We help projects connect with
          various <br /> funding sources, develop funding strategies, and craft
          compelling funding proposals.
        </p>
        <div className="flex justify-center z-10 lg:py-10 py-3">
          <GradientButton height={"881px"} />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Content;

const Blog = ({ height, item }) => {
  return (
    <div className="box2" style={{ height: height }}>
      <img src={item.img} alt="" className="w-full h-80 object-cover" />
      <p className="text-center text-white py-8 text-xl">{item.title}</p>
      <p className="text-white px-5 text-sm">{item.desc}</p>
    </div>
  );
};

const Main = styled.div`
  .funding {
    height: 757px;
    position: relative;

    @media (max-width: 769px) {
      height: 500px;
    }
  }
  .gradient-4-funding {
    position: absolute;
    bottom: 0;
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
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;

    @media (max-width: 769px) {
      width: auto;
    }
  }
  .img {
    z-index: -1;
  }
  .rollingBox {
    position: absolute;
    top: -430px;
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
    box-shadow: 0px 4px 12px 2px #0000002e;
    background: #3b3b3b80;
    padding: 10px 20px;
  }
  .box2 {
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
      height: auto;
    }
  }
  .consulation2 {
    height: 1216.96px;
    @media (max-width: 769px) {
      height: auto;
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
