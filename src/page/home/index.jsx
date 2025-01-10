import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { Header } from "../../component/header";
import { Footer } from "../../component/footer";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import imgIntro from "../../assets/images/imgIntro.png";
import imgQrcode from "../../assets/images/qrCode.png";
import imgArrow from "../../assets/images/arrow.png";
import iconArroww from "../../assets/images/nextw.png";
import iconArrowb from "../../assets/images/nextb.png";
import iconPin from "../../assets/images/paper-pin.png";
import imgEsten from "../../assets/images/essential-bg.svg";
import "./index.css";

export function Home() {
  const texts = [
    "NFTs",
    "Games",
    "DEXs",
    "AnyThing",
    "RWAs",
    "Tokens",
    "Lendings",
    "Stablecoins",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F9F933",
    "#FF33A1",
    "#33FFF9",
    "#F933FF",
    "#FF6A33",
  ];

  useEffect(() => {
    if (charIndex === texts[currentWordIndex].length) {
      setIsComplete(true);
    }
  }, [charIndex, currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isComplete) {
        setCurrentText((prev) => prev + texts[currentWordIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsComplete(false);
        }, 1000);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [charIndex, currentWordIndex, isComplete]);

  const getWordStyle = () => {
    return { color: colors[currentWordIndex % colors.length] };
  };

  const getCursorStyle = () => {
    return { color: colors[currentWordIndex % colors.length] };
  };

  const [imageSrc, setImageSrc] = useState(iconArroww);

  const handleMouseEnter = () => {
    setImageSrc(iconArrowb);
  };

  const handleMouseLeave = () => {
    setImageSrc(iconArroww);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Xóa sự kiện khi unmount
  }, []);




  return (
    <div>
      <Header />
      <div className="content pt-5">
        {/* ------------------------------------------------- */}

        <div className="pt-5 my-3 position-relative content-main-one">
          <div className="content-left-one position-absolute">
            <h1 class="content-left-h1-one">Mine</h1>
            <h1>
              <div className="content-left-ani-1-one">
                <span style={getWordStyle()}>{currentText}</span>
                {isComplete && (
                  <span className="cursor" style={getCursorStyle()}>
                    |
                  </span>
                )}
              </div>
            </h1>
            <h1 className="content-left-h1-one">Play Earn</h1>
          </div>
          <div class="content-right-one text-uppercase position-absolute">
            <span class="">/// one protocol. </span>
            any Blockchain.
          </div>
          <div className="video-container">
            <ReactPlayer
              url="https://res.cloudinary.com/dpy89g0wy/video/upload/v1736481669/video1_c6i9am.mp4"
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/* ------------------------------------------------- */}
        <div className="py-5 custom-box-start">
          <div className="d-flex justify-content-between custom-div-box-start">
            <div className="custom-box-1">
              <div className="d-flex flex-column text-uppercase custom-div-text-start">
                <a href="">
                  <span>01</span> / Home
                </a>
                <a href="">
                  <span>02</span> / How it works
                </a>
                <a href="">
                  <span>03</span> / Statistics
                </a>
                <a href="">
                  <span>04</span> / Start mining
                </a>
              </div>
            </div>
            <div className="custom-box-2">
              <div
                className="border custom-button-start d-flex justify-content-between align-items-center "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="background"></div>
                <span className="custom-button-start-text text-uppercase">
                  Start Mining
                </span>
                <div className="custom-button-start-img overflow-hidden">
                  <img
                    src={imageSrc}
                    alt=""
                    className="w-100 h-100 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="custom-box-3"></div>
          </div>
          <div className="d-flex gap-2 h-100 justify-content-end py-3 custom-div-text-scroll">
            <span>Scroll to explore</span>
            <div className="h-100 custom-div-img-scroll">
              <img
                src={iconArroww}
                alt=""
                className="w-100 h-100 objectfit-cover"
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- */}

        <div className="content-two py-4">
          <h1 id="stats" className="custom-title-two text-start py-5">
            Elonhash Network Statistics
          </h1>
          <div className="d-flex">
            <div className=" video-container-2 col-4">
              <ReactPlayer
                url="https://res.cloudinary.com/dpy89g0wy/video/upload/v1736481974/video2_xruwns.mp4"
                controls={false}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className="" style={{ color: "white", width: "100%" }}>
              <div className="">
                <p className="custom-p-note-two pt-5">
                  Track <span>real-time</span> performance metrics of the{" "}
                  <span>Elonhash network.</span>
                  The transparent system ensures that all mining contributions
                  are properly recorded and rewarded.
                </p>
                <div className="d-flex flex-wrap">
                  <div className="border custom-block-two p-4">
                    <div className="d-flex justify-content-between border-bottom mb-3">
                      <span style={{ fontSize: "16px" }}>0/1</span>
                      <div
                        className="overflow-hidden"
                        style={{ width: "18px", height: "100%" }}
                      >
                        <img
                          src={iconPin}
                          className="w-100 h-100 objectfit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <p ref={ref} className="custom-p-two">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={1000000}
                          duration={2.5}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                    </p>
                    <p className="custom-p-2-two">Blocks</p>
                  </div>
                  <div className="border custom-block-two">
                    <div className="d-flex justify-content-between border-bottom mb-3">
                      <span style={{ fontSize: "16px" }}>0/2</span>
                      <div
                        className="overflow-hidden"
                        style={{ width: "18px", height: "100%" }}
                      >
                        <img
                          src={iconPin}
                          className="w-100 h-100 objectfit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <p ref={ref} className="custom-p-two">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={10000000}
                          duration={2.5}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                    </p>
                    <p className="custom-p-2-two">Total Token Supply</p>
                  </div>
                  <div className="border custom-block-two">
                    <div className="d-flex justify-content-between border-bottom mb-3">
                      <span style={{ fontSize: "16px" }}>0/3</span>
                      <div
                        className="overflow-hidden"
                        style={{ width: "18px", height: "100%" }}
                      >
                        <img
                          src={iconPin}
                          className="w-100 h-100 objectfit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <p ref={ref} className="custom-p-two">
                      ~{" "}
                      {inView ? (
                        <CountUp
                          start={0}
                          end={10}
                          duration={1.5}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                      s
                    </p>
                    <p className="custom-p-2-two">Block Generation Time</p>
                  </div>
                  <div className="border custom-block-two">
                    <div className="d-flex justify-content-between border-bottom mb-3">
                      <span style={{ fontSize: "16px" }}>0/4</span>
                      <div
                        className="overflow-hidden"
                        style={{ width: "18px", height: "100%" }}
                      >
                        <img
                          src={iconPin}
                          className="w-100 h-100 objectfit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <p ref={ref} className="custom-p-two">
                      {inView ? (
                        <CountUp start={0} end={4096} duration={1.5} />
                      ) : (
                        0
                      )}{" "}
                      +
                    </p>
                    <p className="custom-p-2-two">First Block Reward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}

        <div className="content-three">
          <div className="text-start pt-5 pb-4">
            <h1 className="custom-h1-three pt-1">Outstanding features</h1>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="custom-div-note-three">
              <span className="custom-p-note-three text-start pb-4">
                Discover how <span>Elonhash</span> revolutionizes <span>token distribution</span> through
                its innovative, transparent mining mechanism.
              </span>
            </div>
          </div>



          <div className="d-flex custom-div-content-three my-5">
            <div className="w-100 h-auto overflow-hidden custom-img-box-outstanding">
              <img loading="lazy" src={imgEsten} alt="" style={{ objectFit: "cover" }} className="w-100 h-100 objectfit-cover" />
            </div>
            <div className="d-flex flex-wrap custom-box-outstanding" >

              <div className="custom-box-three flex-grow-1" style={{ minWidth: '250px', maxWidth: '100%', margin: '0.5rem' }}>
                <div className="custom-box-three-con d-flex flex-column justify-content-between h-100">
                  <div className="custom-box-three-content">
                    <div className="d-flex justify-content-between">
                      <div className="overflow-hidden" style={{ width: '27px' }}>
                        <img className="w-100 h-100 objectfit-cover" src={icon1} alt="" />
                      </div>
                      <span className="custom-block-span-three">/ 01</span>
                    </div>
                    <h1 className="custom-block-h1-three">Fair Distribution</h1>
                  </div>
                  <div className="custom-block-dis-three p-4">
                    Experience equality in token distribution through computational challenges. The system ensures every participant has an equal opportunity to earn rewards based on their contribution.
                  </div>
                  <ul className="custom-block-ul-three">
                    <li>Equal mining opportunities for all participants</li>
                    <li>Transparent reward distribution</li>
                    <li>No pre-mining or privileges</li>
                  </ul>
                </div>
              </div>
              <div className="custom-box-three flex-grow-1" style={{ minWidth: '250px', maxWidth: '100%', margin: '0.5rem' }}>
                <div className="custom-box-three-con d-flex flex-column justify-content-between h-100">
                  <div className="custom-box-three-content">
                    <div className="d-flex justify-content-between">
                      <div className="overflow-hidden" style={{ width: '27px' }}>
                        <img className="w-100 h-100 objectfit-cover" src={icon2} alt="" />
                      </div>
                      <span className="custom-block-span-three">/ 02</span>
                    </div>
                    <h1 className="custom-block-h1-three">Dynamic Difficulty</h1>
                  </div>
                  <div className="custom-block-dis-three p-4">
                    The mining difficulty is recalibrated every 20 blocks to
                    maintain consistent block generation, ensuring fair
                    distribution as more miners join.
                  </div>
                  <ul className="custom-block-ul-three">
                    <li>Automatic difficulty adjustment</li>
                    <li>Consistent 10-second approximate block time</li>
                    <li>Balanced mining environment</li>
                  </ul>
                </div>
              </div>
              <div className="custom-box-three flex-grow-1" style={{ minWidth: '250px', maxWidth: '100%', margin: '0.5rem' }}>
                <div className="custom-box-three-con d-flex flex-column justify-content-between h-100">
                  <div className="custom-box-three-content">
                    <div className="d-flex justify-content-between">
                      <div className="overflow-hidden" style={{ width: '27px' }}>
                        <img className="w-100 h-100 objectfit-cover" src={icon3} alt="" />
                      </div>
                      <span className="custom-block-span-three">/ 03</span>
                    </div>
                    <h1 className="custom-block-h1-three">Shared Mining</h1>
                  </div>
                  <div className="custom-block-dis-three p-4">
                    Collaborate with other miners in Elonhash's collaborative
                    mining system. Earn proportional rewards through an
                    innovative shared distribution mechanism that rewards
                    teamwork.
                  </div>
                  <ul className="custom-block-ul-three">
                    <li>30% Block Finder Reward</li>
                    <li>70% Share for Network Contributors</li>
                    <li>Proportional Share Distribution</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="" style={{ marginTop: '80px', borderTop: '1px solid #272727', borderBottom: '1px solid #272727' }}>


            <div className="custom-block-three-v2-main">

              <div className="row">

                <div className="col-md-4 col-12 d-flex flex-column justify-content-between">
                  <div className=" pt-5 pb-4">
                    <h1
                      id="how-it-works"
                      className="custom-h1-three-v2 pt-1"
                    >
                      How Elonhash Works
                    </h1>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="custom-div-note-three pb-3">
                      <span className="custom-p-note-three-v2">
                        Simply put: you are using <span> your device's power </span> to solve some
                        kind of captcha to <span>get tokens </span> in return.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-12 row ">
                  <div className="mt-3 col-md-6 custom-block-three-v2-all " >
                    <div className="custom-block-three-v2 px-5">
                      <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                        Mining Process
                      </h1>
                      <p className="custom-block-p-three-v2">
                        Your device solves computational challenges to create
                        blocks. Successfully mined blocks earn you rewards
                        starting at 4096 tokens.
                      </p>
                      <p className="custom-block-p2-three-v2">Key Points:</p>
                      <ul className="custom-block-ul-three-li mt-auto pb-4">
                        <li>Similar to Bitcoin mining algorithm</li>
                        <li>Blocks are created every 10 seconds</li>
                        <li>Increasing block rewards over time</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-3 custom-block-three-v2-all">
                    <div className="custom-block-three-v2 px-5">
                      <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                        Reward System
                      </h1>
                      <p className="custom-block-p-three-v2">
                        Solo miners receive 100% of block rewards. In shared
                        mining, rewards are split between the block finder and
                        contributors.
                      </p>
                      <p className="custom-block-p2-three-v2">Key Points:</p>
                      <ul className="custom-block-ul-three-li mt-auto pb-4">
                        <li>Block finder: 30% of reward</li>
                        <li>Share contributors: 70% of reward</li>
                        <li>Fair distribution based on contribution</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 mt-3 custom-block-three-v2-all">
                    <div className="custom-block-three-v2 px-5">
                      <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                        Token Distribution
                      </h1>
                      <p className="custom-block-p-three-v2">
                        Mining will continue until 1,000,000 blocks are generated,
                        which is expected to be completed in April 2025.
                      </p>
                      <p className="custom-block-p2-three-v2">Key Points:</p>
                      <ul className="custom-block-ul-three-li mt-auto pb-4">
                        <li>Total supply: 1,000,000,000 tokens</li>
                        <li>Distribution via TON Blockchain</li>
                        <li>Tokens issued as jettons</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}

        <div className="container-fluid py-5 ">
          <div className="row">
            <div className="col-md-5 custom-div-left-four h-100 d-flex align-items-center justify-content-center position-relative h-auto d-none d-md-block">
              <div className=" position-absolute p-5">
                <div className="custom-div-img-four" style={{
                  margin: "0rem 3.4rem"
                }}>
                  <img src={imgIntro} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 ">
              <div className="p-5">
                <div className="pt-5 pb-4">
                  <h1 className="text-center text-md-start custom-h1-four pt-1">
                    FAQs
                  </h1>
                </div>
                <div className="">
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">What is Elonhash?</h1>
                    <p className="custom-block-p-four">
                      Elonhash is a mining based game where players can earn
                      tokens by contributing resources, computing power. It uses
                      the same mining algorithm as Bitcoin but has unique,
                      innovative features for fair distribution.
                    </p>
                  </div>
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">
                      How do I start mining?
                    </h1>
                    <p className="custom-block-p-four">
                      Simply join the Telegram bot to start mining. No special
                      hardware is required - you can mine using your regular
                      device.
                    </p>
                  </div>
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">
                      When will tokens be distributed?
                    </h1>
                    <p className="custom-block-p-four">
                      Tokens will be distributed on the TON Blockchain as
                      jettons after all 1,000,000 blocks are mined (estimated in
                      April 2025).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------ */}
        <div className="custom-div-five py-5">
          <div className="">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="px-0 px-md-1">
                  <h1 className="custom-h1-three-v2 pt-5">#ELONHASH</h1>
                  <p className="custom-block-p-five py-3">
                    <span> MINING SIMULATION </span> game inside <span> TELEGRAM </span>
                  </p>
                  <p className="custom-block-p2-five pb-3">
                    Telegram mini game where you can earn rewards through mining
                    similar to Bitcoin.
                  </p>
                  <div className="d-flex gap-5 align-items-center custom-button-div-five">
                    <div class="border custom-button-start d-flex justify-content-center align-items-center">
                      <div class="background"></div>
                      <span class="custom-button-start-text text-uppercase" >Open in Telegram</span>
                    </div>
                    <div className="custom-button-div-speedtest-five d-flex justify-content-center align-items-center px-3 gap-3">
                      <img src={imgArrow} alt="" />
                      <p className="custom-p-speedtest-five">Speed Test</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="py-5 d-flex ms-0 ms-md-5 justify-content-center justify-content-md-start">
                  <div className=" border custom-div-qrcode-five d-flex justify-content-center align-items-center">
                    <div className="custom-qrcode-five">
                      <img src={imgQrcode} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}

        <div className="custom-div-six h-auto py-5 text-center">
          <div className="pt-5 pb-5">
            <h1 className="custom-h1-six pb-3">How Elonhash Works</h1>
            <p className="custom-p-six pb-3">
              Discover how Elonhash revolutionizes token distribution through
              innovative mining mechanics and community-driven features.
            </p>
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

              <div
                className="border custom-button-start d-flex justify-content-center align-items-center"
                onMouseLeave={handleMouseLeave}
                style={{ width: "450px" }}
              >
                <div className="background"></div>
                <span className="custom-button-start-text text-uppercase" style={{ fontSize: '16px' }}>
                  Start Mining
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
