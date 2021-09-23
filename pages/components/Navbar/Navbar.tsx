import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav
      className="
            navbar
            bg-dark
            navbar-dark navbar-expand-lg
            py-3
            sticky-kit
        "
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img
            src="assets/img/logos/Normal-success.png"
            alt="logo"
            width={100}
          />
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
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/alerts.html"
                            >
                              Alerts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/background.html"
                            >
                              Background
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/badges.html"
                            >
                              Badges
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/breadcrumb.html"
                            >
                              Breadcrumb
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/buttons.html"
                            >
                              Buttons
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/cards.html"
                            >
                              Cards
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
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
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/countdown.html"
                            >
                              Countdown
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/dropdowns.html"
                            >
                              Dropdowns
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/fancyscroll.html"
                            >
                              Fancyscroll
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/forms.html"
                            >
                              Forms
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/hoverbox.html"
                            >
                              Hoverbox
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/list-group.html"
                            >
                              List group
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
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
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/navs.html"
                            >
                              Navs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/navbar.html"
                            >
                              Navbar
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/page-headers.html"
                            >
                              Page headers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/pagination.html"
                            >
                              Pagination
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/popovers.html"
                            >
                              Popovers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/progress.html"
                            >
                              Progress
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
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
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/spinners.html"
                            >
                              Spinners
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/tables.html"
                            >
                              Tables
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/tabs.html"
                            >
                              Tabs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/tooltips.html"
                            >
                              Tooltips
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/toasts.html"
                            >
                              Toasts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
                              href="components/php-AJAX-form.html"
                            >
                              Php AJAX form
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="
                                                            nav-link
                                                            py-1
                                                            text-700
                                                            font-weight-medium
                                                            pl-2
                                                        "
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
                <a className="dropdown-item" href="plugins/slick-carousel.html">
                  Slick carousel
                </a>
                <a className="dropdown-item" href="plugins/fancy-countup.html">
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
                <a className="dropdown-item" href="documentation/plugins.html">
                  Plugins
                </a>
              </div>
            </li>
          </ul>
          <div className="ml-auto mt-3 mt-lg-0">
            <a
              className="
                            btn btn-sm btn-secondary
                            mr-xl-3 mr-lg-2 mr-3
                        "
              href="#!"
            >
              Sign In
            </a>
            <a className="btn-primary btn btn-sm" href="#!">
              Purchase
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
