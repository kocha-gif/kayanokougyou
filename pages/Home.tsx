import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, RECRUITMENT_INFO } from '../constants';
import { Wrench, Flame, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pipe': return <Factory className="w-12 h-12 text-kayano-accent mb-4" />;
      case 'Flame': return <Flame className="w-12 h-12 text-kayano-accent mb-4" />;
      case 'Wrench': return <Wrench className="w-12 h-12 text-kayano-accent mb-4" />;
      default: return <CheckCircle className="w-12 h-12 text-kayano-accent mb-4" />;
    }
  };

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-kayano-blue mb-4">業務案内</h2>
            <div className="w-16 h-1 bg-kayano-accent mx-auto"></div>
            <p className="mt-4 text-slate-600">千葉県内のプラントを中心に、高品質な配管工事を提供します。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-center text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Strength Teaser */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=5')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Working at Plant" 
                className="rounded-lg shadow-2xl border-4 border-slate-700"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">未経験から、プロフェッショナルへ。</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                株式会社萱野工業では、経験の有無に関わらず、やる気のある人材を求めています。
                経験豊富な先輩たちによる指導の下、段階を踏みながら技術を習得できる環境です。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-kayano-accent w-6 h-6 mr-3" />
                  <span>資格取得支援制度あり</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-kayano-accent w-6 h-6 mr-3" />
                  <span>残業手当100%支給・サービス残業なし</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-kayano-accent w-6 h-6 mr-3" />
                  <span>送迎あり・車通勤可</span>
                </li>
              </ul>
              <Link to="/about" className="text-kayano-accent font-bold hover:text-white transition-colors inline-flex items-center">
                会社案内を見る <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Teaser */}
      <section className="py-20 bg-kayano-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-kayano-blue mb-8">一緒に働く仲間を募集中です</h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            {RECRUITMENT_INFO.title}<br/>
            <span className="text-sm mt-2 block">経験者：月給30万円〜 / 未経験者：月給25.3万円〜</span>
          </p>
          <Link 
            to="/recruit" 
            className="inline-block bg-kayano-accent hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-transform hover:-translate-y-1"
          >
            採用情報詳細はこちら
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;