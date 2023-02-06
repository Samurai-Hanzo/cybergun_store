import React from "react";

import userImg from "../../assets/details/review.svg";

export default function Review() {
    return (
        <div className="container">
            <div className="wrapper">
                <h2 className="rewiev-title">REVIEW</h2>
                <p className="rewiev-desc">
                    “Low price. High quality. Responsive service. Satisfied with
                    the purchase. I took the SPETSNAZ-ALFA stun gun, a very good
                    thing, I tested it at a distance a couple of times already.”
                </p>
                <div className="usersWrapper">
                    <div className="user">
                        <div className="user-img">
                            <img src={userImg} alt="chel" />
                        </div>

                        <div>
                            <p className="user-name">Jorge Robertson</p>
                            <p className="user-comment">military adviser</p>
                        </div>
                    </div>

                    <div className="user">
                        <div className="user-img">
                            <img src={userImg} alt="chel" />
                        </div>
                        <div>
                            <p className="user-name">Joseph Dunford</p>
                            <p className="user-comment">
                                Chairman of the Joint Chiefs of Staff
                            </p>
                        </div>
                    </div>

                    <div className="user">
                        <div className="user-img">
                            <img src={userImg} alt="chel" />
                        </div>
                        <div>
                            <p className="user-name">Joseph L. Votel</p>
                            <p className="user-comment">
                                Commander, US Central Command
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
