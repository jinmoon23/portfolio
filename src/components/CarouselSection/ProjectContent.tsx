import React from "react";
import { useState, useEffect } from "react";

interface ProjectContentProps {
  period: string;
  projectName: string;
  roles: string[];
  description: string[];
  videoUrl?: string;
  imageUrl?: string;
  isVerticalVideo?: boolean;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  period,
  projectName,
  roles,
  description,
  videoUrl,
  imageUrl,
  isVerticalVideo,
}) => {
  // 모바일 디바이스 감지
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // 미디어 콘텐츠가 있는지 확인
  const hasMedia = videoUrl || imageUrl;

  return (
    <div
      className={`grid grid-cols-1 ${
        hasMedia ? "lg:grid-cols-2" : ""
      } gap-6 lg:gap-8`}
    >
      {/* 왼쪽: 텍스트 내용 */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base sm:text-lg font-semibold">
          <span className="text-gray-600 dark:text-gray-400 transition-colors">
            {period}
          </span>
          <span className="font-bold text-gray-900 dark:text-gray-100 transition-colors">
            {projectName}
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
              본인의 역할:
            </h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
              {roles.map((role, index) => (
                <li key={index} className="ml-2 sm:ml-4">
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
              프로젝트 내용:
            </h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
              {description.map((item, index) => (
                <li key={index} className="ml-2 sm:ml-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 오른쪽: 미디어 콘텐츠 */}
      {hasMedia && (
        <div
          className={`flex ${
            isVerticalVideo ? "items-start" : "items-center"
          } ${isVerticalVideo ? "justify-start" : "justify-center"}`}
        >
          <div
            className={`w-full ${
              isVerticalVideo ? "max-w-xs" : "max-w-md lg:max-w-full"
            }`}
          >
            {/* 영상 렌더링 */}
            {videoUrl && (
              <video
                className={`w-auto h-auto rounded-lg ${
                  isVerticalVideo
                    ? "aspect-[9/16] max-h-[500px]" // 9:16 비율 고정 및 최대 높이 제한
                    : "" // 일반 영상은 원본 비율 유지
                }`}
                controls
                autoPlay={!isMobile} // 모바일에서는 자동재생 비활성화
                loop
                muted
                preload="metadata"
                poster="/video-thumbnail.jpg"
              >
                <source src={videoUrl} type="video/mp4" />
                <p className="text-gray-600 dark:text-gray-400 text-center p-4">
                  브라우저에서 이 비디오 형식을 지원하지 않습니다.
                </p>
              </video>
            )}

            {/* 이미지 렌더링 */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="프로젝트 스크린샷"
                className="w-full h-auto rounded-lg object-contain max-h-[400px]"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
