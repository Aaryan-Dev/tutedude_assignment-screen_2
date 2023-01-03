import React from "react";
import css from "../my.module.css";
import Backlinks from "../miniComponents/Backlinks";
import EnrolledFriends from "../miniComponents/EnrolledFriends";
import ReferralCode from "../miniComponents/ReferralCode";

const Body = () => {
  return (
    <div id={css.body_width}>
      <Backlinks />
      <EnrolledFriends />
      <ReferralCode />
    </div>
  );
};

export default Body;
