import { useState, useEffect } from 'react';
import { ScoreInputForm } from './ScoreInputForm';
import seoulLogo from 'figma:asset/c7d61b20b6c2552f13700e5c7147aa72c4c2103c.png';
import yonseiLogo from 'figma:asset/bd077ba59be00ee1dde2c1a0d4f116c0a2e09600.png';
import koreaLogo from 'figma:asset/2f1260533fccbc1b79f8cf889317d3905d396485.png';
import skkuLogo from 'figma:asset/e35e8cf3f61e4a0f78d5ed48a58e51749392cf97.png';
import sogangLogo from 'figma:asset/995e21813e4d1af12452dec6331924f08e4aa31a.png';
import hanyangLogo from 'figma:asset/ba445deba6f37bda60d86d7d424996dc33b0532b.png';
import kyungheeLogo from 'figma:asset/47210f40f9f7f5e7001ace1678afe5c46bc8ca43.png';
import joongangLogo from 'figma:asset/662425cdd96674a5027465a3af0434be2de5e269.png';
import hufsLogo from 'figma:asset/a043f8515ee1faffc1672359081d13fc15de62ac.png';
import uosLogo from 'figma:asset/fd485d57d10c673ac3510c1e996690c0f50bee04.png';
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

interface AnalysisFormProps {
  onSubmit: (data: any) => void;
}

export function AnalysisForm({ onSubmit }: AnalysisFormProps) {
  const [step, setStep] = useState<'input' | 'select'>('input');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [savedScores, setSavedScores] = useState<any>(null);

  // localStorage에서 데이터 복원
  useEffect(() => {
    const savedFormData = localStorage.getItem('analysisFormData');
    if (savedFormData) {
      try {
        const data = JSON.parse(savedFormData);
        if (data.savedScores) {
          setSavedScores(data.savedScores);
          setStep('select');
        }
      } catch (e) {
        console.error('Failed to restore form data:', e);
      }
    }
  }, []);

  // 데이터 변경 시 localStorage에 저장
  useEffect(() => {
    const formData = {
      savedScores,
      selectedUniversity,
      step,
    };
    localStorage.setItem('analysisFormData', JSON.stringify(formData));
  }, [savedScores, selectedUniversity, step]);

  const universities = [
    // 최상위 (3개)
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo, category: '최상위', abbr: 'YU', color: '#003876' },
    { id: 'korea', label: '고려대학교', logo: koreaLogo, category: '최상위', abbr: 'KU', color: '#9E1B32' },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo, category: '최상위', abbr: 'SG', color: '#004F9F' },
    
    // 상위 (6개 - 서울권)
    { id: 'skku', label: '성균관대학교', logo: skkuLogo, category: '상위', abbr: 'SKKU', color: '#00543A' },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo, category: '상위', abbr: 'HYU', color: '#003876' },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo, category: '상위', abbr: 'UOS', color: '#003876' },
    
    // 지방 거점 국립대 (4개)
    { id: 'pusan', label: '부산대학교', logo: pusanLogo, category: '상위(거점)', abbr: 'PNU', color: '#003C7F' },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo, category: '상위(거점)', abbr: 'KNU', color: '#00543A' },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo, category: '상위(거점)', abbr: 'CNU', color: '#1E4D8C' },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo, category: '상위(거점)', abbr: 'CNU', color: '#003876' },
    
    // 중위 (9개)
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo, category: '중위', abbr: 'CAU', color: '#4B0F79' },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo, category: '중위', abbr: 'KHU', color: '#7D2248' },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo, category: '중위', abbr: 'HUFS', color: '#004F9F' },
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo, category: '중위', abbr: 'EW', color: '#006633' },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo, category: '중위', abbr: 'KU', color: '#7D2248' },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo, category: '중위', abbr: 'DGU', color: '#9E1B32' },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo, category: '중위', abbr: 'HIU', color: '#003876' },
    { id: 'hufs_global', label: '한국외대(글로벌)', logo: hufsLogo, category: '중위', abbr: 'HUFS', color: '#004F9F' },
    { id: 'chungang_anseong', label: '중앙대(안성)', logo: joongangLogo, category: '중위', abbr: 'CAU', color: '#4B0F79' },
    
    // 중하위 (13개)
    { id: 'inha', label: '인하대학교', logo: inhaLogo, category: '중하위', abbr: 'IU', color: '#00559F' },
    { id: 'ajou', label: '아주대학교', logo: ajouLogo, category: '중하위', abbr: 'AU', color: '#0066A5' },
    { id: 'kookmin', label: '국민대학교', logo: kookminLogo, category: '중하위', abbr: 'KMU', color: '#004F9F' },
    { id: 'soongsil', label: '숭실대학교', logo: soongsilLogo, category: '중하위', abbr: 'SSU', color: '#7D2248' },
    { id: 'sejong', label: '세종대학교', logo: sejongLogo, category: '중하위', abbr: 'SJU', color: '#AA1F3D' },
    { id: 'dankook', label: '단국대학교', logo: dankookLogo, category: '중하위', abbr: 'DKU', color: '#0066A5' },
    { id: 'kwangwoon', label: '광운대학교', logo: kwangwoonLogo, category: '중하위', abbr: 'KW', color: '#AA2439' },
    { id: 'hanyang_erica', label: '한양대(ERICA)', logo: hanyangLogo, category: '중하위', abbr: 'HYU', color: '#003876' },
    { id: 'incheon', label: '인천대학교', logo: incheonLogo, category: '중하위', abbr: 'INU', color: '#005BAA' },
    { id: 'kyonggi', label: '경기대학교', logo: kyonggiLogo, category: '중하위', abbr: 'KGU', color: '#0066A5' },
    { id: 'gachon', label: '가천대학교', logo: gachonLogo, category: '중하위', abbr: 'GU', color: '#0066CC' },
    { id: 'sungshin', label: '성신여자대학교', logo: sungshinLogo, category: '중하위', abbr: 'SSWU', color: '#7D2248' },
    { id: 'sookmyung', label: '숙명여자대학교', logo: sookmyungLogo, category: '중하위', abbr: 'SMU', color: '#7D2248' },
  ];

  const handleSaveScores = (scores: any) => {
    setSavedScores(scores);
    setStep('select');
    // 대학 선택 섹션으로 스크롤
    setTimeout(() => {
      document.getElementById('university-selection')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      university: selectedUniversity,
      scores: savedScores,
    });
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Step 1: 성적 입력 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">수능 성적 입력</h2>
          <p className="text-gray-600">
            {step === 'input'
              ? '성적표 업로드 또는 직접 입력으로 성적을 입력해주세요'
              : '분석할 대학교를 선택해주세요'}
          </p>
        </div>

        {/* 저장된 성적 표시 */}
        {savedScores && (
          <div className="mb-8">
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg text-gray-900">내 수능 성적</h3>
              <button
                type="button"
                onClick={() => {
                  setSavedScores(null);
                  setStep('input');
                }}
                className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                성적 수정하기
              </button>
            </div>

            {/* 테이블 */}
            <div className="bg-gray-50 rounded-xl p-2 sm:p-3 overflow-x-auto">
              <table className="w-full border-collapse text-[10px] sm:text-xs">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">성명</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center" colSpan={2}>권민재</th>
                    <th className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">응시일자</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center" colSpan={4}>2026년 11월 (가채점)</th>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">영역</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">한국사</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">국어</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">수학</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">영어</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center" colSpan={2}>탐구</th>
                    <th className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">외국어</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">선택과목</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">화법과작문</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 whitespace-nowrap text-center">확률과통계</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">세계사</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">경제</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">표준점수</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-900 text-center">{savedScores.scores?.koreanScore || savedScores.korean || '140'}</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-900 text-center">{savedScores.scores?.mathScore || savedScores.math || '145'}</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-900 text-center">{savedScores.scores?.inquiry1Score || savedScores.science1 || '68'}</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-900 text-center">{savedScores.scores?.inquiry2Score || savedScores.science2 || '67'}</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center">등급</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-900 text-center">{savedScores.scores?.englishGrade || savedScores.english || '1'}</td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                    <td className="bg-white border border-gray-300 px-1 sm:px-2 py-1 sm:py-1.5 text-gray-700 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {step === 'input' && !savedScores && (
          <ScoreInputForm onSubmit={handleSaveScores} />
        )}

        {/* Step 2: 대학 선 */}
        {savedScores && (
          <form onSubmit={handleSubmit}>
            <div id="university-selection" className="mb-8">
              <div className="inline-block bg-gray-900 text-white px-5 py-2 rounded-xl mb-6 text-sm">
                대학 선택
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {universities.map((university) => (
                  <button
                    key={university.id}
                    type="button"
                    onClick={() => setSelectedUniversity(university.id)}
                    className={`aspect-square bg-white rounded-2xl p-2 flex flex-col items-center justify-center gap-2.5 transition-all hover:shadow-lg active:scale-95 ${
                      selectedUniversity === university.id 
                        ? 'border-3 border-blue-600 shadow-lg shadow-blue-100' 
                        : 'border-2 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {university.logo ? (
                        <img 
                          src={university.logo} 
                          alt={university.label}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div 
                          className="w-full h-full rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: university.color }}
                        >
                          <span className="text-[11px] font-medium">{university.abbr}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* 가로 텍스트 - 줄넘김 방지 */}
                    <span 
                      className={`text-[11px] text-center leading-tight transition-colors whitespace-nowrap px-1 ${
                        selectedUniversity === university.id 
                          ? 'text-blue-700 font-medium' 
                          : 'text-gray-700'
                      } ${university.label.includes('ERICA') ? 'pretendard-text' : ''}`}
                    >
                      {university.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedUniversity}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 sm:py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed disabled:shadow-none text-base font-medium"
            >
              AI 분석 시작하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}