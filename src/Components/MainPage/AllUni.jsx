import React from 'react'
import './OurUni.css'

const images = [
    { addr: "../../../public/img/cli1.png" },
    { addr: "../../../public/img/cli2.jpg" },
    { addr: "../../../public/img/cli3.png" },
    { addr: "../../../public/img/cli4.png" },
    { addr: "../../../public/img/cli5.png" },
    { addr: "../../../public/img/cli6.png" },
    { addr: "../../../public/img/cli7.jpg" },
    { addr: "../../../public/img/cli8.png" },
    { addr: "../../../public/img/cli9.png" },
    { addr: "../../../public/img/cli10.jpg" },
    { addr: "../../../public/img/cli11.jpg" },
];

const AllUni = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div
                    className="border-start border-5 border-primary ps-5 mb-5"
                    style={{ maxWidth: 600 + "px" }}
                >
                    <h6 className="text-primary text-uppercase">Services</h6>
                    <h1 className="display-5 text-uppercase mb-0">
                        Our Overseas Academies Partners
                    </h1>
                </div>
                <div className="row g-lg-3 g-2">
                    {images.map((e) => (
                        <div class="col-lg-6 col-md-6 col-6">
                            <div class="client-logo education-logo">
                                <img src={e.addr} class="img-fluid" alt="sponsors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllUni
