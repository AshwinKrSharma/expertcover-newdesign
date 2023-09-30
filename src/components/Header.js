import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="logo">
                <img src={"/assets/images/logo.png"} alt="img" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown1"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Insurance Products
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown1">
                      <li>
                        <a className="dropdown-item" href="#">
                          Insurance Products 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Insurance Products 2
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Raise a Claim
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Support
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown2">
                      <li>
                        <a className="dropdown-item" href="#">
                          Support 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Support 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <div className="loginbuttons">
                    <a href="#" className="findadvbtn">
                      Find an Advisor
                    </a>
                    <a href="#" className="becomeposbtn">
                      Became a POS
                    </a>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
