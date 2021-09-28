import logo from "@img/logos/Normal.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PAGES } from "../../../public/pages";

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
    <nav
      className="navbar bg-dark navbar-dark navbar-expand-lg py-3 sticky-kit "
      style={{ position: "fixed", width: "100%", top: "0" }}
    >
      <div className="container">
        <div className="position-relative">
          <Link href="/">
            <a className="navbar-brand" style={{ width: "100px" }}>
              <Image src={logo} alt="logo" objectFit="contain" layout="fill" />
            </a>
          </Link>
        </div>
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
            <Link href={"/" + page.toLowerCase()} key={"nav" + page}>
              <a className="nav-link nav-item ml-auto" role="button">
                {page
                  .toLowerCase()
                  .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
              </a>
            </Link>
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
