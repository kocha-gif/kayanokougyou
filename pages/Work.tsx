import React, { useState } from 'react';
import { SITE_IMAGES } from '../constants';

type Category = '全て' | '溶接' | '製作' | '現場施工' | '日常';

interface WorkImage {
  id: number;
  url: string;
  title: string;
  category: Exclude<Category, '全て'>;
  description: string;
}

const WORK_IMAGES: WorkImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "TIG溶接作業",
    category: "溶接",
    description: "精密なTIG溶接で薄肉配管を接合。高い技術力が求められる作業です。"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1531834685032-c74696a6ad44?auto=format&fit=crop&q=80&w=800",
    title: "工場内配管製作",
    category: "製作",
    description: "工場内でのスプール製作。寸法精度を徹底管理しながら効率的に進めます。"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    title: "プラント配管施工",
    category: "現場施工",
    description: "千葉県内プラントでの大口径配管の設置・接続工事。チームワークで安全に進めます。"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1513311014876-17b4ad32a8a4?auto=format&fit=crop&q=80&w=800",
    title: "朝礼・安全ミーティング",
    category: "日常",
    description: "毎朝の安全確認から1日がスタート。KY（危険予知）活動で現場の安全を守ります。"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    title: "大口径配管ライン",
    category: "現場施工",
    description: "プラント内の大口径配管ラインの新設工事。経験豊富なメンバーが施工します。"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?auto=format&fit=crop&q=80&w=800",
    title: "定期メンテナンス点検",
    category: "日常",
    description: "配管設備の定期点検・メンテナンス。異常の早期発見で安定稼働をサポート。"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    title: "フランジ加工・製作",
    category: "製作",
    description: "各種フランジの加工・製作。寸法精度にこだわり、現場にぴったり合う部品を製作します。"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=800",
    title: "アーク溶接",
    category: "溶接",
    description: "アーク溶接で厚板・重構造物を接合。確実なビードで強固な溶接を実現します。"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "配管撤去・入れ替え作業",
    category: "現場施工",
    description: "老朽化した配管の撤去から新設まで。段取りと安全管理を徹底して作業します。"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800",
    title: "チームで昼休憩",
    category: "日常",
    description: "しっかり1時間の昼休憩。仲間とワイワイ過ごす時間も大切にしています。"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    title: "小口径配管製作",
    category: "製作",
    description: "細かい小口径配管の精密製作。丁寧な仕事が品質と信頼を生み出します。"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&q=80&w=800",
    title: "高所作業・取り付け",
    category: "現場施工",
    description: "足場を組んでの高所配管取付け。安全ハーネスを着用し、確実に施工します。"
  }
];

const CATEGORIES: Category[] = ['全て', '溶接', '製作', '現場施工', '日常'];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('全て');
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);

  const filteredImages = activeCategory === '全て'
    ? WORK_IMAGES
    : WORK_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-kayano-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${SITE_IMAGES.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-kayano-accent font-bold tracking-wider uppercase text-sm">Our Works</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">仕事風景</h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            プラント配管・溶接・メンテナンスの現場から。<br />
            日々の仕事の様子をご覧ください。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border-2 ${
                activeCategory === cat
                  ? 'bg-kayano-accent text-white border-kayano-accent shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-kayano-accent hover:text-kayano-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">{item.description}</span>
                </div>
                <span className="absolute top-3 right-3 bg-kayano-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 group-hover:text-kayano-blue transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-4 left-4 bg-kayano-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors text-lg font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{selectedImage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center bg-white rounded-2xl p-10 shadow-md border border-slate-100">
          <h2 className="text-2xl font-bold text-kayano-blue mb-4">こんな現場で一緒に働きませんか？</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            未経験・初心者でも大丈夫。まずは「お試し勤務」で現場を体験してみてください。
          </p>
          <a
            href="#/recruit"
            className="inline-flex items-center justify-center bg-kayano-accent hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            採用情報・お試し勤務の詳細を見る
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
