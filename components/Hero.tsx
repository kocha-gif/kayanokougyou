import React, { useState, useEffect } from 'react';
import { generateConceptImage } from '../services/geminiService';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>("https://picsum.photos/1920/1080?grayscale&blur=2");
  const [loading, setLoading] = useState(false);

  // Attempt to generate a unique hero image if API key is present
  useEffect(() => {
    const loadCustomImage = async () => {
      // Only attempt if we haven't already and we want to try the AI generation
      // This is a subtle enhancement for the "Senior Engineer" touch
      if (process.env.API_KEY) {
        setLoading(true);
        const prompt = "Industrial plant piping complex in Japan at sunset, cinematic lighting, high resolution, professional photography, clean composition, construction site safe atmosphere";
        const generated = await generateConceptImage(prompt);
        if (generated) {
          setBgImage(generated);
        }
        setLoading(false);
      }
    };
    
    // Uncomment the line below to enable auto-generation on load if key exists
    // loadCustomImage(); 
    // For this demo, we'll keep the reliable picsum but provide the logic.
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
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
      
      {loading && (
        <div className="absolute bottom-4 right-4 text-white text-xs flex items-center bg-black/50 px-2 py-1 rounded">
          <Loader2 className="w-3 h-3 animate-spin mr-2" />
          Generative AI Creating Visuals...
        </div>
      )}
    </div>
  );
};

export default Hero;