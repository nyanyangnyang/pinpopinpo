import { User, Mail, Calendar, Settings, LogOut, Crown, CheckCircle } from 'lucide-react';

interface ProfilePageProps {
  onHomeClick?: () => void;
}

export function ProfilePage({ onHomeClick }: ProfilePageProps) {
  // localStorage에서 로그인한 사용자 정보 가져오기
  const getUserData = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }
    // 기본 데모 데이터
    return {
      nickname: '김민수',
      email: 'demo@pinpointdata.co.kr',
      profile_image: '', // 기본 아이콘 사용
      phone: '010-1234-5678',
      school: '서울고등학교',
      grade: '3학년',
    };
  };

  const userData = getUserData();
  
  const user = {
    name: userData.nickname,
    email: userData.email,
    loginMethod: 'kakao',
    joinDate: '2024.11.15',
    profileImage: userData.profile_image,
    phone: userData.phone,
    school: userData.school,
    grade: userData.grade,
  };

  const subscription = {
    plan: 'ai-pass', // 'free' or 'ai-pass'
    startDate: '2024.11.18',
    endDate: '2025.02.28',
    analysisCount: 12,
    remainingAnalysis: '무제한',
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl text-gray-900 mb-2 font-bold">프로필</h1>
          <p className="text-gray-600">내 정보를 관리하세요</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  )}
                </div>

                {/* User Name */}
                <h2 className="text-xl sm:text-2xl text-gray-900 mb-2 font-bold">{user.name}</h2>
                
                {/* Email */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{user.email}</span>
                </div>

                {/* Login Method Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full mb-4">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <span className="text-xs text-yellow-800 font-medium">카카오톡 로그인</span>
                </div>

                {/* Join Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>가입일: {user.joinDate}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all border border-gray-200">
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">계정 설정</span>
                </button>
                <button 
                  onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('userScore');
                    localStorage.removeItem('userScores');
                    if (onHomeClick) {
                      onHomeClick();
                    }
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all border border-red-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">로그아웃</span>
                </button>
              </div>
            </div>

            {/* Subscription Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold">
                  {subscription.plan === 'ai-pass' ? '핀포인트 AI 패스' : '무료 체험'}
                </h3>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">시작일</span>
                  <span className="font-medium">{subscription.startDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">종료일</span>
                  <span className="font-medium">{subscription.endDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">분석 횟수</span>
                  <span className="font-bold text-yellow-400">{subscription.remainingAnalysis}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>무제한 대학 분석</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>AI 컨설팅 리포트</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>실시간 합격 예측</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
