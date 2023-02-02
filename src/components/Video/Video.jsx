import React from "react";

const Video = () => {
    return (
        <div class="video-bg">
            <video
                src="../../assets/details/header_video_prime_Trim.mp4"
                type="video/mp4"
                autoplay
                muted
                loop
            ></video>
            <div class="video-bg__content">
                <div class="video-header">
                    <img src="./Group57.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Video;
