
export type Language = 'en' | 'tr' | 'ar';

export const translations = {
  en: {
    nav: { home: 'Home', skills: 'Skills', timeline: 'Journey', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: {
      student: 'Web Developer',
      title: 'Crafting The Future',
      roles: ['Web Developer', 'UI/UX Enthusiast', 'Creative Builder'],
      desc: 'I am a dedicated web developer crafting modern, high-performance digital experiences.',
      explore: 'Explore Projects',
      touch: 'Get In Touch',
      downloadCV: 'View CV'
    },
    skills: {
      title: 'Skills & Technologies',
      desc: 'A comprehensive toolkit I use to build robust applications and engaging experiences.',
      categories: {
        web: 'Web Development',
        desktop: 'Desktop & Database',
        games: 'Game Development'
      }
    },
    services: {
      title: 'Our Services',
      desc: 'We offer comprehensive digital solutions to help you scale your business and establish a powerful online presence.',
      web: { t: 'Web Development', d: 'Building fast, accessible, and responsive websites using modern frameworks.' },
      ui: { t: 'UI/UX Design', d: 'Creating intuitive user interfaces and experiences that delight users.' },
      seo: { t: 'SEO Optimization', d: 'Optimizing your digital presence to rank higher in search engines.' },
      performance: { t: 'Performance Tuning', d: 'Audit and optimization for core web vitals and overall speed.' }
    },
    projects: {
      title: 'Our Projects',
      desc: 'Hand-picked projects showcasing technical expertise and creative vision.',
      viewAll: 'View itch.io profile',
      demo: 'Live Demo',
      cat: {
        games: 'Games',
        todo: 'Todo App',
        transfer: 'Transfer System',
        seyhomer: 'Mosque Website',
      },
      projects: {
        games: { title: 'Game Collection', desc: 'A growing collection of fun and addictive browser games published on itch.io.' },
        todo: { title: 'Todo Application', desc: 'A simple and efficient todo application to manage your daily tasks.' },
        transfer: { title: 'Money Transfer Tracking', desc: 'A comprehensive system to track and manage money transfers securely.', status: 'Live' },
        seyhomer: { title: 'Şeyh Ömer Mosque', desc: 'A modern, multilingual website for the historical Şeyh Ömer Mosque in Gaziantep.' },
      }
    },
    timeline: {
      title: 'My Journey',
      desc: 'Key milestones shaping who I am as a developer.',
      items: [
        { title: 'Started Computer Programming', desc: 'Enrolled in Bilgisayar Programcılığı at university. First steps into formal CS education.' },
        { title: 'Web Development', desc: 'Dived into HTML, CSS, JavaScript and React. Built my first real web projects.' },
        { title: 'Game Development', desc: 'Published browser games on itch.io. Explored HTML5 Canvas and JS game engines.' },
        { title: 'Free Tools Hub', desc: 'Launched HubFreeTools — a collection of free online tools built with React & TypeScript.' },
        { title: 'Graduated from Siirt University', desc: 'Completed Computer Programming degree at Siirt University. Officially a graduate!' },
        { title: 'Growing Further', desc: 'Continuing to learn, build, and ship. Full-stack and beyond.' }
      ]
    },
    about: {
      title: 'About Me',
      quote: '"I am a web developer who loves turning ideas into elegant digital solutions. Clean code and constant growth are my priorities."',
      stats: { status: 'Status', count: 'Project Count', coffee: 'Coffee / Day', goals: 'Goals' },
      active: 'Active',
      unlimited: 'Unlimited',
      items: [
        { t: 'Web Developer', d: 'Specializing in modern web development with React, TypeScript and responsive design.' },
        { t: 'Software Journey', d: 'Developing modern interfaces with React and exploring backends.' },
        { t: 'Continuous Growth', d: 'Building games and tools in my free time to sharpen my skills.' },
        { t: 'Vision', d: 'Creating user-friendly digital solutions that leave a mark.' }
      ],
      badgeTitle: 'WEB',
      badgeSubtitle: 'DEVELOPER'
    },
    contact: {
      title: 'Get In Touch',
      desc: 'Have a project in mind? Drop a message and let\'s create something extraordinary.',
      infoTitle: 'Contact Information',
      email: 'Email Us',
      call: 'Call Us',
      location: 'Location',
      follow: 'Follow Us',
      form: { name: 'Your Name', email: 'Email Address', subject: 'Subject', message: 'Message', send: 'Send Message' }
    },
    footer: {
      desc: 'A portfolio focused on creating modern and user-friendly web applications.',
      links: 'Quick Links',
      whatIDo: 'What I Do',
      newsletter: 'Newsletter',
      newsDesc: 'Subscribe to follow my progress.',
      placeholder: 'Your Email',
      join: 'Join',
      rights: 'All rights reserved.'
    },
    ai: {
      welcome: 'Hi! I am the 4min AI Assistant. Ask me anything about my projects or skills!',
      placeholder: 'Ask me something...',
      error: 'Sorry, I encountered an error. Please try again.',
      quotaError: 'I have reached my message limit for now. Please wait a minute before asking more!'
    }
  },
  tr: {
    nav: { home: 'Ana Sayfa', skills: 'Yetenekler', timeline: 'Yolculuğum', services: 'Hizmetler', projects: 'Projeler', about: 'Hakkımda', contact: 'İletişim' },
    hero: {
      student: 'Web Geliştirici',
      title: 'Geleceği İnşa Ediyorum',
      roles: ['Web Geliştirici', 'UI/UX Meraklısı', 'Yaratıcı Oluşturucu'],
      desc: 'Modern, yüksek performanslı dijital deneyimler oluşturan kendini işine adamış bir web geliştiriciyim.',
      explore: 'Projeleri Keşfet',
      touch: 'İletişime Geç',
      downloadCV: 'CV Görüntüle'
    },
    skills: {
      title: 'Yetenekler ve Teknolojiler',
      desc: 'Güçlü uygulamalar ve etkileyici deneyimler oluşturmak için kullandığım kapsamlı araç setim.',
      categories: {
        web: 'Web Geliştirme',
        desktop: 'Masaüstü ve Veritabanı',
        games: 'Oyun Geliştirme'
      }
    },
    services: {
      title: 'Hizmetlerimiz',
      desc: 'İşinizi ölçeklendirmenize ve güçlü bir çevrimiçi varlık oluşturmanıza yardımcı olacak kapsamlı dijital çözümler sunuyoruz.',
      web: { t: 'Web Geliştirme', d: 'Modern frameworkler kullanarak hızlı, erişilebilir ve duyarlı web siteleri oluşturma.' },
      ui: { t: 'UI/UX Tasarım', d: 'Kullanıcıları memnun eden sezgisel kullanıcı arayüzleri ve deneyimleri oluşturma.' },
      seo: { t: 'SEO Optimizasyonu', d: 'Arama motorlarında daha üst sıralarda yer almak için dijital varlığınızı optimize etme.' },
      performance: { t: 'Performans İyileştirme', d: 'Web vitals ve genel site hızı için denetim ve optimizasyon.' }
    },
    projects: {
      title: 'Projelerimiz',
      desc: 'Teknik uzmanlığımızı ve yaratıcı vizyonumuzu sergileyen özenle seçilmiş projeler.',
      viewAll: 'itch.io profilini gör',
      demo: 'Canlı Demo',
      cat: {
        games: 'Oyunlar',
        todo: 'Todo Uygulaması',
        transfer: 'Havale Sistemi',
        seyhomer: 'Cami Web Sitesi',
      },
      projects: {
        games: { title: 'Oyun Koleksiyonu', desc: 'itch.io üzerinde yayınlanan, giderek büyüyen eğlenceli ve bağımlılık yapan tarayıcı oyunları koleksiyonu.' },
        todo: { title: 'Todo Uygulaması', desc: 'Günlük görevlerinizi yönetmek için basit ve verimli bir todo uygulaması.' },
        transfer: { title: 'Para Havale Takip Sistemi', desc: 'Para transferlerini güvenli ve hızlı bir şekilde takip etmek için geliştirilen kapsamlı yönetim sistemi.', status: 'Canlı' },
        seyhomer: { title: 'Şeyh Ömer Camii', desc: 'Gaziantep\'teki tarihi Şeyh Ömer Camii için modern ve çok dilli bir web sitesi.' },
      }
    },
    timeline: {
      title: 'Yolculuğum',
      desc: 'Bir geliştirici olarak beni şekillendiren önemli dönüm noktaları.',
      items: [
        { title: 'Bilgisayar Programcılığına Başladım', desc: 'Üniversitede Bilgisayar Programcılığı bölümüne kaydoldum. Resmi CS eğitimime ilk adımlarımı attım.' },
        { title: 'Web Geliştirme', desc: 'HTML, CSS, JavaScript ve React öğrendim. İlk gerçek web projelerimi geliştirdim.' },
        { title: 'Oyun Geliştirme', desc: 'itch.io üzerinde tarayıcı oyunları yayınladım. HTML5 Canvas ve JS oyun motorlarını keşfettim.' },
        { title: 'Ücretsiz Araçlar Merkezi', desc: 'React ve TypeScript ile HubFreeTools koleksiyonunu başlattım.' },
        { title: 'Siirt Üniversitesi\'nden Mezun Oldum', desc: 'Siirt Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum. Artık resmi bir mezunum!' },
        { title: 'Büyümeye Devam', desc: 'Öğrenmeye, üretmeye ve geliştirmeye devam ediyorum. Full-stack ve ötesi.' }
      ]
    },
    about: {
      title: 'Hakkımda',
      quote: '"Fikirleri zarif dijital çözümlere dönüştürmeyi seven bir web geliştiriciyim. Temiz kod ve sürekli gelişim önceliğimdir."',
      stats: { status: 'Durum', count: 'Proje Sayısı', coffee: 'Kahve / Gün', goals: 'Hedefler' },
      active: 'Aktif',
      unlimited: 'Sınırsız',
      items: [
        { t: 'Web Geliştirici', d: 'React, TypeScript ve responsive tasarım ile modern web geliştirme konusunda uzmanlaşıyorum.' },
        { t: 'Yazılım Yolculuğu', d: 'React ile modern arayüzler geliştiriyor ve backend dünyasını keşfediyorum.' },
        { t: 'Sürekli Gelişim', d: 'Becerilerimi keskinleştirmek için boş zamanlarımda oyunlar ve araçlar yapıyorum.' },
        { t: 'Vizyon', d: 'İz bırakan kullanıcı dostu dijital çözümler yaratmak.' }
      ],
      badgeTitle: 'WEB',
      badgeSubtitle: 'GELİŞTİRİCİ'
    },
    contact: {
      title: 'İletişime Geç',
      desc: 'Aklınızda bir proje mi var? Mesaj bırakın ve birlikte olağanüstü bir şey yaratalım.',
      infoTitle: 'İletişim Bilgileri',
      email: 'Bize E-posta Gönderin',
      call: 'Bizi Arayın',
      location: 'Konum',
      follow: 'Bizi Takip Edin',
      form: { name: 'Adınız', email: 'E-posta Adresiniz', subject: 'Konu', message: 'Mesaj', send: 'Mesaj Gönder' }
    },
    footer: {
      desc: 'Modern ve kullanıcı dostu web uygulamaları oluşturmaya odaklanmış bir portfolyo.',
      links: 'Hızlı Linkler',
      whatIDo: 'Neler Yapıyorum?',
      newsletter: 'Bülten',
      newsDesc: 'Gelişimimi takip etmek için abone olun.',
      placeholder: 'E-postanız',
      join: 'Katıl',
      rights: 'Tüm hakları saklıdır.'
    },
    ai: {
      welcome: 'Merhaba! Ben 4min Yapay Zeka Asistanı. Bana projelerim veya yeteneklerim hakkında her şeyi sorabilirsin!',
      placeholder: 'Bana bir şey sor...',
      error: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
      quotaError: 'Şu anki kullanım limitime ulaştım. Lütfen biraz bekleyip tekrar sorun!'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', skills: 'المهارات', timeline: 'رحلتي', services: 'الخدمات', projects: 'المشاريع', about: 'حول', contact: 'اتصل بنا' },
    hero: {
      student: 'مطور ويب',
      title: 'صناعة المستقبل',
      roles: ['مطور ويب', 'محب لتجربة المستخدم', 'مبدع'],
      desc: 'أنا مطور ويب مكرس أصنع تجارب رقمية حديثة وعالية الأداء.',
      explore: 'استكشاف المشاريع',
      touch: 'تواصل معي',
      downloadCV: 'عرض السيرة الذاتية'
    },
    skills: {
      title: 'المهارات والتقنيات',
      desc: 'مجموعة أدوات شاملة أستخدمها لبناء تطبيقات قوية وتجارب تفاعلية.',
      categories: {
        web: 'تطوير الويب',
        desktop: 'المكتب وقواعد البيانات',
        games: 'تطوير الألعاب'
      }
    },
    services: {
      title: 'خدماتنا',
      desc: 'نحن نقدم حلولاً رقمية شاملة لمساعدتك على توسيع نطاق عملك وإنشاء حضور قوي عبر الإنترنت.',
      web: { t: 'تطوير الويب', d: 'بناء مواقع سريعة وسهلة الوصول ومتجاوبة باستخدام أطر العمل الحديثة.' },
      ui: { t: 'تصميم واجهة المستخدم', d: 'إنشاء واجهات مستخدم وتجارب بديهية تسعد المستخدمين.' },
      seo: { t: 'تحسين محركات البحث', d: 'تحسين حضورك الرقمي لتحل في مرتبة أعلى في محركات البحث.' },
      performance: { t: 'ضبط الأداء', d: 'تدقيق وتحسين حيوية الويب الأساسية وسرعة الموقع الإجمالية.' }
    },
    projects: {
      title: 'مشاريعنا',
      desc: 'مشاريع مختارة بعناية تعرض الخبرة التقنية والرؤية الإبداعية.',
      viewAll: 'عرض ملف itch.io',
      demo: 'عرض حي',
      cat: {
        games: 'الألعاب',
        todo: 'تطبيق المهام',
        transfer: 'نظام الحوالات',
        seyhomer: 'موقع المسجد',
      },
      projects: {
        games: { title: 'مجموعة الألعاب', desc: 'مجموعة متنامية من الألعاب المتصفح الممتعة والمنشورة على itch.io.' },
        todo: { title: 'تطبيق المهام', desc: 'تطبيق مهام بسيط وفعال لإدارة مهامك اليومية.' },
        transfer: { title: 'نظام تتبع الحوالات المالية', desc: 'نظام شامل لتتبع وإدارة الحوالات المالية بأمان.', status: 'مباشر' },
        seyhomer: { title: 'جامع الشيخ عمر', desc: 'موقع إلكتروني حديث ومتعدد اللغات لجامع الشيخ عمر التاريخي في غازي عنتاب.' },
      }
    },
    timeline: {
      title: 'رحلتي',
      desc: 'المحطات الرئيسية التي شكّلت مسيرتي كمطور.',
      items: [
        { title: 'بدأت برمجة الحاسوب', desc: 'التحقت بتخصص برمجة الحاسوب في الجامعة. أولى خطواتي في التعليم الرسمي.' },
        { title: 'تطوير الويب', desc: 'تعمّقت في HTML وCSS وJavaScript وReact. بنيت أول مشاريع الويب الحقيقية.' },
        { title: 'تطوير الألعاب', desc: 'نشرت ألعاب المتصفح على itch.io. استكشفت HTML5 Canvas ومحركات الألعاب.' },
        { title: 'مركز الأدوات المجانية', desc: 'أطلقت HubFreeTools، مجموعة من الأدوات المجانية بـ React وTypeScript.' },
        { title: 'تخرجت من جامعة سعرد', desc: 'أكملت درجة برمجة الحاسوب من جامعة سعرد. خريج رسمي الآن!' },
        { title: 'الاستمرار في النمو', desc: 'أواصل التعلم والبناء والإنجاز. نحو Full-stack وما بعده.' }
      ]
    },
    about: {
      title: 'حول',
      quote: '"أنا مطور ويب أحب تحويل الأفكار إلى حلول رقمية أنيقة. الكود النظيف والنمو المستمر هما أولوياتي."',
      stats: { status: 'الحالة', count: 'عدد المشاريع', coffee: 'قهوة / يوم', goals: 'الأهداف' },
      active: 'نشط',
      unlimited: 'غير محدود',
      items: [
        { t: 'مطور ويب', d: 'أختص في تطوير الويب الحديث باستخدام React و TypeScript والتصميم المتجاوب.' },
        { t: 'رحلة البرمجيات', d: 'تطوير واجهات حديثة باستخدام React واستكشاف الواجهات الخلفية.' },
        { t: 'نمو مستمر', d: 'بناء الألعاب والأدوات في وقت فراغي لصقل مهاراتي.' },
        { t: 'رؤية', d: 'إنشاء حلول رقمية سهلة الاستخدام تترك بصمة.' }
      ],
      badgeTitle: 'ويب',
      badgeSubtitle: 'مطور'
    },
    contact: {
      title: 'تواصل معي',
      desc: 'هل لديك مشروع في بالك؟ أرسل رسالة ولنقم بإنشاء شيء استثنائي.',
      infoTitle: 'معلومات الاتصال',
      email: 'راسلنا',
      call: 'اتصل بنا',
      location: 'الموقع',
      follow: 'تابعنا',
      form: { name: 'اسمك', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', send: 'إرسال الرسالة' }
    },
    footer: {
      desc: 'محفظة تركز على إنشاء تطبيقات ويب حديثة وسهلة الاستخدام.',
      links: 'روابط سريعة',
      whatIDo: 'ماذا أفعل',
      newsletter: 'النشرة الإخبارية',
      newsDesc: 'اشترك لمتابعة تقدمي.',
      placeholder: 'بريدك الإلكتروني',
      join: 'انضمام',
      rights: 'جميع الحقوق محفوظة.'
    },
    ai: {
      welcome: 'مرحباً! أنا مساعد 4min الذكي. اسألني أي شيء عن مشاريعي أو مهاراتي!',
      placeholder: 'اسألني شيئاً...',
      error: 'عذراً، واجهت خطأً. يرجى المحاولة مرة أخرى.',
      quotaError: 'لقد وصلت إلى حد الرسائل الخاص بي حالياً. يرجى الانتظار دقيقة قبل السؤال مرة أخرى!'
    }
  }
};
