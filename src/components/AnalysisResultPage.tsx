import { ArrowLeft, TrendingUp, TrendingDown, CheckCircle, AlertCircle } from 'lucide-react';

interface AnalysisResultPageProps {
  data: any;
  onBack: () => void;
}

export function AnalysisResultPage({ data, onBack }: AnalysisResultPageProps) {
  // Mock AI 분석 결과 데이터
  const analysisResult = {
    overallScore: 85,
    prediction: '합격 가능성 높음',
    confidence: 87,
    recommendations: [
      {
        university: '서울대학교',
        department: '컴퓨터공학과',
        probability: 92,
        status: 'high',
        lastYearCutoff: '389.5',
        yourScore: '395.2',
      },
      {
        university: '연세대학교',
        department: '전기전자공학부',
        probability: 88,
        status: 'high',
        lastYearCutoff: '385.2',
        yourScore: '395.2',
      },
      {
        university: '고려대학교',
        department: '경영학과',
        probability: 76,
        status: 'medium',
        lastYearCutoff: '392.8',
        yourScore: '395.2',
      },
      {
        university: '서강대학교',
        department: '경제학과',
        probability: 95,
        status: 'high',
        lastYearCutoff: '380.1',
        yourScore: '395.2',
      },
      {
        university: '성균관대학교',
        department: '글로벌경영학과',
        probability: 89,
        status: 'high',
        lastYearCutoff: '383.5',
        yourScore: '395.2',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'high':
        return <CheckCircle className="w-5 h-5" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5" />;
      case 'low':
        return <TrendingDown className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'high':
        return '합격 가능성 높음';
      case 'medium':
        return '합격 가능';
      case 'low':
        return '합격 어려움';
      default:
        return '검토 필요';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>돌아가기</span>
          </button>

          <h1 className="text-4xl text-gray-900 mb-4 font-bold">AI 분석 결과</h1>
          <p className="text-gray-600">
            입력하신 성적을 바탕으로 AI가 합격 가능성을 분석했습니다
          </p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-2 font-medium">종합 분석 점수</p>
              <h2 className="text-5xl mb-2 font-extrabold">{analysisResult.overallScore}점</h2>
              <p className="text-blue-100 font-bold">{analysisResult.prediction}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 mb-2 font-medium">AI 신뢰도</p>
              <h3 className="text-4xl font-extrabold">{analysisResult.confidence}%</h3>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div>
                <p className="text-blue-100 mb-1 font-medium">국어</p>
                <p className="text-lg font-bold">{data.scores.korean}점</p>
              </div>
              <div>
                <p className="text-blue-100 mb-1 font-medium">수학</p>
                <p className="text-lg font-bold">{data.scores.math}점</p>
              </div>
              <div>
                <p className="text-blue-100 mb-1 font-medium">영어</p>
                <p className="text-lg font-bold">{data.scores.english}등급</p>
              </div>
              <div>
                <p className="text-blue-100 mb-1 font-medium">탐구1</p>
                <p className="text-lg font-bold">{data.scores.science1}점</p>
              </div>
              <div>
                <p className="text-blue-100 mb-1 font-medium">탐구2</p>
                <p className="text-lg font-bold">{data.scores.science2}점</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI 추천 대학 */}
        <div className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-6 font-bold">AI 추천 지원 대학</h2>
          <div className="space-y-4">
            {analysisResult.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl text-gray-900 font-bold">{rec.university}</h3>
                      <span className="text-gray-600">·</span>
                      <p className="text-gray-600 font-medium">{rec.department}</p>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1 font-medium">전년도 커트라인</p>
                        <p className="text-gray-900 font-bold">{rec.lastYearCutoff}점</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1 font-medium">예상 환산점수</p>
                        <p className="text-gray-900 font-bold">{rec.yourScore}점</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1 font-medium">점수 차이</p>
                        <p className="text-green-600 font-bold">
                          +{(parseFloat(rec.yourScore) - parseFloat(rec.lastYearCutoff)).toFixed(1)}점
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <p className="text-3xl text-gray-900 mb-1 font-extrabold">{rec.probability}%</p>
                      <p className="text-sm text-gray-500 font-medium">합격 가능성</p>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${getStatusColor(
                        rec.status
                      )}`}
                    >
                      {getStatusIcon(rec.status)}
                      <span className="text-sm font-bold">{getStatusText(rec.status)}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        rec.status === 'high'
                          ? 'bg-green-500'
                          : rec.status === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${rec.probability}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg text-gray-900 mb-3 font-bold">💡 AI 분석 인사이트</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 수학 점수가 상위 5% 수준으로 공학 계열에 유리합니다</li>
              <li>• 탐구 영역 균형이 우수하여 상위권 대학 지원이 가능합니다</li>
              <li>• 영어 1등급으로 감점 요인이 없습니다</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg text-gray-900 mb-3 font-bold">📊 지원 전략 추천</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 상향 지원: 서울대, 연세대 (1-2개)</li>
              <li>• 적정 지원: 고려대, 서강대 (2-3개)</li>
              <li>• 안정 지원: 성균관대, 한양대 (2-3개)</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-bold"
          >
            다시 분석하기
          </button>
        </div>
      </div>
    </div>
  );
}