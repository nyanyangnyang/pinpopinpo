import { useState, useEffect } from 'react';
import { KakaoLoginModal } from './KakaoLoginModal';
import { LogOut, User, Menu, X } from 'lucide-react';
import pinpointLogo from 'figma:asset/7b34d89dd9c683754c4b83fe66b08b9e843e29bd.png';

interface NavigationProps {
  onScoreInputClick?: () => void;
  onUniversitySelectionClick?: () => void;
  onHomeClick?: () => void;
  onProfileClick?: () => void;
  onPricingClick?: () => void;
  onAIStrategyClick?: () => void;
  currentPage?: string;
}

export function Navigation({ onScoreInputClick, onUniversitySelectionClick, onHomeClick, onProfileClick, onPricingClick, onAIStrategyClick, currentPage }: NavigationProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // localStorage에서 로그인 상태 복원
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    // localStorage에 저장
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    // localStorage에서 제거
    localStorage.removeItem('user');
    localStorage.removeItem('userScore');
    localStorage.removeItem('userScores');
    // 메인 페이지로 이동
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handleScoreInputClick = () => {
    setMobileMenuOpen(false);
    if (!user) {
      setIsLoginModalOpen(true);
    } else if (onScoreInputClick) {
      onScoreInputClick();
    }
  };

  const handleUniversitySelectionClick = () => {
    setMobileMenuOpen(false);
    if (!user) {
      setIsLoginModalOpen(true);
    } else if (onUniversitySelectionClick) {
      onUniversitySelectionClick();
    }
  };

  const handleServiceClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onHomeClick) {
      onHomeClick();
      // 페이지 이동 후 스크롤
      setTimeout(() => {
        const element = document.getElementById('service');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('service');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePricingClickInternal = () => {
    setMobileMenuOpen(false);
    if (onPricingClick) {
      onPricingClick();
    }
  };

  const handleProfileClick = () => {
    setMobileMenuOpen(false);
    if (onProfileClick) {
      onProfileClick();
    }
  };

  const handleAIStrategyClick = () => {
    setMobileMenuOpen(false);
    if (onAIStrategyClick) {
      onAIStrategyClick();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button 
              onClick={onHomeClick}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={pinpointLogo} 
                alt="pinpoint" 
                className="h-8 sm:h-10 lg:h-12"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={handleServiceClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                서비스 소개
              </button>
              <button
                onClick={handleScoreInputClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                성적 입력
              </button>
              <button
                onClick={handleUniversitySelectionClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                핀포인트 AI 합격 예측
              </button>
              <button
                onClick={handlePricingClickInternal}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                가격안내
              </button>
              <button
                onClick={handleAIStrategyClick}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                원서 조합 짜기
              </button>
              {user ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    {user.profile_image ? (
                      <img
                        src={user.profile_image}
                        alt={user.nickname}
                        className="w-8 h-8 rounded-full ring-2 ring-blue-100"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <span className="text-gray-900 font-bold">{user.nickname}</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg font-bold"
                >
                  로그인
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={handleServiceClick}
                className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              >
                서비스 소개
              </button>
              <button
                onClick={handleScoreInputClick}
                className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              >
                성적 입력
              </button>
              <button
                onClick={handleUniversitySelectionClick}
                className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              >
                핀포인트 AI 합격 예측
              </button>
              <button
                onClick={handleAIStrategyClick}
                className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              >
                원서 조합 짜기
              </button>
              <button
                onClick={handlePricingClickInternal}
                className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              >
                가격 안내
              </button>
              {user ? (
                <>
                  <button
                    onClick={handleProfileClick}
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3"
                  >
                    {user.profile_image ? (
                      <img
                        src={user.profile_image}
                        alt={user.nickname}
                        className="w-8 h-8 rounded-full ring-2 ring-blue-100"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <span>프로필 ({user.nickname})</span>
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-3 px-4 text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>로그아웃</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-all shadow-md"
                >
                  로그인
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <KakaoLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}