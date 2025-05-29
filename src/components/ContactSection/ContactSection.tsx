import MailLink from "../MainSection/MailLink";
import GithubLink from "../MainSection/GithubLink";

const ContactSection = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 md:px-8 transition-colors">
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 transition-colors">
            연락하기
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">
            {/* 좌측 - QR 코드 섹션 */}
            <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
              <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl shadow-lg transition-colors">
                <div className="w-48 h-48 bg-white dark:bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* QR 코드 이미지 */}
                  <img
                    src="qr.png"
                    alt="QR 코드"
                    className="w-40 h-40 rounded-lg object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center transition-colors">
                QR 코드를 스캔해서 모바일로 접속해 보세요!
              </p>
            </div>

            {/* 우측 - 개인정보 섹션 */}
            <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
              {/* 프로필 이미지 */}
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden shadow-lg transition-colors">
                <img
                  src="profile.jpeg"
                  alt="프로필 사진"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 개인정보 */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
                  최진문
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400 transition-colors">
                      📧
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">
                      rlawjsdlf13@naver.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400 transition-colors">
                      📱
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">
                      +82 10-2929-8021
                    </span>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400 transition-colors">
                      🌐
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">
                      github.com/jinmoon23
                    </span>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400 transition-colors">
                      📍
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">
                      부산, 대한민국
                    </span>
                  </div>
                </div>

                {/* 소셜 링크 버튼들 */}
                <div className="flex justify-center space-x-6 mt-6 items-center">
                  <GithubLink variant="contact" />
                  <MailLink variant="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
