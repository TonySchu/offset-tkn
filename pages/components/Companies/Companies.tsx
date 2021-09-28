import Image from "next/image";
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
        <div className="col-10 row">
          {COMPANIES.map((companie) => (
            <div
              className="col-12 col-sm position-relative m-1"
              key={companie.toUpperCase()}
              style={{ height: "40px" }}
            >
              <Image
                src={companie}
                alt="microsoft-logo"
                objectFit="contain"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
