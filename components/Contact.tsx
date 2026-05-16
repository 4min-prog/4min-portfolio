
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      /**
       * KULLANICI GÜNCELLEMESİ: Formspree ID'niz başarıyla entegre edildi.
       */
      const FORMSPREE_ID = 'xwvnknjg'; 

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=100029730670833' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/amin_line' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/x.4min/' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/muhammed-emin-elomer-1031bb334/' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-none">
          {t.title}
        </h2>
        <div className="w-24 h-2.5 bg-indigo-600 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          {t.desc}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-950 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all">
        <div className="flex flex-col lg:flex-row">
          {/* Bilgi Paneli */}
          <div className="lg:w-1/3 bg-indigo-600 p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-3xl font-black mb-10 relative z-10">{t.infoTitle}</h3>
            
            <div className="space-y-10 mb-16 relative z-10">
              <div className="flex items-start space-x-5 rtl:space-x-reverse group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-1">{t.email}</p>
                  <p className="text-xl font-bold break-all">eminelomerr@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 rtl:space-x-reverse group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-xl font-bold">Gaziantep, Turkey</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-6">{t.follow}</p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Paneli */}
          <div className="lg:w-2/3 p-8 lg:p-16 bg-[#0B0F1A] border-l border-white/5 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
  {status === 'success' ? (
    <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-8">
        <CheckCircle2 className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Awesome!</h3>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-sm mx-auto font-medium">
        Your message has reached my inbox. I will get back to you as soon as possible.
      </p>
      <button 
        onClick={() => setStatus('idle')}
        className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
      >
        Send New Message
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-8 text-left rtl:text-right">
      {status === 'error' && (
        <div className="flex items-center space-x-4 rtl:space-x-reverse p-5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl border border-red-100 dark:border-red-900/30 animate-shake">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <p className="font-bold">Something went wrong. Please try using my email address.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">{t.form.name}</label>
            <input 
              type="text" 
              required
              placeholder="Your Name"
              disabled={status === 'submitting'}
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              className="w-full px-6 py-4 bg-gray-900/50 dark:bg-gray-900/80 border border-gray-800 focus:border-indigo-600 outline-none text-white font-bold transition-all rounded-xl focus:bg-gray-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">{t.form.email}</label>
            <input 
              type="email" 
              required
              placeholder="email@mail.com"
              disabled={status === 'submitting'}
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              className="w-full px-6 py-4 bg-gray-900/50 dark:bg-gray-900/80 border border-gray-800 focus:border-indigo-600 outline-none text-white font-bold transition-all rounded-xl focus:bg-gray-900"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">{t.form.subject}</label>
          <input 
            type="text" 
            placeholder="Subject"
            disabled={status === 'submitting'}
            value={formState.subject}
            onChange={(e) => setFormState({...formState, subject: e.target.value})}
            className="w-full px-6 py-4 bg-gray-900/50 dark:bg-gray-900/80 border border-gray-800 focus:border-indigo-600 outline-none text-white font-bold transition-all rounded-xl focus:bg-gray-900"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">{t.form.message}</label>
          <textarea 
            rows={5} 
            required
            placeholder="You can write your message here..."
            disabled={status === 'submitting'}
            value={formState.message}
            onChange={(e) => setFormState({...formState, message: e.target.value})}
            className="w-full px-6 py-4 bg-gray-900/50 dark:bg-gray-900/80 border border-gray-800 focus:border-indigo-600 outline-none resize-none text-white font-bold transition-all rounded-xl focus:bg-gray-900"
          ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center space-x-3 rtl:space-x-reverse transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg">Sending...</span>
          </>
        ) : (
          <>
            <span className="text-lg">{t.form.send}</span>
            <Send className="w-6 h-6 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
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
