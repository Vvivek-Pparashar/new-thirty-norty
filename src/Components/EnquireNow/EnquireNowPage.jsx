import React from "react";
import { Link } from "react-router-dom";
import sn1 from "../../../public/img/gurugram.jpeg";
import sn2 from "../../../public/img/delhi.jpeg";
import sn3 from "../../../public/img/spain.jpeg";
import sn4 from "../../../public/img/mzn.jpeg";

const EnquireNowPage = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Enquire Now</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Packages</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/GuruGram"}>
                <img
                  src={sn1}
                  style={{
                    objectFit: "cover",
                    borderRadius: "80%",
                    width: "300px",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>GuruGram</h3>
            </div>
            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Delhi"}>
                <img
                  src={sn2}
                  style={{
                    objectFit: "cover",
                    borderRadius: "80%",
                    width: "300px",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Delhi</h3>
            </div>
            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Spain"}>
                <img
                  src={sn3}
                  style={{
                    objectFit: "cover",
                    borderRadius: "80%",
                    width: "300px",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Spain</h3>
            </div>
            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Muzaffarnagar"}>
                <img
                  src={sn4}
                  style={{
                    objectFit: "cover",
                    borderRadius: "80%",
                    width: "300px",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>
                Muzaffarnagar
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireNowPage;
