import React from "react";
import css from "../my.module.css";

const EnrolledFriends = () => {
  return (
    <>
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
            <pre> EDCH54</pre>
          </div>
        </div>
      </div>
      <div id={css.work}>How does it work ?</div>

      <div id={css.how}>
        <div id={css.grid_it}>
          <div>
            <div>
              <img src="https://i.postimg.cc/Hk5GQBFc/invite.png" alt="info" />
            </div>

            <div>
              <div>Invite your Friends</div>
              <div>Share the link tutedude.com with your friends</div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://i.postimg.cc/KYy6Qty9/purchase.png"
                alt="info"
              />
            </div>
            <div>
              <div>Friend purchases any course</div>
              <div>Using your REFERRAL CODE in the payments page</div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://i.postimg.cc/5tqZrj4f/rupee.png" alt="info" />
            </div>
            <div>
              <div>You get ₹ 200 as referral money</div>
              <div>On total purchase the friend makes, into your wallet</div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://i.postimg.cc/xC6B07N7/off.png" alt="info" />
            </div>
            <div>
              <div>Your Friend gets ₹ 200 Off</div>
              <div>
                On his overall fee on successful purchase using your referral
                code
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://i.postimg.cc/bJyKf8rk/wallet.png" alt="info" />
            </div>
            <div>
              <div>Transfer money from wallet</div>
              <div>
                When the wallet balance reaches ₹200 or more, you can withdraw
                it
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledFriends;
