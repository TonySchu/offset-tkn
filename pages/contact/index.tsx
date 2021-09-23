import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <main className="main" id="top">
      <nav className="navbar navbar-dark navbar-border-bottom navbar-theme fixed-top navbar-expand-lg py-3 sticky-kit">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/img/logos/warning.png" alt="logo" width={100} />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarStandard"
            aria-controls="navbarStandard"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ml-xl-7 ml-xxl-9"
            id="navbarStandard"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  id="pagesNavbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="pagesNavbarDropdown"
                >
                  <a className="dropdown-item" href="crypto.html">
                    Crypto
                  </a>
                  <a className="dropdown-item" href="about.html">
                    About
                  </a>
                  <a className="dropdown-item" href="contact.html">
                    Contact
                  </a>
                  <a className="dropdown-item" href="starter.html">
                    Starter
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  id="componentsNavbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Components
                </a>
                <div
                  className="dropdown-menu dropdown-menu-card"
                  aria-labelledby="componentsNavbarDropdown"
                >
                  <div className="card navbar-dropdown-col-4">
                    <div className="card-body py-0">
                      <div className="row">
                        <div className="col-6 col-sm-auto">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/alerts.html"
                              >
                                Alerts
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/background.html"
                              >
                                Background
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/badges.html"
                              >
                                Badges
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/breadcrumb.html"
                              >
                                Breadcrumb
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/buttons.html"
                              >
                                Buttons
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/cards.html"
                              >
                                Cards
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/carousel.html"
                              >
                                Carousel
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-auto">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/countdown.html"
                              >
                                Countdown
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/dropdowns.html"
                              >
                                Dropdowns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/fancyscroll.html"
                              >
                                Fancyscroll
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/forms.html"
                              >
                                Forms
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/hoverbox.html"
                              >
                                Hoverbox
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/list-group.html"
                              >
                                List group
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/modals.html"
                              >
                                Modals
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-auto">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/navs.html"
                              >
                                Navs
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/navbar.html"
                              >
                                Navbar
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/page-headers.html"
                              >
                                Page headers
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/pagination.html"
                              >
                                Pagination
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/popovers.html"
                              >
                                Popovers
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/progress.html"
                              >
                                Progress
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/scrollspy.html"
                              >
                                Scrollspy
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-auto">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/spinners.html"
                              >
                                Spinners
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/tables.html"
                              >
                                Tables
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/tabs.html"
                              >
                                Tabs
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/tooltips.html"
                              >
                                Tooltips
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/toasts.html"
                              >
                                Toasts
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/php-AJAX-form.html"
                              >
                                Php AJAX form
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link py-1 text-700 font-weight-medium pl-2"
                                href="components/mailbluster.html"
                              >
                                Mailbluster
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  id="utilitiesNavbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Utilities
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="utilitiesNavbarDropdown"
                >
                  <a className="dropdown-item" href="utilities/borders.html">
                    Borders
                  </a>
                  <a className="dropdown-item" href="utilities/clearfix.html">
                    Clearfix
                  </a>
                  <a className="dropdown-item" href="utilities/close-icon.html">
                    Close icon
                  </a>
                  <a className="dropdown-item" href="utilities/colors.html">
                    Colors
                  </a>
                  <a className="dropdown-item" href="utilities/display.html">
                    Display
                  </a>
                  <a className="dropdown-item" href="utilities/embed.html">
                    Embed
                  </a>
                  <a className="dropdown-item" href="utilities/flex.html">
                    Flex
                  </a>
                  <a className="dropdown-item" href="utilities/figures.html">
                    Figures
                  </a>
                  <a className="dropdown-item" href="utilities/grid.html">
                    Grid
                  </a>
                  <a className="dropdown-item" href="utilities/sizing.html">
                    Sizing
                  </a>
                  <a
                    className="dropdown-item"
                    href="utilities/stretched-link.html"
                  >
                    Stretched link
                  </a>
                  <a className="dropdown-item" href="utilities/spacing.html">
                    Spacing
                  </a>
                  <a className="dropdown-item" href="utilities/typography.html">
                    Typography
                  </a>
                  <a
                    className="dropdown-item"
                    href="utilities/vertical-Align.html"
                  >
                    Vertical Align
                  </a>
                  <a className="dropdown-item" href="utilities/visibility.html">
                    Visibility
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  id="pluginsNavbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Plugins
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="pluginsNavbarDropdown"
                >
                  <a className="dropdown-item" href="plugins/player.html">
                    Player
                  </a>
                  <a className="dropdown-item" href="plugins/echarts.html">
                    Echarts
                  </a>
                  <a className="dropdown-item" href="plugins/owl-carousel.html">
                    Owl carousel
                  </a>
                  <a
                    className="dropdown-item"
                    href="plugins/slick-carousel.html"
                  >
                    Slick carousel
                  </a>
                  <a
                    className="dropdown-item"
                    href="plugins/fancy-countup.html"
                  >
                    Fancy countup
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  id="documentationNavbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Documentation
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="documentationNavbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="documentation/getting-started.html"
                  >
                    Getting started
                  </a>
                  <a
                    className="dropdown-item"
                    href="documentation/file-structure.html"
                  >
                    File structure
                  </a>
                  <a
                    className="dropdown-item"
                    href="documentation/customization.html"
                  >
                    Customization
                  </a>
                  <a className="dropdown-item" href="documentation/gulp.html">
                    Gulp
                  </a>
                  <a className="dropdown-item" href="documentation/RTL.html">
                    RTL
                  </a>
                  <a
                    className="dropdown-item"
                    href="documentation/plugins.html"
                  >
                    Plugins
                  </a>
                </div>
              </li>
            </ul>
            <div className="ml-auto mt-3 mt-lg-0">
              <a
                className="btn btn-sm btn-secondary mr-xl-3 mr-lg-2 mr-3"
                href="#!"
              >
                Sign In
              </a>
              <a className="btn-warning btn btn-sm" href="#!">
                Purchase
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-extra-1 py-0">
        <div
          className="bg-holder"
          style={{ backgroundImage: "url(assets/img/bg-img/contact-bg.png)" }}
        ></div>
        {/*/.bg-holder*/}
        <div
          className="bg-holder"
          style={{
            backgroundImage:
              "url(assets/img/illustrations/contact-bottom-curve.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-10 pt-8 pb-9">
              <h1 className="font-weight-medium text-white fs-xl-5 fs-sm-4 fs-3">
                <span className="position-relative">
                  Get in touch with us
                  <span
                    className="heading-shapes heading-shapes-right"
                    style={{
                      backgroundImage:
                        "url(assets/img/illustrations/shapes-19.png)",
                      height: 70,
                      width: 80,
                    }}
                  />
                </span>
              </h1>
              <div className="overflow-hidden">
                <p className="text-100 mt-4 w-lg-75">
                  Does your project need a jumpstart? Our best customers have a
                  graveyard of design system attempts that just haven't quite
                  caught on. They’re ready to bring in some outside help to gain
                  traction. Sound familiar? We’d love to chat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow">
          <a href="#map" data-fancyscroll="data-fancyscroll" data-offset={96}>
            <span className="fa-stack fa-1x">
              <span
                className="fas fa-circle fa-stack-2x text-white"
                data-fa-transform="grow-4"
              />
              <span className="fas fa-angle-down fa-stack-1x fa-inverse text-800" />
            </span>
          </a>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-extra-1 z-index--1 text-center">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg col-md-5">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                Address
              </h6>
              <p className="text-500">Arkansas 59299, United States</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-md-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                telephone
              </h6>
              <p className="text-500">(307) 555-0133</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-lg-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5 mt-md-4 mt-lg-0">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                email
              </h6>
              <p className="text-500">support@shape.com</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-md-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5 mt-md-4 mt-lg-0">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                chat
              </h6>
              <p className="text-500">Click here to chat with us!</p>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pt-0 bg-extra-1">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/contact-form-bg.svg)",
            backgroundPosition: "center 40%",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-10 text-center">
              <img
                className="position-absolute d-none d-lg-block b-0"
                src="assets/img/illustrations/map-side-shape.png"
                style={{ width: "30%", right: "-8%" }}
              />
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-map-shape.png"
                style={{ width: "7%", left: "-2%", top: "4%" }}
              />
              <h4 className="text-white mb-5" id="map">
                Find Us On the map!
              </h4>
              <div
                className="googlemap rounded-soft shadow-sm"
                data-latlng="48.8583701,2.2922873,17"
                data-scrollwheel="false"
                data-icon="assets/img/icons/map-marker.png"
                data-zoom={15}
                data-theme="UltraLight"
                style={{ minHeight: 450 }}
              >
                <div className="marker-content">
                  <h5 className="mb-2">Eiffel Tower</h5>
                  <p className="mb-0">
                    Gustave Eiffel's iconic, wrought-iron 1889 tower,
                    <br />
                    with steps and elevators to observation decks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 mt-9">
              <img
                className="jhiri-left-top"
                src="assets/img/illustrations/contact-b.png"
                style={{ width: "13%" }}
              />
              <img
                className="jhiri-right-top d-none d-md-block"
                src="assets/img/illustrations/contact-a.png"
                style={{ width: "18%" }}
              />
              <img
                className="position-absolute d-none d-lg-block b-0"
                src="assets/img/illustrations/contact-form-sideshape.png"
                style={{ width: "40%", right: "-18%" }}
              />
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-map-shape.png"
                style={{ width: "11%", right: "-7%", bottom: "-4%" }}
              />
              <div className="card bg-secondary">
                <div className="card-body p-md-6 p-4">
                  <div className="text-center">
                    <h1 className="text-white fs-xl-5 fs-lg-4 fs-md-3 fs-2">
                      We’d love to hear from you!
                    </h1>
                    <p className="text-600 w-lg-75 mx-auto mt-3">
                      you’re precisely the person whom we’d love to hear from.
                      Drop us a line and let us know what’s on your mind.
                    </p>
                  </div>
                  <form className="mt-5 zform">
                    <div className="zform-feedback" />
                    <input
                      type="hidden"
                      name="to"
                      defaultValue="youremail@domain.com"
                    />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputName">Your Name</label>
                        <input
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="inputName"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Your Mail</label>
                        <input
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="inputEmail"
                          type="email"
                          placeholder="example@domain.com"
                        />
                      </div>
                      <div className="form-group col mt-4">
                        <label htmlFor="message">Your Massage</label>
                        <textarea
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="message"
                          placeholder="type your message here"
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-light btn-block mt-4 shadow-white"
                      type="submit"
                    >
                      Send Mail
                    </button>
                  </form>
                </div>
              </div>
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-leaf1.png"
                style={{ width: "32%", left: "-27%", bottom: "-1%" }}
              />
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
          style={{ backgroundImage: "url(assets/img/bg-img/CTA-contact.png)" }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h3 className="text-white fs-lg-3 fs-2">
                <span className="position-relative">
                  Start your project with us
                  <span
                    className="heading-shapes heading-shapes-right d-none d-md-block"
                    style={{
                      backgroundImage:
                        "url(assets/img/illustrations/shapes-19.png)",
                      height: 70,
                      width: 81,
                    }}
                  />
                </span>
              </h3>
              <button className="btn mt-3 btn-light">Start Now</button>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-dark overflow-hidden">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-3 col-sm-6 mb-4 mb-md-0">
              <h4 className="text-white">Navigate</h4>
              <div className="nav flex-column mt-3">
                <a className="nav-item nav-link px-2 pl-0 text-800" href="#!">
                  Demos
                </a>
                <a className="nav-item nav-link px-2 pl-0 text-800" href="#!">
                  Pages
                </a>
                <a className="nav-item nav-link px-2 pl-0 text-800" href="#!">
                  Blog
                </a>
                <a className="nav-item nav-link px-2 pl-0 text-800" href="#!">
                  Portfolio
                </a>
                <a className="nav-item nav-link px-2 pl-0 text-800" href="#!">
                  Elements
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mr-auto">
              <h4 className="text-white">Contact</h4>
              <div className="media mt-4">
                <span
                  className="fas fa-map-marker mr-3 mt-1 text-warning"
                  data-fa-transform="down-2"
                />
                <div className="media-body">
                  <p className="text-600 mb-0">369 ape view Avenue</p>
                  <p className="text-600">Brooklyn, NY</p>
                </div>
              </div>
              <div className="media mt-1">
                <span
                  className="fas fa-phone mr-3 mt-1 text-warning"
                  data-fa-transform="down-2"
                />
                <div className="media-body" style={{ textIndent: "-3px" }}>
                  <p className="text-600 mb-0">369 ape view Avenue</p>
                  <p className="text-600 fs--1">Mon - Fri 9am - 5pm</p>
                </div>
              </div>
              <div className="media mt-1">
                <span
                  className="fas fa-envelope mr-3 mt-1 text-warning"
                  data-fa-transform="down-2"
                />
                <div className="media-body">
                  <p className="text-600 mb-0">+91 3929 3355</p>
                  <p className="text-600">Brooklyn, NY</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-8 col-10 text-center mt-5 mt-lg-0">
              <h4 className="text-white">Subscribe</h4>
              <p className="text-500 mt-4">
                Latest Shape news, articles, and resources sent straight to your
                inbox every month.
              </p>
              <form className="mailbluster-subscribe">
                <div className="mailbluster-feedback" />
                <div className="form-group row">
                  <input
                    className="form-control form-control-sm"
                    id="colFormLabelSm"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <button
                    className="btn btn-block btn-sm mt-3 btn-warning"
                    type="submit"
                  >
                    Subscribe
                  </button>
                  <p className="fs--1 mt-1">
                    We’ll never share your details. See our Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-dark py-2">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-auto">
              <div className="nav justify-content-center">
                <a
                  className="nav-item nav-link px-2 social-icon-hover-primary"
                  href="#!"
                >
                  <span className="fab fa-twitter social-icon" />
                </a>
                <a
                  className="nav-item nav-link px-2 social-icon-hover-primary"
                  href="#!"
                >
                  <span className="fab fa-facebook-f social-icon" />
                </a>
                <a
                  className="nav-item nav-link px-2 social-icon-hover-danger"
                  href="#!"
                >
                  <span className="fab fa-youtube social-icon" />
                </a>
                <a
                  className="nav-item nav-link px-2 social-icon-hover-warning"
                  href="#!"
                >
                  <span className="fab fa-instagram social-icon" />
                </a>
                <a
                  className="nav-item nav-link px-2 social-icon-hover-info"
                  href="#!"
                >
                  <span className="fab fa-linkedin-in social-icon" />
                </a>
              </div>
              <p>
                Made With <span className="fas fa-heart text-danger" /> by{" "}
                <a
                  className="text-decoration-none font-weight-bold text-white"
                  href="https://themewagon.com/"
                  target="_blank"
                >
                  ThemeWagon
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
    </main>
  );
};

export default Contact;
