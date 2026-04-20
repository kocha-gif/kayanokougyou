import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: '会社案内', path: '/about' },
    { name: '仕事風景', path: '/work' },
    { name: '採用情報', path: '/recruit' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-kayano-blue tracking-tighter">
                萱野工業
              </span>
              <span className="text-xs text-slate-500 font-medium">KAYANO KOGYO CO.,LTD.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-colors hover:text-kayano-accent ${
                    isActive(link.path) ? 'text-kayano-accent' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-kayano-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-base font-medium ${
                     isActive(link.path) ? 'text-kayano-accent' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kayano-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">{COMPANY_INFO.name}</h3>
              <div className="flex items-start space-x-2 mb-2 text-slate-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>{COMPANY_INFO.address}</p>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                法人番号: {COMPANY_INFO.corporateNumber}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-kayano-accent">メニュー</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Short */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-kayano-accent">お問い合わせ</h4>
              <p className="text-slate-300 mb-4">
                お仕事のご依頼、求人のご応募はこちらからお気軽にご連絡ください。
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-2 bg-kayano-accent hover:bg-amber-600 text-white font-bold rounded transition-colors"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name} All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;