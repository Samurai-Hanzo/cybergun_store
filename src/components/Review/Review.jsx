import React from "react";

import userImg from "../../assets/details/review.svg";

export default function Review() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="rewiev-title">REVIEW</h2>
        <p className="rewiev-desc">
          “It's amazing what has helped me learn about my team. I don't worry
          about blindspots anymore, and 1-on-1s have never been more productive.
          The team loves it.”
        </p>
        <div className="usersWrapper">
          <div className="user">
            <div className="user-img">
              <img src={userImg} alt="chel" />
            </div>

            <div>
              <p className="user-name">Jorge Robertson</p>
              <p className="user-comment">CS at Google</p>
            </div>
          </div>

          <div className="user">
            <div className="user-img">
              <img src={userImg} alt="chel" />
            </div>
            <div>
              <p className="user-name">Jorge Robertson</p>
              <p className="user-comment">CS at Google</p>
            </div>
          </div>

          <div className="user">
            <div className="user-img">
              <img src={userImg} alt="chel" />
            </div>
            <div>
              <p className="user-name">Jorge Robertson</p>
              <p className="user-comment">CS at Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
