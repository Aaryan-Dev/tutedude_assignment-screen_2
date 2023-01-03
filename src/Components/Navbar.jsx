import React from "react";
import css from "../my.module.css";

const Navbar = () => {
  return (
    <div className={css.navigator}>
      <div id={css.navbar}>
        <div id={css.logo}></div>
        <div className={css.links}>
          <div>
            <a className={css.assignment} href="google.com">
              <pre>My Assignment</pre>
            </a>
          </div>
          <div>
            <a className={css.assignment} href="google.com">
              <pre>Chat with Mentor</pre>
            </a>
          </div>
          <div className={css.profileName}>
            <div>
              <img
                id={css.prof}
                src="https://i.postimg.cc/m2ZSKv2T/Vector.png"
                alt="vector"
              />
            </div>
            <div className={css.insert}>
              <a className={css.profile} href="google.com">
                <pre> ProfileName </pre>

                <div id={css.hide_arrow}>
                  <svg
                    id={css.d_down}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div>
              <img
                className={css.drop_down}
                src="https://i.postimg.cc/DfPgjvhC/Vector-drop.png"
                alt="dropdown"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
