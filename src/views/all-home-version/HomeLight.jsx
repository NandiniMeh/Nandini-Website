import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Courses from "../../components/Courses";
import Portfolio from "../../components/PortfolioCreative";
import Contact from "../../components/Contact";
import CopyRight from "../../components/CopyRight";
import PageTitle from "../../components/PageTitle";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Home Regular" />
      {/* End page title for seo */}

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div class="blob blob1"></div>
            <div class="blob blob2"></div>
            <div class="blob blob3"></div>
            <div className="leftpart_inner">
              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src={
                        process.env.PUBLIC_URL + "/assets/img/svg/home-run.svg"
                      }
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={
                        process.env.PUBLIC_URL + "/assets/img/svg/avatar.svg"
                      }
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={
                        process.env.PUBLIC_URL + "/assets/img/svg/briefcase.svg"
                      }
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={process.env.PUBLIC_URL + "/assets/img/svg/mail.svg"}
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={process.env.PUBLIC_URL + "/assets/img/svg/paper.svg"}
                      alt="mail"
                    />
                    <span className="menu_content"> Courses</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <CopyRight />
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="nandini_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About isDarkMode={isDarkMode} />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Portfolio />
                </div>
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Courses />
                </div>
              </TabPanel>
              {/* END COURSES MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
