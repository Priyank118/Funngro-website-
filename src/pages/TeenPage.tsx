import { motion } from 'motion/react';
import { CheckCircle2, Star, Zap, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function TeenPage() {
  const categories = [
    { name: 'Social Media Marketing', desc: 'Manage social media pages for real brands.', icon: Zap },
    { name: 'Video Creation', desc: 'Create and edit engaging videos and reels.', icon: Zap },
    { name: 'Website Design', desc: 'Build and design modern websites.', icon: Zap },
    { name: 'Influencer Marketing', desc: 'Create viral content for social handles.', icon: Zap },
    { name: 'App Development', desc: 'Build market-ready mobile applications.', icon: Zap },
    { name: 'Campus Ambassador', desc: 'Drive sales and acquire customers.', icon: Zap },
  ];

  const steps = [
    { title: 'Register', desc: 'Sign up on the Funngro app and pick your interests.', icon: CheckCircle2 },
    { title: 'Complete Profile', desc: 'Showcase your skills, interests, and past work.', icon: CheckCircle2 },
    { title: 'Finish First Project', desc: 'Complete a skill-test project and get paid.', icon: CheckCircle2 },
    { title: 'Apply to Companies', desc: 'Browse hundreds of open projects and apply.', icon: CheckCircle2 },
    { title: 'Start Earning', desc: 'Deliver work, earn money, and get certificates.', icon: CheckCircle2 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Star size={16} fill="currentColor" />
              <span>EARN YOUR FIRST INCOME</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8"
            >
              Smart Teens Work with <span className="text-orange-500">Smart Companies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Be independent. Make your passion your profession. Get experiential learning by working on real projects with real companies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all transform hover:-translate-y-1">
                START EARNING NOW
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                LEARN MORE
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Why Work Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">Why work in your teenage?</h2>
            <p className="text-slate-500 text-lg">Build your future while you're still in school.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'First Income', desc: 'Work with real companies and earn real money.', icon: Briefcase },
              { title: 'Passion', desc: 'Turn what you love into a professional career.', icon: Zap },
              { title: 'Learning', desc: 'Hands-on experiential learning on real-world projects.', icon: GraduationCap },
              { title: 'Certification', desc: 'Build your profile with official experience certificates.', icon: Award },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">Project Categories for <span className="text-orange-500">Teenlancers</span></h2>
              <p className="text-slate-400 text-xl">Choose from a wide range of fields that match your skills and interests.</p>
            </div>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all whitespace-nowrap">
              VIEW ALL PROJECTS
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="group p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-all cursor-pointer">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{cat.name}</h3>
                <p className="text-slate-400 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">Earning with Funngro is Simple</h2>
            <p className="text-slate-500 text-lg">Follow these 5 steps to start your professional journey.</p>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white border-4 border-orange-500 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-2xl shadow-xl shadow-orange-100">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">Ready to become a Teenlancer?</h2>
              <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
                Join 50Lakh+ smart teens who are already building their future and earning their first income.
              </p>
              <button className="bg-white text-orange-500 px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition-all shadow-2xl">
                DOWNLOAD THE APP
              </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
