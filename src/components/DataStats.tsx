import dashboardImage from 'figma:asset/e3448a7b2e003d929ecc87f31321be5e1483afa4.png';

export function DataStats() {
  return (
    <div className="bg-white py-12 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl text-gray-900 mb-4 sm:mb-4 font-bold px-2">
            컨설턴트들이 사용하는 분석기,
            <br />
            궁금하셨죠?
          </h2>
          
          <div className="mt-6 sm:mt-12 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            <p>
              pinpoint는 유명 컨설턴트들이 사용하던
              <br />
              자체 합격 예측 분석 프로그램을 제작한 연구원들과
              <br />
              대치동 전문 컨설턴트가 모여서 제작한
              <br />
              합격 예측 프로그램입니다.
            </p>
            <p className="mt-3 sm:mt-4">
              이젠 내 집에서도 저렴하고 손쉽게,
              <br />
              대치동 프로그램을 사용해보실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className="mb-8 sm:mb-12">
          <img 
            src={dashboardImage} 
            alt="pinpoint 합격 예측 분석 화면" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}