import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Disclaimer from "../Disclaimer";
import WhyExpertCoverBuy from "../WhyExpertCoverBuy";

const CarInsurance = () => {
  return (
    <div>
      {/* <!-- Buy your two-wheeler insurance --> */}

      <div class="healthinsuranceSec">
        <div class="container">
          <div class="healthinsurance carinsurancesec">
            <div class="healthinsimg">
              <img
                src={"/assets/images/carimg01.png"}
                alt="img"
                class="img-fluid"
              />
            </div>
            <div class="twowheelerinsu">
              <h2>
                Compare & Save <span>upto 85%* on</span> Car Insurance
              </h2>
              <form>
                <ul class="nav nav-tabs tabsmenu" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="bikestep1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bikestep1"
                      type="button"
                      role="tab"
                      aria-controls="bikestep1"
                      aria-selected="true">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.5"
                          cy="17.5"
                          r="17"
                          fill="white"
                          stroke="#00B0CB"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.0909 20.4925L10.2727 16.7313L9 17.9851L14.0909 23L25 12.2537L23.7273 11L14.0909 20.4925Z"
                          fill="#00B0CB"
                        />
                      </svg>
                      Renew
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="bikestep2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bikestep2"
                      type="button"
                      role="tab"
                      aria-controls="bikestep2"
                      aria-selected="false">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.5"
                          cy="17.5"
                          r="17"
                          fill="white"
                          stroke="#00B0CB"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.0909 20.4925L10.2727 16.7313L9 17.9851L14.0909 23L25 12.2537L23.7273 11L14.0909 20.4925Z"
                          fill="#00B0CB"
                        />
                      </svg>{" "}
                      New
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="bikestep1"
                    role="tabpanel"
                    aria-labelledby="bikestep1-tab">
                    <div class="twoinsuranceform">
                      <input
                        type="text"
                        name="bikenumber"
                        placeholder="Enter Car number: (eg AP-31-cc-1986)"
                        class="form-control"
                      />
                      <button type="submit" class="btn btn-primary">
                        Get Details
                      </button>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="bikestep2"
                    role="tabpanel"
                    aria-labelledby="bikestep2-tab">
                    <div class="twoinsuranceform">
                      <input
                        type="text"
                        name="bikenumber"
                        placeholder="Enter Car number: (eg AP-31-cc-1986)"
                        class="form-control"
                      />
                      <button type="submit" class="btn btn-primary">
                        View Price
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Why buy From Expert Cover? --> */}

      <WhyExpertCoverBuy />

      {/* <!--Know More about Health Insurance  --> */}

      <div class="abouthealthins">
        <div class="healthinsimages">
          <img
            src={"/assets/images/carimg02.png"}
            alt="img"
            class="img-fluid"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-7">
              <h2>
                Know More about <span>Car Insurance</span>
              </h2>
              <ul>
                <li>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary,
                </li>
                <li>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum
                </li>
                <li>
                  If you use this site regularly and would like to help keep the
                  site on the Internet, please consider donating a small sum to
                  help pay for the hosting and bandwidth bill. There is no
                  minimum donation, any sum is appreciated
                </li>
              </ul>
              <div class="healthinsimgsm">
                <img
                  src={"/assets/images/carinsurancesmimg01.png"}
                  alt="img"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="abouthealthins boxrevers">
        <div class="healthinsimages">
          <img
            src={"/assets/images/carimg03.png"}
            alt="img"
            class="img-fluid"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-5"></div>
            <div class="col-md-12 col-lg-7">
              <h2>
                Benefits of <span>Car Insurance</span>
              </h2>
              <ul>
                <li>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary,
                </li>
                <li>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum
                </li>
                <li>
                  If you use this site regularly and would like to help keep the
                  site on the Internet, please consider donating a small sum to
                  help pay for the hosting and bandwidth bill. There is no
                  minimum donation, any sum is appreciated
                </li>
              </ul>
              <div class="healthinsimgsm">
                <img
                  src="img/carinsurancesmimg02.png"
                  alt="img"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Disclaimer --> */}

      <Disclaimer />
    </div>
  );
};

export default CarInsurance;
