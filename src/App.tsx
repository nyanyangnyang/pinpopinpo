import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { DataStats } from './components/DataStats';
import { StepPreview } from './components/StepPreview';
import { ScoreInputPage } from './components/ScoreInputPage';
import { UniversitySelectionPage } from './components/UniversitySelectionPage';
import { UniversityAnalysisPage } from './components/UniversityAnalysisPage';
import { PricingPage } from './components/PricingPage';
import { ProfilePage } from './components/ProfilePage';
import { ApplicationStrategyPage } from './components/ApplicationStrategyPage';
import { Footer } from './components/Footer';
import { KakaoLoginModal } from './components/KakaoLoginModal';
import { ErrorBoundary } from './components/common';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'score-input' | 'university-selection' | 'result' | 'profile' | 'pricing' | 'ai-strategy'>('home');
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // localStorage에서 데이터 복원
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    const savedAnalysisData = localStorage.getItem('analysisData');
    const savedUser = localStorage.getItem('user');
    
    if (savedPage) {
      setCurrentPage(savedPage as 'home' | 'score-input' | 'university-selection' | 'result' | 'profile' | 'pricing' | 'ai-strategy');
    }
    
    if (savedAnalysisData) {
      try {
        setAnalysisData(JSON.parse(savedAnalysisData));
      } catch (e) {
        console.error('Failed to parse analysis data:', e);
      }
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }
  }, []);

  // 페이지 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // 분석 데이터 변경 시 localStorage에 저장
  useEffect(() => {
    if (analysisData) {
      localStorage.setItem('analysisData', JSON.stringify(analysisData));
    }
  }, [analysisData]);

  // 사용자 데이터 변경 시 localStorage에 저장
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const handleGoToScoreInput = () => {
    setCurrentPage('score-input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToUniversitySelection = () => {
    setCurrentPage('university-selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAnalysis = (data: any) => {
    setAnalysisData(data);
    setCurrentPage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToUniversitySelection = () => {
    setCurrentPage('university-selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToProfile = () => {
    setCurrentPage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPricing = () => {
    setCurrentPage('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToAIStrategy = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    setCurrentPage('ai-strategy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoginModalOpen(false);
    setCurrentPage('university-selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // 메인 랜딩 페이지
  if (currentPage === 'home') {
    return (
      <>
        <div className="min-h-screen bg-white">
          {/* 할인 배너 */}
          <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-4 shadow-lg border-b border-slate-700">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs sm:text-sm text-slate-300">실채점 이후 가격 인상!</span>
                <span className="text-sm sm:text-base font-bold">2026 합격예측 1차 얼리버드 <span className="text-blue-400">90% 할인</span></span>
              </div>
              <button 
                onClick={handleGoToPricing}
                className="bg-white hover:bg-gray-100 text-gray-900 px-4 sm:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1"
              >
                할인 받기
                <span className="text-xs">›</span>
              </button>
            </div>
          </div>
          
          <Navigation 
            onScoreInputClick={handleGoToScoreInput}
            onUniversitySelectionClick={handleGoToUniversitySelection}
            onHomeClick={handleBackToHome}
            onProfileClick={handleGoToProfile}
            onPricingClick={handleGoToPricing}
            onAIStrategyClick={handleGoToAIStrategy}
            currentPage={currentPage}
          />
          <Hero onStartClick={handleOpenLoginModal} />
          <DataStats />
          <StepPreview onStartClick={handleOpenLoginModal} />
          <Footer />
        </div>
        <KakaoLoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </>
    );
  }

  // 성적 입력 페이지
  if (currentPage === 'score-input') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <ScoreInputPage onComplete={handleGoToUniversitySelection} />
        <Footer />
      </div>
    );
  }

  // 대학 선택 페이지
  if (currentPage === 'university-selection') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <UniversitySelectionPage 
          onSubmit={handleSubmitAnalysis}
          onScoreInput={handleGoToScoreInput}
        />
        <Footer />
      </div>
    );
  }

  // 대학별 학과 분석 결과 페이지
  if (currentPage === 'result' && analysisData) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <UniversityAnalysisPage data={analysisData} onBack={handleBackToUniversitySelection} />
        <Footer />
      </div>
    );
  }

  // 프로필 페이지
  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <ProfilePage onHomeClick={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  // 가격 페이지
  if (currentPage === 'pricing') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <PricingPage />
        <Footer />
      </div>
    );
  }

  // AI 전략 페이지
  if (currentPage === 'ai-strategy') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onScoreInputClick={handleGoToScoreInput}
          onUniversitySelectionClick={handleGoToUniversitySelection}
          onHomeClick={handleBackToHome}
          onProfileClick={handleGoToProfile}
          onPricingClick={handleGoToPricing}
          onAIStrategyClick={handleGoToAIStrategy}
          currentPage={currentPage}
        />
        <ApplicationStrategyPage onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return null;
}

// ErrorBoundary로 감싸서 export
export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}