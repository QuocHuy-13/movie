import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h3>ABOUT ME</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                            error earum perspiciatis praesentium sint ipsum provident blanditiis
                            pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                            culpa cupiditate placeat facilis repellat.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Have a Questions</h3>
                        <ul className="list-unstyled">
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-map-marker"></i> Address:
                                    </strong>{" "}
                                    District 12, Ho Chi Minh City, Viet Nam
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-phone"></i> Phone:
                                    </strong>{" "}
                                    +84 777 086 123
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-envelope"></i> Email:
                                    </strong>{" "}
                                    phamquochuy0509@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h3>Follow Me</h3>
                        <ul className="footer-follow p-0">
                            <li className="footer-follow__item">
                                <a href="/">
                                    <i className="fa fa-facebook-official" ></i>
                                </a>
                            </li>
                            <li className="footer-follow__item">
                                <a href="/">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="footer-follow__item">
                                <a href="/">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="footer-follow__item">
                                <a href="/">
                                    <i className="fa fa-telegram"></i>
                                </a>
                            </li>
                        </ul>
                        <h3>Subscribe</h3>
                        <form className="subscribe-form">
                            <div className="form-group d-flex">
                                <input type="text" className="form-control" placeholder="Enter email address" />
                                <button type="submit" className="form-control submit">
                                    <i className="fa fa-paper-plane-o"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bottom-footer mt-2">
                    <p>CopyRight &copy; 2021 All rights reserved</p>

                    <div className="bottom-footer__paragraph">
                        This project is made and open sourced by
                        <a
                            href="https://quochuy-13.github.io/pqh/#/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {` PQH`}
                        </a>
                        , click
                        <a
                            href="https://github.com/QuocHuy-13/movie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {` Here `}
                        </a>
                        to get the source code
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
