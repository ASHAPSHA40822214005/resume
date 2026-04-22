const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');
const languageSelect = document.getElementById('languageSelect');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('primaryNavigation');
const certificateModal = document.getElementById('certificateModal');
const certificateOpenButtons = document.querySelectorAll('[data-certificate-open]');
const certificateCloseButtons = document.querySelectorAll('[data-certificate-close]');
const certificateModalImage = document.getElementById('certificateModalImage');
const certificateModalLabel = document.getElementById('certificateModalLabel');
const certificateModalTitle = document.getElementById('certificateTitle');
const certificateModalText = document.getElementById('certificateModalText');
const certificateModalName = document.getElementById('certificateModalName');
const certificateModalEvent = document.getElementById('certificateModalEvent');
const certificateModalDate = document.getElementById('certificateModalDate');
const certificateModalIssued = document.getElementById('certificateModalIssued');
const certificateModalRecognition = document.getElementById('certificateModalRecognition');
let currentLanguage = 'en';

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
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',
    'hero.badge': 'Ahora disponible en 7 idiomas',
    'hero.subtitle': 'Estudiante de Ciencias de la Computación • Desarrolladora',
    'hero.description': 'Estudiante de Ciencias de la Computación motivada y trabajadora, con gran capacidad para resolver problemas, excelente trabajo en equipo y rápido aprendizaje. Apasionada por la tecnología y la innovación.',
    'hero.ctaContact': 'Contáctame',
    'hero.ctaProjects': 'Ver proyectos',
    'about.title': 'Sobre mí',
    'about.heading': 'Hola, soy Ashapsha J',
    'about.p1': 'Soy una estudiante dedicada de Ciencias de la Computación de Poombuhar, Mayiladuthurai, con pasión por aprender y crecer. Creo en la mejora continua y en contribuir de manera efectiva a cualquier organización a la que me una.',
    'about.p2': 'Mi camino en la informática ha sido impulsado por la curiosidad y el deseo de resolver problemas del mundo real con tecnología. Siempre tengo ganas de aprender nuevas tecnologías y aplicarlas de forma innovadora.',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'Proyectos',
    'about.stats.learning': 'Años de aprendizaje',
    'skills.title': 'Mis habilidades',
    'skills.items.basics.name': 'Fundamentos informáticos',
    'skills.items.basics.level': 'Avanzado',
    'skills.items.teamwork.name': 'Trabajo en equipo',
    'skills.items.teamwork.level': 'Avanzado',
    'skills.items.problemSolving.name': 'Resolución de problemas',
    'skills.items.problemSolving.level': 'Avanzado',
    'skills.items.communication.name': 'Comunicación',
    'skills.items.communication.level': 'Avanzado',
    'skills.items.adaptive.name': 'Aprendizaje adaptativo',
    'skills.items.adaptive.level': 'Avanzado',
    'skills.items.positive.name': 'Actitud positiva',
    'skills.items.positive.level': 'Experta',
    'projects.title': 'Proyectos destacados',
    'projects.portfolio.title': 'Sitio web de portafolio personal',
    'projects.portfolio.description': 'Diseñé un sitio web de portafolio adaptable usando HTML, CSS y JavaScript. Implementé desplazamiento suave y diseño responsivo para una mejor experiencia de usuario.',
    'projects.portfolio.cta': 'Ver proyecto',
    'projects.bellsath.title': 'Sitio web Bellsath',
    'projects.bellsath.description': 'Creé un sitio web responsivo y pulido para Bellsath usando HTML, CSS y JavaScript. Añadí un diseño personalizado, navegación interactiva y una presentación rica de servicios.',
    'projects.bellsath.cta': 'Ver sitio en vivo',
    'education.title': 'Educación',
    'education.college.year': '2025 — Presente',
    'education.college.degree': 'B.Sc. Ciencias de la Computación',
    'education.college.school': 'T.B.M.L College, Porayar',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'Educación Secundaria Superior (12º)',
    'education.higher.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.higher.grade': 'Porcentaje: 67%',
    'education.sslc.degree': 'SSLC (10º)',
    'education.sslc.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.sslc.grade': 'Porcentaje: 60%',
    'contact.title': 'Ponte en contacto',
    'contact.items.phone': 'Teléfono',
    'contact.items.email': 'Correo electrónico',
    'contact.items.location': 'Ubicación',
    'contact.items.linkedin': 'LinkedIn',
    'contact.items.github': 'GitHub',
    'contact.follow': 'Sígueme',
    'contact.languageTitle': 'Idioma del currículum',
    'contact.download': 'Descargar currículum',
    'footer.text': '© 2025 Ashapsha J. Hecho con <i class="fas fa-heart" style="color: var(--primary);"></i> y pasión por la tecnología.'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.education': 'Éducation',
    'nav.contact': 'Contact',
    'hero.badge': 'Maintenant disponible en 7 langues',
    'hero.subtitle': 'Étudiante en informatique • Développeuse',
    'hero.description': 'Étudiante en informatique motivée et travailleuse, avec une forte capacité de résolution de problèmes, un excellent esprit d’équipe et une grande rapidité d’apprentissage. Passionnée par la technologie et l’innovation.',
    'hero.ctaContact': 'Me contacter',
    'hero.ctaProjects': 'Voir les projets',
    'about.title': 'À propos de moi',
    'about.heading': 'Bonjour, je suis Ashapsha J',
    'about.p1': 'Je suis une étudiante dévouée en informatique de Poombuhar, Mayiladuthurai, passionnée par l’apprentissage et l’évolution. Je crois en l’amélioration continue et en une contribution efficace à toute organisation que je rejoins.',
    'about.p2': 'Mon parcours en informatique est guidé par la curiosité et le désir de résoudre des problèmes concrets grâce à la technologie. Je suis toujours prête à apprendre de nouvelles technologies et à les appliquer de manière innovante.',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'Projets',
    'about.stats.learning': 'Années d’apprentissage',
    'skills.title': 'Mes compétences',
    'skills.items.basics.name': 'Bases de l’informatique',
    'skills.items.basics.level': 'Avancé',
    'skills.items.teamwork.name': 'Travail d’équipe',
    'skills.items.teamwork.level': 'Avancé',
    'skills.items.problemSolving.name': 'Résolution de problèmes',
    'skills.items.problemSolving.level': 'Avancé',
    'skills.items.communication.name': 'Communication',
    'skills.items.communication.level': 'Avancé',
    'skills.items.adaptive.name': 'Apprentissage adaptatif',
    'skills.items.adaptive.level': 'Avancé',
    'skills.items.positive.name': 'Attitude positive',
    'skills.items.positive.level': 'Experte',
    'projects.title': 'Projets en vedette',
    'projects.portfolio.title': 'Site web de portfolio personnel',
    'projects.portfolio.description': 'J’ai conçu un site web de portfolio responsive avec HTML, CSS et JavaScript. J’ai mis en place un défilement fluide et une mise en page adaptable pour une expérience utilisateur optimale.',
    'projects.portfolio.cta': 'Voir le projet',
    'projects.bellsath.title': 'Site web Bellsath',
    'projects.bellsath.description': 'J’ai créé un site web responsive et soigné pour Bellsath avec HTML, CSS et JavaScript. J’y ai ajouté une mise en page personnalisée, une navigation interactive et une présentation riche des services.',
    'projects.bellsath.cta': 'Voir le site',
    'education.title': 'Éducation',
    'education.college.year': '2025 — Présent',
    'education.college.degree': 'Licence Informatique',
    'education.college.school': 'T.B.M.L College, Porayar',
    'education.college.grade': 'CGPA : 8.0',
    'education.higher.degree': 'Lycée supérieur (12e)',
    'education.higher.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.higher.grade': 'Pourcentage : 67 %',
    'education.sslc.degree': 'SSLC (10e)',
    'education.sslc.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.sslc.grade': 'Pourcentage : 60 %',
    'contact.title': 'Entrer en contact',
    'contact.items.phone': 'Téléphone',
    'contact.items.email': 'E-mail',
    'contact.items.location': 'Lieu',
    'contact.items.linkedin': 'LinkedIn',
    'contact.items.github': 'GitHub',
    'contact.follow': 'Suivez-moi',
    'contact.languageTitle': 'Langue du CV',
    'contact.download': 'Télécharger le CV',
    'footer.text': '© 2025 Ashapsha J. Réalisé avec <i class="fas fa-heart" style="color: var(--primary);"></i> et passion pour la technologie.'
  },
  de: {
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.education': 'Ausbildung',
    'nav.contact': 'Kontakt',
    'hero.badge': 'Jetzt in 7 Sprachen verfügbar',
    'hero.subtitle': 'Informatikstudentin • Entwicklerin',
    'hero.description': 'Motivierte und fleißige Informatikstudentin mit ausgeprägter Problemlösungskompetenz, sehr guter Teamarbeit und schneller Auffassungsgabe. Begeistert von Technologie und Innovation.',
    'hero.ctaContact': 'Kontakt aufnehmen',
    'hero.ctaProjects': 'Projekte ansehen',
    'about.title': 'Über mich',
    'about.heading': 'Hallo, ich bin Ashapsha J',
    'about.p1': 'Ich bin eine engagierte Informatikstudentin aus Poombuhar, Mayiladuthurai, mit großer Leidenschaft für Lernen und Weiterentwicklung. Ich glaube an kontinuierliche Verbesserung und daran, jeder Organisation, der ich beitrete, einen wertvollen Beitrag zu leisten.',
    'about.p2': 'Mein Weg in der Informatik wird von Neugier und dem Wunsch angetrieben, reale Probleme mit Technologie zu lösen. Ich lerne immer gern neue Technologien und setze sie auf innovative Weise ein.',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'Projekte',
    'about.stats.learning': 'Lernjahre',
    'skills.title': 'Meine Fähigkeiten',
    'skills.items.basics.name': 'Computergrundlagen',
    'skills.items.basics.level': 'Fortgeschritten',
    'skills.items.teamwork.name': 'Teamarbeit',
    'skills.items.teamwork.level': 'Fortgeschritten',
    'skills.items.problemSolving.name': 'Problemlösung',
    'skills.items.problemSolving.level': 'Fortgeschritten',
    'skills.items.communication.name': 'Kommunikation',
    'skills.items.communication.level': 'Fortgeschritten',
    'skills.items.adaptive.name': 'Adaptives Lernen',
    'skills.items.adaptive.level': 'Fortgeschritten',
    'skills.items.positive.name': 'Positive Einstellung',
    'skills.items.positive.level': 'Expertin',
    'projects.title': 'Ausgewählte Projekte',
    'projects.portfolio.title': 'Persönliche Portfolio-Website',
    'projects.portfolio.description': 'Ich habe eine responsive Portfolio-Website mit HTML, CSS und JavaScript gestaltet. Dabei habe ich sanftes Scrollen und ein responsives Layout für eine optimale Benutzererfahrung umgesetzt.',
    'projects.portfolio.cta': 'Projekt ansehen',
    'projects.bellsath.title': 'Bellsath-Website',
    'projects.bellsath.description': 'Ich habe eine moderne responsive Website für Bellsath mit HTML, CSS und JavaScript erstellt. Hinzu kamen ein individuelles Layout, interaktive Navigation und eine ansprechende Darstellung der Leistungen.',
    'projects.bellsath.cta': 'Live-Seite ansehen',
    'education.title': 'Ausbildung',
    'education.college.year': '2025 — Heute',
    'education.college.degree': 'B.Sc. Informatik',
    'education.college.school': 'T.B.M.L College, Porayar',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'Höhere Sekundarstufe (12.)',
    'education.higher.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.higher.grade': 'Prozentsatz: 67 %',
    'education.sslc.degree': 'SSLC (10.)',
    'education.sslc.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.sslc.grade': 'Prozentsatz: 60 %',
    'contact.title': 'Kontakt aufnehmen',
    'contact.items.phone': 'Telefon',
    'contact.items.email': 'E-Mail',
    'contact.items.location': 'Standort',
    'contact.items.linkedin': 'LinkedIn',
    'contact.items.github': 'GitHub',
    'contact.follow': 'Folge mir',
    'contact.languageTitle': 'Lebenslauf-Sprache',
    'contact.download': 'Lebenslauf herunterladen',
    'footer.text': '© 2025 Ashapsha J. Mit <i class="fas fa-heart" style="color: var(--primary);"></i> und Leidenschaft für Technologie erstellt.'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.education': 'التعليم',
    'nav.contact': 'التواصل',
    'hero.badge': 'متوفر الآن بسبع لغات',
    'hero.subtitle': 'طالبة علوم الحاسوب • مطورة',
    'hero.description': 'طالبة علوم حاسوب مجتهدة وطموحة، أمتلك قدرة قوية على حل المشكلات، وروح عمل جماعي ممتازة، وسرعة في التعلم. لدي شغف كبير بالتكنولوجيا والابتكار.',
    'hero.ctaContact': 'تواصل معي',
    'hero.ctaProjects': 'عرض المشاريع',
    'about.title': 'نبذة عني',
    'about.heading': 'مرحبًا، أنا Ashapsha J',
    'about.p1': 'أنا طالبة متفانية في علوم الحاسوب من Poombuhar, Mayiladuthurai، ولدي شغف بالتعلم والتطور. أؤمن بالتحسين المستمر والمساهمة الفعالة في أي مؤسسة أنضم إليها.',
    'about.p2': 'رحلتي في علوم الحاسوب يقودها الفضول والرغبة في حل المشكلات الواقعية باستخدام التكنولوجيا. أنا دائمًا متحمسة لتعلم تقنيات جديدة وتطبيقها بطرق مبتكرة.',
    'about.stats.cgpa': 'CGPA',
    'about.stats.projects': 'المشاريع',
    'about.stats.learning': 'سنوات التعلم',
    'skills.title': 'مهاراتي',
    'skills.items.basics.name': 'أساسيات الحاسوب',
    'skills.items.basics.level': 'متقدم',
    'skills.items.teamwork.name': 'العمل الجماعي',
    'skills.items.teamwork.level': 'متقدم',
    'skills.items.problemSolving.name': 'حل المشكلات',
    'skills.items.problemSolving.level': 'متقدم',
    'skills.items.communication.name': 'التواصل',
    'skills.items.communication.level': 'متقدم',
    'skills.items.adaptive.name': 'التعلم التكيفي',
    'skills.items.adaptive.level': 'متقدم',
    'skills.items.positive.name': 'الطاقة الإيجابية',
    'skills.items.positive.level': 'خبيرة',
    'projects.title': 'المشاريع المميزة',
    'projects.portfolio.title': 'موقع بورتفوليو شخصي',
    'projects.portfolio.description': 'قمت بتصميم موقع بورتفوليو متجاوب باستخدام HTML وCSS وJavaScript، مع تمرير سلس وتخطيط متجاوب لتقديم أفضل تجربة استخدام.',
    'projects.portfolio.cta': 'عرض المشروع',
    'projects.bellsath.title': 'موقع Bellsath',
    'projects.bellsath.description': 'أنشأت موقعًا متجاوبًا واحترافيًا لـ Bellsath باستخدام HTML وCSS وJavaScript، مع تخطيط مخصص وتنقل تفاعلي وعرض غني للخدمات.',
    'projects.bellsath.cta': 'عرض الموقع',
    'education.title': 'التعليم',
    'education.college.year': '2025 — حتى الآن',
    'education.college.degree': 'بكالوريوس علوم الحاسوب',
    'education.college.school': 'T.B.M.L College, Porayar',
    'education.college.grade': 'CGPA: 8.0',
    'education.higher.degree': 'المرحلة الثانوية العليا (12)',
    'education.higher.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.higher.grade': 'النسبة: 67%',
    'education.sslc.degree': 'SSLC (10)',
    'education.sslc.school': 'Srinivasa Hr. Sec. School, Melaiyur',
    'education.sslc.grade': 'النسبة: 60%',
    'contact.title': 'تواصل معي',
    'contact.items.phone': 'الهاتف',
    'contact.items.email': 'البريد الإلكتروني',
    'contact.items.location': 'الموقع',
    'contact.items.linkedin': 'لينكدإن',
    'contact.items.github': 'جيت هب',
    'contact.follow': 'تابعني',
    'contact.languageTitle': 'لغة السيرة الذاتية',
    'contact.download': 'تحميل السيرة الذاتية',
    'footer.text': '© 2025 Ashapsha J. صُنع بـ <i class="fas fa-heart" style="color: var(--primary);"></i> وشغف بالتكنولوجيا.'
  }
};

const certificateTranslations = {
  en: {
    'certificates.title': 'Certificates',
    'certificates.common.view': 'View Certificate',
    'certificates.common.tagCertificate': 'Certificate',
    'certificates.common.name': 'Name',
    'certificates.common.event': 'Event',
    'certificates.common.date': 'Date',
    'certificates.common.issued': 'Issued by',
    'certificates.common.recognition': 'Recognition',
    'certificates.motion.label': 'Workshop Certificate',
    'certificates.motion.title': 'Motion Graphics',
    'certificates.motion.cardTitle': 'Motion Graphics Certificate',
    'certificates.motion.cardDescription': 'Participation certificate for the Motion Graphics workshop held on November 18 and 19, 2023. Click the image to open the full certificate details.',
    'certificates.motion.modalText': 'This certificate confirms that Ashapsha J participated in the Motion Graphics workshop held on November 18 and November 19, 2023.',
    'certificates.motion.event': 'Motion Graphics Workshop',
    'certificates.motion.recognition': 'Certificate of Participation',
    'certificates.motion.tag1': 'Motion Graphics',
    'certificates.motion.tag2': 'Workshop',
    'certificates.internship.label': 'Internship Certificate',
    'certificates.internship.title': 'Essentials Of Modern Computing',
    'certificates.internship.cardTitle': 'Internship Certificate',
    'certificates.internship.cardDescription': 'Internship certificate for Essentials Of Modern Computing completed at A1TECHNOSKILL, Mayiladuthurai. Click the image to open the full certificate details.',
    'certificates.internship.modalText': 'This internship certificate was awarded to Ashap Sha J for completing Essentials Of Modern Computing at A1TECHNOSKILL, Mayiladuthurai.',
    'certificates.internship.event': 'Essentials Of Modern Computing',
    'certificates.internship.recognition': 'Certificate of Internship',
    'certificates.internship.tag1': 'Internship',
    'certificates.internship.tag2': 'Modern Computing'
  },
  es: {
    'certificates.title': 'Certificados',
    'certificates.common.view': 'Ver certificado',
    'certificates.common.tagCertificate': 'Certificado',
    'certificates.common.name': 'Nombre',
    'certificates.common.event': 'Evento',
    'certificates.common.date': 'Fecha',
    'certificates.common.issued': 'Emitido por',
    'certificates.common.recognition': 'Reconocimiento',
    'certificates.motion.label': 'Certificado del taller',
    'certificates.motion.title': 'Gráficos en movimiento',
    'certificates.motion.cardTitle': 'Certificado de Motion Graphics',
    'certificates.motion.cardDescription': 'Certificado de participación del taller de Motion Graphics realizado los días 18 y 19 de noviembre de 2023. Haz clic en la imagen para abrir los detalles completos del certificado.',
    'certificates.motion.modalText': 'Este certificado confirma que Ashapsha J participó en el taller de Motion Graphics realizado el 18 y 19 de noviembre de 2023.',
    'certificates.motion.event': 'Taller de Motion Graphics',
    'certificates.motion.recognition': 'Certificado de participación',
    'certificates.motion.tag1': 'Motion Graphics',
    'certificates.motion.tag2': 'Taller',
    'certificates.internship.label': 'Certificado de prácticas',
    'certificates.internship.title': 'Fundamentos de la Computación Moderna',
    'certificates.internship.cardTitle': 'Certificado de Prácticas',
    'certificates.internship.cardDescription': 'Certificado de prácticas por completar Fundamentos de la Computación Moderna en A1TECHNOSKILL, Mayiladuthurai. Haz clic en la imagen para abrir los detalles completos del certificado.',
    'certificates.internship.modalText': 'Este certificado de prácticas fue otorgado a Ashap Sha J por completar Fundamentos de la Computación Moderna en A1TECHNOSKILL, Mayiladuthurai.',
    'certificates.internship.event': 'Fundamentos de la Computación Moderna',
    'certificates.internship.recognition': 'Certificado de prácticas',
    'certificates.internship.tag1': 'Prácticas',
    'certificates.internship.tag2': 'Computación moderna'
  },
  fr: {
    'certificates.title': 'Certificats',
    'certificates.common.view': 'Voir le certificat',
    'certificates.common.tagCertificate': 'Certificat',
    'certificates.common.name': 'Nom',
    'certificates.common.event': 'Événement',
    'certificates.common.date': 'Date',
    'certificates.common.issued': 'Délivré par',
    'certificates.common.recognition': 'Reconnaissance',
    'certificates.motion.label': 'Certificat d’atelier',
    'certificates.motion.title': 'Motion Graphics',
    'certificates.motion.cardTitle': 'Certificat Motion Graphics',
    'certificates.motion.cardDescription': 'Certificat de participation à l’atelier Motion Graphics tenu les 18 et 19 novembre 2023. Cliquez sur l’image pour ouvrir les détails complets du certificat.',
    'certificates.motion.modalText': 'Ce certificat confirme que Ashapsha J a participé à l’atelier Motion Graphics tenu les 18 et 19 novembre 2023.',
    'certificates.motion.event': 'Atelier Motion Graphics',
    'certificates.motion.recognition': 'Certificat de participation',
    'certificates.motion.tag1': 'Motion Graphics',
    'certificates.motion.tag2': 'Atelier',
    'certificates.internship.label': 'Certificat de stage',
    'certificates.internship.title': 'Fondamentaux de l’informatique moderne',
    'certificates.internship.cardTitle': 'Certificat de stage',
    'certificates.internship.cardDescription': 'Certificat de stage pour avoir complété Fondamentaux de l’informatique moderne à A1TECHNOSKILL, Mayiladuthurai. Cliquez sur l’image pour ouvrir les détails complets du certificat.',
    'certificates.internship.modalText': 'Ce certificat de stage a été décerné à Ashap Sha J pour avoir complété Fondamentaux de l’informatique moderne à A1TECHNOSKILL, Mayiladuthurai.',
    'certificates.internship.event': 'Fondamentaux de l’informatique moderne',
    'certificates.internship.recognition': 'Certificat de stage',
    'certificates.internship.tag1': 'Stage',
    'certificates.internship.tag2': 'Informatique moderne'
  },
  de: {
    'certificates.title': 'Zertifikate',
    'certificates.common.view': 'Zertifikat ansehen',
    'certificates.common.tagCertificate': 'Zertifikat',
    'certificates.common.name': 'Name',
    'certificates.common.event': 'Veranstaltung',
    'certificates.common.date': 'Datum',
    'certificates.common.issued': 'Ausgestellt von',
    'certificates.common.recognition': 'Anerkennung',
    'certificates.motion.label': 'Workshop-Zertifikat',
    'certificates.motion.title': 'Motion Graphics',
    'certificates.motion.cardTitle': 'Motion-Graphics-Zertifikat',
    'certificates.motion.cardDescription': 'Teilnahmezertifikat für den Motion-Graphics-Workshop am 18. und 19. November 2023. Klicke auf das Bild, um die vollständigen Zertifikatsdetails zu öffnen.',
    'certificates.motion.modalText': 'Dieses Zertifikat bestätigt, dass Ashapsha J am Motion-Graphics-Workshop am 18. und 19. November 2023 teilgenommen hat.',
    'certificates.motion.event': 'Motion-Graphics-Workshop',
    'certificates.motion.recognition': 'Teilnahmezertifikat',
    'certificates.motion.tag1': 'Motion Graphics',
    'certificates.motion.tag2': 'Workshop',
    'certificates.internship.label': 'Praktikumszertifikat',
    'certificates.internship.title': 'Grundlagen des modernen Computings',
    'certificates.internship.cardTitle': 'Praktikumszertifikat',
    'certificates.internship.cardDescription': 'Praktikumszertifikat für den Abschluss von Grundlagen des modernen Computings bei A1TECHNOSKILL, Mayiladuthurai. Klicke auf das Bild, um die vollständigen Zertifikatsdetails zu öffnen.',
    'certificates.internship.modalText': 'Dieses Praktikumszertifikat wurde Ashap Sha J für den Abschluss von Grundlagen des modernen Computings bei A1TECHNOSKILL, Mayiladuthurai verliehen.',
    'certificates.internship.event': 'Grundlagen des modernen Computings',
    'certificates.internship.recognition': 'Praktikumszertifikat',
    'certificates.internship.tag1': 'Praktikum',
    'certificates.internship.tag2': 'Modernes Computing'
  },
  ar: {
    'certificates.title': 'الشهادات',
    'certificates.common.view': 'عرض الشهادة',
    'certificates.common.tagCertificate': 'شهادة',
    'certificates.common.name': 'الاسم',
    'certificates.common.event': 'الفعالية',
    'certificates.common.date': 'التاريخ',
    'certificates.common.issued': 'صادرة من',
    'certificates.common.recognition': 'نوع الشهادة',
    'certificates.motion.label': 'شهادة ورشة',
    'certificates.motion.title': 'موشن جرافيكس',
    'certificates.motion.cardTitle': 'شهادة موشن جرافيكس',
    'certificates.motion.cardDescription': 'شهادة مشاركة في ورشة Motion Graphics التي عُقدت يومي 18 و19 نوفمبر 2023. اضغط على الصورة لفتح تفاصيل الشهادة كاملة.',
    'certificates.motion.modalText': 'تؤكد هذه الشهادة أن Ashapsha J شاركت في ورشة Motion Graphics التي عُقدت في 18 و19 نوفمبر 2023.',
    'certificates.motion.event': 'ورشة موشن جرافيكس',
    'certificates.motion.recognition': 'شهادة مشاركة',
    'certificates.motion.tag1': 'موشن جرافيكس',
    'certificates.motion.tag2': 'ورشة',
    'certificates.internship.label': 'شهادة تدريب',
    'certificates.internship.title': 'أساسيات الحوسبة الحديثة',
    'certificates.internship.cardTitle': 'شهادة تدريب',
    'certificates.internship.cardDescription': 'شهادة تدريب لإكمال أساسيات الحوسبة الحديثة في A1TECHNOSKILL, Mayiladuthurai. اضغط على الصورة لفتح تفاصيل الشهادة كاملة.',
    'certificates.internship.modalText': 'تم منح شهادة التدريب هذه إلى Ashap Sha J لإكمال أساسيات الحوسبة الحديثة في A1TECHNOSKILL, Mayiladuthurai.',
    'certificates.internship.event': 'أساسيات الحوسبة الحديثة',
    'certificates.internship.recognition': 'شهادة تدريب',
    'certificates.internship.tag1': 'تدريب',
    'certificates.internship.tag2': 'حوسبة حديثة'
  }
};

Object.entries(certificateTranslations).forEach(([language, values]) => {
  translations[language] = { ...(translations[language] || {}), ...values };
});

const getTranslation = (language, key) => {
  return translations[language]?.[key] ?? translations.en[key] ?? '';
};

const applyTranslations = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

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

const closeMobileMenu = () => {
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  navMenu.classList.remove('nav-open');
};

const openMobileMenu = () => {
  menuToggle.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close navigation menu');
  navMenu.classList.add('nav-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.contains('nav-open');

  if (isOpen) {
    closeMobileMenu();
    return;
  }

  openMobileMenu();
});

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
    closeMobileMenu();
  });
});

const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -12% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const revealGroups = [
  '.stat-card',
  '.skill-card',
  '.certificate-card',
  '.project-card',
  '.education-item',
  '.contact-item',
  '.social-link',
  '.language-panel'
];

revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add('reveal-item');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 110}ms`);
  });
});

requestAnimationFrame(() => {
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .reveal-item').forEach((element) => {
    observer.observe(element);
  });
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

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

document.addEventListener('click', (event) => {
  if (window.innerWidth > 768) {
    return;
  }

  if (!navbar.contains(event.target)) {
    closeMobileMenu();
  }
});

const openCertificateModal = (event) => {
  const trigger = event.currentTarget;

  certificateModalImage.src = trigger.dataset.certificateImage;
  certificateModalImage.alt = trigger.dataset.certificateImageAlt;
  certificateModalLabel.textContent = getTranslation(currentLanguage, trigger.dataset.certificateLabelKey);
  certificateModalTitle.textContent = getTranslation(currentLanguage, trigger.dataset.certificateTitleKey);
  certificateModalText.textContent = getTranslation(currentLanguage, trigger.dataset.certificateTextKey);
  certificateModalName.textContent = trigger.dataset.certificateName;
  certificateModalEvent.textContent = getTranslation(currentLanguage, trigger.dataset.certificateEventKey);
  certificateModalDate.textContent = trigger.dataset.certificateDate;
  certificateModalIssued.textContent = trigger.dataset.certificateIssued;
  certificateModalRecognition.textContent = getTranslation(currentLanguage, trigger.dataset.certificateRecognitionKey);
  certificateModal.classList.add('open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeCertificateModal = () => {
  certificateModal.classList.remove('open');
  certificateModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

certificateOpenButtons.forEach((button) => {
  button.addEventListener('click', openCertificateModal);
});

certificateCloseButtons.forEach((button) => {
  button.addEventListener('click', closeCertificateModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && certificateModal.classList.contains('open')) {
    closeCertificateModal();
  }
});

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
