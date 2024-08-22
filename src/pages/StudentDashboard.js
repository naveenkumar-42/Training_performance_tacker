import { useCallback } from "react";
import Main from "../components/Main";
import Image2 from "../components/Image2";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const onBackgroundClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <div className="student-dashboard4">
      <Main />
      <section className="info-wrapper">
        <div className="info">
          <div className="basic-details">
            <div className="frame-parent6">
              <div className="basic-info-parent">
                <div className="basic-info">
                  <div className="basic">
                    <div className="name-and-id">
                      <img
                        className="naveenkumar-profile-1"
                        loading="lazy"
                        alt=""
                        src="/naveenkumar-profile-1@2x.png"
                      />
                    </div>
                    <button className="image5">
                      <div className="continuing">CONTINUING</div>
                    </button>
                  </div>
                  <div className="attendance-details-parent">
                    <div className="attendance-details">
                      <div className="attendance-types">
                        <div className="present-days">Present Days</div>
                        <div className="attendance-values">
                          <div className="wrapper8">
                            <div className="div16">58</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="image-14-icon"
                      loading="lazy"
                      alt=""
                      src="/image-14@2x.png"
                    />
                  </div>
                </div>
                <div className="basic-info">
                  <div className="details1">
                    <div className="naveen-kumar-p-parent">
                      <h3 className="naveen-kumar-p1">NAVEEN KUMAR P</h3>
                      <a className="semester-v">7376222IT210</a>
                    </div>
                    <a className="semester-v">SEMESTER - V</a>
                    <div className="branch">
                      <div className="btech-information-technology">
                        B.Tech.-INFORMATION TECHNOLOGY
                      </div>
                    </div>
                    <div className="mentor">
                      <div className="mentor-name">
                        <div className="mentorselvakumar-m-it10846">
                          Mentor:SELVAKUMAR M( IT10846 ) 
                        </div>
                      </div>
                      <img
                        className="phone-icon"
                        loading="lazy"
                        alt=""
                        src="/phone@2x.png"
                      />
                    </div>
                    <div className="special-lab">
                      <div className="btech-information-technology">{`Special Lab: FULL STACK & DEVOPS`}</div>
                    </div>
                    <div className="boarding">
                      <div className="btech-information-technology">
                        <p className="boarding-hostel-emerald">{`Boarding: Hostel: EMERALD, `}</p>
                        <p className="boarding-hostel-emerald">Room No:439</p>
                      </div>
                    </div>
                    <div className="warden">
                      <div className="warden-details">
                        <div className="btech-information-technology">
                          Warden: Dr.PRAVEEN KUMAR D 
                        </div>
                      </div>
                      <img
                        className="phone-icon1"
                        loading="lazy"
                        alt=""
                        src="/phone@2x.png"
                      />
                    </div>
                  </div>
                  <Image2
                    trainingAndPlacementFA="Training and Placement FA"
                    background="80"
                    needImprovement="Need Improvement"
                    image="/image@2x.png"
                  />
                </div>
              </div>
              <div className="div17">
                <div className="full-stack">
                  <div className="full-stack-details">
                    <div className="btech-information-technology">
                      Full-Stack Rank
                    </div>
                    <div className="full-stack-value">
                      <div className="full-stack-placeholder">
                        <div className="btech-information-technology">
                          <p className="boarding-hostel-emerald">100</p>
                          <p className="boarding-hostel-emerald">90</p>
                          <p className="boarding-hostel-emerald">80</p>
                          <p className="boarding-hostel-emerald">70</p>
                          <p className="boarding-hostel-emerald">60</p>
                          <p className="boarding-hostel-emerald">50</p>
                          <p className="boarding-hostel-emerald">40</p>
                          <p className="boarding-hostel-emerald">30</p>
                          <p className="boarding-hostel-emerald">20</p>
                          <p className="boarding-hostel-emerald">10</p>
                        </div>
                        <div className="full-stack-rank-bar">
                          <div className="background" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div19" />
                </div>
                <div className="overall">
                  <div className="overall-details">
                    <div className="overall-value">
                      <div className="div20" />
                    </div>
                    <div className="overall-rank">
                      <div className="overall-rank-progress">
                        <div className="div21" />
                        <div className="div22" />
                      </div>
                      <button className="openapi" onClick={onBackgroundClick}>
                        <b className="details2">Details</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overall-progress">
                  <div className="background" />
                  <div className="background2" />
                </div>
                <div className="o-rank">
                  <div className="o-rank-value">
                    <div className="background" />
                  </div>
                  <div className="o-rank1">o Rank</div>
                </div>
              </div>
            </div>
            <div className="placement">
              <div className="basic1">
                <div className="profile-title">
                  <a className="placement-profile">Placement Profile</a>
                </div>
                <div className="rank-points">
                  <div className="rank-details">
                    <div className="rank-values">
                      <div className="rank-point-labels">
                        <div className="data">
                          <a className="rankpoint">{`FUll-Stack Rank  `}</a>
                        </div>
                        <div className="rankpoint-wrapper">
                          <a className="rankpoint1">Placement Cumulative</a>
                        </div>
                      </div>
                    </div>
                    <div className="improvement-area">
                      <div className="improvement-details">
                        <div className="image6">
                          <div className="rankpoint2">Eiligibility</div>
                        </div>
                      </div>
                      <div className="need-improvement-wrapper">
                        <div className="btech-information-technology">
                          Need Improvement
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="separator1">
                    <div className="background-wrapper">
                      <a className="background3">66</a>
                    </div>
                    <div className="background-wrapper">
                      <a className="background4">64.2</a>
                    </div>
                  </div>
                </div>
              </div>
              <Image2
                propHeight="unset"
                trainingAndPlacementFA="Training Assessment status"
                propWidth="203px"
                propFlex="1"
                background="6.5"
                propMinWidth="31px"
                propFlex1="1"
                needImprovement="Attened : 99"
                propAlignSelf="stretch"
                image="/image-1@2x.png"
                propHeight1="93px"
                propWidth1="101px"
              />
              <div className="achievement-title-parent">
                <div className="achievement-title">
                  <div className="achievement">{`Achievement `}</div>
                </div>
                <div className="techtotal" />
                <div className="achievement-types">
                  <div className="achievement-categories">
                    <div className="category-names">
                      <div className="technical">Technical</div>
                    </div>
                    <div className="category-names1">
                      <div className="paper">Paper</div>
                    </div>
                    <div className="category-names1">
                      <div className="paper">Project</div>
                    </div>
                    <div className="category-names">
                      <div className="technical">Internship</div>
                    </div>
                    <div className="product">Product</div>
                    <div className="product">Patent</div>
                  </div>
                  <div className="achievement-values">
                    <div className="tech-values">
                      <div className="value-name">
                        <div className="techtotal1" />
                        <div className="tech-value" />
                      </div>
                      <div className="value-name">
                        <div className="techtotal2" />
                        <div className="tech-value1" />
                      </div>
                      <div className="value-name">
                        <div className="techtotal2" />
                        <div className="tech-value2" />
                      </div>
                      <div className="value-name">
                        <div className="techtotal2" />
                        <div className="tech-value3" />
                      </div>
                      <div className="value-name">
                        <div className="techtotal2" />
                        <div className="tech-value4" />
                      </div>
                      <div className="value-name">
                        <div className="techtotal2" />
                        <div className="tech-value5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="skill-chart">
              <div className="c6">
                <div className="skill-type">
                  <b className="background5">0</b>
                </div>
                <div className="skill-description">
                  <div className="description-type">
                    <img
                      className="description-type-child"
                      loading="lazy"
                      alt=""
                      src="/group-13.svg"
                    />
                    <b className="background6">3</b>
                    <div className="description-name">
                      <b className="c7">C</b>
                    </div>
                    <div className="background7" />
                    <b className="b">7</b>
                  </div>
                  <button className="openapi">
                    <b className="details2">Details</b>
                  </button>
                </div>
              </div>
              <div className="java1">
                <div className="frame-parent7">
                  <img className="group-icon" alt="" src="/group-13-1.svg" />
                  <div className="detail-type">
                    <b className="empty-detail">2</b>
                    <img
                      className="detail-type-child"
                      loading="lazy"
                      alt=""
                      src="/ellipse-26.svg"
                    />
                  </div>
                  <div className="skill-data">
                    <b className="java2">JAVA</b>
                  </div>
                  <b className="b1">5</b>
                  <b className="all-communications-wil">0</b>
                </div>
                <div className="background-container">
                  <button className="openapi">
                    <b className="details2">Details</b>
                  </button>
                </div>
              </div>
              <div className="dsa1">
                <div className="frame-parent8">
                  <img className="frame-child2" alt="" src="/group-13-2.svg" />
                  <div className="vector-wrapper">
                    <img
                      className="ellipse-icon"
                      loading="lazy"
                      alt=""
                      src="/ellipse-26-1.svg"
                    />
                  </div>
                  <div className="frame-parent9">
                    <div className="wrapper9">
                      <b className="b3">4</b>
                    </div>
                    <b className="dsa2">DSA</b>
                  </div>
                  <b className="b4">12</b>
                  <b className="b5">0</b>
                </div>
                <div className="openapi-wrapper">
                  <button className="openapi">
                    <b className="details2">Details</b>
                  </button>
                </div>
              </div>
              <div className="java3">
                <div className="frame-parent10">
                  <img className="group-icon" alt="" src="/group-131.svg" />
                  <div className="frame-wrapper2">
                    <div className="empty-detail-icon-parent">
                      <div className="empty-detail-icon">
                        <img
                          className="empty-detail-icon-child"
                          loading="lazy"
                          alt=""
                          src="/ellipse-26-2.svg"
                        />
                      </div>
                      <b className="pin-post">5</b>
                    </div>
                  </div>
                  <b className="sql1">SQL</b>
                  <b className="b6">6</b>
                  <b className="all-communications-wil">0</b>
                </div>
                <div className="background-container">
                  <button className="openapi">
                    <b className="details2">Details</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
