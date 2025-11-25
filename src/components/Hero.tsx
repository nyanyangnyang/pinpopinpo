import { Sparkles, Keyboard, FileText, Brain, BarChart3, ArrowRight } from 'lucide-react';
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

interface HeroProps {
  onStartClick: () => void;
}

export function Hero({ onStartClick }: HeroProps) {
  const features = [
    { icon: Keyboard, label: '기본 정보 입력' },
    { icon: FileText, label: '과목 및 점수 입력' },
    { icon: Brain, label: 'AI 분석' },
    { icon: BarChart3, label: 'AI 컨설턴트' },
  ];

  const universities = [
    // 최상위 (3개)
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo, color: '#003876', abbr: 'YU' },
    { id: 'korea', label: '고려대학교', logo: koreaLogo, color: '#9E1B32', abbr: 'KU' },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo, color: '#004F9F', abbr: 'SG' },
    
    // 상위 (3개 - 서울권)
    { id: 'skku', label: '성균관대학교', logo: skkuLogo, color: '#00543A', abbr: 'SKKU' },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo, color: '#003876', abbr: 'HYU' },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo, color: '#003876', abbr: 'UOS' },
    
    // 중위 (7개)
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo, color: '#4B0F79', abbr: 'CAU' },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo, color: '#7D2248', abbr: 'KHU' },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo, color: '#004F9F', abbr: 'HUFS' },
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo, color: '#006633', abbr: 'EW' },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo, color: '#7D2248', abbr: 'KU' },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo, color: '#9E1B32', abbr: 'DGU' },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo, color: '#003876', abbr: 'HIU' },
    
    // 중하위
    { id: 'ajou', label: '아주대학교', logo: ajouLogo, color: '#0066A5', abbr: 'AU' },
    { id: 'inha', label: '인하대학교', logo: inhaLogo, color: '#00559F', abbr: 'IU' },
    { id: 'kookmin', label: '국민대학교', logo: kookminLogo, color: '#004F9F', abbr: 'KMU' },
    { id: 'soongsil', label: '숭실대학교', logo: soongsilLogo, color: '#7D2248', abbr: 'SSU' },
    { id: 'sejong', label: '세종대학교', logo: sejongLogo, color: '#AA1F3D', abbr: 'SJU' },
    { id: 'hanyang_erica', label: '한양대(ERICA)', logo: hanyangLogo, color: '#003876', abbr: 'HYU' },
    { id: 'dankook', label: '단국대학교', logo: dankookLogo, color: '#0066A5', abbr: 'DKU' },
    
    // 지방 거점 국립대 (4개)
    { id: 'pusan', label: '부산대학교', logo: pusanLogo, color: '#003C7F', abbr: 'PNU' },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo, color: '#00543A', abbr: 'KNU' },
    { id: 'kwangwoon', label: '광운대학교', logo: kwangwoonLogo, color: '#AA2439', abbr: 'KW' },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo, color: '#003876', abbr: 'CNU' },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo, color: '#1E4D8C', abbr: 'CNU' },
    
    { id: 'sookmyung', label: '숙명여자대학교', logo: sookmyungLogo, color: '#7D2248', abbr: 'SMU' },
    { id: 'incheon', label: '인천대학교', logo: incheonLogo, color: '#005BAA', abbr: 'INU' },
    { id: 'kyonggi', label: '경기대학교', logo: kyonggiLogo, color: '#0066A5', abbr: 'KGU' },
    { id: 'gachon', label: '가천대학교', logo: gachonLogo, color: '#0066CC', abbr: 'GU' },
    { id: 'hansung', label: '한성대학교', logo: hansungLogo, color: '#003876', abbr: 'HSU' },
    { id: 'jeonbuk', label: '전북대학교', logo: jeonbukLogo, color: '#00543A', abbr: 'JBU' },
    { id: 'chungbuk', label: '충북대학교', logo: chungbukLogo, color: '#003876', abbr: 'CBU' },
    { id: 'seoultech', label: '서울과학기술대', logo: seoultechLogo, color: '#005BAA', abbr: 'STECH' },
    { id: 'myongji', label: '명지대', logo: myongjiLogo, color: '#0066A5', abbr: 'MJU' },
    { id: 'sangmyung', label: '상명대', logo: sangmyungLogo, color: '#7D2248', abbr: 'SMU' },
    { id: 'seokyeong', label: '서경대학교', logo: seokyeongLogo, color: '#0066A5', abbr: 'SKYU' },
    { id: 'catholic', label: '가톨릭대학교', logo: catholicLogo, color: '#003876', abbr: 'CU' },
    { id: 'kau', label: '한국항공대학교', logo: kauLogo, color: '#004F9F', abbr: 'KAU' },
    { id: 'pukyong', label: '부경대학교', logo: pukyongLogo, color: '#00543A', abbr: 'PKU' },
    { id: 'kangwon', label: '강원대학교', logo: kangwonLogo, color: '#00543A', abbr: 'KNU' },
    { id: 'sahmyook', label: '삼육대학교', logo: sahmyookLogo, color: '#00543A', abbr: 'SMU' },
    { id: 'sungshin_real', label: '성신여자대학교', logo: sungshinLogoReal, color: '#00543A', abbr: 'SSU' },
    { id: 'suwon', label: '수원대학교', logo: suwonLogo, color: '#0066A5', abbr: 'SU' },
    { id: 'koreatech', label: '한국기술교육대', logo: koreatechLogo, color: '#004F9F', abbr: 'KTECH' },
    { id: 'kpu', label: '한국공학대', logo: kpuLogo, color: '#7D2248', abbr: 'KPU' },
    { id: 'yeungnam', label: '영남대학교', logo: yeungnamLogo, color: '#00543A', abbr: 'YNU' },
    { id: 'donga', label: '동아대학교', logo: dongaLogo, color: '#00543A', abbr: 'DU' },
    
    // 분캠
    { id: 'hufs_global', label: '한국외대(글로벌)', logo: hufsLogo, color: '#004F9F', abbr: 'HUFS' },
    { id: 'chungang_anseong', label: '중앙대(다빈치)', logo: joongangLogo, color: '#4B0F79', abbr: 'CAU' },
    { id: 'korea_sejong', label: '고려대(세종)', logo: koreaLogo, color: '#9E1B32', abbr: 'KU' },
    { id: 'hongik_sejong', label: '홍익대(세종)', logo: hongikLogo, color: '#003876', abbr: 'HIU' },
    { id: 'yonsei_mirae', label: '연세대(미래)', logo: yonseiLogo, color: '#003876', abbr: 'YU' },
    { id: 'konkuk_glocal', label: '건국대(글로컬)', logo: konkukLogo, color: '#7D2248', abbr: 'KU' },
    { id: 'dankook_cheonan', label: '단국대(천안)', logo: dankookLogo, color: '#0066A5', abbr: 'DKU' },
  ];

  return (
    <div id="service" className="relative min-h-screen bg-white pt-28">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight font-bold">
            pinpoint your target
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12">
            전문가, 그 이상의 전문가 집단, <span className="text-gray-900 font-bold">pinpoint</span>
          </p>
          
          <button
            onClick={onStartClick}
            className="group bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg font-bold"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>무료 합격예측 시작하기</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* University Showcase - moved up */}
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-2 sm:mb-3 font-bold">주요 54개 대학 분석 지원</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            상위권부터 중하위권까지 차별없이,<br />
            모두에게 대치동 분석 서비스를 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">최상위 3개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">상위 9개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">중위 9개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">중하위 33개</span>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {universities.map((university) => (
            <div
              key={university.id}
              className="bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:border-gray-900 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={university.logo} 
                  alt={university.label}
                  className={`w-full h-full object-contain ${university.id === 'kau' ? 'scale-150' : ''}`}
                />
              </div>
              <span className={`text-gray-900 text-center text-xs sm:text-sm font-medium leading-tight ${university.label.includes('ERICA') ? 'pretendard-text' : ''}`}>
                {university.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-600 text-xs sm:text-sm">※ 의약학 계열 분석은 제외됩니다</p>
          <p className="text-gray-500 text-xs">※ 총 403개 학과 데이터 분석 가능</p>
        </div>
      </div>
    </div>
  );
}