import { X, Sparkles, Shield, Zap } from 'lucide-react';

interface KakaoLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

export function KakaoLoginModal({ isOpen, onClose, onLogin }: KakaoLoginModalProps) {
  if (!isOpen) return null;

  const handleKakaoLogin = () => {
    // Mock Kakao login - in production, this would use Kakao JavaScript SDK
    // window.Kakao.Auth.login({
    //   success: function(response) {
    //     // Handle successful login
    //   }
    // });
    
    // 데모 계정으로 자동 로그인
    const demoUserData = {
      nickname: '김민수',
      email: 'demo@pinpointdata.co.kr',
      profile_image: '', // 기본 아이콘 사용
      phone: '010-1234-5678',
      school: '서울고등학교',
      grade: '3학년',
    };
    
    // 한양대 지원 가능한 현실적인 성적 데이터 (프로필 페이지용)
    const demoScoreData = {
      hasScore: true,
      savedDate: '2024.11.20',
      gender: 'male',
      subjects: [
        { name: '국어', score: 86, grade: 2, standardScore: 120, percentile: 89 },
        { name: '수학', score: 88, grade: 2, standardScore: 129, percentile: 91 },
        { name: '영어', score: 88, grade: 2, standardScore: 128, percentile: 90 },
        { name: '물리학I', score: 84, grade: 2, standardScore: 63, percentile: 88 },
        { name: '화학I', score: 86, grade: 2, standardScore: 64, percentile: 89 },
      ]
    };
    
    // 성적 입력 페이지용 데이터
    const demoUserScores = {
      studentInfo: {
        name: '김민수',
        phone: '010-1234-5678',
        gender: '남성',
        year: '2025학년도',
        examType: '수능',
        scoreType: '가채점',
      },
      subjects: {
        korean: '국어 (택1)',
        koreanSub: '언어와매체',
        math: '수학 (택1)',
        mathSub: '미적분',
        inquiry: '탐구 (택2)',
        inquiry1: '물리학I',
        inquiry2: '화학I',
        secondLang: '',
        region: '비해당',
      },
      scores: {
        koreanScore: '120',
        mathScore: '129',
        englishGrade: '2',
        koreanHistoryGrade: '3',
        inquiry1Score: '63',
        inquiry2Score: '64',
      }
    };
    
    setTimeout(() => {
      onLogin(demoUserData);
      // 프로필 페이지용 성적 데이터 저장
      localStorage.setItem('userScore', JSON.stringify(demoScoreData));
      // 성적 입력 페이지용 데이터 저장
      localStorage.setItem('userScores', JSON.stringify(demoUserScores));
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-white rounded-3xl w-full max-w-md relative shadow-2xl overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gray-600 transition-colors hover:rotate-90 duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative p-8 sm:p-10">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-3 font-bold">pinpoint</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI 기반 합격 예측 서비스를 시작하세요
            </p>
          </div>

          {/* Kakao Login Button */}
          <button
            onClick={handleKakaoLogin}
            className="w-full bg-[#FEE500] hover:bg-[#FDD800] text-[#000000] py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] hover:shadow-xl mb-6 font-semibold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C6.486 3 2 6.262 2 10.291c0 2.633 1.715 4.95 4.303 6.302-.176.632-.567 2.031-.651 2.359-.097.378.138.373.29.271.111-.075 1.799-1.208 2.467-1.651C9.28 17.737 10.612 17.9 12 17.9c5.514 0 10-3.262 10-7.291C22 6.262 17.514 3 12 3z"
                fill="currentColor"
              />
            </svg>
            <span>카카오로 3초만에 시작하기</span>
          </button>

          {/* Terms */}
          <div className="text-center text-xs text-gray-500 mb-6 leading-relaxed">
            로그인 시 <span className="text-gray-700 underline cursor-pointer hover:text-gray-900">서비스 이용약관</span> 및{' '}
            <span className="text-gray-700 underline cursor-pointer hover:text-gray-900">개인정보 처리방침</span>에 동의하게 됩니다
          </div>

          {/* Demo Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-sm">💡</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-yellow-900 font-medium mb-1">개발 데모 버전</p>
                <p className="text-xs text-yellow-800 leading-relaxed">
                  로그인하면 한양대 수준의 샘플 성적으로 자동 입력됩니다. 실제 서비스에서는 Kakao SDK를 사용합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}