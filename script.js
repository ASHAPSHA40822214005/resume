const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');
const languageSelect = document.getElementById('languageSelect');

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.badge': 'Now available in 3 languages',
    'hero.subtitle': 'Computer Science Student • Developer',
    'hero.description': 'Motivated and hardworking Computer Science student with strong problem-solving ability, excellent teamwork, and quick learning skills. Passionate about technology and innovation.',
    'hero.ctaContact': 'Get In Touch',
    'hero.ctaProjects': 'View Projects',
    'about.title': 'About Me',
    'about.heading': "Hello! I'm Ashapsha J",
    'about.p1': 'A dedicated Computer Science student from Poombuhar, Mayiladuthurai, with a passion for learning and growth. I believe in continuous improvement and contributing effectively to any organization I join.',
    'about.p2': "My journey in computer science has been driven by curiosity and the desire to solve real-world problems through technology. I'm always eager to learn new technologies and apply them in innovative ways.",
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'Projects',
    'about.stats.learning': 'Years Learning',
    'skills.title': 'My Skills',
    'skills.items.basics.name': 'Computer Basics',
    'skills.items.basics.level': 'Advanced',
    'skills.items.teamwork.name': 'Teamwork',
    'skills.items.teamwork.level': 'Advanced',
    'skills.items.problemSolving.name': 'Problem Solving',
    'skills.items.problemSolving.level': 'Advanced',
    'skills.items.communication.name': 'Communication',
    'skills.items.communication.level': 'Advanced',
    'skills.items.adaptive.name': 'Adaptive Learning',
    'skills.items.adaptive.level': 'Advanced',
    'skills.items.positive.name': 'Positive Attitude',
    'skills.items.positive.level': 'Expert',
    'projects.title': 'Featured Projects',
    'projects.portfolio.title': 'Personal Portfolio Website',
    'projects.portfolio.description': 'Designed a responsive portfolio website using HTML, CSS and JavaScript. Implemented smooth scrolling and responsive layout for optimal user experience.',
    'projects.portfolio.cta': 'View Project',
    'projects.bellsath.title': 'Bellsath Website',
    'projects.bellsath.description': 'Built a polished responsive website for Bellsath using HTML, CSS and JavaScript. Added custom layout, interactive navigation, and rich presentation of services.',
    'projects.bellsath.cta': 'View Live Site',
    'education.title': 'Education',
    'education.college.year': '2025 — Present',
    'education.college.degree': 'B.Sc. Computer Science',
    'education.college.school': 'T.B.M.L College, Porayar',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'Higher Secondary (12th)',
    'education.higher.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.higher.grade': 'Percentage: 67%',
    'education.sslc.degree': 'SSLC (10th)',
    'education.sslc.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.sslc.grade': 'Percentage: 60%',
    'contact.title': 'Get In Touch',
    'contact.items.phone': 'Phone',
    'contact.items.email': 'Email',
    'contact.items.location': 'Location',
    'contact.items.linkedin': 'LinkedIn',
    'contact.items.github': 'GitHub',
    'contact.follow': 'Follow Me',
    'contact.languageTitle': 'Resume Language',
    'contact.download': 'Download Resume',
    'footer.text': '© 2025 Ashapsha J. Made with <i class="fas fa-heart" style="color: var(--primary);"></i> and passion for technology.'
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'என்னை பற்றி',
    'nav.skills': 'திறன்கள்',
    'nav.projects': 'திட்டங்கள்',
    'nav.education': 'கல்வி',
    'nav.contact': 'தொடர்பு',
    'hero.badge': 'இப்போது 3 மொழிகளில் கிடைக்கிறது',
    'hero.subtitle': 'கணினி அறிவியல் மாணவி • டெவலப்பர்',
    'hero.description': 'வலுவான பிரச்சினை தீர்க்கும் திறன், சிறந்த குழு பணித்திறன், மற்றும் விரைவான கற்றல் திறன்களுடன் செயல்படும் உற்சாகமான கணினி அறிவியல் மாணவி. தொழில்நுட்பம் மற்றும் புதுமை மீது ஆழ்ந்த ஆர்வம் கொண்டவர்.',
    'hero.ctaContact': 'தொடர்பு கொள்ளுங்கள்',
    'hero.ctaProjects': 'திட்டங்களை பார்க்கவும்',
    'about.title': 'என்னை பற்றி',
    'about.heading': 'வணக்கம்! நான் Ashapsha J',
    'about.p1': 'பூம்புகார், மயிலாடுதுறை சேர்ந்த அர்ப்பணிப்பான கணினி அறிவியல் மாணவி நான். கற்றலும் வளர்ச்சியும் என் பயணத்தின் மையம். நான் சேரும் எந்த நிறுவனத்திற்கும் பயனுள்ள பங்களிப்பு வழங்க வேண்டும் என்பதில் நம்பிக்கை கொண்டிருக்கிறேன்.',
    'about.p2': 'கணினி அறிவியலில் என் பயணம் ஆர்வத்தாலும் தொழில்நுட்பத்தின் மூலம் நிஜ உலக சிக்கல்களை தீர்க்க வேண்டும் என்ற எண்ணத்தாலும் இயக்கப்படுகிறது. புதிய தொழில்நுட்பங்களை கற்றுக்கொண்டு அவற்றை புதுமையாகப் பயன்படுத்த நான் எப்போதும் தயாராக உள்ளேன்.',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'திட்டங்கள்',
    'about.stats.learning': 'கற்றல் ஆண்டுகள்',
    'skills.title': 'என் திறன்கள்',
    'skills.items.basics.name': 'கணினி அடிப்படை',
    'skills.items.basics.level': 'மேம்பட்டது',
    'skills.items.teamwork.name': 'குழு பணித்திறன்',
    'skills.items.teamwork.level': 'மேம்பட்டது',
    'skills.items.problemSolving.name': 'பிரச்சினை தீர்வு',
    'skills.items.problemSolving.level': 'மேம்பட்டது',
    'skills.items.communication.name': 'தொடர்புத் திறன்',
    'skills.items.communication.level': 'மேம்பட்டது',
    'skills.items.adaptive.name': 'உடனடி கற்றல் திறன்',
    'skills.items.adaptive.level': 'மேம்பட்டது',
    'skills.items.positive.name': 'நேர்மறை அணுகுமுறை',
    'skills.items.positive.level': 'நிபுணத்துவம்',
    'projects.title': 'முக்கிய திட்டங்கள்',
    'projects.portfolio.title': 'தனிப்பட்ட போர்ட்ஃபோலியோ இணையதளம்',
    'projects.portfolio.description': 'HTML, CSS மற்றும் JavaScript பயன்படுத்தி பதிலளிக்கும் தனிப்பட்ட போர்ட்ஃபோலியோ இணையதளத்தை வடிவமைத்தேன். சிறந்த பயனர் அனுபவத்திற்காக மென்மையான ஸ்க்ரோல் மற்றும் responsive layout உருவாக்கப்பட்டது.',
    'projects.portfolio.cta': 'திட்டத்தை பார்க்கவும்',
    'projects.bellsath.title': 'Bellsath இணையதளம்',
    'projects.bellsath.description': 'HTML, CSS மற்றும் JavaScript மூலம் Bellsath க்கு அழகான responsive இணையதளம் உருவாக்கப்பட்டது. தனிப்பயன் layout, interactive navigation, மற்றும் services-ஐ தெளிவாக காட்டும் அமைப்பு சேர்க்கப்பட்டது.',
    'projects.bellsath.cta': 'நேரடி தளத்தை பார்க்கவும்',
    'education.title': 'கல்வி',
    'education.college.year': '2025 — தற்போது',
    'education.college.degree': 'B.Sc. கணினி அறிவியல்',
    'education.college.school': 'T.B.M.L கல்லூரி, பொறையார்',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'மேல்நிலைப் பள்ளி (12ம் வகுப்பு)',
    'education.higher.school': 'ஸ்ரீநிவாசா உயர்நிலைப் பள்ளி, மேலையூர்',
    'education.higher.grade': 'சதவீதம்: 67%',
    'education.sslc.degree': 'SSLC (10ம் வகுப்பு)',
    'education.sslc.school': 'ஸ்ரீநிவாசா உயர்நிலைப் பள்ளி, மேலையூர்',
    'education.sslc.grade': 'சதவீதம்: 60%',
    'contact.title': 'தொடர்பு கொள்ளுங்கள்',
    'contact.items.phone': 'தொலைபேசி',
    'contact.items.email': 'மின்னஞ்சல்',
    'contact.items.location': 'இடம்',
    'contact.items.linkedin': 'லிங்க்ட்இன்',
    'contact.items.github': 'கிட்ஹப்',
    'contact.follow': 'என்னை பின்தொடருங்கள்',
    'contact.languageTitle': 'ரெச்யூம் மொழி',
    'contact.download': 'ரெச்யூமை பதிவிறக்கவும்',
    'footer.text': '© 2025 Ashapsha J. <i class="fas fa-heart" style="color: var(--primary);"></i> மற்றும் தொழில்நுட்ப ஆர்வத்துடன் உருவாக்கப்பட்டது.'
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'परिचय',
    'nav.skills': 'कौशल',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.education': 'शिक्षा',
    'nav.contact': 'संपर्क',
    'hero.badge': 'अब 3 भाषाओं में उपलब्ध',
    'hero.subtitle': 'कंप्यूटर साइंस छात्रा • डेवलपर',
    'hero.description': 'मजबूत समस्या-समाधान क्षमता, बेहतरीन टीमवर्क और तेज सीखने की क्षमता वाली प्रेरित और मेहनती कंप्यूटर साइंस छात्रा। तकनीक और नवाचार के प्रति गहरा उत्साह रखती हूँ।',
    'hero.ctaContact': 'संपर्क करें',
    'hero.ctaProjects': 'प्रोजेक्ट्स देखें',
    'about.title': 'मेरे बारे में',
    'about.heading': 'नमस्ते! मैं Ashapsha J हूँ',
    'about.p1': 'मैं पूम्बुहार, मयिलाडुथुरै की एक समर्पित कंप्यूटर साइंस छात्रा हूँ, जिसे सीखने और आगे बढ़ने का जुनून है। मैं निरंतर सुधार और जिस भी संस्था से जुड़ूँ उसमें प्रभावी योगदान देने में विश्वास रखती हूँ।',
    'about.p2': 'कंप्यूटर साइंस में मेरी यात्रा जिज्ञासा और तकनीक के माध्यम से वास्तविक समस्याओं को हल करने की इच्छा से प्रेरित है। मैं हमेशा नई तकनीकों को सीखने और उन्हें नए तरीके से लागू करने के लिए उत्सुक रहती हूँ।',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'प्रोजेक्ट्स',
    'about.stats.learning': 'सीखने के वर्ष',
    'skills.title': 'मेरे कौशल',
    'skills.items.basics.name': 'कंप्यूटर बेसिक्स',
    'skills.items.basics.level': 'उन्नत',
    'skills.items.teamwork.name': 'टीमवर्क',
    'skills.items.teamwork.level': 'उन्नत',
    'skills.items.problemSolving.name': 'समस्या समाधान',
    'skills.items.problemSolving.level': 'उन्नत',
    'skills.items.communication.name': 'संचार',
    'skills.items.communication.level': 'उन्नत',
    'skills.items.adaptive.name': 'अनुकूल सीखना',
    'skills.items.adaptive.level': 'उन्नत',
    'skills.items.positive.name': 'सकारात्मक दृष्टिकोण',
    'skills.items.positive.level': 'विशेषज्ञ',
    'projects.title': 'मुख्य प्रोजेक्ट्स',
    'projects.portfolio.title': 'पर्सनल पोर्टफोलियो वेबसाइट',
    'projects.portfolio.description': 'HTML, CSS और JavaScript का उपयोग करके एक responsive portfolio website डिज़ाइन की। बेहतर user experience के लिए smooth scrolling और responsive layout लागू किया गया।',
    'projects.portfolio.cta': 'प्रोजेक्ट देखें',
    'projects.bellsath.title': 'Bellsath वेबसाइट',
    'projects.bellsath.description': 'HTML, CSS और JavaScript का उपयोग करके Bellsath के लिए एक polished responsive website बनाई। इसमें custom layout, interactive navigation और services की आकर्षक प्रस्तुति जोड़ी गई।',
    'projects.bellsath.cta': 'लाइव साइट देखें',
    'education.title': 'शिक्षा',
    'education.college.year': '2025 — वर्तमान',
    'education.college.degree': 'B.Sc. कंप्यूटर साइंस',
    'education.college.school': 'T.B.M.L कॉलेज, पोरैयार',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'हायर सेकेंडरी (12वीं)',
    'education.higher.school': 'श्रीनिवासा हायर सेकेंडरी स्कूल, मेलैयूर',
    'education.higher.grade': 'प्रतिशत: 67%',
    'education.sslc.degree': 'SSLC (10वीं)',
    'education.sslc.school': 'श्रीनिवासा हायर सेकेंडरी स्कूल, मेलैयूर',
    'education.sslc.grade': 'प्रतिशत: 60%',
    'contact.title': 'संपर्क करें',
    'contact.items.phone': 'फोन',
    'contact.items.email': 'ईमेल',
    'contact.items.location': 'स्थान',
    'contact.items.linkedin': 'लिंक्डइन',
    'contact.items.github': 'गिटहब',
    'contact.follow': 'मुझे फॉलो करें',
    'contact.languageTitle': 'रेज़्यूमे भाषा',
    'contact.download': 'रेज़्यूमे डाउनलोड करें',
    'footer.text': '© 2025 Ashapsha J. <i class="fas fa-heart" style="color: var(--primary);"></i> और तकनीक के जुनून से बनाया गया।'
  }
};

const getTranslation = (language, key) => {
  return translations[language]?.[key] ?? translations.en[key] ?? '';
};

const applyTranslations = (language) => {
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translatedValue = getTranslation(language, key);

    if (!translatedValue) {
      return;
    }

    if (translatedValue.includes('<i')) {
      element.innerHTML = translatedValue;
      return;
    }

    element.textContent = translatedValue;
  });
};

const applyTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

const storedTheme = localStorage.getItem('portfolio-theme');
const initialTheme = storedTheme || html.getAttribute('data-theme') || 'dark';
applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

const storedLanguage = localStorage.getItem('portfolio-language');
const initialLanguage = translations[storedLanguage] ? storedLanguage : 'en';
languageSelect.value = initialLanguage;
applyTranslations(initialLanguage);

languageSelect.addEventListener('change', (event) => {
  const nextLanguage = event.target.value;
  applyTranslations(nextLanguage);
  localStorage.setItem('portfolio-language', nextLanguage);
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    document.querySelectorAll('.nav-links a').forEach((navLink) => {
      navLink.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((element) => {
  observer.observe(element);
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
