import "bootstrap/dist/css/bootstrap.min.css";
import PageRoute from "./PageRoute/PageRoute";

function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark sticky-kit navbar-expand-lg py-3 sticky-kit">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="assets/img/logos/Normal.png" alt="logo" width="100" />
        </a>
        <div
          className="collapse navbar-collapse ml-xl-7 ml-xxl-9"
          id="navbarStandard"
        >
          <PageRoute pageName="Crypto" />
          <PageRoute pageName="Crypto" />
          <PageRoute pageName="Crypto" />
          <PageRoute pageName="Crypto" />
          <PageRoute pageName="Crypto" />
          <PageRoute pageName="Crypto" />
        </div>
        <div className="ml-auto mt-3 mt-lg-0">
          <a
            className="btn btn-sm btn-secondary mr-xl-3 mr-lg-2 mr-3"
            href="#!"
          >
            Sign In
          </a>
          <a className="btn-primary btn btn-sm" href="#!">
            Purchase
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
