"use client"
import React, { useRef, useState } from "react";

export default function VideoPlayer({ src, poster, className="w-2/4" }:{src:string, poster?:string, className?:string}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Toggle Play/Pause
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle Volume Change
    const handleVolumeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.volume = +event.target.value;
        }
    };

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className= {`${className}`}
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                muted={true}
            />

            <div className="controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <label>
                    Volume:
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.5"
                        onChange={handleVolumeChange}
                    />
                </label>
            </div>
        </div>
    );
}