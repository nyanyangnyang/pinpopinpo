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
import sungshinLogo from 'figma:asset/bdffd16e110b1e2c74ab518b101c030f892304e4.png';

export function UniversityShowcase() {
  const universities = [
    // 기존 17개
    { id: 'seoul', label: '서울대학교', logo: seoulLogo, color: '#003C7F', abbr: 'SNU' },
    { id: 'yonsei', label: '연세대학교', logo: yonseiLogo, color: '#003876', abbr: 'YU' },
    { id: 'korea', label: '고려대학교', logo: koreaLogo, color: '#9E1B32', abbr: 'KU' },
    { id: 'sogang', label: '서강대학교', logo: sogangLogo, color: '#004F9F', abbr: 'SG' },
    { id: 'skku', label: '성균관대학교', logo: skkuLogo, color: '#00543A', abbr: 'SKKU' },
    { id: 'hanyang', label: '한양대학교', logo: hanyangLogo, color: '#003876', abbr: 'HYU' },
    { id: 'joongang', label: '중앙대학교', logo: joongangLogo, color: '#4B0F79', abbr: 'CAU' },
    { id: 'kyunghee', label: '경희대학교', logo: kyungheeLogo, color: '#7D2248', abbr: 'KHU' },
    { id: 'hufs', label: '한국외국어대학교', logo: hufsLogo, color: '#004F9F', abbr: 'HUFS' },
    { id: 'uos', label: '서울시립대학교', logo: uosLogo, color: '#003876', abbr: 'UOS' },
    { id: 'konkuk', label: '건국대학교', logo: konkukLogo, color: '#7D2248', abbr: 'KU' },
    { id: 'dongguk', label: '동국대학교', logo: donggukLogo, color: '#9E1B32', abbr: 'DGU' },
    { id: 'hongik', label: '홍익대학교', logo: hongikLogo, color: '#003876', abbr: 'HIU' },
    { id: 'kookmin', label: '국민대학교', logo: kookminLogo, color: '#004F9F', abbr: 'KMU' },
    { id: 'sookmyung', label: '숙명여자대학교', logo: sookmyungLogo, color: '#7D2248', abbr: 'SMU' },
    { id: 'pusan', label: '부산대학교', logo: pusanLogo, color: '#003C7F', abbr: 'PNU' },
    { id: 'kyungpook', label: '경북대학교', logo: kyungpookLogo, color: '#00543A', abbr: 'KNU' },
    
    // 새로 추가되는 14개 대학
    { id: 'ewha', label: '이화여자대학교', logo: ewhaLogo, color: '#006633', abbr: 'EW' },
    { id: 'inha', label: '인하대학교', logo: inhaLogo, color: '#00559F', abbr: 'IU' },
    { id: 'ajou', label: '아주대학교', logo: ajouLogo, color: '#0066A5', abbr: 'AU' },
    { id: 'soongsil', label: '숭실대학교', logo: soongsilLogo, color: '#7D2248', abbr: 'SSU' },
    { id: 'sejong', label: '세종대학교', logo: sejongLogo, color: '#AA1F3D', abbr: 'SJU' },
    { id: 'dankook', label: '단국대학교', logo: dankookLogo, color: '#0066A5', abbr: 'DKU' },
    { id: 'kwangwoon', label: '광운대학교', logo: kwangwoonLogo, color: '#AA2439', abbr: 'KW' },
    { id: 'hanyang_erica', label: '한양대(ERICA)', logo: hanyangLogo, color: '#003876', abbr: 'HYU' },
    { id: 'incheon', label: '인천대학교', logo: incheonLogo, color: '#005BAA', abbr: 'INU' },
    { id: 'kyonggi', label: '경기대학교', logo: kyonggiLogo, color: '#0066A5', abbr: 'KGU' },
    { id: 'gachon', label: '가천대학교', logo: gachonLogo, color: '#0066CC', abbr: 'GU' },
    { id: 'chonnam', label: '전남대학교', logo: chonnamLogo, color: '#1E4D8C', abbr: 'CNU' },
    { id: 'chungnam', label: '충남대학교', logo: chungnamLogo, color: '#003876', abbr: 'CNU' },
    { id: 'sungshin', label: '성신여자대학교', logo: sungshinLogo, color: '#7D2248', abbr: 'SSWU' },
  ];

  return (
    <div id="pricing" className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 sm:mb-4 font-bold">주요 31개 대학 분석 지원</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            SKY부터 지방거점국립대까지, 총 31개 주요 대학의 합격 가능성을 정확하게 예측합니다
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">최상위 3개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">상위 9개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">중위 9개</span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-medium">중하위 13개</span>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {universities.map((university) => (
            <div
              key={university.id}
              className="bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:border-gray-900 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
            >
              {university.logo ? (
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img 
                    src={university.logo} 
                    alt={university.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xs sm:text-sm"
                  style={{ backgroundColor: university.color }}
                >
                  <span>{university.abbr}</span>
                </div>
              )}
              <span className={`text-gray-900 text-center text-xs sm:text-sm font-medium leading-tight ${university.label.includes('ERICA') ? 'pretendard-text' : ''}`}>
                {university.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center space-y-2">
          <p className="text-gray-600 text-xs sm:text-sm">※ 의약학 계열 분석은 제외됩니다</p>
          <p className="text-gray-500 text-xs">※ 총 403개 학과 데이터 분석 가능</p>
        </div>
      </div>
    </div>
  );
}