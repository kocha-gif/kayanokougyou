import { CompanyInfo, JobPost } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "株式会社萱野工業",
  kanjiName: "株式会社萱野工業",
  kanaName: "かやのこうぎょう",
  address: "千葉県袖ケ浦市福王台３丁目１３番地２１",
  corporateNumber: "3040001110312",
};

export const RECRUITMENT_INFO: JobPost = {
  title: "プラント配管・溶接・メンテナンススタッフ",
  location: "主に千葉県内プラント関係（関東県内プラント、稀に全国短期出張あり）",
  employmentType: "正社員",
  workingHours: "8:00〜17:00（休憩60分） ※現場により変動あり",
  salaries: [
    {
      type: 'monthly',
      experienced: "月給300,000円〜",
      inexperienced: "月給253,000円〜"
    },
    {
      type: 'dailyMonthly',
      experienced: "日給 15,000円〜",
      inexperienced: "日給 13,000円〜"
    }
  ],
  benefits: [
    "昇給あり",
    "賞与あり",
    "社会保険完備",
    "残業手当（100%支給、サービス残業なし）",
    "各種手当有（皆勤賞他）",
    "資格取得支援制度有",
    "定期健康診断",
    "車通勤可（送迎あり）",
  ],
  qualifications: [
    "経験不問・学歴不問",
    "未経験者大歓迎",
    "資格・免許なくても可（入社後取得支援あり）",
    "アーク・ガス溶接・TIG溶接・玉掛け経験者優遇",
  ],
  description: [
    "プラント構内の配管設備の新設・補修・点検・溶接",
    "その他鍛治仕事等",
    "各種設備のメンテナンス",
    "構内にある大口径から小口径の配管製作・取付・撤去",
  ],
  dailyFlow: [
    "出社、準備をして現場へ",
    "作業場の清掃",
    "始業前MTG、チーム別MTG",
    "作業開始",
    "昼休憩",
    "作業再開",
    "後片付け・清掃",
    "帰社、終了"
  ]
};

export const SERVICES = [
  {
    title: "プラント配管工事",
    description: "大口径から小口径まで、プラント構内の配管設備の新設、補修、撤去を行います。",
    icon: "Pipe"
  },
  {
    title: "溶接・鍛冶工事",
    description: "アーク溶接、ガス溶接、TIG溶接など、高度な技術で確実な施工を提供します。",
    icon: "Flame"
  },
  {
    title: "設備メンテナンス",
    description: "定期点検や部品交換を通じて、プラントの安全稼働を支えます。",
    icon: "Wrench"
  }
];