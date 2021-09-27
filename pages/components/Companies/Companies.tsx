import React from "react";
import { COMPANIES } from "../../companies";

export const companiesBannerStyle = {
  home: "col-xxl-10 col-xl-9 col-lg-8 col-10 mb-md-4 mb-lg-0 text-center",
  crypto: "mt-md-9 mt-6 pb-lg-8 pb-md-5 pb-6 text-center",
};

function Companies(props: { title: string; page: string }) {
  return (
    <div className={props.page} style={{ zIndex: "1" as any }}>
      <h5 className="text-500 font-weight-bold">{props.title}</h5>
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="mt-lg-5 mt-3">
            {COMPANIES.map((companie) => (
              <img
                className="img-fluid ml-3"
                src={companie}
                alt="microsoft-logo"
                width={156}
                key={companie.toUpperCase()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
