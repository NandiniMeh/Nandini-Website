import React, { useState } from "react";
import { Gallery } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  function toggleModal() {
    setOpen(!isOpen);
  }

  function toggleModal2() {
    setOpen2(!isOpen2);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="nandini_tm_portfolio">
            <div className="nandini_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>
                    Creative Portfolio
                    <strong style={{ color: "#0d98ba" }}>.</strong>
                  </h3>
                </div>
              </div>
            </div>

            <div className="portfolio_filter">
              <div className="list_wrapper">
                <ul className="portfolio_list">
                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/battleship.png`}
                          alt="battleship"
                          data-tip
                          data-for="shot"
                          role="button"
                          onClick={toggleModal}
                          onMouseEnter={() =>
                            setTooltipContent("Battleship Game")
                          }
                        />
                        <ReactTooltip
                          id="shot"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>{tooltipContent}</h5>
                          </div>
                        </ReactTooltip>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/markManager.jpg`}
                          alt="Mark Management"
                          data-tip
                          data-for="shot2"
                          role="button"
                          onClick={toggleModal2}
                          onMouseEnter={() =>
                            setTooltipContent("Mark Management")
                          }
                        />
                        <ReactTooltip
                          id="shot2"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>{tooltipContent}</h5>
                          </div>
                        </ReactTooltip>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/gastech.jpg`}
                          alt="Details"
                          data-tip
                          data-for="detail"
                          onClick={toggleModalThree}
                          onMouseEnter={() =>
                            setTooltipContent("Gastronomous Company Website")
                          }
                        />
                      </div>
                      <ReactTooltip
                        id="detail"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{tooltipContent}</h5>
                        </div>
                      </ReactTooltip>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/theHub.jpg`}
                          alt="Details"
                          data-tip
                          data-for="detail2"
                          onClick={toggleModalFour}
                          onMouseEnter={() => {
                            setTooltipContent("The Hub App");
                            ReactTooltip.rebuild();
                          }}
                        />
                      </div>
                      <ReactTooltip
                        id="detail2"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{tooltipContent}</h5>
                        </div>
                      </ReactTooltip>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/weatherChecker.jpg`}
                          alt="weather checker"
                          data-tip
                          data-for="shot3"
                          onClick={toggleModalFive}
                          onMouseEnter={() => {
                            setTooltipContent("Weather Checker");
                            ReactTooltip.rebuild();
                          }}
                        />
                      </div>
                      <ReactTooltip
                        id="shot3"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{tooltipContent}</h5>
                        </div>
                      </ReactTooltip>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <div className="entry nandini_tm_portfolio_animation_wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/resumeGenerator.jpg`}
                          alt="Resume Builder"
                          data-tip
                          data-for="shot4"
                          role="button"
                          onClick={toggleModalSix}
                          onMouseEnter={() => {
                            setTooltipContent("Resume Builder");
                            ReactTooltip.rebuild();
                          }}
                        />
                      </div>
                      <ReactTooltip
                        id="shot4"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{tooltipContent}</h5>
                        </div>
                      </ReactTooltip>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Gallery>

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/gastech.png)`,
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3>Gastronomous Technologies Company Website</h3>
                <span>Pro Bono Project</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    Gastronomous is a startup that is looking to revolutionize
                    the kitchen industry through automated kitchen appliances.
                    Looking for a redesign of their website, they approached IDC
                    (Innovative Design Co.), a pro-bono company that aids
                    startups in design strategies. Being a designer with IDC, I
                    worked with Gastronomous alongside my fellow designer to
                    redesign their website!
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Gastronomous Technologies</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Web design and development</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>Nov 2021 - Feb 2022</span>
                    </li>
                    <li>
                      <span className="first">Website Link</span>
                      <span>
                        <a href="https://www.gastronomous.ca/">
                          {" "}
                          www.gastronomous.ca
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="designThinking">
                <h5>Design Thinking Approach</h5> <br />
                <p>
                  <b>Design Question:</b> How might we improve elements like
                  structure, content and visuals of previous website to better
                  serve customers?
                </p>{" "}
                <br />
                <h6>Our (Re)Design Process </h6>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/design_process.png`}
                  alt="design process"
                  style={{ marginBottom: "2%" }}
                ></img>
                <h6>1. Research</h6>
                <p>
                  Being a new member of the Gastronomous team, I had no previous
                  experience with the company and it's website. Thus, we started
                  our research process by identifying the pain points in the
                  current website, and the areas where improvement could be
                  made.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/research.png`}
                  alt="research"
                  style={{ marginBottom: "2%" }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/potential_improvements.png`}
                  alt="potential improvements"
                  style={{
                    marginBottom: "2%",
                    height: "60%",
                    width: "60%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  Based on our research of the current website, we narrowed down
                  the following major pain points:
                  <ul>
                    <li>
                      Website lacks information and does a poor job of educating
                      the user{" "}
                    </li>
                    <li>
                      Old-fashioned design - a major contrast to the modern
                      product the company is trying to sell!
                    </li>{" "}
                    <li>
                      Lack of aesthetic apeal Cluttered information and graphics
                    </li>
                    <li>
                      No careers page or media page - information on careers and
                      articles scattered across other pages{" "}
                    </li>
                    Thus, we came to the conclusion that users require a website
                    that is more informative and tells a story about the
                    product. In order for the user to be interested and
                    intrigued by the content, the website also needs better
                    visuals and a more clean look.
                  </ul>
                </p>
                <h6 style={{ marginTop: "4%" }}>Wireframes</h6>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/walkthrough-home.gif`}
                  alt="home screen"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "60%",
                    width: "60%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/walkthrough-nav.gif`}
                  alt="navigation screen"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "60%",
                    width: "60%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/other-pages.JPG`}
                  alt="other pages"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "100%",
                    width: "100%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/theHubScreens.jpeg)`,
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3>The Hub</h3>
                <span>App Design</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Designathon</span>
                      <span>TILE, UW/UX</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>App Design</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 2021</span>
                    </li>
                    <li>
                      <span className="first">Role</span>
                      <span>
                        Designer - Interviews, survey, low-fi & hi-fi
                        prototyping, logo design
                      </span>
                    </li>
                    <li>
                      <span className="first">Team</span>
                      <span>4 Designers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="designThinking">
                <h5>Design Thinking Approach</h5> <br />
                <p style={{ marginBottom: "2%" }}>
                  <b>Design Question:</b> How might we improve student
                  engagement on digital campuses?
                </p>
                <h6 style={{ marginBottom: "2%" }}>
                  Walkthrough Story for the HiFi
                </h6>
                <p>
                  Elijah wants to study for his CS course with some friends.
                  However, due to COVID, he cannot do so. So he opens up TheHub
                  and logs into his account.
                </p>
                <p>
                  There are many suggested discussion topics based on Elijah's
                  interests that he can join. Since he's looking for a specific
                  course, he looks under courses for ongoing calls. He can't
                  find any, so he decides to share a post on TheHub.
                </p>
                <p>
                  Elijah posts a message about what he's looking for. After
                  awhile, he gets a notification from the app. It's an invite
                  from another Hub user for a group call for the course he wants
                  to study for.
                </p>
                <p>
                  During the study session, Elijah and his study-buddies recieve
                  conversation starter recommendations from the app. After they
                  end the call, Elijah can add his new friends to his friend
                  list. He can also view his profile, which contains information
                  about his ongoing courses and interests.
                </p>
                <h6>High Fidelity Model (HiFi)</h6>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/Login.gif`}
                  alt="other pages"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "40%",
                    width: "40%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/Searching.gif`}
                  alt="other pages"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "40%",
                    width: "40%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/Posting.gif`}
                  alt="other pages"
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                    height: "40%",
                    width: "40%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/End Call.gif`}
                  alt="other pages"
                  style={{
                    marginBottom: "9%",
                    marginTop: "5%",
                    height: "40%",
                    width: "40%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <h6>High Fidelity Model (HiFi) Interactive Mockup</h6>
                <iframe
                  title="theHubMockup"
                  width="100%"
                  height="700"
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/fn8eM9eJpahb57zchK8bzG/TheHub?type=design&node-id=401-6731&scaling=scale-down&page-id=33%3A730&starting-point-node-id=401%3A6731"
                  allowfullscreen
                  style={{
                    marginBottom: "2%",
                    marginTop: "5%",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/mockup-battleship.png)`,
                    transform: "scale(1.2) translateX(3%)",
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3 style={{ marginTop: "2%" }}>BattleShip Game</h3>
                <span>Game Development</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    Battleship is a war-themed board game for two players in
                    which the opponents try to guess the location of their
                    opponent's warships and sink them. The gameplay is
                    straightforward. Each player hides ships on a plastic grid
                    containing vertical and horizontal space coordinates.
                    Players take turns calling out row and column coordinates on
                    the other player's grid in an attempt to identify a square
                    that contains a ship.
                  </p>
                  <p>
                    In this game, I've constructed a mock artificial
                    intelligence (AI) model that competes with the user. The AI
                    randomly selects positions on the user's grid to launch
                    attacks and also randomly places its own ships on the grid,
                    factoring in the dimensions of the ships in terms of the
                    grid squares. The AI and user take turns to attack positions
                    on each others grid after the game has begun until either
                    the AI or the user have won by sinking all the competitor's
                    ships.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Course</span>
                      <span>CS349 - User Interfaces</span>
                    </li>
                    <li>
                      <span className="first">Languages & Frameworks</span>
                      <span>IntelliJ IDEA, Kotlin, JavaFX</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>April 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="designThinking">
                <h5>Game Walthrough</h5> <br />
                <p style={{ marginBottom: "2%" }}>
                  <ol style={{ marginLeft: "2%", marginBottom: "5%" }}>
                    <li style={{ marginBottom: "2%" }}>
                      Players can position their ships on their board by
                      selecting a ship from the harbor with a left click and
                      then placing it on the board with another left click.
                      Ships can be altered to a horizontal orientation by a
                      single right click, and they can be switched back to a
                      vertical position with another right click.
                    </li>
                    <li style={{ marginBottom: "2%" }}>
                      Once all of the player's ships are strategically
                      positioned on their board, the 'Start Game' button becomes
                      active. Upon clicking this button, the game begins and the
                      placement of the ships is locked in, disallowing any
                      further movement.
                    </li>
                    <li style={{ marginBottom: "2%" }}>
                      Once the game has started, the player can launch an attack
                      by clicking on a specific grid square on the AI's board.
                      If a clicked square hosts a ship, it changes to a dark
                      gray color, signifying a hit. Conversely, if the square is
                      empty, it turns light gray, indicating a miss. When all
                      grid squares housing a single ship are hit, the entire
                      ship, including all the row/column grid squares it
                      occupies, turns red indicating a sink. The player and the
                      AI take turns to initiate an attack on their competitors
                      respective boards.
                    </li>
                    <li style={{ marginBottom: "2%" }}>
                      Once the AI or the player has sunk all 5 ships, the game
                      will end and the winner is declared.
                    </li>
                  </ol>
                </p>
                <h5>Walkthrough Game</h5>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/battleship-1.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  Once the player has strategically positioned all the fleet's
                  ships, the 'Start Game' button becomes accessible. At this
                  point, the player can click on it whenever ready to finalize
                  the placements of the ships on their board.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/battleship-2.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  After all the ships are placed, the player initiates the game
                  with the first move, which could either hit or miss an
                  opponent's ship. Following the player's move, the AI takes its
                  turn. As demonstrated above, both the player and the AI missed
                  their targets in their initial attacks.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/battleship-3.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  Following a series of alternating attacks, if the player
                  emerges victorious, a celebratory banner reading 'You've won'
                  appears at the top of the game interface. To add to the joyous
                  atmosphere, virtual confetti rains down across the screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal2}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/markManagement-overview.png)`,
                    transform: "scale(1.2) translateX(3%)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3 style={{ marginTop: "2%" }}>Mark Management Tool</h3>
                <span>
                  Application to visualize and manage marks for each term
                </span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    The Mark Management Tool serves as an essential resource for
                    tracking and comparing a user's academic performance across
                    different terms in four distinctive ways. It computes the
                    average cumulative grades per term, offering a clear measure
                    of the student's scholastic growth. Additionally, it traces
                    the advancement towards a Computer Science degree from the
                    University of Waterloo by effectively monitoring completed
                    and pending course requirements. Moreover, this tool
                    provides a pie chart analysis of grades for all the courses
                    undertaken by the user so far, furnishing a visually
                    compelling overview of academic outcomes.
                  </p>
                  <p>
                    In a previous version of this tool I created, rather than
                    providing visual representations of the courses taken, it
                    featured a filtering and sorting mechanism. This allowed
                    users to view their courses according to specific criteria,
                    making it easier to track their progress and plan ahead.
                    However, regardless of the version, the tool retained the
                    user-friendly feature of allowing users to add, update, and
                    delete the courses they've enrolled in, ensuring an accurate
                    reflection of their academic journey.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Course</span>
                      <span>CS349 - User Interfaces</span>
                    </li>
                    <li>
                      <span className="first">Languages & Frameworks</span>
                      <span>IntelliJ IDEA, Kotlin, JavaFX</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#current-iteration-section">
                Jump to Current Iteration section
              </a>{" "}
              <br></br>
              <a href="#previous-iteration-section">
                Jump to Previous Iteration section
              </a>
              <div className="designThinking">
                <h5
                  style={{ marginBottom: "3%", marginTop: "5%" }}
                  id="current-iteration-section"
                >
                  Mark Management Visualizations
                </h5>
                <p>
                  1. <b>Average By Term</b> <br></br>
                  This visualization feature generates a line graph that depicts
                  the average grades for each academic term. By plotting these
                  averages on the graph, users can observe the trends and
                  patterns in their academic performance over time. This line
                  graph offers a visual representation of the progress and
                  fluctuations in average grades, allowing users to identify
                  improvements, setbacks, or consistent performance.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management-1.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  2. <b>Progress Towards Degree</b> <br></br>
                  This visualization feature generates a horizontal bar graph
                  that illustrates the progress towards earning a degree in
                  Computer Science at the University of Waterloo. The graph
                  represents the completion of specific requirements, such as
                  the number of credits achieved from CS courses, Math courses,
                  and other relevant criteria. As the user completes the
                  necessary requirements, the corresponding bars on the graph
                  will progressively fill up, visually indicating the progress
                  made towards fulfilling the degree requirements.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management-2.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  3. <b>Course Outcomes</b> <br></br>
                  This visualization feature generates a pie chart that provides
                  an overview of the distribution of course grades based on
                  different grade ranges. The pie chart segments are
                  differentiated by colors to represent various grade
                  categories, such as "excellent" for grades 95+ and "great" for
                  grades 90-95. When hovering over a specific segment of the pie
                  chart, the corresponding courses that fall within that grade
                  range are displayed in the top left corner of the panel.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management-3.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>

                <h5
                  style={{ marginBottom: "3%" }}
                  id="previous-iteration-section"
                >
                  Previous iteration
                </h5>
                <p>
                  On creating courses, they are displayed in the panel. When
                  'Include WD' is checked, the withdrawn courses are shown, else
                  hidden. Some additional details such as Course Average,
                  Courses Taken, Courses Failed etc are shown.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management1-1.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management1-2.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  Users can conveniently sort the courses in the panel based on
                  different criteria. They can choose to sort them in ascending
                  or descending order of grade, by term, or lexicographically by
                  course code.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management1-3.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  In addition to the sorting options mentioned earlier, users
                  can apply filtering criteria to further refine the displayed
                  courses in the panel. The available filtering options include
                  showing only CS courses, Math courses, other courses, or
                  displaying all courses. When users select a filtering
                  criteria, it is applied on top of the existing sorting
                  criteria.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/management1-4.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/weatherChecker-1.png)`,
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3>Weather Checker Application</h3>
                <span>React application</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    The Weather Checker application is an exceptional tool that
                    combines the power of React and the openWeather API to
                    deliver an immersive and informative weather experience.
                    With this user-friendly application, users can effortlessly
                    access real-time weather updates for any city they desire.
                    Upon entering the city name, the application provides
                    essential weather details such as temperature, feels like
                    temperature, and the current sky conditions, including clear
                    skies, clouds, haze, fog, and more.
                  </p>
                  <p>
                    What sets this application apart is its attention to detail
                    and visual engagement. As users explore the weather
                    information, they are greeted with a dynamic logo that
                    adjusts according to the time of day and weather conditions.
                    A black sun logo symbolizes clear skies during the
                    nighttime, while a light-colored cloud logo represents
                    cloudy conditions during the daytime. This intuitive visual
                    cue provides users with instant information about the
                    current weather scenario.
                  </p>
                  <p>
                    Moreover, the Weather Checker application takes the user
                    experience to another level by dynamically adapting the
                    background according to the current sky condition in the
                    selected city. If the city is experiencing cloudy skies, the
                    application's background seamlessly transforms into a
                    captivating cloudy scenery, enhancing the overall ambiance.
                    Similarly, if the weather indicates snowfall, the background
                    beautifully portrays a snowy landscape, creating an
                    immersive and enchanting experience for the users.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Github Link</span>
                      <span>
                        <a href="https://github.com/NandiniMeh/weather-checker">
                          NandiniMeh/weather-checker
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="first">Languages & Frameworks</span>
                      <span>React, JSX, Material UI, Node.js</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>January 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="designThinking">
                <h5 style={{ marginBottom: "5%" }}>
                  Walkthrough of Application
                </h5>
                <p>
                  On the homepage of the application, users are greeted with a
                  prompt to enter the name of a city.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/weatherChecker-1.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
                <p>
                  Upon searching for a city like Los Angeles, the Weather
                  Checker application instantly presents the current weather
                  condition. Users are greeted with a visually immersive
                  experience featuring a customized background image that
                  accurately reflects the weather in Los Angeles. Accompanied by
                  a distinctive logo indicating the weather conditions and
                  whether it's daytime or nighttime, this combination of
                  real-time data, personalized backgrounds, and weather-specific
                  logos delivers an engaging and aesthetic experience for users.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/weatherChecker-2.png`}
                  alt="other pages"
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="nandini_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/svg/cancel.svg`}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/portfolio/resumeMaker-home.png)`,
                  }}
                ></div>
              </div>

              <div className="portfolio_main_title">
                <h3>Resume Builder Application</h3>
                <span>React application</span>
              </div>

              <div className="main_details">
                <div className="textbox">
                  <p>
                    The Resume Builder Application provides users with a
                    hassle-free solution for creating a well-formatted resume
                    without the need to manually handle formatting and spacing.
                    This user-friendly tool offers multiple subsections where
                    users can conveniently input all the necessary information
                    for a comprehensive resume, including education, links,
                    experience, and more. Once the user has entered their
                    details, they can simply click the "resumake" button,
                    triggering the application to generate a PDF document that
                    incorporates all the provided information into a
                    professionally designed resume. This streamlined process
                    eliminates the complexities of manual formatting and ensures
                    that the resulting PDF resume showcases the user's
                    qualifications and achievements effectively.
                  </p>
                </div>

                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Github Link</span>
                      <span>
                        <a href="https://github.com/NandiniMeh/resume-builder">
                          NandiniMeh/resume-builder
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="first">Languages & Frameworks</span>
                      <span>React, JSX, Material UI, Node.js</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>January 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="designThinking">
                <h5 style={{ marginBottom: "5%" }}>
                  Walkthrough of Application
                </h5>
                <p>
                  On the homepage of the application, users are presented with a
                  user-friendly interface where they can input their personal
                  and professional information. This information is then
                  automatically formatted and organized into a comprehensive
                  resume. By filling out the required fields, such as name,
                  contact details, education, work experience, skills, and other
                  relevant sections, users can effortlessly create a
                  professional-looking resume tailored to their specific
                  background and qualifications.
                </p>
                <video
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/resume-walkthrough.mp4`}
                  controls
                  autoplay
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    height: "100%",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                <p>
                  After the user inputs information for each section, they can
                  simply click the "resumeMake!" button. This triggers the
                  application to generate a PDF resume that takes the provided
                  information and formats it into a comprehensive and
                  professionally designed document.
                </p>
                <video
                  src={`${process.env.PUBLIC_URL}/assets/img/portfolio/created_resume.mp4`}
                  controls
                  autoplay
                  style={{
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "block",
                    height: "50%",
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
