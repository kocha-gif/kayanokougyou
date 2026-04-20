import React from 'react';
import { RECRUITMENT_INFO } from '../constants';
import { CheckCircle } from 'lucide-react';

const Recruit: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-kayano-blue mb-4">採用情報</h1>
          <p className="text-slate-600">
            未経験大歓迎！送迎あり、万全のサポート体制あり◎<br />
            働きやすい環境が整っています！
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-kayano-light border-l-4 border-kayano-accent p-6 mb-12 rounded-r-lg">
          <h3 className="text-xl font-bold text-kayano-blue mb-4">ここがポイント！</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-slate-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              残業手当は100％支給！サービス残業なし
            </div>
            <div className="flex items-center text-slate-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              入社後の資格取得を完全サポート
            </div>
            <div className="flex items-center text-slate-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              未経験・初心者、男女問わず活躍可能
            </div>
            <div className="flex items-center text-slate-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              急な出張も稀にあり（フットワーク軽く働けます）
            </div>
          </div>
        </div>

        {/* Requirements Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-slate-200">
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* Job Title */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 w-1/3">募集職種</th>
                <td className="py-4 px-6 text-slate-800">{RECRUITMENT_INFO.title}</td>
              </tr>

              {/* Job Description */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 align-top">仕事内容</th>
                <td className="py-4 px-6 text-slate-800">
                  <ul className="list-disc list-inside space-y-1">
                    {RECRUITMENT_INFO.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-slate-50 rounded">
                    <p className="font-bold mb-2 text-sm text-slate-500">＜具体的には＞</p>
                    <p className="text-sm">※2〜5名のチームで作業します</p>
                    <p className="text-sm">構内にある大口径から小口径の配管を製作・溶接・取付・撤去など、部品交換、点検、他</p>
                  </div>
                </td>
              </tr>

              {/* Salary */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 align-top">給与</th>
                <td className="py-4 px-6 text-slate-800">
                  <div className="space-y-4">
                    <div>
                      <span className="block font-bold text-kayano-blue mb-1">【月給の場合】</span>
                      <p>経験者：<span className="text-lg font-bold text-kayano-accent">{RECRUITMENT_INFO.salaries[0].experienced}</span></p>
                      <p>未経験者：<span className="text-lg font-bold text-kayano-accent">{RECRUITMENT_INFO.salaries[0].inexperienced}</span></p>
                    </div>
                    <div>
                      <span className="block font-bold text-kayano-blue mb-1">【日給月給の場合】</span>
                      <p>経験者：{RECRUITMENT_INFO.salaries[1].experienced}</p>
                      <p>未経験者：{RECRUITMENT_INFO.salaries[1].inexperienced}</p>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">※給与要相談・免許・資格・経験等により考慮します。</p>
                  </div>
                </td>
              </tr>

              {/* Location */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 align-top">勤務地</th>
                <td className="py-4 px-6 text-slate-800">
                  {RECRUITMENT_INFO.location}
                  <p className="text-sm text-slate-500 mt-1">
                    ※転居を伴う転勤はありません
                  </p>
                </td>
              </tr>

              {/* Hours */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700">勤務時間</th>
                <td className="py-4 px-6 text-slate-800">
                  {RECRUITMENT_INFO.workingHours}<br/>
                  <span className="text-sm text-slate-500">※残業は仕事の進捗次第</span>
                </td>
              </tr>

              {/* Employment Type */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700">雇用形態</th>
                <td className="py-4 px-6 text-slate-800">{RECRUITMENT_INFO.employmentType}</td>
              </tr>

              {/* Holiday */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700">休日・休暇</th>
                <td className="py-4 px-6 text-slate-800">
                  日曜日 他<br/>
                  ※年末年始（会社カレンダーによる）
                </td>
              </tr>

               {/* Qualifications */}
               <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 align-top">応募資格</th>
                <td className="py-4 px-6 text-slate-800">
                  <p className="font-bold mb-2">経験不問！資格の有無、経験の深さは問いません。</p>
                  <ul className="list-disc list-inside space-y-1 mb-2">
                    {RECRUITMENT_INFO.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                  </ul>
                  <p className="text-sm bg-blue-50 p-2 rounded text-blue-800">
                    ＜活かせる経験・資格＞<br/>
                    ◎アーク・ガス溶接・tig溶接<br/>
                    ◎玉掛け・高車作業・配管工事
                  </p>
                </td>
              </tr>

              {/* Benefits */}
              <tr className="border-b border-slate-100">
                <th className="py-4 px-6 bg-slate-50 font-bold text-slate-700 align-top">待遇・福利厚生</th>
                <td className="py-4 px-6 text-slate-800">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RECRUITMENT_INFO.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-kayano-accent rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Daily Flow */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-kayano-blue mb-8">1日の流れ（例）</h3>
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 md:border-l-0">
             {/* Mobile View: Vertical Timeline, Desktop View: Cards */}
             {RECRUITMENT_INFO.dailyFlow.map((step, index) => (
                <div key={index} className="ml-6 md:ml-0 relative">
                   {/* Dot for mobile */}
                   <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-kayano-accent border-2 border-white md:hidden"></span>
                   
                   <div className="bg-slate-50 p-4 rounded border border-slate-100 shadow-sm h-full flex flex-col items-center text-center">
                      <span className="text-xs font-bold text-slate-400 mb-1">STEP {index + 1}</span>
                      <p className="font-bold text-slate-800">{step}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;