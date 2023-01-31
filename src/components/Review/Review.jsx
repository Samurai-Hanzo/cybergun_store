import React from "react";
import "./Review.scss";

import "../../assets/details/review.svg";

export default function Review() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>REVIEW</h2>
        <p className="pUnderH2">
          “It's amazing what has helped me learn about my team. I don't worry
          about blindspots anymore, and 1-on-1s have never been more productive.
          The team loves it.”
        </p>
        <div className="usersWrapper">
          <div className="users">
            <img
              src="/cybergun_store/src/assets//details/review.svg"
              alt="chel"
            />
            <div>
              <p>Jorge Robertson</p>
              <p>CS at Google</p>
            </div>
          </div>

          <div className="users">
            <img src="" alt="chel" />
            <div>
              <p>Jorge Robertson</p>
              <p>CS at Google</p>
            </div>
          </div>

          <div className="users">
            <img src="" alt="chel" />
            <div>
              <p>Jorge Robertson</p>
              <p>CS at Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
