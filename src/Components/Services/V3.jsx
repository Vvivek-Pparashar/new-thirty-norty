import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import './Services.css'

const V3 = () => {
  const style = {
    paddingBlock: "20px",
    textAlign: "center",
  }
  return (
    <>
      <NavBar />
      <div
        className={"USA container-fluid bg-primary mb-5 SH1"}
        style={{
          // paddingInline: "100px",
          paddingTop: "295px",
          paddingBottom: "200px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h2
          className="display-4 text-uppercase mb-lg-4"
          style={{ color: "white", textAlign: "center" }}
        >
          Scholarship in USA & Europe
        </h2>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Why choose,</h6>
            <h1 className="display-5 text-uppercase mb-0">EUROPE</h1>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Clay Court Expertise</h2>
              <p style={{ paddingTop: "10px" }}>
                Europe's dominance in clay courts, used in the French Open, translates to exceptional training grounds. Mastering clay hones control, strategy, and finesse, improving your all-court game.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Coaching Powerhouse</h2>
              <p>
                Europe boasts a rich heritage in tennis, with numerous academies staffed by experienced coaches. These coaches, many who trained champions themselves, can provide invaluable guidance to aspiring players.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Competitive Crucible</h2>
              <p>
                Europe is a breeding ground for tennis talent. Living and training there immerses you in a competitive environment. You'll constantly be pushed to improve as you face off against other strong players, some of whom might even be professional athletes training at the same academies.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Favorable Climate</h2>
              <p>
                Many European countries enjoy warm weather for extended periods, allowing for year-round outdoor training. This is a significant advantage compared to regions with limited playing seasons due to harsh weather.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Tennis Steeped in History</h2>
              <p>
                Europe's rich tennis culture goes beyond the court. Living there allows you to soak up the sport's history and passionate atmosphere.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Language and Cultural Exchange</h2>
              <p>
                Training in Europe can expose you to new languages and cultures, broadening your horizons and potentially even providing language classes alongside your tennis training.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Accessibility of Tournaments</h2>
              <p>
                Europe hosts a plethora of professional tournaments, including Grand Slams like Wimbledon and Roland Garros. Proximity to these events can provide inspiration and opportunities to witness the sport at its highest level.
              </p>
            </div>
          </div>
          {/* <div className="europe-feature">
            <div style={style}>
              <h2>Travel Opportunities</h2>
              <p>
                Living in Europe positions you well to travel and compete in tournaments across different countries, experiencing diverse playing styles and environments.
              </p>
            </div>
          </div> */}
          {/* <div className="europe-feature">
            <div style={style}>
              <h2>Structure</h2>
              <p>
                Club tennis in Europe varies by country. There are typically regional or national governing bodies that oversee leagues and tournaments for club teams.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Social Play</h2>
              <p>
                Most clubs have courts available for casual play, allowing you to hit with friends or find practice partners.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Team Leagues</h2>
              <p>
                Many clubs participate in regional or national league competitions. These leagues often have different divisions catering to various skill levels.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Tournaments</h2>
              <p>
                Clubs may host tournaments throughout the year, offering opportunities for competitive play against players from other clubs.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Social Aspect</h2>
              <p>
                Club tennis is a fantastic way to meet people who share your passion for the sport. You can build friendships, participate in group lessons, and enjoy a sense of community.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Coaching and Development</h2>
              <p>
                Many clubs offer lessons and coaching from qualified professionals, helping you improve your game.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Competitive Options</h2>
              <p>
                League matches and tournaments provide a chance to test your skills against other players and experience the thrill of competition.
              </p>
            </div>
          </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="container-fluid">
        <div className="container"> */}
          <div style={{ paddingTop: "100px" }}></div>
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Why choose,</h6>
            <h1 className="display-5 text-uppercase mb-0">USA</h1>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Governing Body</h2>
              <p style={{ paddingTop: "10px" }}>
                The Intercollegiate Tennis Association (ITA) governs college tennis in the US, overseeing men's and women's teams across various divisions: NCAA (Divisions I, II, III), NAIA, and Junior/Community Colleges .
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Playing College Tennis</h2>
              <p>
                US colleges offer a chance to continue your tennis journey while pursuing a degree. You'll participate in a full-time training program with on-court drills, gym sessions, strength & conditioning, and recovery alongside competing against other colleges and individual tournaments</p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Levels and Competition</h2>
              <p>
                There are multiple divisions (NCAA I, II, III, NAIA, Junior College) catering to a range of skill levels. This ensures you can find a program that matches your athletic ability and academic goals </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Top Programs</h2>
              <p>
                Prestigious programs like Stanford, University of Virginia, and University of Florida consistently rank high with a strong history and resources  </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Resources for Aspiring Players</h2>
              <p>
                The United States Tennis Association (USTA) offers a wealth of information on college tennis, including choosing a program, recruiting tips, and frequently asked questions
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Scholarships</h2>
              <p>
                Many colleges offer athletic scholarships to help cover the costs of education.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Academic Requirements</h2>
              <p>
                Maintain good grades to meet eligibility requirements for college tennis.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Recruiting Process</h2>
              <p>
                Proactively reach out to coaches and showcase your skills during your junior tennis years.
              </p>
            </div>
          </div>
          <div className="europe-feature">
            <div style={style}>
              <h2>Remember</h2>
              <p>
                Overall, US college tennis provides a well-rounded experience for athletes to develop their game, receive an education, and potentially compete at a high level.</p>
            </div>
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default V3;