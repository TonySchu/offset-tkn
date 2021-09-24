import { PAGES } from "../../pages";

function Footer() {
  return (
    <div>
      <section className="bg-dark overflow-hidden">
        <div className="container">
          <div
            className="
                        row
                        justify-content-center justify-content-lg-between
                    "
          >
            <div className="col-lg-3 col-sm-6 mb-4 mb-md-0">
              <h4 className="text-white">Navigate</h4>
              <div className="nav flex-column mt-3">
                {PAGES.map((page) => (
                  <a
                    className="nav-item nav-link px-2 pl-0 text-800"
                    href={"/" + page.toLowerCase()}
                    key={"footer" + page}
                  >
                    {page
                      .toLowerCase()
                      .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mr-auto">
              <h4 className="text-white">Contact</h4>
              <div className="media mt-4">
                <span
                  className="
                                    fas
                                    fa-map-marker
                                    mr-3
                                    mt-1
                                    text-danger
                                "
                  data-fa-transform="down-2"
                />
                <div className="media-body">
                  <p className="text-600 mb-0">369 ape view Avenue</p>
                  <p className="text-600">Brooklyn, NY</p>
                </div>
              </div>
              <div className="media mt-1">
                <span
                  className="fas fa-phone mr-3 mt-1 text-danger"
                  data-fa-transform="down-2"
                />
                <div className="media-body" style={{ textIndent: "-3px" }}>
                  <p className="text-600 mb-0">369 ape view Avenue</p>
                  <p className="text-600 fs--1">Mon - Fri 9am - 5pm</p>
                </div>
              </div>
              <div className="media mt-1">
                <span
                  className="
                                    fas
                                    fa-envelope
                                    mr-3
                                    mt-1
                                    text-danger
                                "
                  data-fa-transform="down-2"
                />
                <div className="media-body">
                  <p className="text-600 mb-0">+91 3929 3355</p>
                  <p className="text-600">Brooklyn, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </div>
  );
}

export default Footer;
