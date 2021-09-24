import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PAGES } from "../../pages";

function Navbar() {
  const [toggle, setToggle] = useState<string>();

  function handleToggle() {
    if (toggle) {
      setToggle("");
    } else {
      setToggle("X show ");
    }
  }
  return (
    <nav className="navbar navbar-dark  navbar-border-bottom navbar-theme  fixed-top navbar-expand-lg py-3 sticky-kit bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="assets/img/logos/Normal.png" alt="logo" width={100} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarStandard"
          aria-controls="navbarStandard"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={" collapse navbar-collapse navbar-nav" + toggle}
          id="navbarStandard"
        >
          {PAGES.map((page) => (
            <a
              className="nav-link nav-item ml-auto"
              href={"/" + page.toLowerCase()}
              role="button"
              key={"nav" + page}
            >
              {page
                .toLowerCase()
                .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
            </a>
          ))}
        </div>

        <div className={"collapse navbar-collapse ml-xl-7 ml-xxl-9" + toggle}>
          <div className="ml-auto mt-3 mt-lg-0">
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
