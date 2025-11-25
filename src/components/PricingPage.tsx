import { Check, Sparkles, Crown } from 'lucide-react';

interface PricingPageProps {
  onSelectPlan?: (planId: string) => void;
}

export function PricingPage({ onSelectPlan }: PricingPageProps) {
  const plans = [
    {
      id: 'free',
      name: '무료 체험',
      icon: Sparkles,
      price: '0',
      description: '1개 대학 기본 분석',
      features: [
        '합격 가능성 예측',
        '학과별 합격선 비교',
      ],
      color: 'gray',
      buttonText: '무료 시작',
      popular: false,
    },
    {
      id: 'premium',
      name: '핀포인트 AI 패스',
      icon: Crown,
      price: '9,900',
      originalPrice: '99,900',
      discount: '90%',
      description: '무제한 대학 + AI 컨설팅',
      features: [
        '무제한 대학 분석',
        'AI 맞춤 컨설팅',
        '학과별 환산점수',
        '지원 전략 추천',
      ],
      color: 'blue',
      buttonText: '구매하기',
      popular: true,
    },
  ];

  const handleSelectPlan = (planId: string) => {
    if (onSelectPlan) {
      onSelectPlan(planId);
    } else {
      alert(`${plans.find(p => p.id === planId)?.name} 플랜이 선택되었습니다.`);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-3">핀포인트 AI 패스 가격 안내</h1>
          
          {/* 할인 배너 */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">90% 할인</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-medium">
              D-7
            </span>
          </div>
        </div>

        {/* 가격 플랜 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border-2 p-6 transition-all hover:shadow-xl ${
                  plan.popular
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200'
                }`}
              >
                {/* 추천 배지 */}
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    추천
                  </div>
                )}

                {/* 할인 배지 */}
                {plan.discount && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg text-sm">
                    {plan.discount}
                  </div>
                )}

                {/* 아이콘 & 이름 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.color === 'gray' ? 'bg-gray-100' : 'bg-blue-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      plan.color === 'gray' ? 'text-gray-700' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 font-bold">{plan.name}</h3>
                    <p className="text-xs text-gray-600">{plan.description}</p>
                  </div>
                </div>

                {/* 가격 */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-sm">
                      {plan.originalPrice}원
                    </div>
                  )}
                  <div className="flex items-end gap-1">
                    <span className="text-4xl text-gray-900 font-extrabold">
                      {plan.price === '0' ? '무료' : `${plan.price}원`}
                    </span>
                    {plan.price !== '0' && (
                      <span className="text-gray-600 text-sm mb-1">/ 1회</span>
                    )}
                  </div>
                </div>

                {/* 기능 목록 */}
                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className={`w-4 h-4 flex-shrink-0 ${
                        plan.color === 'gray' ? 'text-gray-600' : 'text-blue-600'
                      }`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 구매 버튼 */}
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* 기능 비교표 */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden mb-6">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h2 className="text-gray-900 font-bold">상세 기능 비교</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-gray-900 font-bold">기능</th>
                  <th className="px-4 py-3 text-center text-gray-900 font-bold">무료 체험</th>
                  <th className="px-4 py-3 text-center text-gray-900 bg-blue-50 font-bold">핀포인트 AI 패스</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-700 font-medium">대학 분석 가능 수</td>
                  <td className="px-4 py-3 text-center text-gray-600">1개</td>
                  <td className="px-4 py-3 text-center text-blue-900 bg-blue-50 font-bold">무제한</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-700 font-medium">합격 확률 예측</td>
                  <td className="px-4 py-3 text-center text-gray-600">기본</td>
                  <td className="px-4 py-3 text-center text-blue-900 bg-blue-50 font-bold">정밀 예측</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-700 font-medium">학과별 환산점수</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-50">
                    <Check className="w-4 h-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-700 font-medium">AI 맞춤 컨설팅</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-50">
                    <Check className="w-4 h-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-700 font-medium">지원 전략 추천</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-50">
                    <Check className="w-4 h-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700 font-medium">광고</td>
                  <td className="px-4 py-3 text-center text-gray-600">포함</td>
                  <td className="px-4 py-3 text-center text-blue-900 bg-blue-50 font-bold">제거</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 안내 사항 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
          <h3 className="text-gray-900 mb-2 text-sm font-bold">💡 알아두세요</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 모든 플랜은 2025학년도 정시 기준으로 제공됩니다</p>
            <p>• 결제 후 즉시 사용 가능하며, 환불은 이용 전에 가능합니다</p>
            <p>• 의약학 계열 분석은 모든 플랜에서 제외됩니다</p>
            <p>• 할인 이벤트는 사전 고지 없이 종료될 수 있습니다</p>
          </div>
        </div>

        {/* 간단 안내 */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            문의: <a href="mailto:support@pinpoint.co.kr" className="text-blue-600 hover:underline font-medium">support@pinpoint.co.kr</a>
          </p>
        </div>
      </div>
    </div>
  );
}