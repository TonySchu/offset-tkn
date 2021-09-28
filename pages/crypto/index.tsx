import videoBgImage from "@img/bg-img/video-bg-img.png";
import cryptoBottomShape from "@img/illustrations/cripto-bottom-shape.png";
import bitcoinCircle from "@img/logos/bitcoin-circle.svg";
import clockThreeLogo from "@img/logos/clock-three.svg";
import commentDots from "@img/logos/comment-dots.svg";
import exchangeLogo from "@img/logos/exchange.svg";
import lightbulbAltLogo from "@img/logos/lightbulb-alt.svg";
import shieldLogo from "@img/logos/shield-check.svg";
import type { NextPage } from "next";
import Image from "next/image";
import Companies, {
  companiesBannerStyle,
} from "../components/Companies/Companies";
import DefaultTemplate, { SEO } from "../components/DefaultTemplate";

const Crypto: NextPage = () => {
  return (
    <DefaultTemplate SEO={{ ...SEO }}>
      <section className="pt-10 pb-0" style={{ backgroundColor: "#0b0d1b" }}>
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/big-shape-left.png)",
            backgroundSize: "45%",
            backgroundPosition: "left top",
          }}
        />
        {/*/.bg-holder*/}
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/big-shape-right.png)",
            backgroundSize: "56%",
            backgroundPosition: "right top",
          }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7 col-md-9 col-11">
              <h1 className="text-capitalize text-white fs-xxl-7 fs-xl-6 fs-sm-4 fs-2">
                <span className="position-relative">
                  Turn your spare change
                </span>
                <br />
                into cryptocurrency
              </h1>
              <p className="mt-3 w-lg-75 text-500">
                With
                <a className="font-weight-bold text-500" href="index.html">
                  shape’s
                </a>
                simple and secure process you can buy and sell digital assets
                with USD, GBP, or Euro. Order prices are locked in at the time
                of placement and our non-custodial approach allows for complete
                control of your assets.
              </p>
              <button className="btn btn-danger mt-sm-5 mt-3 mr-3">
                Get access
              </button>
              <button className="btn btn-secondary mt-sm-5 mt-3">
                how to buy &amp; sell
              </button>
            </div>
            <div className="col-lg-4 col-md-9 col-11 mt-5 mt-lg-0">
              <div className="card">
                <div
                  className="
                                    row
                                    bg-primary
                                    card-img-top
                                    no-gutters
                                    align-items-center
                                "
                >
                  <div
                    className="
                                        col-5 col-md-6 col-xl-5 col-xxl-4
                                        ml-4
                                    "
                  >
                    <h6
                      className="
                                            text-capitalize text-300
                                            mt-2
                                            mb-3
                                        "
                    >
                      Your balance is
                    </h6>
                    <h1
                      className="
                                            text-white
                                            mb-0
                                            fs-xxl-5 fs-4
                                        "
                      data-countup='{"count":54983,"prefix":"$","delay":1.5,"format":"alphanumeric"}'
                    >
                      $0
                    </h1>
                  </div>
                  <div className="col p-1"></div>
                </div>
                <div className="card-body p-4">
                  <div className="row bg-white">
                    <div className="col">
                      <p
                        className="
                                                font-weight-bold
                                                text-uppercase text-400
                                            "
                      >
                        Returns
                      </p>
                      <p className="text-black">
                        Your assets have
                        <span className="font-weight-bold">
                          increased in value by 7.2%
                        </span>
                        in the past 24 hours
                      </p>
                      <div className="py-3">
                        <div className="echart" style={{ height: 130 }} />
                      </div>
                      <a
                        className="
                                                text-400
                                                font-weight-semi-bold
                                                mt-4
                                                d-inline-block
                                            "
                        href="#!"
                      >
                        View assets
                        <span
                          className="fa fa-chevron-right"
                          data-fa-transform="right-3 down-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-8">
            <div className="col-xl-10 col-lg-10 col-11">
              <div className="rounded-soft overflow-hidden">
                <Image src={videoBgImage} alt="video-bg-image" />
              </div>
            </div>
          </div>
          <Companies title="Our Partners" page={companiesBannerStyle.crypto} />
        </div>
      </section>

      <div className="img-fluid bg-white">
        <Image src={cryptoBottomShape} alt="cripto-bottom-shape" />
      </div>

      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="overflow-hidden">
        <div className="container">
          <div
            className="
                        row
                        justify-content-lg-between justify-content-center
                    "
          >
            <div
              className="
                            col-lg-6 col-md-10
                            align-self-center
                            mt-6 mt-lg-0
                            order-lg-0
                        "
            >
              <div
                className="
                                position-relative
                            "
              >
                <svg
                  className="h-banner"
                  width="100%"
                  height="100%"
                  viewBox="0 0 691 571"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M200.089 499.406L61.8506 358.466L45.5229 337.729C-15.7076 259.961 -15.1117 150.253 46.9601 73.1017L52.845 65.7872C71.4163 42.7043 95.5146 24.6715 122.91 13.3577C161.738 -2.67801 205.019 -4.33085 244.947 8.6971L267.846 16.1685C298.937 26.3129 326.1 45.8586 345.578 72.1023L353.168 82.3281C381.032 119.869 426.379 140.307 473.005 136.337C505.645 133.558 538.177 142.732 564.537 162.147L580.606 173.982C636.83 215.394 665.414 284.546 654.823 353.539L653.502 362.15C650.215 383.562 643.506 404.309 633.63 423.598L630.009 430.671C597.537 494.096 538.406 539.728 468.776 555.096L422.204 565.375C341.715 583.139 257.761 558.205 200.089 499.406Z"
                    fill="#F7F7F8"
                  />
                  <path
                    d="M200.089 499.406L61.8506 358.466L45.5229 337.729C-15.7076 259.961 -15.1117 150.253 46.9601 73.1017L52.845 65.7872C71.4163 42.7043 95.5146 24.6715 122.91 13.3577C161.738 -2.67801 205.019 -4.33085 244.947 8.6971L267.846 16.1685C298.937 26.3129 326.1 45.8586 345.578 72.1023L353.168 82.3281C381.032 119.869 426.379 140.307 473.005 136.337C505.645 133.558 538.177 142.732 564.537 162.147L580.606 173.982C636.83 215.394 665.414 284.546 654.823 353.539L653.502 362.15C650.215 383.562 643.506 404.309 633.63 423.598L630.009 430.671C597.537 494.096 538.406 539.728 468.776 555.096L422.204 565.375C341.715 583.139 257.761 558.205 200.089 499.406Z"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0"
                        transform="translate(-0.160207) scale(0.000817594 0.000940734)"
                      />
                    </pattern>
                    <image
                      id="image0"
                      width={1615}
                      height={1063}
                      xlinkHref="assets/img/bg-img/cripto-svg.png"
                    />
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-lg-5 col-md-9 pt-7 mt-5 mt-lg-0">
              <div
                className="bg-holder"
                style={{
                  backgroundImage:
                    "url(assets/img/illustrations/shape-bg-text.png)",
                  backgroundSize: "59%",
                  backgroundPosition: "right top",
                }}
              />
              {/*/.bg-holder*/}
              <div className="row">
                <div className="col-xl-10">
                  <h1 className="text-capitalize fs-xl-5 fs-4">
                    <span className="position-relative">
                      Payment system
                      <span
                        className="
                                                heading-shapes
                                                heading-shapes-right
                                            "
                        style={{
                          height: 70,
                          width: 81,
                        }}
                      />
                    </span>
                    <br />
                    that powers your every application
                  </h1>
                  <p className="mt-5 text-900">
                    Get creative with unique payment models. Shape is a complete
                    payments solution for businesses of every type, and at every
                    scale.
                  </p>
                  <div className="row">
                    <div className="col-auto">
                      <ul className="style-check">
                        <li className="mt-4">
                          <span>Gaming</span>
                        </li>
                        <li className="mt-3">
                          <span>Ecommerce</span>
                        </li>
                        <li className="mt-3">
                          <span>Non-profit</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="style-check">
                        <li className="mt-4">
                          <span>Streaming</span>
                        </li>
                        <li className="mt-3">
                          <span>Live Events</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-primary btn-sm mr-3">
                      find out more
                      <span
                        className="
                                                fas
                                                fa-chevron-right
                                                ml-1
                                            "
                      />
                    </button>
                    <button className="btn btn-extra btn-sm">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      <section>
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/stay.png)",
          }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="
                            col-xl-6 col-lg-5
                            order-lg-1
                            text-lg-right text-center
                        "
            >
              <h1
                className="
                                text-white
                                fs-xl-5 fs-md-4 fs-3
                                mt-8 mt-lg-0
                            "
              >
                <span className="position-relative">The easiest way to</span>
                <br />
                stay on top of
                <br />
                your business
              </h1>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8 mt-6">
              <div className="card">
                <div
                  className="bg-holder"
                  style={{
                    backgroundImage:
                      "url(assets/img/illustrations/Vector-inside-card.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "left",
                  }}
                />
                {/*/.bg-holder*/}
                <div
                  className="
                                    card-body
                                    p-md-5 p-4
                                    position-relative
                                "
                >
                  <h2
                    className="
                                        text-dark
                                        font-weight-bold
                                        fs-md-4 fs-3
                                    "
                  >
                    Live ICO
                  </h2>
                  <h5
                    className="
                                        text-primary
                                        font-weight-bold
                                        mt-4
                                    "
                    data-countup='{"count":4638000,"format":"comma","prefix":"$","delay":1.5}'
                  >
                    $0
                  </h5>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <small
                    className="
                                        text-400
                                        font-weight-bold
                                        mt-2
                                        d-inline-block
                                    "
                  >
                    Total amount
                    <span data-countup='{"count":6700000,"format":"comma","prefix":"$","delay":1.5}'>
                      $0
                    </span>
                  </small>
                </div>
              </div>
              <div className="row mt-7">
                <div className="col">
                  <div className="card bg-primary">
                    <div className="card-body p-md-5 p-4">
                      <div
                        className="text-center"
                        data-timer="29 january 2021 9:56:00 GMT+6:00"
                      >
                        <h2
                          className="
                                                    pr-md-4 pr-3
                                                    text-white
                                                    d-inline-flex
                                                    flex-column
                                                    fs-md-4 fs-sm-3 fs-2
                                                "
                        >
                          <span className="days" />
                          <span className="fs-0">Days</span>
                        </h2>
                        <h2
                          className="
                                                    pr-md-4 pr-3
                                                    text-white
                                                    d-inline-flex
                                                    flex-column
                                                    fs-md-4 fs-sm-3 fs-2
                                                "
                        >
                          <span className="hours" />
                          <span className="fs-0">Hours</span>
                        </h2>
                        <h2
                          className="
                                                    pr-md-4 pr-3
                                                    text-white
                                                    d-inline-flex
                                                    flex-column
                                                    fs-md-4 fs-sm-3 fs-2
                                                "
                        >
                          <span className="minutes" />
                          <span className="fs-0">Minutes</span>
                        </h2>
                        <h2
                          className="
                                                    text-white
                                                    d-inline-flex
                                                    flex-column
                                                    fs-md-4 fs-sm-3 fs-2
                                                "
                        >
                          <span className="seconds" />
                          <span className="fs-0">Seconds</span>
                        </h2>
                      </div>
                      <button
                        className="
                                                btn btn-light btn-block
                                                mt-4
                                            "
                      >
                        purchase tokens now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark b-0 h-50 w-100 position-absolute z-index--1" />
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-dark overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="
                            col-md-10 col-11
                            px-md-5 px-3
                            py-6
                        "
            >
              <div
                className="bg-holder"
                style={{
                  backgroundImage:
                    "url(assets/img/bg-img/bg-features-image.png)",
                }}
              />
              {/*/.bg-holder*/}
              <div className="position-relative">
                <h1 className="text-white fs-xl-5 fs-lg-4 fs-3">
                  Our Features
                </h1>
                <p className="text-200 w-xxl-25 w-md-50 pt-3">
                  OpenNode unlocks your business with the latest and most secure
                  technology in payments.
                </p>
                <a className="btn btn-danger mt-3 mr-3" href="#!">
                  Start For Free
                </a>
                <a className="btn btn-light mt-3" href="#!">
                  Learn more
                </a>
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
      <section className="bg-dark pt-0 overflow-hidden">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-xl-11">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={shieldLogo} alt="logo" />
                        </div>

                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Security
                        </h4>
                        <p className="subtitle text-600">
                          Shape is a platform you can trust, with two-factor
                          authentication, smart backup to ensure your funds
                          remain safe and secure
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={exchangeLogo} alt="logo" />
                        </div>
                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Exchange engine
                        </h4>
                        <p className="subtitle text-600">
                          Our engine matches you up with an ever-growing list of
                          traders to buy and sell your cryptocurrency, allowing
                          you to benefit
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={clockThreeLogo} alt="logo" />
                        </div>
                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Instantaneous
                        </h4>
                        <p className="subtitle text-600">
                          All trades are instantaneous and we provide you with
                          real-time market data, to ensure you can react to
                          changes in the market
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="
                                    col-lg-4 col-md-6 col-sm-10
                                    mb-4 mb-lg-0
                                "
                >
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={commentDots} alt="logo" />
                        </div>
                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Real-Time support
                        </h4>
                        <p className="subtitle text-600">
                          Our support team can help you with getting started,
                          funding your account, withdrawals and just general
                          questions about the platform
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="
                                    col-lg-4 col-md-6 col-sm-10
                                    mb-4 mb-md-0
                                "
                >
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={bitcoinCircle} alt="logo" />
                        </div>
                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Multi-currency
                        </h4>
                        <p className="subtitle text-600">
                          Shape allows you to trade cryptocurrencies with any
                          traditional currency. Set prices based on your region
                          for 195 countries.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <a className="text-decoration-none" href="#!">
                    <div
                      className="
                                            card
                                            h-100
                                            hover-cardgroup
                                            bg-extra-1
                                        "
                    >
                      <div className="card-body p-xl-5 p-3">
                        <div className="mb-3">
                          <Image src={lightbulbAltLogo} alt="logo" />
                        </div>
                        <h4
                          className="
                                                    pb-3
                                                    font-weight-bold
                                                    text-white
                                                    title
                                                "
                        >
                          Smart API
                        </h4>
                        <p className="subtitle text-600">
                          We offer a bespoke API and binary protocols which
                          allow traders to connect custom software for HFT and
                          automated trading system
                        </p>
                      </div>
                    </div>
                  </a>
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
      <section className="bg-300">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-10 text-center">
              <h1 className="text-black">
                <span className="position-relative">Pricing</span>
              </h1>
              <p className="text-black">
                Two simple options, Single License for everyone and Volume
                License for your design team or company.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-6 col-md-8 col-10">
              <div className="card bg-secondary">
                <div className="bg-holder" />
                {/*/.bg-holder*/}
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col">
                      <h2
                        className="
                                                font-weight-bold
                                                text-white
                                            "
                      >
                        1%
                      </h2>
                      <p className="fs--1 font-weight-black">Per Transaction</p>
                    </div>
                    <div className="col-auto">
                      <a className="btn-primary btn btn-sm" href="#!">
                        Start now
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <ul className="style-check pl-3">
                        <li className="mt-4">
                          <span>First $10k free</span>
                        </li>
                        <li className="mt-3">
                          <span>No minimums</span>
                        </li>
                        <li className="mt-3">
                          <span>No monthly fees</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="style-check pl-3">
                        <li className="mt-md-4">
                          <span>No contracts</span>
                        </li>
                        <li className="mt-3">
                          <span>Back up</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-6 col-md-8 col-10">
              <div className="card bg-white">
                <div className="bg-holder" />
                {/*/.bg-holder*/}
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col">
                      <h2
                        className="
                                                font-weight-bold
                                                text-1000
                                            "
                      >
                        2.5%
                      </h2>
                      <p className="fs--1 font-weight-black">Per Transaction</p>
                    </div>
                    <div className="col-auto">
                      <a className="btn-primary btn btn-sm" href="#!">
                        Start now
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <ul className="style-check pl-3">
                        <li className="mt-4">
                          <span>First $30k free</span>
                        </li>
                        <li className="mt-3">
                          <span>No minimums</span>
                        </li>
                        <li className="mt-3">
                          <span>No monthly fees</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="style-check pl-3">
                        <li className="mt-md-4">
                          <span>No contracts</span>
                        </li>
                        <li className="mt-3">
                          <span>Back up</span>
                        </li>
                        <li className="mt-3">
                          <span>24/7 support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-6 col-md-8 col-10">
              <div className="card bg-primary">
                <div className="bg-holder" />
                {/*/.bg-holder*/}
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col">
                      <h2
                        className="
                                                font-weight-bold
                                                text-white
                                                fs-3
                                            "
                      >
                        or you can try plans for free!
                      </h2>
                      <p
                        className="
                                                fs--1
                                                font-weight-black
                                                text-white
                                            "
                      >
                        For One Month
                      </p>
                    </div>
                    <div className="col-auto">
                      <a className="btn-light btn btn-sm" href="#!">
                        Start Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
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
                  Choose, Connect &amp; Trade
                </span>
              </h3>
              <button className="btn mt-3 btn-light">purchase now</button>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </DefaultTemplate>
  );
};

export default Crypto;
