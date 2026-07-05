import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
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
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/4min/' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/4min-prog' },
  ];

  return (
    <footer className="bg-[#09090B] border-t border-[#23232D] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 text-center md:text-start">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-3xl font-bold text-white tracking-tighter mb-6 block w-full md:w-auto"
            >
              4min
            </button>
            <p className="text-[#71717A] leading-relaxed mb-8 text-sm">
              {t.desc}
            </p>
            <div className="flex justify-center md:justify-start space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#121217] border border-[#23232D] flex items-center justify-center text-[#71717A] hover:text-white hover:border-[#7C3AED] transition-all"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t.links}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => scrollToSection(e, 'home')} className="text-[#71717A] hover:text-white transition-colors text-sm">Home</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="text-[#71717A] hover:text-white transition-colors text-sm">Skills</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-[#71717A] hover:text-white transition-colors text-sm">Services</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="text-[#71717A] hover:text-white transition-colors text-sm">Projects</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'about')} className="text-[#71717A] hover:text-white transition-colors text-sm">About</button></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t.whatIDo}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-[#71717A] hover:text-white transition-colors text-sm">Web Development</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-[#71717A] hover:text-white transition-colors text-sm">UI/UX Design</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="text-[#71717A] hover:text-white transition-colors text-sm">Games</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="text-[#71717A] hover:text-white transition-colors text-sm">Tools</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#23232D] flex flex-col md:flex-row justify-between items-center text-sm text-[#71717A]">
          <p dir="ltr">&copy; {currentYear} 4min. {t.rights}</p>
          <p className="flex items-center mt-4 md:mt-0">
            Created with <Heart className="w-4 h-4 mx-1 text-[#7C3AED]" /> by 4min
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
