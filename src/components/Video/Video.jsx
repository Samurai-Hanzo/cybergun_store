import React from "react";
import VideoSection from "../../assets/details/header_video_prime_Trim.mp4";

const Video = () => {
    return (
        <div className="video-bg">
            <video autoPlay muted loop width="100%">
                <source src={VideoSection} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
