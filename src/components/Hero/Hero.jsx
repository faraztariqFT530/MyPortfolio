import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section id="home-container" className="hero-container">
        <div className="hero-content">
          <h2>Achieve Precision with Quality Assurance</h2>
          <p>
            ISTQB Certified Software Quality Assurance Engineer | Delivering exceptional user experiences through rigorous testing
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/appium.jpg`} alt="appium" />
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/img/faraztariq.jpeg`} alt="My Image" />
          </div>
          <div>
            <div className="tech-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/selenium.png`} alt="selenium" />
            </div>
            <div className="tech-icon">
              <img
                style={{ height: "3rem", width: "3rem" }}
                src={`${process.env.PUBLIC_URL}/assets/img/postman.jpg`}
                alt="postman"
              />
            </div>
            <div className="tech-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/testng.png`} alt="testng" />
            </div>
            <div className="tech-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/istqbhd.png`} alt="istqb" />
            </div>
            <div className="tech-icon">
              <img src={`${process.env.PUBLIC_URL}/assets/img/git.jpg`} alt="git" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
