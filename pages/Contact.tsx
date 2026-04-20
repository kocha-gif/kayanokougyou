import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'recruit', // 'recruit' or 'business'
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static demo, we just alert. 
    // In production, this would send to an email service.
    alert("お問い合わせありがとうございます。\n内容を確認次第、担当者よりご連絡いたします。");
    setFormData({ name: '', email: '', phone: '', type: 'recruit', message: '' });
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-kayano-blue mb-8">お問い合わせ</h1>
        <p className="text-center text-slate-600 mb-12">
          求人のご応募、およびお仕事のご依頼は以下のフォームより承っております。<br/>
          お急ぎの場合はお電話にてご連絡ください。
        </p>

        <div className="bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ種別 <span className="text-red-500">*</span></label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="type" 
                    value="recruit" 
                    checked={formData.type === 'recruit'} 
                    onChange={handleChange}
                    className="mr-2 text-kayano-accent focus:ring-kayano-accent"
                  />
                  <span>求人の応募・相談</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="type" 
                    value="business" 
                    checked={formData.type === 'business'} 
                    onChange={handleChange}
                    className="mr-2 text-kayano-accent focus:ring-kayano-accent"
                  />
                  <span>お仕事のご依頼・相談</span>
                </label>
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">お名前 <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-kayano-accent focus:ring-1 focus:ring-kayano-accent"
                placeholder="例：萱野 太郎"
              />
            </div>

             {/* Phone */}
             <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">電話番号</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-kayano-accent focus:ring-1 focus:ring-kayano-accent"
                placeholder="例：090-1234-5678"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-kayano-accent focus:ring-1 focus:ring-kayano-accent"
                placeholder="例：example@kayano-kogyo.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-kayano-accent focus:ring-1 focus:ring-kayano-accent"
                placeholder="お問い合わせ内容をご記入ください。"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-kayano-accent hover:bg-amber-600 text-white font-bold py-3 px-4 rounded transition-colors shadow-md"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;