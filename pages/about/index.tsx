import type { NextPage } from "next";
import DefaultTemplate, { SEO } from "../components/DefaultTemplate";
import Profile from "../components/Team/Profile";
import { team } from "../team";

const About: NextPage = () => {
  return (
    <DefaultTemplate SEO={{ ...SEO }}>
      <section className="pb-11">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/about/about-bg.png)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div
          className="bg-holder"
          style={{
            backgroundImage:
              "url(assets/img/illustrations/about-bottom-curve.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 pt-6 pb-6">
              <h1 className="font-weight-medium text-white fs-xl-5 fs-4">
                <span className="position-relative">About us</span>
              </h1>
              <p className="text-100 mt-4 w-lg-75">
                Founded at the start of 2018,{" "}
                <a className="font-weight-bold text-white" href="#!">
                  Shape
                </a>{" "}
                is a platform giving users the ability to buy, sell, and accept
                digital assets with the US Dollar, Pound Sterling, and Euro.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 mt-xxl-11 mt-xl-9 mt-8">
              <div className="card shadow-white">
                <div className="card-body text-center py-4">
                  <div className="row">
                    <div className="col">
                      <span
                        className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                        data-countup='{"count":10,"duration":1000,"delay":2}'
                      >
                        0
                      </span>
                      <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                        years in business
                      </h6>
                    </div>
                    <div className="col">
                      <span
                        className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                        data-countup='{"format":"alphanumeric","count":1500,"duration":1000,"delay":2}'
                      >
                        0
                      </span>
                      <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                        products launched
                      </h6>
                    </div>
                    <div className="col">
                      <span
                        className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                        data-countup='{"count":55,"duration":1000,"suffix":"%","delay":2}'
                      >
                        0%
                      </span>
                      <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                        remote employees
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pt-10 pb-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg col-10 order-lg-1 order-md-0">
              <div className="position-relative">
                <h1 className="font-weight-medium fs-xl-5 fs-sm-4 fs-3 heading-big-shape-right">
                  <span className="position-relative">Change the world</span>
                  <br />
                  through design.
                </h1>
                <p className="text-900 mt-4 w-lg-75">
                  We are on a journey to make financial products more tangible.
                  We build digital products and support finance and insurance
                  companies, but also Fintech and Insurtech startups on how to
                  achieve state of the art customer experience and user
                  experience design.
                </p>
                <div className="row">
                  <div className="col-xxl col-xl-11 col-md-10">
                    <img
                      className="img-fluid rounded-soft mt-6 position-relative"
                      src="assets/img/gallery/about-second-sec3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg col-10 mt-4 mt-lg-0">
              <div className="row justify-content-end">
                <div className="col-lg-11 col-6">
                  <img
                    className="img-fluid rounded-soft"
                    src="assets/img/gallery/about-second-sec.png"
                  />
                </div>
                <div className="col-lg-8 mt-lg-4 col-6">
                  <img
                    className="img-fluid rounded-soft position-relative"
                    src="assets/img/gallery/about-second-sec2.png"
                  />
                </div>
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
      <section className="py-11">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/about/about-team-bg.png)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="position-relative text-center">
            <h1 className="font-weight-medium text-white fs-xl-5 fs-lg-4 fs-md-3 fs-2">
              <span className="position-relative">Meet our team</span>
            </h1>
          </div>
          <div className="row mt-8">
            <div className="col">
              <div
                className="slick-carousel slick-theme-warning"
                data-slick='{"arrows":false,"autoplay":false,"autoplaySpeed":1000,"slidesToShow":1,"slidesToScroll":1,"dots":true}'
              >
                <div className="row d-flex justify-content-center">
                  {team.map((member, index) => (
                    <div className="col-lg-6" key={index}>
                      <Profile
                        name={member.name}
                        roles={member.roles}
                        alt={member.name}
                        src={member.src}
                        twitterLink={member.twitterLink}
                        facebookLink={member.facebookLink}
                        instagramLink={member.instagramLink}
                        linkedinLink={member.linkedinLink}
                      >
                        {member.description}
                      </Profile>
                    </div>
                  ))}
                </div>
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
      <section className="py-0 bg-dark">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/CTA-primary.png)",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h3 className="text-white fs-lg-3 fs-2">
                <span className="position-relative">
                  we are hiring. want to start working with us?
                </span>
              </h3>
              <button className="btn mt-3 btn-light">Join us now</button>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
    </DefaultTemplate>
  );
};

export default About;
