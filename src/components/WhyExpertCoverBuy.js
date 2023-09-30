import React from "react";

const WhyExpertCoverBuy = () => {
  return (
    <div class="buyexpertcover">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="buyexpheading">
              Why buy From <span>Expert Cover?</span>
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="buyexpbox">
              <img
                src={"/assets/images/platinumicon.png"}
                alt="img"
                class="img-fluid"
              />
              <h2>Platinum insurance partner</h2>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="buyexpbox">
              <img
                src={"/assets/images/affordableicon.png"}
                alt="img"
                class="img-fluid"
              />
              <h2>Affordable options</h2>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="buyexpbox">
              <img
                src={"/assets/images/supporticon.png"}
                alt="img"
                class="img-fluid"
              />
              <h2>30 minute claim support*</h2>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyExpertCoverBuy;
