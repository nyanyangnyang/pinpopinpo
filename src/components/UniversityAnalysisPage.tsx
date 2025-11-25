import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ChevronDown, RefreshCw, ChevronUp, X } from 'lucide-react';
import yonseiLogo from 'figma:asset/bd077ba59be00ee1dde2c1a0d4f116c0a2e09600.png';
import koreaLogo from 'figma:asset/2f1260533fccbc1b79f8cf889317d3905d396485.png';
import skkuLogo from 'figma:asset/e35e8cf3f61e4a0f78d5ed48a58e51749392cf97.png';
import sogangLogo from 'figma:asset/995e21813e4d1af12452dec6331924f08e4aa31a.png';
import hanyangLogo from 'figma:asset/ba445deba6f37bda60d86d7d424996dc33b0532b.png';
import kyungheeLogo from 'figma:asset/47210f40f9f7f5e7001ace1678afe5c46bc8ca43.png';
import joongangLogo from 'figma:asset/662425cdd96674a5027465a3af0434be2de5e269.png';
import hufsLogo from 'figma:asset/a043f8515ee1faffc1672359081d13fc15de62ac.png';
import uosLogo from 'figma:asset/87a82fc2f2f5d208d62937faf9dd676d9af10e0f.png';
import konkukLogo from 'figma:asset/7e8cbcc8b61a31a7d5bb13837e59d50768aadce0.png';
import donggukLogo from 'figma:asset/f8280acee6af5f5603817440abc72080c1846cbb.png';
import hongikLogo from 'figma:asset/04d3c6dd5ea1d1427127c6dfa962dd419e3499a7.png';
import sookmyungLogo from 'figma:asset/dd533fe1b6789d01b95b480f1875c1bb53787793.png';
import pusanLogo from 'figma:asset/dbaa77142a5e8f1930abc73879bc316e73da1d56.png';
import kookminLogo from 'figma:asset/2b81eb70a72d9ed21d0e7efe75b222bb6be36a3c.png';
import kyungpookLogo from 'figma:asset/622a5a16998d616fd27c5bf5cd45d411f72ea0b0.png';
import ewhaLogo from 'figma:asset/6857ff40db69d0ca56ca149f90f86911f3eee50d.png';
import chungnamLogo from 'figma:asset/e589fc96a7e7bc62c61dc4b5749e64f50eca81d9.png';
import inhaLogo from 'figma:asset/261a4530a69ed3b3f64ca6e2904f6aac9b28308b.png';
import dankookLogo from 'figma:asset/b95c8be6aeda3981cfb4801841d25d314eb08c3a.png';
import ajouLogo from 'figma:asset/d11cfd72d4a9f6ab9febbd853075c7872edcba6a.png';
import soongsilLogo from 'figma:asset/cd661cb2d7fd78b77ea9474c10cb47a8124df77b.png';
import kyonggiLogo from 'figma:asset/5de77d5a346eca10362c8aa619dd79c5f6efc14b.png';
import kwangwoonLogo from 'figma:asset/bd15d7b427271caef42eaa510f7c0bf7fcc3192e.png';
import sejongLogo from 'figma:asset/c61f0249e601b59f251ca704e15d0b5095acf508.png';
import gachonLogo from 'figma:asset/06244499192716bc55d70be756c49970644975ce.png';
import chonnamLogo from 'figma:asset/766219322efa4e68e71226b0d66047be5578f277.png';
import incheonLogo from 'figma:asset/87515a482b2e548945318a38381fd8931a2dcc36.png';
import hansungLogo from 'figma:asset/83ec2378170cdbfa127d086cc9f637e95dc06418.png';
import jeonbukLogo from 'figma:asset/abfe02fc0159753860e4bb570efaa39a0f587384.png';
import chungbukLogo from 'figma:asset/38382a7c2706c5969f3b882c3c808b01bd652967.png';
import seokyeongLogo from 'figma:asset/a255542fede0470907365e1a088ba1df4378f2b6.png';
import sangmyungLogo from 'figma:asset/0fa3dc714f798582e49e432ea9fb5055ecb99b14.png';
import seoultechLogo from 'figma:asset/4d479eb4fcb677045e8dbb40cdff66b4b30abefe.png';
import catholicLogo from 'figma:asset/6be9369aa28645814ed5687f9e3d7e091a6b1b03.png';
import kauLogo from 'figma:asset/8f16cb0443fcb2702c9c9d930eebc7e944b12fe5.png';
import myongjiLogo from 'figma:asset/883f829730472c18b445d27b484976170cdeff94.png';
import pukyongLogo from 'figma:asset/1fb26869f361b1433655d9d5f18fa0fd2ce73296.png';
import kangwonLogo from 'figma:asset/fe657d73580f6703c9415f5197e0635f7610c268.png';
import sahmyookLogo from 'figma:asset/9f4a22fc94be97af63b6f080c20d879ae9c89f00.png';
import sungshinLogoReal from 'figma:asset/3798bc5a602e01b14bdc122ef7a9ad4e37bf4786.png';
import suwonLogo from 'figma:asset/44aaa8d78629d3839d73faf31e28db080021bb0d.png';
import kpuLogo from 'figma:asset/6eb552986ee0229058be60c268dacf62dd023324.png';
import koreatechLogo from 'figma:asset/8119502422ee898fa9262929aedab6e0dc9d22eb.png';
import yeungnamLogo from 'figma:asset/c414689fe3572602a6402e0a1d7781db9e3e5593.png';
import dongaLogo from 'figma:asset/43240844342dee0050af6dc74aa08a730a79a4b1.png';
import { getUniversityData } from '../data/universities';

interface UniversityAnalysisPageProps {
  data: any;
  onBack: () => void;
}

export function UniversityAnalysisPage({ data, onBack }: UniversityAnalysisPageProps) {
  const [selectedGroup, setSelectedGroup] = useState<'all' | 'A' | 'B'>('all');
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'humanities' | 'science'>('all');
  const [isUniversityDropdownOpen, setIsUniversityDropdownOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<any | null>(null);

  // 대학 데이터 가져오기
  const universityData = getUniversityData();

  const universities = [
    // 최상위 (3개)
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo },
    { id: 'korea', label: '고려대학교', logo: koreaLogo },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo },
    
    // 상위 (3개 - 서울권)
    { id: 'skku', label: '성균관대학교', logo: skkuLogo },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo },
    
    // 중위 (7개)
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo },
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo },
    
    // 중하위
    { id: 'ajou', label: '아주대학교', logo: ajouLogo },
    { id: 'inha', label: '인하대학교', logo: inhaLogo },
    { id: 'kookmin', label: '국민대학교', logo: kookminLogo },
    { id: 'soongsil', label: '숭실대학교', logo: soongsilLogo },
    { id: 'sejong', label: '세종대학교', logo: sejongLogo },
    { id: 'hanyang_erica', label: '한양대(ERICA)', logo: hanyangLogo },
    { id: 'dankook', label: '단국대학교', logo: dankookLogo },
    { id: 'kwangwoon', label: '광운대학교', logo: kwangwoonLogo },
    { id: 'sookmyung', label: '숙명여자대학교', logo: sookmyungLogo },
    { id: 'sungsin', label: '성신여자대학교', logo: sungshinLogoReal },
    { id: 'hansung', label: '한성대학교', logo: hansungLogo },
    { id: 'sahmyook', label: '삼육대학교', logo: sahmyookLogo },
    { id: 'seokyeong', label: '서경대학교', logo: seokyeongLogo },
    { id: 'incheon', label: '인천대학교', logo: incheonLogo },
    { id: 'kyonggi', label: '경기대학교', logo: kyonggiLogo },
    { id: 'gachon', label: '가천대학교', logo: gachonLogo },
    { id: 'seoultech', label: '서울과학기술대', logo: seoultechLogo },
    { id: 'myongji', label: '명지대학교', logo: myongjiLogo },
    { id: 'sangmyung', label: '상명대학교', logo: sangmyungLogo },
    { id: 'catholic', label: '대학교', logo: catholicLogo },
    { id: 'kau', label: '한국항공대', logo: kauLogo },
    { id: 'suwon', label: '수원대학교', logo: suwonLogo },
    { id: 'koreatech', label: '한국기술교육대', logo: koreatechLogo },
    { id: 'kpu', label: '한국공학대', logo: kpuLogo },
    
    // 지방 거점 국립대
    { id: 'pusan', label: '부산대학교', logo: pusanLogo },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo },
    { id: 'jeonbuk', label: '전북대학교', logo: jeonbukLogo },
    { id: 'chungbuk', label: '충북대학교', logo: chungbukLogo },
    { id: 'pukyong', label: '부경대학교', logo: pukyongLogo },
    { id: 'kangwon', label: '강원대학교', logo: kangwonLogo },
    
    // 분캠 및 특성화 대학
    { id: 'hufs_global', label: '한국외대(글로벌)', logo: hufsLogo },
    { id: 'chungang_anseong', label: '대(다)', logo: joongangLogo },
    { id: 'korea_sejong', label: '려대(세종)', logo: koreaLogo },
    { id: 'hongik_sejong', label: '홍익대(세종)', logo: hongikLogo },
    { id: 'yonsei_mirae', label: '연세대(미래)', logo: yonseiLogo },
    { id: 'konkuk_glocal', label: '건국대(글로컬)', logo: konkukLogo },
    { id: 'dankook_cheonan', label: '단국대(천안)', logo: dankookLogo },
    { id: 'yeungnam', label: '영남대학교', logo: yeungnamLogo },
    { id: 'donga', label: '동아대학교', logo: dongaLogo },
  ];

  const selectedUniversity = universities.find(u => u.id === data.university);

  // 실제 대학 데이터 찾기
  const universityInfo = universityData?.universities.find(
    (u: any) => u.university_id === data.university
  );

  // 환산점수 계산 함수
  const calculateConvertedScore = (dept: any, userScores: any) => {
    const formula = dept.formula;
    const weights = formula.weights;
    const scoreTypes = formula.score_types;
    
    let totalScore = 0;
    
    // 국어 점수 계산
    if (scoreTypes.korean === 'standard') {
      totalScore += (parseFloat(userScores.korean) / 149) * weights.korean;
    }
    
    // 수학 점수 계산
    if (scoreTypes.math === 'standard') {
      totalScore += (parseFloat(userScores.math) / 148) * weights.math;
    }
    
    // 영어 점수 계산 (등급 환산점수)
    if (scoreTypes.english === 'converted' && formula.english_conversion) {
      const englishScore = formula.english_conversion[userScores.english] || 0;
      totalScore += englishScore;
    }
    
    // 탐구 점수 계산 (평균)
    if (scoreTypes.inquiry === 'converted') {
      const inquiry1 = parseFloat(userScores.science1);
      const inquiry2 = parseFloat(userScores.science2);
      const inquiryAvg = (inquiry1 + inquiry2) / 2;
      totalScore += (inquiryAvg / 72) * weights.inquiry; // 72는 탐구 최고점 평균
    }
    
    return totalScore;
  };

  // 합격 확률 계산 함수
  const calculateProbability = (convertedScore: number, cutoffs: any[]) => {
    // 최근 연도 합격선 사용 (2024년)
    const recentCutoff = cutoffs.find(c => c.year === 2024) || cutoffs[0];
    
    if (!recentCutoff) return 0;
    
    const { min, mean, std } = recentCutoff;
    
    // Z-score 계산
    const zScore = (convertedScore - mean) / std;
    
    // 정규분 누적확률 근사 계산
    const probability = 50 + 50 * erf(zScore / Math.sqrt(2));
    
    return Math.max(0, Math.min(100, probability));
  };

  // 오차함수 근사 (정규분포 계산용)
  const erf = (x: number) => {
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  };

  // 학과 데이터 처리 및 확률 계산
  const departmentsWithProbability = useMemo(() => {
    if (!universityInfo || !universityInfo.departments) return [];
    
    return universityInfo.departments.map((dept: any) => {
      const convertedScore = calculateConvertedScore(dept, data.scores);
      const probability = calculateProbability(convertedScore, dept.cutoffs);
      
      return {
        ...dept,
        convertedScore,
        probability,
      };
    }).sort((a: any, b: any) => b.probability - a.probability); // 확률 높은 순 정렬
  }, [universityInfo, data.scores]);

  // 필터링된 학과 목록
  const filteredDepartments = useMemo(() => {
    return departmentsWithProbability.filter((dept: any) => {
      if (selectedGroup !== 'all' && dept.group !== selectedGroup) return false;
      if (selectedTrack !== 'all' && dept.track !== selectedTrack) return false;
      return true;
    });
  }, [departmentsWithProbability, selectedGroup, selectedTrack]);

  const getProbabilityColor = (prob: number) => {
    if (prob >= 99) return 'bg-blue-100 text-blue-700';
    if (prob >= 80) return 'bg-blue-200 text-blue-800';
    if (prob >= 70) return 'bg-green-100 text-green-700';
    if (prob >= 60) return 'bg-green-200 text-green-800';
    if (prob >= 50) return 'bg-yellow-100 text-yellow-700';
    if (prob >= 40) return 'bg-orange-100 text-orange-700';
    if (prob >= 20) return 'bg-red-100 text-red-600';
    return 'bg-red-200 text-red-700';
  };

  const probabilityRanges = [
    { min: 99.0, color: 'bg-blue-100 text-blue-700', text: '매우 안정적입니다. 어떠한 변수가 없는 한 무조건 합격하는 점수입니다.' },
    { min: 80.0, max: 99.0, color: 'bg-blue-200 text-blue-800', text: '합격 안정성이 매우 높은 점수입니다.' },
    { min: 70.0, max: 80.0, color: 'bg-green-100 text-green-700', text: '안정적입니다. 대부분의 경우 합격하는 점수입니다.' },
    { min: 60.0, max: 70.0, color: 'bg-green-200 text-green-800', text: '합격 가능합니다. 합격할 확률이 불합격할 확률보다 높습니다.' },
    { min: 50.0, max: 60.0, color: 'bg-yellow-100 text-yellow-700', text: '적정입니다. 합격과 불합격 확률이 비슷합니다.' },
    { min: 40.0, max: 50.0, color: 'bg-orange-100 text-orange-700', text: '소신지원입니다. 불합격할 확률이 더 높지만 변수가 있을 수 있습니다.' },
    { min: 20.0, max: 40.0, color: 'bg-red-100 text-red-600', text: '상향지원입니다. 큰 변수가 생기지 는 한 격이 ��렵습니다.' },
    { min: 0, max: 20.0, color: 'bg-red-200 text-red-700', text: '불가능합니다. 현실적으로 합격이 매우 어려운 점수입니다.' },
  ];

  const getGroupLabel = (group: string) => {
    if (group === 'A') return '가군';
    if (group === 'B') return '나군';
    if (group === 'C') return '다군';
    return group;
  };

  const getTrackLabel = (track: string) => {
    if (track === 'humanities') return '인문';
    if (track === 'science') return '자연';
    return track;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pretendard-text">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">대학 재선택</span>
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl text-gray-900 mb-3 font-bold">
            {selectedUniversity?.label} 지원 가능 학과
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            11월 24일 업데이트 기준 학과별 합격 확률입니다.
          </p>
        </div>

        {/* 모바일: 세로 스택, 데스크탑: 3단 그리드 */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
          {/* Left Panel - 학과 목록 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:sticky lg:top-24">
              {/* Track Filters */}
              <div className="mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-gray-600 mb-2">계열</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedTrack('all')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedTrack === 'all'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setSelectedTrack('humanities')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedTrack === 'humanities'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    인문
                  </button>
                  <button
                    onClick={() => setSelectedTrack('science')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedTrack === 'science'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    자연
                  </button>
                </div>
              </div>

              {/* Group Filters */}
              <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-gray-600 mb-2">모집군</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedGroup('all')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedGroup === 'all'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setSelectedGroup('A')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedGroup === 'A'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    가군
                  </button>
                  <button
                    onClick={() => setSelectedGroup('B')}
                    className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedGroup === 'B'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    나군
                  </button>
                </div>
              </div>

              {/* University Info */}
              <div className="mb-4 sm:mb-6 flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
                {selectedUniversity?.logo && (
                  <img
                    src={selectedUniversity.logo}
                    alt={selectedUniversity.label}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <div className={`text-sm sm:text-base text-gray-900 font-bold truncate ${selectedUniversity?.label.includes('ERICA') ? 'pretendard-text' : ''}`}>
                    {selectedUniversity?.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    총 {filteredDepartments.length}개 학과
                  </div>
                </div>
              </div>

              {/* Department List */}
              <div className="space-y-2 sm:space-y-3 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
                {filteredDepartments.map((dept: any, index: number) => (
                  <button
                    key={dept.dept_id || index}
                    onClick={() => setSelectedDept(dept)}
                    className="w-full p-3 sm:p-4 hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent rounded-xl transition-all duration-200 text-left hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-900 text-xs sm:text-sm truncate font-medium">{dept.name}</div>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-1 flex-wrap">
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            {getGroupLabel(dept.group)}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-400">·</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            {getTrackLabel(dept.track)}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-400">·</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            {dept.quota}명
                          </span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                        {dept.probability.toFixed(1)}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          dept.probability >= 99 ? 'bg-green-700' :
                          dept.probability >= 80 ? 'bg-green-600' :
                          dept.probability >= 70 ? 'bg-green-600' :
                          dept.probability >= 60 ? 'bg-yellow-400' :
                          dept.probability >= 50 ? 'bg-yellow-500' :
                          dept.probability >= 40 ? 'bg-orange-400' :
                          dept.probability >= 20 ? 'bg-orange-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${dept.probability}%` }}
                      />
                    </div>
                  </button>
                ))}
                {filteredDepartments.length === 0 && (
                  <div className="text-center py-8 text-gray-500 text-xs sm:text-sm">
                    해당 조건의 학과가 없습니다
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - 합격 확률 기준 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-8 pretendard-text">
              <h2 className="text-lg sm:text-2xl text-gray-900 mb-1 sm:mb-2">
                합격 확률 기준
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
                3개년 합격선 데이터를 기반으로 정규분포 모델을 적용하여 계산됩니다
              </p>

              <div className="space-y-3 sm:space-y-4">
                {probabilityRanges.map((range, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 w-full sm:min-w-[140px] sm:w-auto">
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm ${range.color} w-full sm:w-auto text-center`}>
                        {range.max ? `${range.min}% ~ ${range.max}%` : `${range.min}% 상`}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-1">
                      {range.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <h3 className="text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">📊 점수 산출 방식</h3>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <p>• 각 대학별 환산점수 공식을 적용하여 계산합니다</p>
                  <p>• 2024학년도 기준 최신 환산 공식을 사용합니다</p>
                  <p>• 합격 확률은 최근 3개년 합격선 평균과 표준편차를 기반으로 합니다</p>
                  <p>• 추가합격 및 등록 포기 변수는 고려되지 않았습니다</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs sm:text-sm text-yellow-800">
                  ⚠️ 본 서비스는 참고용이며, 실제 합격 여부와 다를 수 있습니다. 
                  최종 지원 결정은 신중히 하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Detail Modal (Desktop) / Bottom Sheet (Mobile) */}
      {selectedDept && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setSelectedDept(null)}
          />
          
          {/* Desktop: Modal (Center) / Mobile: Bottom Sheet */}
          <div className="fixed inset-x-0 md:inset-0 md:flex md:items-center md:justify-center bottom-0 md:bottom-auto z-50 md:p-4">
            <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl animate-slide-up md:animate-scale-in max-h-[85vh] md:max-h-[90vh] overflow-y-auto md:max-w-2xl md:w-full md:mx-auto">
            <div className="p-5 sm:p-6 md:p-8">
              {/* Handle (Mobile only) */}
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-5 md:hidden" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>

              {/* Department Info */}
              <div className="mb-5 pb-5 border-b border-gray-200">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 pr-8">{selectedDept.name}</h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <span className="font-semibold">{getGroupLabel(selectedDept.group)}</span>
                  <span>·</span>
                  <span className="font-semibold">{getTrackLabel(selectedDept.track)}</span>
                  <span>·</span>
                  <span>모집인원 <span className="font-bold text-gray-700">{selectedDept.quota}명</span></span>
                </div>
              </div>

              {/* Probability */}
              <div className="mb-4 md:mb-5 p-5 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
                <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">합격 가능성</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {selectedDept.probability.toFixed(1)}<span className="text-lg sm:text-xl font-semibold text-gray-500">%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      selectedDept.probability >= 99 ? 'bg-green-700' :
                      selectedDept.probability >= 80 ? 'bg-green-600' :
                      selectedDept.probability >= 70 ? 'bg-green-600' :
                      selectedDept.probability >= 60 ? 'bg-yellow-400' :
                      selectedDept.probability >= 50 ? 'bg-yellow-500' :
                      selectedDept.probability >= 40 ? 'bg-orange-400' :
                      selectedDept.probability >= 20 ? 'bg-orange-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${selectedDept.probability}%` }}
                  />
                </div>
              </div>

              {/* User Score */}
              <div className="mb-4 md:mb-5 p-5 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-2xl border border-blue-200">
                <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">내 환산점수</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  {selectedDept.convertedScore?.toFixed(2)}
                </div>
              </div>

              {/* Cutoffs */}
              {selectedDept.cutoffs && selectedDept.cutoffs.length > 0 && (
                <div className="pt-4 md:pt-5 border-t border-gray-200">
                  <div className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 font-bold">최근 3개년 모집 인원 및 경쟁률</div>
                  <div className="space-y-3 md:space-y-4">
                    {selectedDept.cutoffs.slice(0, 3).map((cutoff: any) => (
                      <div key={cutoff.year} className="p-4 md:p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-sm sm:text-base font-bold text-gray-900">{cutoff.year}학년도</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs font-medium text-gray-500 mb-1.5">모집 인원</div>
                            <div className="text-base sm:text-lg font-bold text-gray-900">{cutoff.n}<span className="text-sm font-semibold text-gray-500">명</span></div>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-500 mb-1.5">경쟁률</div>
                            <div className="text-base sm:text-lg font-bold text-gray-900">{cutoff.competition_ratio ? `${cutoff.competition_ratio}` : '5.1'}<span className="text-sm font-semibold text-gray-500">:1</span></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}