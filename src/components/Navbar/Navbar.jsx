import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggalMenu = () => {
    setOpenMenu(!openMenu);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150;
      const { top } = section.getBoundingClientRect();
      window.scrollTo({
        top: top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSkills = () => {
    scrollToSection("skills-container");
  };

  const handleScrollToContact = () => {
    scrollToSection("contact-container");
  };
  const handleScrollToHome = () => {
    scrollToSection("home-container");
  };
  const handleScrollToWorkExperience = () => {
    scrollToSection("work-experience-container");
  };
  const handleScrollToProject = () => {
    scrollToSection("project-card-container");
  };
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Faraz_Tariq_SQA.pdf"; // Path to the file in the public folder
    link.download = "Faraz_Tariq_SQA.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggalMenu={toggalMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/assets/img/faraztariqsignature.png`}
            alt="logo"
          />

          <ul>
            <li>
              <a className="menu-item" onClick={handleScrollToHome}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToSkills}>
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToWorkExperience}>
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToProject}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToContact}>
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={downloadResume}>
              Resume
            </button>
          </ul>
          <button className="menu-btn" onClick={toggalMenu}>
            {openMenu ? (
              <CloseIcon style={{ fontSize: "1.8rem" }} />
            ) : (
              <MenuIcon style={{ fontSize: "1.8rem" }} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
