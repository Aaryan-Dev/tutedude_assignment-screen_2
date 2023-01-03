import React from "react";
import css from "../my.module.css";

const EnrolledFriends = () => {
  return (
    <div className={css.enroll}>
      <div className={css.code}>
        <div className={css.referral}>Your Referral Code</div>

        <div className={css.coder}>
          <pre>EDCH54</pre>
        </div>
      </div>

      <div className={css.wall}>
        <div className={css.wallet}>
          <pre>Wallet Balance</pre>
        </div>
        <div className={css.rupee}>&#8377; 500 </div>
      </div>
    </div>
  );
};

export default EnrolledFriends;
