import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    appointment: "Appointment",
    therapist: "Therapist",
    faq: "FAQ",

    // Home Page
    welcomeHeadline: "Welcome to Kenneth Physio Space",
    welcomeSubtitle: "Your Journey to Recovery and Wellness Starts Here",
    missionTitle: "Our Mission",
    missionText:
      "At Kenneth Physio Space, we are dedicated to providing personalized, evidence-based physical therapy treatments that help you regain strength, mobility, and confidence. Our approach combines traditional rehabilitation techniques with modern exercise therapy to ensure optimal recovery outcomes.",
    servicesTitle: "Our Services",
    service1: "Exercise-Based Therapy",
    service2: "Functional Rehabilitation",
    service3: "Movement Assessment",
    service4: "Injury Prevention",
    bookAppointment: "Book Appointment",
    learnMore: "Learn More",

    // Appointment Page
    appointmentTitle: "Book Your Appointment",
    appointmentSubtitle:
      "Schedule your consultation with our experienced therapist",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    preferredDate: "Preferred Date",
    message: "Message (Optional)",
    messagePlaceholder:
      "Please describe your condition or any specific concerns...",
    submit: "Submit Request",

    // Therapist Page
    therapistTitle: "Meet Your Therapist",
    therapistName: "Kenneth Chiu",
    therapistCredentials: "Licensed Physical Therapist",
    experienceTitle: "Experience & Expertise",
    experienceText:
      "With over 6 years of dedicated experience in physical therapy, Kenneth specializes in exercise-based therapy and functional rehabilitation. His approach focuses on empowering patients through movement, helping them achieve lasting recovery and improved quality of life.",
    specializations: "Specializations",
    spec1: "Exercise-Based Rehabilitation",
    spec2: "Functional Movement Training",
    spec3: "Sports Injury Recovery",
    spec4: "Chronic Pain Management",
    spec5: "Post-Surgical Rehabilitation",

    // FAQ Page
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our services",
    faq1Q: "What should I expect during my first visit?",
    faq1A:
      "During your first visit, we will conduct a comprehensive assessment of your condition, medical history, and movement patterns. This typically takes 60-90 minutes and includes a personalized treatment plan discussion.",
    faq2Q: "How long does each therapy session last?",
    faq2A:
      "Regular therapy sessions typically last 45-60 minutes, depending on your specific treatment plan and needs.",
    faq3Q: "Do you accept insurance?",
    faq3A:
      "We accept most major insurance plans. Please contact us to verify your specific coverage before your appointment.",
    faq4Q: "How should I prepare for my appointment?",
    faq4A:
      "Wear comfortable, loose-fitting clothing that allows easy movement. Bring any relevant medical records, imaging results, and a list of current medications.",
    faq5Q: "How many sessions will I need?",
    faq5A:
      "The number of sessions varies depending on your condition and goals. Most patients see significant improvement within 6-12 sessions, but this will be discussed during your initial assessment.",
    faq6Q: "What conditions do you treat?",
    faq6A:
      "We treat a wide range of conditions including sports injuries, chronic pain, post-surgical rehabilitation, movement disorders, and workplace injuries.",

    // Footer
    contactInfo: "Contact Information",
    address: "Address",
    addressText: "123 Wellness Street, Health District, Taipei 10001",
    clinicHours: "Clinic Hours",
    monday: "Monday - Friday: 9:00 AM - 7:00 PM",
    saturday: "Saturday: 9:00 AM - 5:00 PM",
    sunday: "Sunday: Closed",
    emergencyNote: "For emergencies, please contact your nearest hospital.",
  },
  zh: {
    // Navigation
    home: "首頁",
    appointment: "預約",
    therapist: "治療師介紹",
    faq: "常見問題",

    // Home Page
    welcomeHeadline: "歡迎來到邱閔琮復健空間",
    welcomeSubtitle: "您的康復與健康之旅從這裡開始",
    missionTitle: "我們的使命",
    missionText:
      "在邱閔琮復健空間，我們致力於提供個人化、循證的物理治療，幫助您重獲力量、活動能力和信心。我們的方法結合傳統復健技術與現代運動治療，確保最佳的康復效果。",
    servicesTitle: "我們的服務",
    service1: "運動治療",
    service2: "功能性復健",
    service3: "動作評估",
    service4: "傷害預防",
    bookAppointment: "預約諮詢",
    learnMore: "了解更多",

    // Appointment Page
    appointmentTitle: "預約您的諮詢",
    appointmentSubtitle: "與我們經驗豐富的治療師安排您的諮詢時間",
    name: "姓名",
    email: "電子郵件",
    phone: "電話號碼",
    preferredDate: "希望預約日期",
    message: "留言（選填）",
    messagePlaceholder: "請描述您的狀況或任何特殊需求...",
    submit: "提交預約",

    // Therapist Page
    therapistTitle: "認識您的治療師",
    therapistName: "邱閔琮",
    therapistCredentials: "執業物理治療師",
    experienceTitle: "經驗與專業",
    experienceText:
      "邱閔琮治療師擁有超過6年的物理治療專業經驗，專精於運動治療和功能性復健。他的治療方式著重於透過運動賦能患者，幫助他們達到持久的康復效果並改善生活品質。",
    specializations: "專業領域",
    spec1: "運動復健治療",
    spec2: "功能性動作訓練",
    spec3: "運動傷害復健",
    spec4: "慢性疼痛管理",
    spec5: "術後復健",

    // FAQ Page
    faqTitle: "常見問題",
    faqSubtitle: "找到關於我們服務的常見問題解答",
    faq1Q: "初次就診時我應該期待什麼？",
    faq1A:
      "初次就診時，我們會對您的狀況、病史和動作模式進行全面評估。這通常需要60-90分鐘，包括個人化治療計劃的討論。",
    faq2Q: "每次治療需要多長時間？",
    faq2A: "常規治療通常持續45-60分鐘，具體時間取決於您的治療計劃和需求。",
    faq3Q: "你們接受保險嗎？",
    faq3A:
      "我們接受大多數主要保險計劃。請在預約前聯繫我們確認您的具體保險範圍。",
    faq4Q: "我應該如何準備預約？",
    faq4A:
      "請穿著舒適、寬鬆的衣物以便活動。請攜帶相關病歷、影像檢查結果和目前用藥清單。",
    faq5Q: "我需要多少次治療？",
    faq5A:
      "治療次數因個人狀況和目標而異。大多數患者在6-12次治療後會看到顯著改善，具體情況會在初次評估時討論。",
    faq6Q: "你們治療哪些疾病？",
    faq6A:
      "我們治療各種疾病，包括運動傷害、慢性疼痛、術後復健、動作障礙和職業傷害。",

    // Footer
    contactInfo: "聯絡資訊",
    address: "地址",
    addressText: "台北市健康區康復街123號 10001",
    clinicHours: "診所時間",
    monday: "週一至週五：上午9:00 - 下午7:00",
    saturday: "週六：上午9:00 - 下午5:00",
    sunday: "週日：休診",
    emergencyNote: "如有緊急情況，請聯繫最近的醫院。",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
