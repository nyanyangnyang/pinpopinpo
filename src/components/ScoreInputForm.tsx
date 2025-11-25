import { useState } from 'react';
import { ChevronDown, Check, User, BookOpen, Award, AlertCircle } from 'lucide-react';

interface ScoreInputFormProps {
  onSubmit: (data: any) => void;
  onBack?: () => void;
  savedScores?: any;
}

export function ScoreInputForm({ onSubmit, onBack, savedScores }: ScoreInputFormProps) {
  const [step, setStep] = useState<'basic' | 'scores'>('basic');
  
  // 기본 정보
  const [studentInfo, setStudentInfo] = useState({
    name: savedScores?.studentInfo?.name || '',
    phone: savedScores?.studentInfo?.phone || '',
    gender: savedScores?.studentInfo?.gender || '',
    year: '2025학년도',
    examType: '수능',
    scoreType: '가채점',
  });

  // 응시 과목
  const [subjects, setSubjects] = useState({
    korean: '국어 (택1)',
    koreanSub: savedScores?.subjects?.koreanSub || '',
    math: '수학 (택1)',
    mathSub: savedScores?.subjects?.mathSub || '',
    inquiry: '탐구 (택2)',
    inquiry1: savedScores?.subjects?.inquiry1 || '',
    inquiry2: savedScores?.subjects?.inquiry2 || '',
    secondLang: savedScores?.subjects?.secondLang || '',
    region: savedScores?.subjects?.region || '',
  });

  // 성적
  const [scores, setScores] = useState({
    koreanScore: savedScores?.scores?.koreanScore || '',
    mathScore: savedScores?.scores?.mathScore || '',
    englishGrade: savedScores?.scores?.englishGrade || '',
    koreanHistoryGrade: savedScores?.scores?.koreanHistoryGrade || '',
    inquiry1Score: savedScores?.scores?.inquiry1Score || '',
    inquiry2Score: savedScores?.scores?.inquiry2Score || '',
  });

  const koreanSubjects = ['화법과작문', '언어와매체'];
  const mathSubjects = ['확률과통계', '미적분', '기하'];
  const socialInquiry = ['생활과윤리', '윤리와사상', '사회문화', '한국지리', '세계지리', '세계사', '동아시아사', '경제', '정치와법'];
  const scienceInquiry = ['물리학I', '화학I', '생명과학I', '지구과학I', '물리학II', '화학II', '생명과학II', '지구과학II'];
  const secondLangSubjects = ['독일어', '프랑스어', '스페인어', '중국어', '일본어', '러시아어', '아랍어', '베트남어', '한문'];

  const handleBasicNext = () => {
    if (!studentInfo.name || !studentInfo.phone || !studentInfo.gender || !subjects.koreanSub || !subjects.mathSub || !subjects.inquiry1 || !subjects.inquiry2 || !subjects.region) {
      alert('모든 필수 정보를 입력해주세요.');
      return;
    }
    setStep('scores');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitScores = () => {
    if (!scores.koreanScore || !scores.mathScore || !scores.englishGrade || !scores.koreanHistoryGrade || !scores.inquiry1Score || !scores.inquiry2Score) {
      alert('모든 성적 정보를 입력해주세요.');
      return;
    }
    onSubmit({
      studentInfo,
      subjects,
      scores,
    });
  };

  const isBasicComplete = studentInfo.name && studentInfo.phone && studentInfo.gender && subjects.koreanSub && subjects.mathSub && subjects.inquiry1 && subjects.inquiry2 && subjects.region;
  const isScoresComplete = scores.koreanScore && scores.mathScore && scores.englishGrade && scores.koreanHistoryGrade && scores.inquiry1Score && scores.inquiry2Score;

  // 기본 정보 및 과목 입력 단계
  if (step === 'basic') {
    return (
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden pretendard-text">
        {/* 진행 상태 표시 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-white">
                <div className="text-sm opacity-90">Step 1</div>
                <div className="font-medium">기본 정보</div>
              </div>
            </div>
            <div className="h-0.5 w-12 bg-white/30"></div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-sm">Step 2</div>
                <div className="font-medium">성적 입력</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* 기본 정보 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-lg text-gray-900">기본 정보</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={studentInfo.name}
                  onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                  placeholder="홍길동"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={studentInfo.phone}
                  onChange={(e) => setStudentInfo({ ...studentInfo, phone: e.target.value })}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white transition-colors"
                />
              </div>
            </div>

            {/* 성별 */}
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-2">
                성별 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStudentInfo({ ...studentInfo, gender: '남성' })}
                  className={`px-6 py-3 rounded-xl border-2 transition-all ${
                    studentInfo.gender === '남성'
                      ? 'bg-blue-50 text-blue-700 border-blue-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  남성
                </button>
                <button
                  type="button"
                  onClick={() => setStudentInfo({ ...studentInfo, gender: '여성' })}
                  className={`px-6 py-3 rounded-xl border-2 transition-all ${
                    studentInfo.gender === '여성'
                      ? 'bg-pink-50 text-pink-700 border-pink-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  여성
                </button>
              </div>
            </div>

            {/* 지역인재 */}
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-2">
                지역인재 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSubjects({ ...subjects, region: '해당' })}
                  className={`px-6 py-3 rounded-xl border-2 transition-all ${
                    subjects.region === '해당'
                      ? 'bg-green-50 text-green-700 border-green-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  ○ 해당
                </button>
                <button
                  type="button"
                  onClick={() => setSubjects({ ...subjects, region: '비해당' })}
                  className={`px-6 py-3 rounded-xl border-2 transition-all ${
                    subjects.region === '비해당'
                      ? 'bg-gray-50 text-gray-700 border-gray-400'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  ✕ 비해당
                </button>
              </div>
            </div>
          </div>

          {/* 응시 과목 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-purple-600" />
              </div>
              <h2 className="text-lg text-gray-900">응시 과목</h2>
            </div>
            
            {/* 국어 */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                국어 선택과목 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {koreanSubjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => setSubjects({ ...subjects, koreanSub: subject })}
                    className={`px-4 py-3 rounded-xl border-2 transition-all ${
                      subjects.koreanSub === subject
                        ? 'bg-blue-50 text-blue-700 border-blue-500'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* 수학 */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                수학 선택과목 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {mathSubjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => setSubjects({ ...subjects, mathSub: subject })}
                    className={`px-3 py-3 rounded-xl border-2 transition-all ${
                      subjects.mathSub === subject
                        ? 'bg-blue-50 text-blue-700 border-blue-500'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* 탐구 */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                탐구 과목 (2과목 선택) <span className="text-red-500">*</span>
              </label>
              
              {/* 선택된 과목 표시 */}
              {(subjects.inquiry1 || subjects.inquiry2) && (
                <div className="mb-3 flex gap-2">
                  {subjects.inquiry1 && (
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm flex items-center gap-1">
                      {subjects.inquiry1}
                      <button
                        onClick={() => setSubjects({ ...subjects, inquiry1: '' })}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        ✕
                      </button>
                    </span>
                  )}
                  {subjects.inquiry2 && (
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm flex items-center gap-1">
                      {subjects.inquiry2}
                      <button
                        onClick={() => setSubjects({ ...subjects, inquiry2: '' })}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        ✕
                      </button>
                    </span>
                  )}
                </div>
              )}
              
              {/* 사회탐구 */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  사회탐구
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {socialInquiry.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => {
                        if (subjects.inquiry1 === subject) {
                          setSubjects({ ...subjects, inquiry1: '' });
                        } else if (subjects.inquiry2 === subject) {
                          setSubjects({ ...subjects, inquiry2: '' });
                        } else if (!subjects.inquiry1) {
                          setSubjects({ ...subjects, inquiry1: subject });
                        } else if (!subjects.inquiry2) {
                          setSubjects({ ...subjects, inquiry2: subject });
                        } else {
                          alert('이미 2과목을 선택했습니다.');
                        }
                      }}
                      className={`px-2 py-2.5 rounded-lg border-2 text-xs transition-all ${
                        subjects.inquiry1 === subject || subjects.inquiry2 === subject
                          ? 'bg-blue-50 text-blue-700 border-blue-500'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* 과학탐구 */}
              <div>
                <div className="text-xs text-gray-500 mb-2">과학탐구</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {scienceInquiry.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => {
                        if (subjects.inquiry1 === subject) {
                          setSubjects({ ...subjects, inquiry1: '' });
                        } else if (subjects.inquiry2 === subject) {
                          setSubjects({ ...subjects, inquiry2: '' });
                        } else if (!subjects.inquiry1) {
                          setSubjects({ ...subjects, inquiry1: subject });
                        } else if (!subjects.inquiry2) {
                          setSubjects({ ...subjects, inquiry2: subject });
                        } else {
                          alert('이미 2과목을 선택했습니다.');
                        }
                      }}
                      className={`px-2 py-2.5 rounded-lg border-2 text-xs transition-all ${
                        subjects.inquiry1 === subject || subjects.inquiry2 === subject
                          ? 'bg-blue-50 text-blue-700 border-blue-500'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 제2외국어/한문 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                제2외국어 / 한문 (선택)
              </label>
              <div className="relative">
                <select
                  value={subjects.secondLang}
                  onChange={(e) => setSubjects({ ...subjects, secondLang: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white appearance-none"
                >
                  <option value="">미응시</option>
                  {secondLangSubjects.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 안내 메시지 */}
          {!isBasicComplete && (
            <div className="mb-6 bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800">
                <span className="text-red-500">*</span> 표시된 모든 필수 항목을 입력해주세요.
              </div>
            </div>
          )}

          {/* 하단 버튼 */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setStudentInfo({ name: '', phone: '', gender: '', year: '2025학년도', examType: '수능', scoreType: '가채점' });
                setSubjects({ korean: '국어 (택1)', koreanSub: '', math: '수학 (택1)', mathSub: '', inquiry: '탐구 (택2)', inquiry1: '', inquiry2: '', secondLang: '', region: '' });
              }}
              className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={handleBasicNext}
              disabled={!isBasicComplete}
              className={`flex-1 px-6 py-4 rounded-xl transition-all ${
                isBasicComplete
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              다음 단계 →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 성적 입력 단계
  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden pretendard-text">
      {/* 진행 상태 표시 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div className="text-white">
              <div className="text-sm">Step 1</div>
              <div className="font-medium">기본 정보</div>
            </div>
          </div>
          <div className="h-0.5 w-12 bg-white/30"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-white">
              <div className="text-sm opacity-90">Step 2</div>
              <div className="font-medium">성적 입력</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* 입력 정보 요약 */}
        <div className="mb-6 bg-gray-50 rounded-xl p-4">
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {studentInfo.name} ({studentInfo.gender})
            </span>
            <span>|</span>
            <span>{subjects.koreanSub}</span>
            <span>|</span>
            <span>{subjects.mathSub}</span>
            <span>|</span>
            <span>{subjects.inquiry1}, {subjects.inquiry2}</span>
          </div>
        </div>

        {/* 성적 입력 폼 */}
        <div className="space-y-6 mb-8">
          {/* 국어/수학 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
                국어 <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{subjects.koreanSub}</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={scores.koreanScore}
                  onChange={(e) => setScores({ ...scores, koreanScore: e.target.value })}
                  placeholder="0"
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">점</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
                수학 <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{subjects.mathSub}</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={scores.mathScore}
                  onChange={(e) => setScores({ ...scores, mathScore: e.target.value })}
                  placeholder="0"
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">점</span>
              </div>
            </div>
          </div>

          {/* 영어/한국사 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                영어 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={scores.englishGrade}
                  onChange={(e) => setScores({ ...scores, englishGrade: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white appearance-none"
                >
                  <option value="">등급 선택</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => (
                    <option key={grade} value={grade}>{grade}등급</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                한국사 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={scores.koreanHistoryGrade}
                  onChange={(e) => setScores({ ...scores, koreanHistoryGrade: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white appearance-none"
                >
                  <option value="">등급 선택</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => (
                    <option key={grade} value={grade}>{grade}등급</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 탐구 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
                탐구 <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">{subjects.inquiry1}</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={scores.inquiry1Score}
                  onChange={(e) => setScores({ ...scores, inquiry1Score: e.target.value })}
                  placeholder="0"
                  min="0"
                  max="50"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">점</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
                탐구 <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">{subjects.inquiry2}</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={scores.inquiry2Score}
                  onChange={(e) => setScores({ ...scores, inquiry2Score: e.target.value })}
                  placeholder="0"
                  min="0"
                  max="50"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">점</span>
              </div>
            </div>
          </div>

          {/* 제2외국어 (참고용) */}
          {subjects.secondLang && (
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                제2외국어 / 한문 (참고)
              </label>
              <input
                type="text"
                value={subjects.secondLang}
                disabled
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-500"
              />
            </div>
          )}
        </div>

        {/* 안내 메시지 */}
        {!isScoresComplete && (
          <div className="mb-6 bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              모든 성적을 정확하게 입력해주세요. (국어/수학은 표준점수, 탐구는 원점수로 입력)
            </div>
          </div>
        )}

        {/* 하단 버튼 */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              setStep('basic');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            ← 이전
          </button>
          <button
            type="button"
            onClick={handleSubmitScores}
            disabled={!isScoresComplete}
            className={`flex-1 px-6 py-4 rounded-xl transition-all ${
              isScoresComplete
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            저장하기 ✓
          </button>
        </div>
      </div>
    </div>
  );
}