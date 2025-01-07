import React, { useState } from "react";
import "./index.css";
import menubar from "../../assets/images/menu.png";
import closebar from "../../assets/images/close.png";
import logo from "../../assets/images/logoElonHashNgang.png";

export function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [textStates, setTextStates] = useState({
    home: "</a> Home",
    howItWorks: "</a> How It Works",
    stats: "</a> Statistics",
    startMining: "</a> Start Mining",
  });

  const handle = () => {
    setisOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHover = (key, originalText) => {
    const generateRandomText = () => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return Array.from({ length: originalText.length })
        .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join("");
    };

    let intervalId = setInterval(() => {
      setTextStates((prevState) => ({
        ...prevState,
        [key]: generateRandomText(),
      }));
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);

      let i = 0;
      let displayText = "";

      const typingInterval = setInterval(() => {
        displayText = originalText.slice(0, i + 1);
        setTextStates((prevState) => ({
          ...prevState,
          [key]: displayText,
        }));

        i++;

        if (i === originalText.length) {
          clearInterval(typingInterval);
        }
      }, 30); // Tốc độ gõ mỗi ký tự
    }, 350);
  };

  return (
    <div
      className="position-fixed position-relative"
      style={{
        background: "rgba(10, 10, 10, 0.78)",
        backdropFilter: "blur(4px)",
        zIndex: "9999",
        minWidth: "100%",
      }}
    >
      <div
        className="header-home d-flex justify-content-between "
      >
        <div className="logo-header">
          <img src={logo} alt="" width="120px" />
        </div>
        <div className="div-menu text-center d-none d-lg-block">
          <div className="menu d-flex align-items-center h-100">
            <a
              className="text-decoration-none"
              href="#home"
              onMouseEnter={() => handleHover("home", "</a> Home")}
              onClick={scrollToTop}
            >
              <span>{textStates.home}</span>
            </a>
            <a
              className="text-decoration-none"
              href="#how-it-works"
              onMouseEnter={() =>
                handleHover("howItWorks", "</a> How It Works")
              }
            >
              <span>{textStates.howItWorks}</span>
            </a>
            <a
              className="text-decoration-none"
              href="#stats"
              onMouseEnter={() => handleHover("stats", "</a> Statistics")}
            >
              <span>{textStates.stats}</span>
            </a>
            <a
              className="text-decoration-none"
              href="#"
              onMouseEnter={() =>
                handleHover("startMining", "</a> Start Mining")
              }
            >
              <span>{textStates.startMining}</span>
            </a>
          </div>
        </div>
        <div className="div-button-menu d-block d-lg-none d-flex align-items-center">
          <button
            onClick={handle}
            style={{
              border: "none",
              padding: "0px",
              backgroundColor: "transparent",
              width: "24px",
              height: "24px",
            }}
          >
            <img
              src={`${!isOpen ? menubar : closebar}`}
              className="w-100 h-100"
              alt="Menu"
            />
          </button>
          <div
            className={`momenu h-auto position-absolute ${
              isOpen ? "open" : ""
            }`}
          >
            <div className={`menuMobile d-flex flex-column`}>
              <a
                className="text-decoration-none "
                href="#home"
                onClick={scrollToTop}
              >
                Home
              </a>
              <a className="text-decoration-none " href="#how-it-works">
                How It Works
              </a>
              <a className="text-decoration-none " href="#stats">
                Statistics
              </a>
              <a className="text-decoration-none " href="#">
                Start Mining
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
