import React from "react";
import Header from "../Header";
import WhyExpertCoverBuy from "../WhyExpertCoverBuy";
import Disclaimer from "../Disclaimer";
import Footer from "../Footer";

const HealthInsurance = () => {
  return (
    <div>
      {/* <!-- Health Insurance --> */}
      <div class="healthinsuranceSec">
        <div class="container">
          <div class="healthinsurance">
            <div class="healthinsimg">
              <img
                src={"/assets/images/healthfamilyimg.png"}
                alt="img"
                class="img-fluid"
              />
            </div>
            <div class="insuranceplanstep">
              <h2>
                Find top health insurance plans for you with up to{" "}
                <span>25% discount**</span>
              </h2>
              <form>
                <ul class="nav nav-tabs formsteps" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="step1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#step1"
                      type="button"
                      role="tab"
                      aria-controls="step1"
                      aria-selected="true">
                      1
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="step2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#step2"
                      type="button"
                      role="tab"
                      aria-controls="step2"
                      aria-selected="false">
                      2
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="step3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#step3"
                      type="button"
                      role="tab"
                      aria-controls="step3"
                      aria-selected="false">
                      3
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="step1"
                    role="tabpanel"
                    aria-labelledby="step1-tab">
                    <div class="insuranceform">
                      <label class="form-label">
                        Who would you like to insure?
                      </label>
                      <ul class="insurancecombo">
                        <li>
                          <label class="combobox">
                            Self
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Spouse
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Son
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            father
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Daughter
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Mother
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Grand Father
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Grand Mother
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Father-in-law
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>

                        <li>
                          <label class="combobox">
                            Mother-in-law
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                      <button type="submit" class="btn btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="step2"
                    role="tabpanel"
                    aria-labelledby="step2-tab">
                    <div class="insuranceform">
                      <div class="mb-4">
                        <label class="form-label">How old is the member?</label>
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Select Your Age</option>
                          <option value="1">10</option>
                          <option value="2">20</option>
                          <option value="3">30</option>
                        </select>
                      </div>
                      <div class="mb-4">
                        <label class="form-label">Where do you live?</label>
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>City</option>
                          <option value="1">Jaipur</option>
                          <option value="2">Jodhpur</option>
                          <option value="3">Kota</option>
                        </select>
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="step3"
                    role="tabpanel"
                    aria-labelledby="step3-tab">
                    <div class="insuranceform">
                      <div class="mb-4">
                        <label class="form-label">Tell us about yourself</label>
                        <ul class="genderselect">
                          <li>
                            <label class="genderbox">
                              Male
                              <input
                                type="radio"
                                checked="checked"
                                name="radio"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="genderbox">
                              Female
                              <input type="radio" name="radio" />
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div class="mb-4">
                        <label class="form-label">Full Name</label>
                        <input type="text" name="Name" class="form-control" />
                      </div>
                      <div class="mb-4">
                        <label class="form-label">Enter Mobile Number</label>
                        <input type="text" name="Name" class="form-control" />
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Continue
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
            src={"/assets/images/healthinsuranceimg01.png"}
            alt="img"
            class="img-fluid"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-7">
              <h2>
                Know More about <span>Health Insurance</span>
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
                  src={"/assets/images/healthinsimgsm01.png"}
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
            src={"/assets/images/healthcoverageimg01.png"}
            alt="img"
            class="img-fluid"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-5"></div>
            <div class="col-md-12 col-lg-7">
              <h2>
                Benefits of Health <span>Insurance Health Coverage</span>
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
                  src={"/assets/images/healthinsimgsm02.png"}
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

export default HealthInsurance;
