import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import '../Services/Services.css'

const USA = () => {
    const style = {
        paddingBlock: "20px",
        textAlign: "center",
    }
    return (
        <>
            <NavBar />
            <div
                className={"container-fluid bg-primary mb-5 SH1"}
                style={{
                    paddingInline: "100px",
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
                    USA
                </h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div style={{ paddingTop: "10px" }}></div>
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

export default USA
