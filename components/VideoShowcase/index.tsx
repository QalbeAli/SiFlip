"use client";
import React, { useState, useRef, RefObject } from "react";
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react";

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef: RefObject<FullscreenVideoElement> = useRef(null);

  interface FullscreenVideoElement extends HTMLVideoElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Using catch to handle any potential playback errors
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback error:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="z-50">
      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 my-20">
        <div
          className="relative group rounded-lg overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail Overlay (shown before play) */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
              <button
                onClick={handlePlayPause}
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Play size={80} className="text-red-500 animate-pulse" />
              </button>
            </div>
          )}

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-2xl"
            src="/trailer.mp4"
            onClick={handlePlayPause}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Video Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transform ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            } transition-all duration-300`}
          >
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={handleMute}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
              <button
                onClick={handleFullscreen}
                className="hover:text-red-500 transition-colors duration-300"
              >
                <Maximize size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
