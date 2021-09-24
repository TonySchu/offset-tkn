import React from "react";

export const companiesBannerStyle = {
  home: "col-xxl-10 col-xl-9 col-lg-8 col-10 mb-md-4 mb-lg-0 text-center",
  crypto: "mt-md-9 mt-6 pb-lg-8 pb-md-5 pb-6 text-center",
};

function Companies(props: { title: string; page: string }) {
  return (
    <div className={props.page} style={{ zIndex: "1" }}>
      <h5 className="text-500 font-weight-bold">{props.title}</h5>
      <div className="row justify-content-center">
        <div className="col-10">
          <div
            className="
                                    owl-carousel
                                    owl-carousel-theme
                                    owl-theme
                                    owl-dot-round
                                    owl-theme-danger
                                    mt-lg-5 mt-3
                                "
            data-options='{"autoplay":true,"loop":true,"dotsEach":true,"margin":50,"autoplayHoverPause":true,"responsive":{"0":{"items":3,"dotsEach":false,"dots":true},"600":{"items":4,"dotsEach":true},"1000":{"items":5,"dotsEach":true}}}'
          >
            <img
              className="img-fluid"
              src="assets/img/logos/microsoft-logo.png"
              alt="microsoft-logo"
              width={191}
            />
            <img
              className="img-fluid"
              src="assets/img/logos/airbnb-logo.png"
              alt="microsoft-logo"
              width={156}
            />
            <img
              className="img-fluid"
              src="assets/img/logos/Paypal-logo.png"
              alt="microsoft-logo"
              width={162}
            />
            <img
              className="img-fluid"
              src="assets/img/logos/microsoft-logo.png"
              alt="microsoft-logo"
              width={191}
            />
            <img
              className="img-fluid"
              src="assets/img/logos/Paypal-logo.png"
              alt="microsoft-logo"
              width={162}
            />
            <img
              className="img-fluid"
              src="assets/img/logos/microsoft-logo.png"
              alt="microsoft-logo"
              width={191}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
