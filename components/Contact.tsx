import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, Loader2, AlertCircle, Github } from 'lucide-react';

interface ContactProps {
  t: any;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      name: sanitize(formState.name),
      email: formState.email.trim().toLowerCase(),
      subject: sanitize(formState.subject),
      message: sanitize(formState.message),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus('error');
      return;
    }

    try {
      const FORMSPREE_ID = 'xwvnknjg'; 

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="section-label mb-6 inline-flex">
          <span className="dot" />
          <span>{t.infoTitle}</span>
        </div>
        <h2 className="heading-lg mb-6">{t.title}</h2>
        <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="premium-card overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-10 lg:p-12 bg-surface border-r border-border">
            <h3 className="text-xl font-bold text-white mb-8">{t.infoTitle}</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4 rtl:space-x-reverse group">
                <div className="w-10 h-10 rounded-lg bg-deep border border-border flex items-center justify-center text-secondary group-hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-muted text-xs font-bold uppercase tracking-widest mb-1">{t.email}</p>
                  <p className="text-white font-medium text-sm">eminelomerr@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 rtl:space-x-reverse group">
                <div className="w-10 h-10 rounded-lg bg-deep border border-border flex items-center justify-center text-secondary group-hover:text-accent transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-muted text-xs font-bold uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-white font-medium text-sm">Gaziantep, Turkey</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-muted text-xs font-bold uppercase tracking-widest mb-4">{t.follow}</p>
              <div className="flex space-x-3 rtl:space-x-reverse">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-deep border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 lg:p-12">
  {status === 'success' ? (
    <div className="text-center py-16 animate-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-6">
        <CheckCircle2 className="w-10 h-10 text-accent" />
      </div>
      <h3 className="heading-lg mb-4">{t.success.title}</h3>
      <p className="text-secondary text-lg mb-10 max-w-sm mx-auto">
        {t.success.desc}
      </p>
      <button 
        onClick={() => setStatus('idle')}
        className="btn-primary"
      >
        {t.sendNew}
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{t.error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{t.form.name}</label>
            <input 
              type="text" 
              required
              placeholder={t.form.name}
              disabled={status === 'submitting'}
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              className="w-full px-5 py-3.5 bg-surface border border-border focus:border-accent outline-none text-white font-medium transition-all rounded-xl text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{t.form.email}</label>
            <input 
              type="email" 
              required
              placeholder={t.form.email}
              disabled={status === 'submitting'}
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              className="w-full px-5 py-3.5 bg-surface border border-border focus:border-accent outline-none text-white font-medium transition-all rounded-xl text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{t.form.subject}</label>
          <input 
            type="text" 
            placeholder={t.form.subject}
            disabled={status === 'submitting'}
            value={formState.subject}
            onChange={(e) => setFormState({...formState, subject: e.target.value})}
            className="w-full px-5 py-3.5 bg-surface border border-border focus:border-accent outline-none text-white font-medium transition-all rounded-xl text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{t.form.message}</label>
          <textarea 
            rows={5} 
            required
            placeholder={t.form.message}
            disabled={status === 'submitting'}
            value={formState.message}
            onChange={(e) => setFormState({...formState, message: e.target.value})}
            className="w-full px-5 py-3.5 bg-surface border border-border focus:border-accent outline-none resize-none text-white font-medium transition-all rounded-xl text-sm"
          ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 rounded-xl bg-surface text-white font-bold border border-border hover:border-accent transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{t.sending}</span>
          </>
        ) : (
          <>
            <span>{t.form.send}</span>
            <Send className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
