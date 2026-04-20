import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?auto=format&fit=crop&q=80&w=1600";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          技術と信頼で<br/>
          <span className="text-kayano-accent">未来のインフラ</span>を支える
        </h1>
        <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto">
          千葉県内・関東エリアのプラント配管・溶接なら株式会社萱野工業。<br/>
          確かな技術と万全のサポート体制で、安心安全な施工を提供します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/recruit"
            className="inline-flex items-center justify-center px-8 py-4 bg-kayano-accent hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-lg group"
          >
            採用情報を見る
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
