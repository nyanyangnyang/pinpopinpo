import { useState, useEffect } from 'react';
import { ScoreInputForm } from './ScoreInputForm';
import { Check } from 'lucide-react';

interface ScoreInputPageProps {
  onComplete?: () => void;
}

export function ScoreInputPage({ onComplete }: ScoreInputPageProps) {
  const [savedScores, setSavedScores] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // localStorage에서 데이터 복원
  useEffect(() => {
    const savedFormData = localStorage.getItem('userScores');
    if (savedFormData) {
      try {
        const data = JSON.parse(savedFormData);
        setSavedScores(data);
        setIsEditing(false); // 저장된 성적이 있으면 수정 모드 off
      } catch (e) {
        console.error('Failed to restore scores:', e);
      }
    } else {
      setIsEditing(true); // 저장된 성적이 없으면 바로 입력 모드
    }
  }, []);

  const handleScoreSubmit = (scores: any) => {
    setSavedScores(scores);
    localStorage.setItem('userScores', JSON.stringify(scores));
    setShowSuccess(true);
    setIsEditing(false);
    
    // 2초 후 성공 메시지 숨김
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 pretendard-text">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl text-gray-900 mb-3 font-bold">성적 입력</h1>
          <p className="text-gray-600">수능 성적을 입력하고 저장하세요</p>
        </div>

        {/* 성공 메시지 */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 animate-fadeIn">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-green-900 font-semibold">성적이 저장되었습니다!</p>
              <p className="text-green-700 text-sm">이제 '핀포인트 AI 합격 예측'에서 대학을 선택하세요.</p>
            </div>
          </div>
        )}

        {/* 저장된 성적이 있고 수정 모드가 아닐 때 */}
        {savedScores && !isEditing ? (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6">
            <h2 className="text-xl text-gray-900 mb-6 flex items-center gap-2 font-bold">
              <Check className="w-5 h-5 text-green-500" />
              저장된 성적
            </h2>
            
            {/* 기본 정보 */}
            <div className="mb-6 bg-gray-50 rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">이름</p>
                  <p className="text-gray-900 font-semibold">{savedScores.studentInfo?.name || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">성별</p>
                  <p className="text-gray-900 font-semibold">{savedScores.studentInfo?.gender || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">전화번호</p>
                  <p className="text-gray-900 font-semibold">{savedScores.studentInfo?.phone || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">지역인재</p>
                  <p className="text-gray-900 font-semibold">{savedScores.subjects?.region || '-'}</p>
                </div>
              </div>
            </div>

            {/* 응시 과목 */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-500 mb-3 font-semibold">응시 과목</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-600 mb-1">국어</p>
                  <p className="text-sm text-blue-900 font-semibold">{savedScores.subjects?.koreanSub || '-'}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-600 mb-1">수학</p>
                  <p className="text-sm text-blue-900 font-semibold">{savedScores.subjects?.mathSub || '-'}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs text-purple-600 mb-1">탐구1</p>
                  <p className="text-sm text-purple-900 font-semibold">{savedScores.subjects?.inquiry1 || '-'}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs text-purple-600 mb-1">탐구2</p>
                  <p className="text-sm text-purple-900 font-semibold">{savedScores.subjects?.inquiry2 || '-'}</p>
                </div>
              </div>
            </div>

            {/* 성적 */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-500 mb-3 font-semibold">성적</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">국어</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.koreanScore || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">표준점수</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">수학</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.mathScore || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">표준점수</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">영어</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.englishGrade || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">등급</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">한국사</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.koreanHistoryGrade || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">등급</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">탐구1</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.inquiry1Score || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">원점수</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm mb-1 font-medium">탐구2</p>
                  <p className="text-gray-900 text-2xl font-bold">{savedScores.scores?.inquiry2Score || '-'}</p>
                  <p className="text-gray-500 text-xs mt-1">원점수</p>
                </div>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl transition-all hover:bg-blue-50 font-bold"
              >
                수정하기
              </button>
              <button
                onClick={onComplete}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg font-bold"
              >
                대학 선택하러 가기 →
              </button>
            </div>
          </div>
        ) : (
          /* 성적 입력 폼 */
          <ScoreInputForm 
            onSubmit={handleScoreSubmit}
            savedScores={savedScores}
          />
        )}
      </div>
    </div>
  );
}