import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    name: string;
    roles: string;
    twitterLink: string;
    facebookLink: string;
    instagramLink: string;
    linkedinLink: string;
};

function ProfileDescription(props: React.PropsWithChildren<Props>) {
    return (
        <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-7 col-10 text-center text-md-left">
            <h4 className="font-weight-bold text-700">{props.name}</h4>
            <h6 className="text-500 font-weight-bold fs-0">{props.roles}</h6>
            <p
                className="font-weight-bold display-4 mb-0 text-200 line-height-0 pt-3 pb-1"
                style={{ textIndent: "-5px" }}
            >
                <em>&quot;</em>
            </p>
            <p className="text-900">{props.children}</p>
            <div className="row justify-content-center justify-content-md-start">
                <div className="col-auto">
                    <a
                        className="text-decoration-none py-2 pr-4 social-icon-hover-primary"
                        href={props.twitterLink}
                    >
                        <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            className="social-icon"
                        />
                    </a>
                    <a
                        className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-primary"
                        href={props.facebookLink}
                    >
                        <FontAwesomeIcon
                            icon={["fab", "facebook-f"]}
                            className="social-icon"
                        />
                    </a>
                    <a
                        className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-primary"
                        href={props.instagramLink}
                    >
                        <FontAwesomeIcon
                            icon={["fab", "instagram"]}
                            className="social-icon"
                        />
                    </a>
                    <a
                        className="text-decoration-none d-inline-block social-icon-hover-primary"
                        href={props.linkedinLink}
                    >
                        <FontAwesomeIcon
                            icon={["fab", "linkedin-in"]}
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileDescription;
