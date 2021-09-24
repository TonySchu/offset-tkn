import React from "react";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

type Props = {
    name: string;
    roles: string;
    twitterLink: string;
    facebookLink: string;
    instagramLink: string;
    linkedinLink: string;
    alt: string;
    src: string;
};

function Profile(props: React.PropsWithChildren<Props>) {
    return (
        <div className="row d-flex flex-center my-4">
            <ProfileImage {...props} />
            <ProfileDescription {...props}>{props.children}</ProfileDescription>
        </div>
    );
}

export default Profile;
