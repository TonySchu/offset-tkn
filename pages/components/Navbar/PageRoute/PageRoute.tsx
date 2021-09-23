import "bootstrap/dist/css/bootstrap.min.css";
import { Page } from "../../../types/Page";

function PageRoute(props: Page) {
  return (
    <div
      className=" collapse navbar-collapse navbar-nav ml-auto"
      id="navbarStandard"
    >
      <a
        className="nav-link nav-item"
        href={"/" + props.name.toLowerCase()}
        role="button"
      >
        {props.name
          .toLowerCase()
          .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
      </a>
    </div>
  );
}

export default PageRoute;
