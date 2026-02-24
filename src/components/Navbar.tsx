import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Rocket, Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'For Teens', path: '/teen', icon: Rocket },
    { name: 'For Companies', path: '/company', icon: Building2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">FUNNGRO</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 text-sm font-semibold transition-colors ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                <link.icon size={18} />
                <span>{link.name}</span>
              </Link>
            ))}
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 text-lg font-bold text-slate-900 p-2"
            >
              <link.icon size={20} className="text-orange-500" />
              <span>{link.name}</span>
            </Link>
          ))}
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold">
            Login
          </button>
        </motion.div>
      )}
    </nav>
  );
}
