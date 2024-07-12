import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import diya from '../../../public/img/diva.jpeg'
import anirudh from '../../../public/img/anirudh.jpeg'
import Kunwar from '../../../public/img/kunwar.jpeg'
import kanav from '../../../public/img/kanav.jpeg'
import Tanmay from '../../../public/img/tanmay.jpg'
// import sn3 from '../../../public/img/testimonial-3.jpg'

const Testimonial = () => {
  return (
    <div>
      <div
        className="container-fluid bg-testimonial py-5"
        style={{ margin: "0px 0", backgroundAttachment: "fixed" }}
      >
        <div className="container py-5">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <OwlCarousel
                nav
                items={1}
                autoPlay
                smartSpeed={1000}
                loop
                navText={[
                  '<i class="bi bi-arrow-left"></i>',
                  '<i class="bi bi-arrow-right"></i>',
                ]}
                className="owl-carousel testimonial-carousel bg-white p-5"
              >
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={diya} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="bi bi-chat-square-quote text-primary"></i>
                    </div>
                  </div>
                  <p>
                    I have been training with the Thirty40 team for some years
                    now. I really like the technique & tactics the coaches here
                    teach. They have trained me to play in unconventional
                    conditions which has improved my game exponentially. I have
                    got my world ranking of 1523 under the coaching of Arnav
                    Alok Goel.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Diva Bhatia</h5>
                  <span>Player</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={Kunwar} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="bi bi-chat-square-quote text-primary"></i>
                    </div>
                  </div>
                  <p>
                    I am a professional tennis player & have been training in
                    Spain for the last 3 years. I have had a career high ITF
                    rank of 2689. I would like to thank hirty40 for guiding me &
                    showing me the right path. They have helped me get access to
                    the best academy possible. Anyone out there looking to go
                    big in this sport, I would say Thirty40 is your place.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Koonwar Gupta</h5>
                  <span>Player</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={Tanmay} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="bi bi-chat-square-quote text-primary"></i>
                    </div>
                  </div>
                  <p>
                    Bahot acha experience tha aur best tennis dekha humne waha
                    and coaching schedules world class tha aur coaches bahot
                    humble aur helpful the and tournaments khelne ko milte the
                    hr weekend paise milte the nationals tournaments bhi hote
                    the...friends ke saath bahot acha time spend hua and
                    confidence level bahot high ho gya waha reh kr us atmosphere
                    mei.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Tanmay Sharma</h5>
                  <span>Player</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={anirudh} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="bi bi-chat-square-quote text-primary"></i>
                    </div>
                  </div>
                  <p>
                    I am a professional tennis player playing ATP/ITF and league
                    matches in Europe. I would like to thank Thirty40 for
                    helping me find a club in Germany. It was a great experience
                    & I would really recommend Thirty40 to all those looking to
                    play matches or study in Europe. They are really good at
                    what they do.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Anirudh Chandrasekhar</h5>
                  <span>Player</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img className="img-fluid mx-auto" src={kanav} alt="" />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="bi bi-chat-square-quote text-primary"></i>
                    </div>
                  </div>
                  <p>
                    I would like to thank Arnav for helping me in finding the
                    perfect tennis academy for me. The academy has all the
                    necessary facilities for a player and enough indoor and
                    outdoor courts. They made sure that no session was missed
                    due to bad weather or something. They helped me improve a
                    lot, especially my backhand. I was getting personal
                    attention every day. Also, I was able to play tournaments
                    every week which was a major benefit of coming to Germany.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Kanav Kashyap</h5>
                  <span>Player</span>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
