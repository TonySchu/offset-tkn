import React from "react";
import { teamMember } from "../../types/teamMember";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

function Profile(props: React.PropsWithChildren<teamMember>) {
  return (
    <div className="row d-flex flex-center my-4">
      <ProfileImage {...props} />
      <ProfileDescription {...props}>{props.children}</ProfileDescription>
    </div>
  );
}

export default Profile;
