import React from "react";
import css from "../my.module.css";

const ReferralCode = () => {
  return (
    <div id={css.ReferralCode}>
      <div className={css.enrolled}>
        <pre>Friends who enrolled</pre>
        <p>(3)</p>
      </div>

      <div className={css.friends}>
        <div>
          <div>
            <div className={css.name}>Dhiraj Saxsena</div>
            <div className={css.date}>14 Sep, 2022</div>
          </div>
          <div className={css.detail}>Courses Enrolled(6)</div>
          <div className={css.skills}>
            <div>UI/UX</div>
            <div>Photoshop</div>
            <div>Illustrator</div>
            <div>Python</div>
            <div>MERN</div>
            <div>Java</div>
          </div>
          <div>
            <pre className={css.amount}>Referral Amount</pre>

            <pre className={css.price}>&#8377;185</pre>
          </div>
        </div>
        <div>
          <div>
            <div className={css.name}>Subhash Mishra</div>
            <div className={css.date}>15 Sep, 2022</div>
          </div>
          <div className={css.detail}>Courses Enrolled(23)</div>
          <div id={css.scroll} className={css.skills}>
            <div>UI/UX</div>
            <div>Photoshop</div>
            <div>Illustrator</div>
            <div>Python</div>
            <div>MERN</div>
            <div>C++</div>
            <div>Java</div>
            <div>GitHub</div>
            <div>DSA</div>
          </div>
          <div>
            <pre className={css.amount}>Referral Amount</pre>
            <pre className={css.price}>&#8377;485</pre>
          </div>
        </div>

        <div>
          <div>
            <div className={css.name}>Prafull Kumar</div>
            <div id={css.hide_date} className={css.date}>
              16 Sep, 2022
            </div>
          </div>
          <div className={css.detail}>Courses Enrolled(23)</div>
          <div className={css.skills}>
            <div>UI/UX</div>
            <div>Photoshop</div>
            <div>Illustrator</div>
            <div>Python</div>
            <div>MERN</div>
          </div>
          <div>
            <pre className={css.amount}>Referral Amount</pre>
            <pre className={css.price}>&#8377;485</pre>
          </div>
          <div id={css.gradiant}></div>
        </div>
      </div>

      <div id={css.terms}>Terms & Conditions</div>
    </div>
  );
};

export default ReferralCode;
