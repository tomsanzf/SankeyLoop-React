import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const openDonationPopup = () => {
    const width = 500;
    const height = 650;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(
      'https://buymeacoffee.com/tsanz',
      'BuyMeACoffeeDonation',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center gap-6 md:gap-8 h-[60px] px-6 md:px-12 bg-[#0c0c0b]/85 backdrop-blur-xl border-b border-[#272521] font-sans selection:bg-[#e8541a] selection:text-white">
      <Link to="/" className="text-[17px] font-semibold tracking-tight text-[#f0ede8] no-underline">
        Sankey<span className="text-[#e8541a]">Loop</span>
      </Link>
      <div className="hidden md:flex flex-1 gap-6 items-center">
        <Link to="/" className="text-[13px] font-medium text-[#a09d98] no-underline hover:text-[#f0ede8] transition-colors">Home</Link>
        <Link to="/learn" className={`text-[13px] font-medium no-underline transition-colors ${location.pathname.startsWith('/learn') ? 'text-[#e8541a]' : 'text-[#a09d98] hover:text-[#f0ede8]'}`}>Tutorials &amp; Guides</Link>
        <Link to="/about" className={`text-[13px] font-medium no-underline transition-colors ${location.pathname === '/about' ? 'text-[#e8541a]' : 'text-[#a09d98] hover:text-[#f0ede8]'}`}>About</Link>
        <Link to="/privacy" className={`text-[13px] font-medium no-underline transition-colors ${location.pathname === '/privacy' ? 'text-[#e8541a]' : 'text-[#a09d98] hover:text-[#f0ede8]'}`}>Privacy</Link>
        <Link to="/contact" className={`text-[13px] font-medium no-underline transition-colors ${location.pathname === '/contact' ? 'text-[#e8541a]' : 'text-[#a09d98] hover:text-[#f0ede8]'}`}>Contact</Link>
      </div>
      <button 
        onClick={openDonationPopup}
        className="ml-auto bg-transparent border border-[#ff813f] text-[#ff813f] hover:bg-[#ff813f] hover:text-white px-[14px] py-[6px] rounded-md text-[12px] font-semibold transition-all whitespace-nowrap cursor-pointer shadow-sm"
      >
        ☕ Buy me a coffee
      </button>
      <button 
        onClick={() => navigate('/app')}
        className="bg-[#e8541a] text-white px-[18px] py-[7px] rounded-md text-[13px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer shadow-sm"
      >
        Open App →
      </button>
    </nav>
  );
}
