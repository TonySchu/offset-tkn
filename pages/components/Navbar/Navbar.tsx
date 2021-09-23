import "bootstrap/dist/css/bootstrap.min.css";
import PageRoute from "./PageRoute/PageRoute";

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
        <a className="navbar-brand" href="/">
          <img src="assets/img/logos/Normal.png" alt="logo" width={100} />
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

        <div className="collapse navbar-collapse ml-xl-7 ml-xxl-9">
          <PageRoute name="crypto" />
          <PageRoute name="about" />
          <PageRoute name="contact" />

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
