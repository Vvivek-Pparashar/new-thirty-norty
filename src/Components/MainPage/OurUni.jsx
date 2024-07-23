import React from 'react'
import cli1 from '../../../public/img/cli1.png'
import cli2 from '../../../public/img/cli2.jpg'
import './OurUni.css'

const OurUni = () => {

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
                <div className="row">

                    <div class="col-lg-6 col-md-6 col-6">
                        <div class="client-logo education-logo">
                            <img src={cli1} class="img-fluid" alt="" />
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-6">
                        <div class="client-logo education-logo">
                            <img src={cli2} class="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default OurUni
