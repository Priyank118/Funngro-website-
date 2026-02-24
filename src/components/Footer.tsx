import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">FUNNGRO</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering the next generation of talent. Funngro connects smart teenagers with forward-thinking companies for real-world projects.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-xs">IN</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/teen" className="hover:text-orange-500 transition-colors">For Teens</Link></li>
              <li><Link to="/company" className="hover:text-orange-500 transition-colors">For Companies</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>hello@funngro.com</li>
              <li>Mumbai, India</li>
              <li>© 2025 Funngro</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>Loved by 50Lakh+ users and thousands of companies. Featured on Shark Tank India.</p>
        </div>
      </div>
    </footer>
  );
}
