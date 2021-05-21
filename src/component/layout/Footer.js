import React from 'react';

const Footer = () => {
    return (

        <div>
            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            <div className="row mt-3 mb-5">
                <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>ABOUT ME</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                        error earum perspiciatis praesentium sint ipsum provident blanditiis
                        pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                        culpa cupiditate placeat facilis repellat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                        perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                        dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                        earum?
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/" style={{ color: "#f4c10f" }}>
                                <i class="fa fa-facebook-official" ></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" style={{ color: "#f4c10f" }}>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" style={{ color: "#f4c10f" }}>
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" style={{ color: "#f4c10f" }}>
                                <i class="fa fa-telegram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>KEEP IN TOUCH</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker"></i> Address:
                                </strong>{" "}
                                city, state, country
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i class="fa fa-phone"></i> Phone:
                                </strong>{" "}
                                +84 00 00 00
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i class="fa fa-envelope"></i> Email:
                                </strong>{" "}
                                info@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
