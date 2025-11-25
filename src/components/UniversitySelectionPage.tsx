import { useState, useEffect } from 'react';
import { AlertCircle, Check, Search, Edit2 } from 'lucide-react';
import seoulLogo from 'figma:asset/c7d61b20b6c2552f13700e5c7147aa72c4c2103c.png';
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
import sungshinLogo from 'figma:asset/bdffd16e110b2e2c74ab518b101c030f892304e4.png';
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

interface UniversitySelectionPageProps {
  onSubmit: (data: any) => void;
  onScoreInput?: () => void;
}

export function UniversitySelectionPage({ onSubmit, onScoreInput }: UniversitySelectionPageProps) {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [savedScores, setSavedScores] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const universities = [
    // 최상위 (3개)
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo, category: '최상위', abbr: 'YU', color: '#003876' },
    { id: 'korea', label: '고려대학교', logo: koreaLogo, category: '최상위', abbr: 'KU', color: '#9E1B32' },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo, category: '최상위', abbr: 'SG', color: '#004F9F' },
    
    // 상위 (3개 - 서울권)
    { id: 'skku', label: '성균관대학교', logo: skkuLogo, category: '상위', abbr: 'SKKU', color: '#00543A' },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo, category: '상위', abbr: 'HYU', color: '#003876' },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo, category: '상위', abbr: 'UOS', color: '#003876' },
    
    // 중위 (7개)
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo, category: '중위', abbr: 'CAU', color: '#4B0F79' },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo, category: '중위', abbr: 'KHU', color: '#7D2248' },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo, category: '중위', abbr: 'HUFS', color: '#004F9F' },
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo, category: '중위', abbr: 'EW', color: '#006633' },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo, category: '중위', abbr: 'KU', color: '#7D2248' },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo, category: '중위', abbr: 'DGU', color: '#9E1B32' },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo, category: '중위', abbr: 'HIU', color: '#003876' },
    
    // 중하위
    { id: 'ajou', label: '아주대학교', logo: ajouLogo, category: '중하위', abbr: 'AU', color: '#0066A5' },
    { id: 'inha', label: '인하대학교', logo: inhaLogo, category: '중하위', abbr: 'IU', color: '#00559F' },
    { id: 'kookmin', label: '국민대학교', logo: kookminLogo, category: '중하위', abbr: 'KMU', color: '#004F9F' },
    { id: 'soongsil', label: '숭실대학교', logo: soongsilLogo, category: '중하위', abbr: 'SSU', color: '#7D2248' },
    { id: 'sejong', label: '세종대학교', logo: sejongLogo, category: '중하위', abbr: 'SJU', color: '#AA1F3D' },
    { id: 'hanyang_erica', label: '한양대(ERICA)', logo: hanyangLogo, category: '중하위', abbr: 'HYU', color: '#003876' },
    { id: 'dankook', label: '단국대학교', logo: dankookLogo, category: '중하위', abbr: 'DKU', color: '#0066A5' },
    { id: 'kwangwoon', label: '광운대학교', logo: kwangwoonLogo, category: '중하위', abbr: 'KW', color: '#AA2439' },
    { id: 'sookmyung', label: '숙명여자대학교', logo: sookmyungLogo, category: '중하위', abbr: 'SMU', color: '#7D2248' },
    { id: 'sungsin', label: '성신여자대학교', logo: sungshinLogoReal, category: '중하위', abbr: 'SSW', color: '#7D2248' },
    { id: 'hansung', label: '한성대학교', logo: hansungLogo, category: '중하위', abbr: 'HSU', color: '#0066A5' },
    { id: 'sahmyook', label: '삼육대학교', logo: sahmyookLogo, category: '중하위', abbr: 'SYU', color: '#004F9F' },
    { id: 'seokyeong', label: '서경대학교', logo: seokyeongLogo, category: '중하위', abbr: 'SKU', color: '#7D2248' },
    { id: 'incheon', label: '인천대학교', logo: incheonLogo, category: '중하위', abbr: 'INU', color: '#005BAA' },
    { id: 'kyonggi', label: '경기대학교', logo: kyonggiLogo, category: '중하위', abbr: 'KGU', color: '#0066A5' },
    { id: 'gachon', label: '가천대학교', logo: gachonLogo, category: '중하위', abbr: 'GU', color: '#0066CC' },
    { id: 'seoultech', label: '서울과학기술대', logo: seoultechLogo, category: '중하위', abbr: 'STECH', color: '#005BAA' },
    { id: 'myongji', label: '명지대학교', logo: myongjiLogo, category: '중하위', abbr: 'MJU', color: '#0066A5' },
    { id: 'sangmyung', label: '상명대학교', logo: sangmyungLogo, category: '중하위', abbr: 'SMU', color: '#7D2248' },
    { id: 'catholic', label: '가톨릭대학교', logo: catholicLogo, category: '중하위', abbr: 'CU', color: '#7D2248' },
    { id: 'kau', label: '한국항공대학교', logo: kauLogo, category: '중하위', abbr: 'KAU', color: '#0066A5' },
    { id: 'suwon', label: '수원대학교', logo: suwonLogo, category: '중하위', abbr: 'SU', color: '#0066A5' },
    { id: 'koreatech', label: '한국기술교육대', logo: koreatechLogo, category: '중하위', abbr: 'KTECH', color: '#004F9F' },
    { id: 'kpu', label: '한국공학대', logo: kpuLogo, category: '중하위', abbr: 'KPU', color: '#7D2248' },
    
    // 지방 거점 국립대
    { id: 'pusan', label: '부산대학교', logo: pusanLogo, category: '상위(거점)', abbr: 'PNU', color: '#003C7F' },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo, category: '상위(거점)', abbr: 'KNU', color: '#00543A' },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo, category: '상위(거점)', abbr: 'CNU', color: '#003876' },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo, category: '상위(거점)', abbr: 'JNU', color: '#1E4D8C' },
    { id: 'jeonbuk', label: '전북대학교', logo: jeonbukLogo, category: '상위(거점)', abbr: 'JBNU', color: '#00543A' },
    { id: 'chungbuk', label: '충북대학교', logo: chungbukLogo, category: '상위(거점)', abbr: 'CBNU', color: '#004F9F' },
    { id: 'pukyong', label: '부경대학교', logo: pukyongLogo, category: '상위(거점)', abbr: 'PKNU', color: '#003C7F' },
    { id: 'kangwon', label: '강원대학교', logo: kangwonLogo, category: '상위(거점)', abbr: 'KNU', color: '#00543A' },
    
    // 분캠 및 특성화 대학
    { id: 'hufs_global', label: '한국외대(글로벌)', logo: hufsLogo, category: '중위', abbr: 'HUFS', color: '#004F9F' },
    { id: 'chungang_anseong', label: '중앙대(다빈치)', logo: joongangLogo, category: '중위', abbr: 'CAU', color: '#4B0F79' },
    { id: 'korea_sejong', label: '고려대(세종)', logo: koreaLogo, category: '중위', abbr: 'KU', color: '#9E1B32' },
    { id: 'hongik_sejong', label: '홍익대(세종)', logo: hongikLogo, category: '중하위', abbr: 'HIU', color: '#003876' },
    { id: 'yonsei_mirae', label: '연세대(미래)', logo: yonseiLogo, category: '중위', abbr: 'YU', color: '#003876' },
    { id: 'konkuk_glocal', label: '건국대(글로컬)', logo: konkukLogo, category: '중하위', abbr: 'KU', color: '#7D2248' },
    { id: 'dankook_cheonan', label: '단국대(천안)', logo: dankookLogo, category: '중하위', abbr: 'DKU', color: '#0066A5' },
    { id: 'yeungnam', label: '영남대학교', logo: yeungnamLogo, category: '중하위', abbr: 'YNU', color: '#0066A5' },
    { id: 'donga', label: '동아대학교', logo: dongaLogo, category: '중하위', abbr: 'DU', color: '#0066A5' },
  ];

  // localStorage에서 성적 데이터 원
  useEffect(() => {
    const savedFormData = localStorage.getItem('userScores');
    if (savedFormData) {
      try {
        const data = JSON.parse(savedFormData);
        setSavedScores(data);
      } catch (e) {
        console.error('Failed to restore scores:', e);
      }
    }
  }, []);

  const handleUniversitySelect = (universityId: string) => {
    if (!savedScores) {
      alert('먼저 성적을 입력해주세요.');
      if (onScoreInput) {
        onScoreInput();
      }
      return;
    }
    
    setSelectedUniversity(universityId);
    const university = universities.find(u => u.id === universityId);
    
    // 성적 데이터를 UniversityAnalysisPage가 기대하는 형식으로 변환
    onSubmit({
      university: universityId,
      universityName: university?.label,
      scores: {
        korean: savedScores.scores?.koreanScore || '',
        math: savedScores.scores?.mathScore || '',
        english: savedScores.scores?.englishGrade || '',
        science1: savedScores.scores?.inquiry1Score || '',
        science2: savedScores.scores?.inquiry2Score || '',
      },
    });
  };

  const groupedUniversities = {
    '최상위': universities.filter(u => u.category === '최상위'),
    '상위': universities.filter(u => u.category === '상위'),
    '상위(거점)': universities.filter(u => u.category === '상위(거점)'),
    '중위': universities.filter(u => u.category === '중위'),
    '중하위': universities.filter(u => u.category === '중하위'),
  };

  // 검색 필터링
  const filteredUniversities = universities.filter(uni => 
    uni.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl text-gray-900 mb-3 font-bold">핀포인트 AI 합격 예측</h1>
          <p className="text-gray-600">분석하고 싶은 대학을 선택하세요</p>
        </div>

        {/* 성적 미입력 경고 */}
        {!savedScores && (
          <div className="mb-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-amber-900 font-semibold">성적을 먼저 입력해주세요</p>
              <p className="text-amber-700 text-sm mt-1">대학 분석을 위해서는 성적 입력이 필요합니다.</p>
              <button
                onClick={onScoreInput}
                className="mt-3 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition-colors font-semibold"
              >
                성적 입력하러 가기 →
              </button>
            </div>
          </div>
        )}

        {/* 저장��� 성적 표시 */}
        {savedScores && (
          <div className="mb-8 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
              <h2 className="text-white font-bold text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                입력된 성적
              </h2>
              <button
                onClick={onScoreInput}
                className="flex items-center gap-1.5 text-white hover:text-blue-300 text-xs font-medium transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md"
              >
                <Edit2 className="w-3.5 h-3.5" />
                수정
              </button>
            </div>
            
            <div className="p-3 sm:p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-2 sm:px-3 py-2 text-left text-xs text-gray-700 font-bold">과목</th>
                      <th className="px-2 sm:px-3 py-2 text-center text-xs text-gray-700 font-bold">표준점수</th>
                      <th className="px-2 sm:px-3 py-2 text-center text-xs text-gray-700 font-bold hidden sm:table-cell">과목명</th>
                      <th className="px-2 sm:px-3 py-2 text-center text-xs text-gray-700 font-bold">등급</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm">
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-3 py-2 text-gray-900 font-bold">국어</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-lg sm:text-xl text-gray-900 font-bold">
                        {savedScores.scores?.koreanScore || savedScores.korean || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600 hidden sm:table-cell">
                        {savedScores.subjects?.korean || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                          2
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-3 py-2 text-gray-900 font-bold">수학</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-lg sm:text-xl text-gray-900 font-bold">
                        {savedScores.scores?.mathScore || savedScores.math || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600 hidden sm:table-cell">
                        {savedScores.subjects?.math || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                          2
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-3 py-2 text-gray-900 font-bold">영어</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600">-</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600 hidden sm:table-cell">-</td>
                      <td className="px-2 sm:px-3 py-2 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                          {savedScores.scores?.englishGrade || savedScores.english || '-'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-3 py-2 text-gray-900 font-bold">탐구 1</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-lg sm:text-xl text-gray-900 font-bold">
                        {savedScores.scores?.inquiry1Score || savedScores.science1 || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600 hidden sm:table-cell">
                        {savedScores.subjects?.inquiry1 || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                          2
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-3 py-2 text-gray-900 font-bold">탐구 2</td>
                      <td className="px-2 sm:px-3 py-2 text-center text-lg sm:text-xl text-gray-900 font-bold">
                        {savedScores.scores?.inquiry2Score || savedScores.science2 || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center text-gray-600 hidden sm:table-cell">
                        {savedScores.subjects?.inquiry2 || '-'}
                      </td>
                      <td className="px-2 sm:px-3 py-2 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                          2
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 대학 검색 */}
        {savedScores && (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="대학 이름으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        )}

        {/* 대학 목록 */}
        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xl text-gray-900 font-bold">지원 가능 대학 ({filteredUniversities.length}개)</h2>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                초기화
              </button>
            )}
          </div>
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>검색 결과가 없습니다</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {filteredUniversities.map((university) => (
                <button
                  key={university.id}
                  onClick={() => handleUniversitySelect(university.id)}
                  className={`bg-white border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all hover:scale-105 hover:shadow-xl aspect-square ${
                    selectedUniversity === university.id
                      ? 'border-blue-500 shadow-xl'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {university.logo ? (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      <img 
                        src={university.logo} 
                        alt={university.label}
                        className={`w-full h-full object-contain ${university.id === 'kau' ? 'scale-150' : ''}`}
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: university.color }}
                    >
                      <span>{university.abbr}</span>
                    </div>
                  )}
                  <span className={`text-gray-900 text-center text-xs sm:text-sm font-bold leading-tight ${university.label.includes('ERICA') ? 'pretendard-text' : ''}`}>
                    {university.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}