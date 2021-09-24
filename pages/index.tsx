import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import DefaultTemplate, { SEO } from "./components/DefaultTemplate";
import Profile from "./components/Team/Profile";

const Home: NextPage = () => {
  return (
    <DefaultTemplate SEO={{ ...SEO }}>
      <section className="bg-dark py-xxl-11 py-xl-8 py-lg-6 py-0 ">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/home-header.png)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/appland_bg_companies.svg)",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
            zIndex: 1,
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="position-relative text-center z-index-1 mb-4">
                <h1 className="display-2 text-white font-weight-medium fs-xl-7 fs-md-6 fs-3 mt-4 mt-md-0">
                  <span className="d-inline-block position-relative">
                    An attractive landing
                  </span>
                  <br />
                  for your mobile app.
                </h1>
                <p className="fs-md-2 fs-0 text-capitalize mt-4 mx-auto">
                  The fastest way to assemble beautiful screens and then
                  <br />
                  output clean, reusable code.
                </p>
                <form className="mb-6 mailbluster-subscribe">
                  <div className="form-row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-9">
                      <div className="mailbluster-feedback" />
                    </div>
                  </div>
                  <div className="form-row justify-content-center align-items-center">
                    <div className="col-auto mr-md-2">
                      <input
                        className="form-control bg-secondary border border-secondary text-white mt-3"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-auto mt-md-0">
                      <button className="btn btn-primary mt-3" type="submit">
                        Get access
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-10">
                  <img
                    className="img-fluid position-relative"
                    src="assets/img/gallery/iPad-Pro-Mockup.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-9 col-lg-8 col-10 mb-md-4 mb-lg-0 text-center">
              <h6 className="mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-4 text-800 font-weight-bold fs-md-0 fs--1 position-relative z-index-1">
                trusted by companies like this
              </h6>
              <div
                className="owl-carousel owl-carousel-theme owl-theme owl-dot-round owl-theme-primary mb-3"
                data-options='{"autoplay":true,"loop":true,"dotsEach":true,"margin":50,"autoplayHoverPause":true,"responsive":{"0":{"items":3,"dotsEach":false,"dots":false,"margin":30},"600":{"items":4,"dotsEach":false,"dots":false},"1000":{"items":5,"dotsEach":true}}}'
              >
                <img
                  className="img-fluid"
                  src="assets/img/logos/microsoft-logo.png"
                  width={191}
                />
                <img
                  className="img-fluid"
                  src="assets/img/logos/airbnb-logo.png"
                  width={156}
                />
                <img
                  className="img-fluid"
                  src="assets/img/logos/google-logo.png"
                  width={162}
                />
                <img
                  className="img-fluid"
                  src="assets/img/logos/Spotify_Logo.png"
                  width={191}
                />
                <img
                  className="img-fluid"
                  src="assets/img/logos/Paypal-logo.png"
                  width={162}
                />
                <img
                  className="img-fluid"
                  src="assets/img/logos/microsoft-logo.png"
                  width={191}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pb-0 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center pt-lg-7 pt-5">
              <div
                className="bg-holder d-none d-md-block"
                style={{
                  backgroundImage:
                    "url(assets/img/illustrations/home/home-vector.png)",
                  backgroundSize: "28%",
                  backgroundPosition: "80% 0%",
                }}
              ></div>
              {/*/.bg-holder*/}
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-10 mb-4">
                  <h1 className="font-weight-medium text-dark fs-xl-5 fs-lg-4 fs-sm-3 fs-1">
                    <span className="position-relative">
                      Start with our design and give
                    </span>
                    <br />
                    <span>your app a fresh look.</span>
                  </h1>
                  <p className="text-900 mt-4 mx-auto">
                    Updating branding in your app is now easier than ever with
                    our design system. The Shape allows you to make changes to
                    your colors, icons within your app.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col pt-7">
              <div className="row justify-content-center">
                <div className="col-md-8 col-10">
                  <div className="rounded-soft overflow-hidden">
                    <video
                      className="player"
                      poster="assets/img/bg-img/home-video-bg.png"

                      //TODO: fix the video problem
                      // playsInline="playsinline"
                      // controls="controls"
                    >
                      <source src="assets/video/beach.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-7 justify-content-center">
            <div className="col-lg-4 col-md-8 mb-4 mb-lg-0">
              <div className="media p-xxl-4">
                <img src="assets/img/icons/icon-1.png" width={60} />
                <div className="media-body ml-3">
                  <h5 className="font-weight-bold">
                    Create your account in Shape
                  </h5>
                  <p className="text-900">
                    its easy, simple and just a few clicks job to create an
                    account with shape
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 mb-4 mb-lg-0">
              <div className="media p-xxl-4">
                <img src="assets/img/icons/icon.png" width={60} />
                <div className="media-body ml-3">
                  <h5 className="font-weight-bold">
                    Start building beautiful Apps With shape
                  </h5>
                  <p className="text-900">
                    with our design system, you will find it no brainers job to
                    build your application
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 mb-4 mb-lg-0">
              <div className="media p-xxl-4">
                <img src="assets/img/icons/icon-3.png" width={60} />
                <div className="media-body ml-3">
                  <h5 className="font-weight-bold">
                    Deploy your site and make money
                  </h5>
                  <p className="text-900">
                    make it, bake it, and next thing you know your cake is
                    ready. enjoy it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      <section className="py-xxl-11 py-xl-9 py-lg-11 pb-md-7 pt-10 overflow-hidden">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/by-its-default.svg)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row flex-center">
            <div className="col-xxl-5 col-lg-6 col-md-10">
              <h1 className="text-white fs-xl-5 fs-lg-4 fs-3">
                It’s Stylish by default.
              </h1>
              <p className="text-500 mt-4 w-xl-75">
                With our built-in design system, it's easy to create beautiful
                screens with ease. And because we separate style from layout,
                you can try out new themes instantly.
              </p>
              <div className="row mt-6">
                <div className="col-md-5">
                  <span className="fa-stack">
                    <FontAwesomeIcon
                      icon={["fas", "circle"]}
                      className="fa-stack-2x text-white"
                    />
                    <FontAwesomeIcon
                      icon={["fas", "brain"]}
                      className="text-primary fa-stack-1x fa-inverse"
                    />
                  </span>
                  <h5 className="font-weight-bold text-white mt-2">
                    Smart Features
                  </h5>
                  <p className="text-500 line-height-2">
                    we have 120+ smart unique features
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-5 mt-3 mt-md-0">
                  <span className="fa-stack">
                    <FontAwesomeIcon
                      icon={["fas", "circle"]}
                      className="fa-stack-2x text-white"
                    />
                    <FontAwesomeIcon
                      icon={["fas", "cannabis"]}
                      className="text-danger fa-stack-1x fa-inverse"
                    />
                  </span>
                  <h5 className="font-weight-bold text-white mt-2">
                    Dynamic structure
                  </h5>
                  <p className="text-500 line-height-2">
                    Our structure is stable and versatile
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg col-10 mt-6">
              <img
                className="img-fluid z-index-1 position-relative"
                src="assets/img/gallery/iPad-Pro-Design-Mockup.png"
              />
            </div>
          </div>
        </div>
        <div className="bg-dark b-0 h-50 w-100 position-absolute z-index--1" />
      </section>
      <section className="bg-1200 overflow-hidden">
        <div className="container">
          <div className="row flex-center text-center text-lg-left">
            <div className="col-xl-6 col-lg-5 col-10 mb-6 mb-lg-0">
              <Image
                src="/assets/img/gallery/home-svg-bg.png"
                alt="home-svg-bg"
                width="540"
                height="420"
                className="rounded-circle"
              />
            </div>
            <div className="col-xl col-lg-7 col-10">
              <h1 className="text-white fs-xl-5 fs-lg-4 fs-md-3 fs-2">
                {" "}
                Fits into any workflow.
              </h1>
              <p className="text-500 w-md-75 mx-auto mx-lg-0">
                our system goes with almost any kind of integrations and
                supports almost every platform.
              </p>
              <div className="row mt-5 justify-content-center justify-content-lg-start">
                <div className="col-md-5 col-10 hover-cardgroup bg-extra-1 mb-xl-4 mb-3 mr-xl-4 mr-md-3 mb-3">
                  <div className="media align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/img/icons/slack-logo.png"
                    />
                    <div className="card-body text-left">
                      <a className="stretched-link" href="#!" />
                      <p className="mb-0 font-weight-bold title text-white fs-xl-0 fs-lg--1 fs-0">
                        Slack
                      </p>
                      <p className="text-500 mb-0 subtitle fs-xl-0 fs-lg--1 fs-0">
                        communication
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-10 hover-cardgroup bg-extra-1 mb-xl-4 mb-3">
                  <div className="media align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/img/icons/dropbox-logo.png"
                    />
                    <div className="card-body text-left">
                      <a className="stretched-link" href="#!" />
                      <p className="mb-0 font-weight-bold title text-white fs-xl-0 fs-lg--1 fs-0">
                        Dropbox
                      </p>
                      <p className="text-500 mb-0 subtitle fs-xl-0 fs-lg--1 fs-0">
                        Productivity
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-10 hover-cardgroup bg-extra-1 mr-xl-4 mr-md-3 mb-3 mb-md-0">
                  <div className="media align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/img/icons/hubstaff-logo.png"
                    />
                    <div className="card-body text-left">
                      <a className="stretched-link" href="#!" />
                      <p className="mb-0 font-weight-bold title text-white fs-xl-0 fs-lg--1 fs-0">
                        Hubstaff
                      </p>
                      <p className="text-500 mb-0 subtitle fs-xl-0 fs-lg--1 fs-0">
                        Productivity
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-10 hover-cardgroup bg-extra-1">
                  <div className="media align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/img/icons/Sketch_Logo.png"
                    />
                    <div className="card-body text-left">
                      <a className="stretched-link" href="#!" />
                      <p className="mb-0 font-weight-bold title text-white fs-xl-0 fs-lg--1 fs-0">
                        Sketch
                      </p>
                      <p className="text-500 mb-0 subtitle fs-xl-0 fs-lg--1 fs-0">
                        creative tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="text-decoration-none" href="#!">
                <h6 className="font-weight-bold text-info mt-4 ml-1">
                  view all integrations
                  <span
                    className="fas fa-arrow-right"
                    data-fa-transform="down-2 right-4"
                  />
                </h6>
              </a>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0 overflow-hidden">
        <div className="container">
          <div className="row flex-center justify-content-xxl-between">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-11 pt-8 pb-xl-8 pb-4 pl-xxl-0 pl-xl-6 order-xl-1">
              <img
                className="position-absolute d-none d-lg-block w-50 r-0"
                src="assets/img/illustrations/home/home-vector.png"
                style={{ top: "5%" }}
              />
              <div className="text-center text-xl-left position-relative">
                <h1 className="font-weight-medium text-dark fs-xxl-5 fs-4">
                  <span className="position-relative">
                    we are professionals
                  </span>
                  <br />
                  at shape Studios.
                </h1>
                <p className="text-900 mt-4 w-lg-75 mx-lg-auto mx-xl-0">
                  A design dummy text for this content, and design, helping
                  people in each discipline collaborate. And That is Shape for
                  you.
                </p>
                <h3 className="mt-lg-7 mt-5 fs-lg-3 fs-2 mb-4">
                  Excited about our team?
                  <br />
                  we are hiring!
                </h3>
                <a className="btn btn-primary mx-2 mt-3" href="#!">
                  Drop your CV
                </a>
                <a className="btn btn-extra mx-2 mt-3" href="#!">
                  Learn More
                </a>
                <p className="mt-3 fs--1">
                  *Please read our{" "}
                  <a
                    className="text-decoration-none font-weight-bold text-1000"
                    href="#!"
                  >
                    term and conditions
                  </a>{" "}
                  before
                  <br />
                  dropping your CV
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-11 col-sm-10 pb-8 pb-xl-0">
              <div
                className="slick-carousel slick-theme-primary slick-vertical-dots"
                data-slick='{"vertical":true,"verticalSwiping":true,"arrows":false,"autoplay":true,"autoplaySpeed":1000,"slidesToScroll":1,"mobileFirst":true,"slidesToShow":2,"responsive":[{"breakpoint":1024,"settings":{"dots":true}},{"breakpoint":600,"settings":{"dots":true}},{"breakpoint":300,"settings":{"dots":true,"verticalSwiping":false,"vertical":false,"slidesToShow":1}}]}'
              >
                <Profile
                  name="Lionel d’ costa"
                  roles="Founder &amp; CEO"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-boy-1"
                  src="/assets/img/team/adult-boy-1.png"
                >
                  A design platform should unite code, content, and design,
                  helping people in each discipline collaborate. And That is
                  Shape for you.
                </Profile>
                <Profile
                  name="Mila dalush"
                  roles="business developement manager"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-girl-1"
                  src="/assets/img/team/adult-girl-1.png"
                >
                  Web publishing platforms should empower you to build whatever
                  you like. Here at Shape we we work on that for you.
                </Profile>
                <Profile
                  name="Mila dalush"
                  roles="business developement manager"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-boy-2"
                  src="/assets/img/team/adult-boy-2.png"
                >
                  Web publishing platforms should empower you to build whatever
                  you like. Here at Shape we we work on that for you.
                </Profile>
                <Profile
                  name="Mila dalush"
                  roles="business developement manager"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-girl-1"
                  src="/assets/img/team/adult-girl-2.png"
                >
                  Web publishing platforms should empower you to build whatever
                  you like. Here at Shape we we work on that for you.
                </Profile>
                <Profile
                  name="Mila dalush"
                  roles="business developement manager"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-boy-3"
                  src="/assets/img/team/adult-boy-3.png"
                >
                  Web publishing platforms should empower you to build whatever
                  you like. Here at Shape we we work on that for you.
                </Profile>
                <Profile
                  name="Mila dalush"
                  roles="business developement manager"
                  twitterLink="#"
                  facebookLink="#"
                  instagramLink="#"
                  linkedinLink="#"
                  alt="adult-girl-3"
                  src="/assets/img/team/adult-girl-3.png"
                >
                  Web publishing platforms should empower you to build whatever
                  you like. Here at Shape we we work on that for you.
                </Profile>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/bg-cta-home.png)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row justify-content-end align-items-center no-gutters">
            <div className="col-md col-lg-auto text-right d-none d-md-block"></div>
            <div className="col-xxl-5 col-xl-7 col-lg-8 col-md-10 text-center py-lg-7 py-6">
              <div
                className="bg-holder d-none d-md-block"
                style={{
                  backgroundImage: "url(assets/img/bg-img/appland_bg12.png)",
                }}
              ></div>
              {/*/.bg-holder*/}
              <div className="position-relative">
                <h1 className="font-weight-medium text-white fs-xl-5 fs-4">
                  <span className="position-relative">Get early access!</span>
                </h1>
                <p className="text-white mt-md-4">
                  Secure your spot in our beta with just an email
                </p>
                <form className="mt-4 mailbluster-subscribe">
                  <div className="mailbluster-feedback" />
                  <div className="form-row flex-center">
                    <div className="col-auto mt-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-auto mt-3">
                      <button className="btn btn-primary" type="submit">
                        Get access
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6 text-center py-lg-6 py-md-8 py-6">
              <div
                className="bg-holder"
                style={{
                  backgroundImage:
                    "url(assets/img/illustrations/home/home-vector-4.png)",
                  backgroundSize: "60%",
                }}
              ></div>
              {/*/.bg-holder*/}
              <div className="position-relative">
                <h1 className="font-weight-medium fs-xl-5 fs-4">
                  <span className="position-relative">Download it now!</span>
                </h1>
                <p className="mt-md-4 text-900">
                  You can get the mobile version of our
                  <br />
                  application from stores for free
                </p>
              </div>
              <div className="row text-left justify-content-center mt-6">
                <div className="col-md-6 col-10">
                  <div className="card bg-primary">
                    <div className="card-body py-2">
                      <div className="row flex-center">
                        <div className="col-auto">
                          <FontAwesomeIcon
                            icon={["fab", "apple"]}
                            className="text-white"
                            style={{
                              height: "38px",
                            }}
                          />
                        </div>
                        <div className="col-auto position-static">
                          <p className="text-white fs--1 text-capitalize mb-0 font-weight-bold">
                            Download On The
                          </p>
                          <a
                            className="text-decoration-none stretched-link text-white fs-0 text-capitalize mb-0 font-weight-bold"
                            href="#!"
                          >
                            Apple store
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-10 mt-3 mt-md-0">
                  <div className="card bg-primary">
                    <div className="card-body py-2">
                      <div className="row flex-center">
                        <div className="col-auto">
                          <FontAwesomeIcon
                            icon={["fab", "google-play"]}
                            className="text-white"
                            style={{
                              width: "30px",
                              height: "38px",
                            }}
                          />
                        </div>
                        <div className="col-auto">
                          <p className="text-white fs--1 text-capitalize mb-0 font-weight-bold">
                            Download On The
                          </p>
                          <a
                            className="text-decoration-none stretched-link text-white fs-0 text-capitalize mb-0 font-weight-bold"
                            href="#!"
                          >
                            Google play
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <Image
                src="/assets/img/bg-img/mobile-scree.png"
                alt="mobile-screen"
                width="333"
                height="484"
              />
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}

      <section className="py-0 bg-dark">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/CTA.png)",
          }}
        />
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/CTA.png)",
          }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h3 className="text-white fs-lg-3 fs-2">
                <span className="position-relative">
                  Start building beautiful apps
                </span>
              </h3>
              <button className="btn mt-3 btn-danger">start now</button>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </DefaultTemplate>
  );
};

export default Home;
