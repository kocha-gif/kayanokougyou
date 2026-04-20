import React from 'react';
import { COMPANY_INFO } from '../constants';

const Company: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-kayano-blue mb-8 border-b pb-4">会社案内</h1>
          
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-200">
            
            <div className="contents">
              <dt className="py-4 font-bold text-slate-700 md:border-b border-slate-200">法人名</dt>
              <dd className="py-4 text-slate-800 md:col-span-2 border-b border-slate-200">
                {COMPANY_INFO.name}<br/>
                <span className="text-sm text-slate-500">（{COMPANY_INFO.kanaName}）</span>
              </dd>
            </div>

            <div className="contents">
              <dt className="py-4 font-bold text-slate-700 md:border-b border-slate-200">所在地</dt>
              <dd className="py-4 text-slate-800 md:col-span-2 border-b border-slate-200">
                〒299-0261<br/>
                {COMPANY_INFO.address}
              </dd>
            </div>

            <div className="contents">
              <dt className="py-4 font-bold text-slate-700 md:border-b border-slate-200">法人番号</dt>
              <dd className="py-4 text-slate-800 md:col-span-2 border-b border-slate-200">
                {COMPANY_INFO.corporateNumber}
              </dd>
            </div>

            <div className="contents">
              <dt className="py-4 font-bold text-slate-700 md:border-b border-slate-200">事業内容</dt>
              <dd className="py-4 text-slate-800 md:col-span-2 border-b border-slate-200">
                プラント配管工事<br/>
                溶接・鍛冶工事<br/>
                設備メンテナンス
              </dd>
            </div>

             <div className="contents">
              <dt className="py-4 font-bold text-slate-700 md:border-b border-slate-200">エリア</dt>
              <dd className="py-4 text-slate-800 md:col-span-2 border-b border-slate-200">
                千葉県内（主にプラント関係）<br/>
                関東全域<br/>
                ※全国短期出張あり
              </dd>
            </div>

          </dl>

          <div className="mt-12 bg-slate-50 p-6 rounded-lg">
             <h2 className="text-xl font-bold text-kayano-blue mb-4">取引先企業の皆様へ</h2>
             <p className="text-slate-700 leading-relaxed">
               株式会社萱野工業は、安全と品質を第一に考え、プラント配管工事において数多くの実績を積み重ねてまいりました。
               急なご依頼や短期出張にも柔軟に対応できる体制を整えております。
               新規のお取引につきましても、下記お問い合わせフォームよりお気軽にご相談ください。
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;