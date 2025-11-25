import { useState, useMemo } from 'react';
import { ArrowLeft, Plus, X, Search, AlertCircle, ChevronDown, ChevronUp, Trash2, Edit2 } from 'lucide-react';
import { getUniversityData } from '../data/universities';

// 대학 로고 imports
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

interface ApplicationStrategyPageProps {
  onBack: () => void;
}

interface SelectedDepartment {
  id: string;
  universityId: string;
  universityName: string;
  universityLogo?: string;
  departmentName: string;
  group: string;
  probability: number;
  quota: number;
  convertedScore?: number;
  cutoffs?: any[];
}

interface ApplicationSet {
  id: number;
  name: string;
  groupA: SelectedDepartment | null;
  groupB: SelectedDepartment | null;
  groupC: SelectedDepartment | null;
}

export function ApplicationStrategyPage({ onBack }: ApplicationStrategyPageProps) {
  const [selectedTrack, setSelectedTrack] = useState<'humanities' | 'science'>('science');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedSetId, setSelectedSetId] = useState<number | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<'A' | 'B' | 'C'>('A');
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [editingSetId, setEditingSetId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  
  // 조합들
  const [applicationSets, setApplicationSets] = useState<ApplicationSet[]>([
    { id: 1, name: '조합 1', groupA: null, groupB: null, groupC: null }
  ]);
  const [nextSetId, setNextSetId] = useState(2);
  
  // 대학 데이터 가져오기
  const universityData = getUniversityData();

  const universities = [
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo },
    { id: 'korea', label: '고려대학교', logo: koreaLogo },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo },
    { id: 'skku', label: '성균관대학교', logo: skkuLogo },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo },
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo },
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo },
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
    { id: 'catholic', label: '가톨릭대학교', logo: catholicLogo },
    { id: 'kau', label: '한국항공대', logo: kauLogo },
    { id: 'suwon', label: '수원대학교', logo: suwonLogo },
    { id: 'koreatech', label: '한국기술교육대', logo: koreatechLogo },
    { id: 'kpu', label: '한국공학대', logo: kpuLogo },
    { id: 'pusan', label: '부산대학교', logo: pusanLogo },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo },
    { id: 'jeonbuk', label: '전북대학교', logo: jeonbukLogo },
    { id: 'chungbuk', label: '충북대학교', logo: chungbukLogo },
    { id: 'pukyong', label: '부경대학교', logo: pukyongLogo },
    { id: 'kangwon', label: '강원대학교', logo: kangwonLogo },
    { id: 'hufs_global', label: '한국외대(글로벌)', logo: hufsLogo },
    { id: 'chungang_anseong', label: '중앙대(다빈치)', logo: joongangLogo },
    { id: 'korea_sejong', label: '고려대(세종)', logo: koreaLogo },
    { id: 'hongik_sejong', label: '홍익대(세종)', logo: hongikLogo },
    { id: 'yonsei_mirae', label: '연세대(미래)', logo: yonseiLogo },
    { id: 'konkuk_glocal', label: '건국대(글로컬)', logo: konkukLogo },
    { id: 'dankook_cheonan', label: '단국대(천안)', logo: dankookLogo },
    { id: 'yeungnam', label: '영남대학교', logo: yeungnamLogo },
    { id: 'donga', label: '동아대학교', logo: dongaLogo },
  ];

  // localStorage에서 성적 정보 가져오기
  const userScores = useMemo(() => {
    const savedScores = localStorage.getItem('userScores');
    if (savedScores) {
      try {
        return JSON.parse(savedScores);
      } catch (e) {
        console.error('Failed to parse user scores:', e);
      }
    }
    return {
      korean: '130',
      math: '128',
      english: '2',
      science1: '65',
      science2: '63',
    };
  }, []);

  // 환산점수 계산
  const calculateConvertedScore = (dept: any, scores: any) => {
    const formula = dept.formula;
    const weights = formula.weights;
    const scoreTypes = formula.score_types;
    
    let totalScore = 0;
    
    if (scoreTypes.korean === 'standard') {
      totalScore += (parseFloat(scores.korean) / 149) * weights.korean;
    }
    
    if (scoreTypes.math === 'standard') {
      totalScore += (parseFloat(scores.math) / 148) * weights.math;
    }
    
    if (scoreTypes.english === 'converted' && formula.english_conversion) {
      const englishScore = formula.english_conversion[scores.english] || 0;
      totalScore += englishScore;
    }
    
    if (scoreTypes.inquiry === 'converted') {
      const inquiry1 = parseFloat(scores.science1);
      const inquiry2 = parseFloat(scores.science2);
      const inquiryAvg = (inquiry1 + inquiry2) / 2;
      totalScore += (inquiryAvg / 72) * weights.inquiry;
    }
    
    return totalScore;
  };

  // 합격 확률 계산
  const calculateProbability = (convertedScore: number, cutoffs: any[]) => {
    const recentCutoff = cutoffs.find(c => c.year === 2024) || cutoffs[0];
    
    if (!recentCutoff) return 0;
    
    const { min, mean, std } = recentCutoff;
    const zScore = (convertedScore - mean) / std;
    const probability = 50 + 50 * erf(zScore / Math.sqrt(2));
    
    return Math.max(0, Math.min(100, probability));
  };

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

  // 모든 학과 목록 (검색용)
  const allDepartments = useMemo(() => {
    if (!universityData?.universities) return [];
    
    const results: any[] = [];
    
    universityData.universities.forEach((university: any) => {
      const universityInfo = universities.find(u => u.id === university.university_id);
      
      university.departments.forEach((dept: any) => {
        if (dept.track !== selectedTrack) return;
        
        const convertedScore = calculateConvertedScore(dept, userScores);
        const probability = calculateProbability(convertedScore, dept.cutoffs);
        
        results.push({
          id: `${university.university_id}-${dept.name}`,
          universityId: university.university_id,
          universityName: universityInfo?.label || university.university_id,
          universityLogo: universityInfo?.logo,
          departmentName: dept.name,
          group: dept.group,
          probability,
          quota: dept.quota,
          convertedScore,
          cutoffs: dept.cutoffs,
        });
      });
    });
    
    return results.sort((a, b) => b.probability - a.probability);
  }, [universityData, userScores, selectedTrack]);

  // 검색 필터링
  const filteredDepartments = useMemo(() => {
    if (!searchQuery) return allDepartments;
    
    const query = searchQuery.toLowerCase();
    return allDepartments.filter(dept => 
      dept.universityName.toLowerCase().includes(query) ||
      dept.departmentName.toLowerCase().includes(query)
    );
  }, [allDepartments, searchQuery]);

  // 조합 추가
  const addApplicationSet = () => {
    setApplicationSets([...applicationSets, {
      id: nextSetId,
      name: `조합 ${nextSetId}`,
      groupA: null,
      groupB: null,
      groupC: null
    }]);
    setNextSetId(nextSetId + 1);
  };

  // 조합 삭제
  const removeApplicationSet = (setId: number) => {
    setApplicationSets(applicationSets.filter(set => set.id !== setId));
  };

  // 학과 추가
  const addDepartment = (dept: any) => {
    if (selectedSetId === null) return;

    const newDept: SelectedDepartment = {
      id: dept.id,
      universityId: dept.universityId,
      universityName: dept.universityName,
      universityLogo: dept.universityLogo,
      departmentName: dept.departmentName,
      group: dept.group,
      probability: dept.probability,
      quota: dept.quota,
      convertedScore: dept.convertedScore,
      cutoffs: dept.cutoffs,
    };

    setApplicationSets(applicationSets.map(set => {
      if (set.id === selectedSetId) {
        if (selectedGroup === 'A') {
          return { ...set, groupA: newDept };
        } else if (selectedGroup === 'B') {
          return { ...set, groupB: newDept };
        } else if (selectedGroup === 'C') {
          return { ...set, groupC: newDept };
        }
      }
      return set;
    }));
    
    setShowSearch(false);
    setSearchQuery('');
  };

  // 학과 제거
  const removeDepartment = (setId: number, group: 'A' | 'B' | 'C') => {
    setApplicationSets(applicationSets.map(set => {
      if (set.id === setId) {
        if (group === 'A') {
          return { ...set, groupA: null };
        } else if (group === 'B') {
          return { ...set, groupB: null };
        } else if (group === 'C') {
          return { ...set, groupC: null };
        }
      }
      return set;
    }));
  };

  // 전체 통계
  const statistics = useMemo(() => {
    const allDepts: SelectedDepartment[] = [];
    applicationSets.forEach(set => {
      if (set.groupA) allDepts.push(set.groupA);
      if (set.groupB) allDepts.push(set.groupB);
      if (set.groupC) allDepts.push(set.groupC);
    });
    
    const safe = allDepts.filter(d => d.probability >= 70).length;
    const appropriate = allDepts.filter(d => d.probability >= 50 && d.probability < 70).length;
    const challenge = allDepts.filter(d => d.probability < 50).length;
    
    return { total: allDepts.length, safe, appropriate, challenge };
  }, [applicationSets]);

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return 'text-green-600 bg-green-50 border-green-200';
    if (probability >= 50) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-orange-600 bg-orange-50 border-orange-200';
  };

  const getProbabilityLabel = (probability: number) => {
    if (probability >= 70) return '안정';
    if (probability >= 50) return '적정';
    return '상향';
  };

  const renderDepartmentCard = (dept: SelectedDepartment | null, setId: number, group: 'A' | 'B' | 'C', groupLabel: string) => {
    if (!dept) {
      return (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm sm:text-base text-gray-600">{groupLabel}</div>
            <button
              onClick={() => {
                setSelectedSetId(setId);
                setSelectedGroup(group);
                setShowSearch(true);
              }}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-xs sm:text-sm"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>추가</span>
            </button>
          </div>
          <div className="text-center py-4 text-gray-400 text-xs sm:text-sm">
            {groupLabel} 학과를 선택하세요
          </div>
        </div>
      );
    }

    return (
      <div className={`border rounded-xl overflow-hidden ${getProbabilityColor(dept.probability)}`}>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs sm:text-sm text-gray-600">{groupLabel}</div>
            <button
              onClick={() => removeDepartment(setId, group)}
              className="p-1 hover:bg-white/50 rounded transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
          
          <button
            onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
            className="w-full text-left"
          >
            <div className="flex items-start gap-2">
              {dept.universityLogo && (
                <img
                  src={dept.universityLogo}
                  alt={dept.universityName}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm text-gray-900 font-medium truncate">
                  {dept.universityName}
                </div>
                <div className="text-xs text-gray-600 truncate">
                  {dept.departmentName}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className={`text-xs px-1.5 py-0.5 rounded ${getProbabilityColor(dept.probability)}`}>
                    {getProbabilityLabel(dept.probability)}
                  </span>
                  <span className="text-xs font-bold">
                    {dept.probability.toFixed(1)}%
                  </span>
                </div>
              </div>
              {expandedDept === dept.id ? (
                <ChevronUp className="w-4 h-4 flex-shrink-0 mt-1" />
              ) : (
                <ChevronDown className="w-4 h-4 flex-shrink-0 mt-1" />
              )}
            </div>
          </button>

          {/* Accordion Content */}
          {expandedDept === dept.id && dept.cutoffs && dept.cutoffs.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200/50 space-y-2">
              <div className="text-xs font-medium text-gray-700">📊 최근 3개년 커트라인</div>
              {dept.cutoffs.slice(0, 3).map((cutoff: any) => (
                <div key={cutoff.year} className="flex items-center justify-between text-xs p-2 bg-white/50 rounded">
                  <span className="text-gray-600">{cutoff.year}학년도</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">최저: {cutoff.min.toFixed(1)}</span>
                    <span className="text-gray-700 font-medium">평균: {cutoff.mean.toFixed(1)}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-200/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">내 환산점수</span>
                  <span className="font-bold text-blue-600">{dept.convertedScore?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pretendard-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium mb-4 sm:mb-6"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">뒤로 가기</span>
          </button>

          <h1 className="text-2xl sm:text-4xl text-gray-900 font-bold mb-4">
            원서 조합 짜기
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            가/나/다군으로 구성된 나만의 원서 조합을 만들어보세요
          </p>
        </div>

        {/* Application Sets */}
        <div className="space-y-4">
          {applicationSets.map((set, index) => (
            <div key={set.id} className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                {editingSetId === set.id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    onBlur={() => {
                      if (editingName.trim()) {
                        setApplicationSets(applicationSets.map(s => 
                          s.id === set.id ? { ...s, name: editingName } : s
                        ));
                      }
                      setEditingSetId(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (editingName.trim()) {
                          setApplicationSets(applicationSets.map(s => 
                            s.id === set.id ? { ...s, name: editingName } : s
                          ));
                        }
                        setEditingSetId(null);
                      }
                    }}
                    className="text-base sm:text-lg text-gray-900 border-b-2 border-blue-500 focus:outline-none px-1"
                    autoFocus
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg text-gray-900">{set.name}</h2>
                    <button
                      onClick={() => {
                        setEditingSetId(set.id);
                        setEditingName(set.name);
                      }}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                )}
                {applicationSets.length > 1 && (
                  <button
                    onClick={() => removeApplicationSet(set.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {renderDepartmentCard(set.groupA, set.id, 'A', '가군')}
                {renderDepartmentCard(set.groupB, set.id, 'B', '나군')}
                {renderDepartmentCard(set.groupC, set.id, 'C', '다군')}
              </div>
            </div>
          ))}
        </div>

        {/* Add Set Button */}
        <button
          onClick={addApplicationSet}
          className="w-full mt-4 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span>조합 추가하기</span>
        </button>

        {/* Tip */}
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base sm:text-lg text-gray-900 mb-2">💡 조합 짜기 팁</h3>
              <div className="space-y-1 text-xs sm:text-sm text-gray-700">
                <p>• 안정 1개, 적정 1개, 상향 1개 정도로 균형있게 배치하는 것을 가장 추천합니다</p>
                <p>• 같은 군의 두 모집단위를 동시에 지원할 수 없습니다.</p>
                <p>• 여러 조합을 만들어서 여러 상황을 고려하며 비교해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl text-gray-900">
                  {selectedGroup === 'A' ? '가군' : selectedGroup === 'B' ? '나군' : '다군'} 학과 선택
                </h3>
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery('');
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="대학명 또는 학과명 검색"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="space-y-2">
                {filteredDepartments
                  .filter(d => d.group === selectedGroup)
                  .map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => addDepartment(dept)}
                      className="w-full p-3 sm:p-4 hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors text-left"
                    >
                      <div className="flex items-start gap-3">
                        {dept.universityLogo && (
                          <img
                            src={dept.universityLogo}
                            alt={dept.universityName}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base text-gray-900 font-medium truncate">
                            {dept.universityName}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 truncate">
                            {dept.departmentName}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-0.5 rounded ${getProbabilityColor(dept.probability)}`}>
                              {getProbabilityLabel(dept.probability)}
                            </span>
                            <span className="text-xs font-bold">
                              {dept.probability.toFixed(1)}%
                            </span>
                            <span className="text-xs text-gray-400">·</span>
                            <span className="text-xs text-gray-500">{dept.quota}명</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}