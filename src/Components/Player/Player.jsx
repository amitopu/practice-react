import React from "react";
import ReactPlayer from "react-player/lazy";

const Player = () => {
    return (
        <div>
            <h2>This page contains player form react player</h2>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=cd3P3yXyx30"
                volume={0.5}
                controls={true}
                fallback={true}
            ></ReactPlayer>
        </div>
    );
};

export default Player;
