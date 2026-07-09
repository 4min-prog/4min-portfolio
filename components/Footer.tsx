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
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/4minweb/' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/4min/' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/4min-prog' },
  ];

  return (
    <footer className="bg-deep border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 text-center md:text-start">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-3xl font-bold text-white tracking-tighter mb-6 block w-full md:w-auto"
            >
              4MIN
            </button>
            <p className="text-muted leading-relaxed mb-8 text-sm">
              {t.desc}
            </p>
            <div className="flex justify-center md:justify-start space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-accent transition-all"
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
              <li><button onClick={(e) => scrollToSection(e, 'home')} className="text-muted hover:text-white transition-colors text-sm">{t.quickLinks.home}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="text-muted hover:text-white transition-colors text-sm">{t.quickLinks.skills}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-muted hover:text-white transition-colors text-sm">{t.quickLinks.services}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="text-muted hover:text-white transition-colors text-sm">{t.quickLinks.projects}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'about')} className="text-muted hover:text-white transition-colors text-sm">{t.quickLinks.about}</button></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t.whatIDo}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-muted hover:text-white transition-colors text-sm">{t.whatIDoItems.web}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')} className="text-muted hover:text-white transition-colors text-sm">{t.whatIDoItems.ui}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'projects')} className="text-muted hover:text-white transition-colors text-sm">{t.whatIDoItems.games}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'skills')} className="text-muted hover:text-white transition-colors text-sm">{t.whatIDoItems.tools}</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p dir="ltr">&copy; {currentYear} 4min. {t.rights}</p>
          <p className="flex items-center mt-4 md:mt-0">
            Created with <Heart className="w-4 h-4 mx-1 text-accent" /> by 4min
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
