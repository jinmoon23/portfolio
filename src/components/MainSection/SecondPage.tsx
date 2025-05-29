import { useEffect, useRef } from "react";

interface SecondPageProps {
  currentPage: number;
}

const SecondPage = ({ currentPage }: SecondPageProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && currentPage === 1) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentPage]);

  return (
    <div className="w-full flex-shrink-0 relative">
      {/* 비디오 배경 */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute w-full h-full object-contain rounded-3xl"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full"></div>
    </div>
  );
};

export default SecondPage;
