import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface ResultsProps {
  data: any;
}

export function Results({ data }: ResultsProps) {
  const universities = [
    {
      name: '서울대학교',
      department: '의과대학',
      probability: 85,
      status: 'safe',
      lastYear: { cutoff: 287.5, applicants: 245 },
      thisYear: { predicted: 288.2, myScore: 292.5 }
    },
    {
      name: '연세대학교',
      department: '의과대학',
      probability: 92,
      status: 'safe',
      lastYear: { cutoff: 285.3, applicants: 268 },
      thisYear: { predicted: 286.0, myScore: 292.5 }
    },
    {
      name: '고려대학교',
      department: '의과대학',
      probability: 95,
      status: 'safe',
      lastYear: { cutoff: 283.8, applicants: 291 },
      thisYear: { predicted: 284.5, myScore: 292.5 }
    },
    {
      name: '서강대학교',
      department: '의과대학',
      probability: 73,
      status: 'moderate',
      lastYear: { cutoff: 289.2, applicants: 198 },
      thisYear: { predicted: 290.1, myScore: 292.5 }
    },
    {
      name: '성균관대학교',
      department: '의과대학',
      probability: 88,
      status: 'safe',
      lastYear: { cutoff: 284.7, applicants: 256 },
      thisYear: { predicted: 285.3, myScore: 292.5 }
    },
    {
      name: '한양대학교',
      department: '의과대학',
      probability: 90,
      status: 'safe',
      lastYear: { cutoff: 284.1, applicants: 273 },
      thisYear: { predicted: 284.8, myScore: 292.5 }
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'text-green-600 bg-green-50';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-50';
      case 'risky':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'moderate':
        return <AlertCircle className="w-5 h-5" />;
      case 'risky':
        return <XCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'safe':
        return '안정';
      case 'moderate':
        return '적정';
      case 'risky':
        return '소신';
      default:
        return '';
    }
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl text-gray-900 mb-6">AI 분석 결과</h2>
          
          <div className="grid grid-cols-3 gap-6 mb-8 bg-blue-50 p-6 rounded-xl">
            <div>
              <div className="text-gray-600 mb-2">예상 총점</div>
              <div className="text-3xl text-blue-600">292.5점</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2">전국 예상 등수</div>
              <div className="text-3xl text-blue-600">상위 1.2%</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2">합격 가능 대학</div>
              <div className="text-3xl text-blue-600">18개교</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl text-gray-900 mb-4">추천 지원 대학</h3>
            <p className="text-gray-600 mb-6">
              입력하신 성적을 바탕으로 AI가 분석한 합격 가능성이 높은 대학교 목록입니다.
            </p>
          </div>

          <div className="space-y-4">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-2xl">{uni.name[0]}</div>
                    </div>
                    <div>
                      <h4 className="text-xl text-gray-900">{uni.name}</h4>
                      <p className="text-gray-600">{uni.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-4xl text-blue-600 mb-1">{uni.probability}%</div>
                      <div className="text-gray-600">합격 가능성</div>
                    </div>
                    <div className={`${getStatusColor(uni.status)} px-4 py-2 rounded-lg flex items-center gap-2`}>
                      {getStatusIcon(uni.status)}
                      <span>{getStatusText(uni.status)}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">작년 커트라인</div>
                    <div className="text-gray-900">{uni.lastYear.cutoff}점</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">올해 예상</div>
                    <div className="text-gray-900">{uni.thisYear.predicted}점</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">내 점수</div>
                    <div className="text-blue-600">{uni.thisYear.myScore}점</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">작년 지원자</div>
                    <div className="text-gray-900">{uni.lastYear.applicants}명</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="text-lg text-gray-900 mb-2">💡 AI 컨설턴트 조언</h4>
            <p className="text-gray-700 mb-3">
              현재 성적으로는 서울대, 연세대, 고려대 의대 지원이 가능합니다. 
              안정 지원을 원하신다면 고려대 또는 한양대를 추천드리며, 
              소신 지원을 고려하신다면 서울대도 충분히 도전해볼 만합니다.
            </p>
            <p className="text-gray-700">
              영어 등급이 {data.scores.english}등급이므로, 영어 반영 비율이 낮은 대학을 우선 고려하시는 것이 유리합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
