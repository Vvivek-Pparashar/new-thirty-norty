import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import '../Services/Services.css'

const Europe = () => {
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
                    Europe
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
                </div>
            </div>

            <FloatingWhatsApp />
            <ScrollRestoration />
            <Footer />
        </>
    );
};

export default Europe
