import { motion } from 'motion/react';
import { Users, Lightbulb, DollarSign, ShieldCheck, BarChart3, Search, Database, Mic2, PenTool, Palette, FlaskConical } from 'lucide-react';

export default function CompanyPage() {
  const needs = [
    { name: 'Research & Survey', desc: 'Run surveys and complete research assignments.', icon: Search },
    { name: 'Data Entry', desc: 'Build databases with talent skilled in data research.', icon: Database },
    { name: 'Voice Over', desc: 'Get content recorded with fresh voice talent.', icon: Mic2 },
    { name: 'Content Writing', desc: 'Blogs, articles, and high-quality website content.', icon: PenTool },
    { name: 'Graphics Design', desc: 'Logos, brochures, and social media posts.', icon: Palette },
    { name: 'Product Testing', desc: 'Get feedback on apps, websites, or physical products.', icon: FlaskConical },
  ];

  const benefits = [
    { title: 'Innovation', desc: 'Teenagers are the smarter generation, clued into the latest customer mindset.', icon: Lightbulb },
    { title: 'Cost Effective', desc: 'High-quality delivery at a fraction of the cost of traditional agencies.', icon: DollarSign },
    { title: 'Social Impact', desc: 'Empower the youth by providing them with their first professional experience.', icon: Users },
    { title: 'Scalability', desc: 'Access a massive pool of 50Lakh+ talented teens for any project size.', icon: BarChart3 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <ShieldCheck size={16} />
                <span>SMART TALENT SOLUTION</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight"
              >
                Smart Companies Find <span className="text-orange-500">Smart Talent</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed"
              >
                Access thousands of talented teenagers for all your business needs. Get innovative, cost-effective solutions while helping the next generation grow.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all">
                  HIRE SMART TALENT
                </button>
                <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                  VIEW CASE STUDIES
                </button>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 relative z-10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Active Projects</span>
                    <span className="text-orange-500 font-black">1,240+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Teenlancers</span>
                    <span className="text-orange-500 font-black">50L+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Avg. Delivery Time</span>
                    <span className="text-orange-500 font-black">48 Hours</span>
                  </div>
                </div>
              </motion.div>
              {/* Decorative background shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">Why work with Teens?</h2>
            <p className="text-slate-500 text-lg">The smartest generation is ready to work for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Needs Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Talent for all your needs</h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              From data entry to app development, our smart talent pool covers every aspect of modern business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {needs.map((need, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-slate-800 rounded-3xl border border-slate-700 flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-6">
                  <need.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{need.name}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{need.desc}</p>
                <a href="#" className="text-orange-500 font-bold hover:underline mt-auto">Sample projects →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">Working with Teenagers is Easy</h2>
            <p className="text-slate-500 text-lg">Our streamlined process ensures quality and efficiency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: 'Register', desc: 'Sign up on Funngro.' },
              { title: 'Add Projects', desc: 'Simple process takes < 2 min.' },
              { title: 'Get Applications', desc: 'Curated list of interested teens.' },
              { title: 'Select Teens', desc: 'Review profiles and past work.' },
              { title: 'Project Delivered', desc: 'Success! Release payment.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 font-black">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-slate-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">Ready to hire <span className="text-orange-500">Smart Talent?</span></h2>
              <p className="text-slate-400 text-xl">
                Join thousands of companies that are already benefiting from the innovation and cost-effectiveness of Teenlancers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20">
                POST A PROJECT
              </button>
              <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all">
                CONTACT SALES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
