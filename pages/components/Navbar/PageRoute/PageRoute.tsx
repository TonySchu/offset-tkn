import "bootstrap/dist/css/bootstrap.min.css";

function PageRoute(props: any) {
  return (
    // <ul className="navbar-nav ml-auto">
    <a
      className="nav-link nav-item"
      id="pagesNavbarDropdown"
      href={"/" + props.pageName.toLowerCase()}
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {props.pageName.toUpperCase()}
    </a>
  );
}

export default PageRoute;
