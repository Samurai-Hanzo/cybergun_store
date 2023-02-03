import React from "react";
import VideoSection from "../../assets/details/header_video_prime_Trim.mp4";

const Video = () => {
    return (
        <div class="video-bg">
            <video
                src={VideoSection}
                type="video/mp4"
                autoplay
                muted
                loop
            ></video>
            <div class="video-bg__content">
                <div class="video-header">
                    <img src="../../assets/details/video_header.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Video;
