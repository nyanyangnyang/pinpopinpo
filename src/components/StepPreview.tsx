import { Keyboard, Brain, BarChart3 } from 'lucide-react';

interface StepPreviewProps {
  onStartClick?: () => void;
}

export function StepPreview({ onStartClick }: StepPreviewProps) {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 제목과 설명 */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4 font-bold">
            간단하지만, 명확한 사용법
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            pinpoint는 보여주기식 화려함을 최소화하고,<br />
            사용자 편의와 분석의 정확도에 집중하였습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Step 1: 성적 입력 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-300 transition-all">
            <div className="bg-gray-50 px-3 py-1.5">
              <span className="text-xs text-gray-500 font-medium">STEP 1</span>
            </div>
            <div className="bg-white p-4 sm:p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Keyboard className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-base text-gray-900 mb-1 font-bold">성적 입력</h3>
                <p className="text-xs text-gray-600">
                  수능 성적 입력
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: AI 분석 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-purple-300 transition-all">
            <div className="bg-gray-50 px-3 py-1.5">
              <span className="text-xs text-gray-500 font-medium">STEP 2</span>
            </div>
            <div className="bg-white p-4 sm:p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <h3 className="text-sm sm:text-base text-gray-900 mb-1 font-bold">AI 분석</h3>
                <p className="text-xs text-gray-600">
                  지능형 합격 ���측
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: 핀포인트 AI 컨설팅 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-green-300 transition-all">
            <div className="bg-gray-50 px-3 py-1.5">
              <span className="text-xs text-gray-500 font-medium">STEP 3</span>
            </div>
            <div className="bg-white p-4 sm:p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base text-gray-900 mb-1 font-bold">핀포인트 AI 컨설팅</h3>
                <p className="text-xs text-gray-600">
                  맞춤 지원 전략
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 마무리 멘트 */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-lg sm:text-xl text-gray-900 font-bold mb-2">
            입시 최고의 동반자,
          </h3>
          <p className="text-lg sm:text-xl text-gray-800 font-bold mb-6">
            pinpoint와 함께하시겠습니까?
          </p>
          <button 
            onClick={onStartClick}
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors font-bold text-sm cursor-pointer"
          >
            지금 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}