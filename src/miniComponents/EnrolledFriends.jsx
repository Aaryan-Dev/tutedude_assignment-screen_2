import React from "react";
import css from "../my.module.css";

const EnrolledFriends = () => {
  return (
    <div className={css.enroll}>
      <div id={css.balance}>
        <div>
          <div>
            <pre>Referral Earning</pre>
            <p>₹ 2,500</p>
          </div>
          <div>
            <pre>Total Referrals</pre>
            <p>7</p>
          </div>
          <div>
            <pre>Wallet Balance</pre>
            <p>₹ 500</p>
          </div>
        </div>
        <pre>Wthdraw Balance</pre>
      </div>

      <div id={css.ref_code}>
        <pre>Your Referral Code</pre>
        <div className={css.border_g}>
          <div>EDCH54</div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledFriends;
