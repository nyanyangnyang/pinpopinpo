import pinpointLogo from 'figma:asset/7b34d89dd9c683754c4b83fe66b08b9e843e29bd.png';

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 sm:py-12 mt-16 sm:mt-24 border-t border-gray-200 pretendard-text">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 로고 */}
        <div className="mb-6">
          <img 
            src={pinpointLogo} 
            alt="pinpoint" 
            className="h-7 sm:h-8"
          />
        </div>

        {/* 회사 정보 */}
        <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p>
            (주)핀포인트데이터랩 | 대표이사 권민재 | 사업자 등록번호 847-86-02581 | 서울특별시 강남구 압구정로2길 46, 214-S23호
          </p>
          <p>
            contact@pinpointdata.co.kr | 개인정보보호 책임자 권민재 | 호스팅서비스 Amazon Web Services
          </p>
        </div>

        {/* 하단 링크 및 저작권 */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">이용약관</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">개인정보처리방침</a>
          </div>
          <div className="text-gray-500">
            © 핀포인트데이터랩 PINPOINT DATA LAB.
          </div>
        </div>
      </div>
    </footer>
  );
}