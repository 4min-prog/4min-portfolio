
import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../translations';

interface FooterProps {
  t: any;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=100029730670833' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/amin_line' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/x.4min/' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/muhammed-emin-elomer-1031bb334/' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 text-center md:text-start">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-3xl font-black text-white tracking-tighter mb-6 block w-full md:w-auto"
            >
              4min
            </button>
            <p className="text-gray-400 leading-relaxed mb-8">
              {t.desc}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-start">
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-xs">{t.links}</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-indigo-400 transition-colors">Skills</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-indigo-400 transition-colors">Projects</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'about')} className="hover:text-indigo-400 transition-colors">About</button></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-xs">{t.whatIDo}</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-400 transition-colors">Web Development</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-400 transition-colors">UI/UX Design</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-indigo-400 transition-colors">Games</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-indigo-400 transition-colors">Tools</button></li>
            </ul>
          </div>



        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p dir="ltr">&copy; {currentYear} 4min. {t.rights}</p>
          <p className="flex items-center mt-4 md:mt-0">
            Created with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> by 4min
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
