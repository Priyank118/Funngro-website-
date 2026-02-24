import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeenPage from './pages/TeenPage';
import CompanyPage from './pages/CompanyPage';
import { Rocket, Building2, Star } from 'lucide-react';

function HomePage() {
  return (
    <div className="pt-20">
      <section className="min-h-[90vh] flex items-center justify-center bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-8"
            >
              <Star size={16} fill="currentColor" />
              <span>LOVED BY 50LAKH+ USERS</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8"
            >
              SMART TEENS<br />
              <span className="text-orange-500">SMART COMPANIES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              The ultimate platform connecting India's brightest young talent with forward-thinking businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/teen" className="group block h-full">
                <div className="h-full bg-orange-50 border-2 border-orange-100 p-10 rounded-[3rem] hover:border-orange-500 transition-all transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Rocket size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">I am a Teen</h2>
                  <p className="text-slate-600 text-lg mb-8">Earn your first income, learn real skills, and get certified by top companies.</p>
                  <div className="inline-flex items-center text-orange-500 font-black text-lg group-hover:translate-x-2 transition-transform">
                    GET STARTED →
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/company" className="group block h-full">
                <div className="h-full bg-slate-50 border-2 border-slate-100 p-10 rounded-[3rem] hover:border-slate-900 transition-all transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Building2 size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">I am a Company</h2>
                  <p className="text-slate-600 text-lg mb-8">Hire smart talent, innovate faster, and get cost-effective delivery for your projects.</p>
                  <div className="inline-flex items-center text-slate-900 font-black text-lg group-hover:translate-x-2 transition-transform">
                    HIRE TALENT →
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teen" element={<TeenPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
