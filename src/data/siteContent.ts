export interface ContactInfo {
  academyName: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullFormatted: string;
  };
  phone: {
    display: string;
    tel: string;
  };
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
  workingHours: string;
}

export interface QualitativeHighlight {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'security' | 'custom' | 'compliance';
}

export const ACADEMY_INFO: ContactInfo = {
  academyName: "TRAINFINITY ACADEMY",
  tagline: "Professional Training for Safer, Stronger Workplaces.",
  address: {
    line1: "Flat No. 02, Vatsallydham",
    line2: "Indira Nagar, Opp. Day Care School",
    line3: "Kanifnath Nagar, Near Rajiv Nagar",
    city: "Nashik",
    pincode: "422009",
    state: "Maharashtra",
    country: "India",
    fullFormatted: "Flat No. 02, Vatsallydham, Indira Nagar, Opp. Day Care School, Kanifnath Nagar, Near Rajiv Nagar, Nashik – 422009, Maharashtra, India",
  },
  phone: {
    display: "090110 65099",
    tel: "+919011065099",
  },
  email: "info@trainfinityacademy.com",
  instagram: {
    handle: "@trainfinityacademy",
    url: "https://www.instagram.com/trainfinityacademy",
  },
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
};

export const TRUST_STRIP_ITEMS = [
  { name: "Security Training", icon: "Shield", tag: "Flagship Core" },
  { name: "Safety Training", icon: "Flame", tag: "Essential Drills" },
  { name: "HRD Training", icon: "Users", tag: "People Growth" },
  { name: "Soft Skills", icon: "Sparkles", tag: "Communication" },
  { name: "POSH", icon: "ShieldCheck", tag: "Compliance" },
  { name: "POCSO", icon: "HeartHandshake", tag: "Child Safety" },
  { name: "CPR / BLS", icon: "Activity", tag: "Life Saving" },
  { name: "Fire & Safety", icon: "FlameKindling", tag: "Preparedness" },
];

export const QUALITATIVE_HIGHLIGHTS: QualitativeHighlight[] = [
  {
    title: "Security-Led Expertise",
    subtitle: "Core Domain Foundation",
    description: "Deep practical grounding in operational guarding, patrolling discipline, detection tools, and rapid incident response.",
    iconName: "Shield",
  },
  {
    title: "Industry-Specific Approach",
    subtitle: "Contextual Relevance",
    description: "Content, case scenarios, and practical drills are tailored specifically to the operational realities of each sector.",
    iconName: "Briefcase",
  },
  {
    title: "Practical & Drill-Based",
    subtitle: "Non-Theoretical Readiness",
    description: "Simulations, equipment handling, scenario roleplays, and live exercises that build instinctive muscle memory.",
    iconName: "Zap",
  },
  {
    title: "Customized Programs",
    subtitle: "Tailored to Your Team",
    description: "Flexible modules structured around your organization's shift patterns, risk profile, and team background.",
    iconName: "Sliders",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Environment & Needs Assessment",
    description: "We evaluate your organization's workplace dynamics, team background, operational risks, and precise training objectives.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Contextual Program Architecture",
    description: "Curricula and simulation scenarios are customized with industry-specific examples, language formats, and drill schedules.",
    icon: "PenTool",
  },
  {
    step: "03",
    title: "Train",
    subtitle: "Practical & High-Impact Delivery",
    description: "Interactive on-site or in-house sessions led by certified trainers using real equipment, roleplays, and live demonstrations.",
    icon: "GraduationCap",
  },
  {
    step: "04",
    title: "Reinforce",
    subtitle: "Sustained Readiness & Assessment",
    description: "Post-training evaluation, knowledge checks, practical scenario reviews, and reinforcement toolkits to sustain habits.",
    icon: "TrendingUp",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "Where are Trainfinity Academy's training programs conducted?",
    answer: "We conduct on-site training directly at your premises (corporate offices, industrial plants, schools, hospitals, hotels), in-house sessions, or dedicated workshop formats across Nashik and throughout Maharashtra.",
  },
  {
    id: "faq-2",
    category: "security",
    question: "What makes your Security & Safety training unique?",
    answer: "Unlike theoretical lectures, our security training emphasizes hands-on equipment handling (HHMD, DFMD, X-ray scanning protocols), patrolling methodology, incident reporting, visitor gate management, physical drill reinforcement, and emergency protocols.",
  },
  {
    id: "faq-3",
    category: "compliance",
    question: "Are your POSH and POCSO sessions compliant with statutory requirements?",
    answer: "Yes. Our sessions are conducted by certified trainers (including certified POSH Train-the-Trainer certified faculty) structured under the POSH Act 2013 and POCSO frameworks, focusing on sensitization, internal committee role clarification, and institutional awareness.",
  },
  {
    id: "faq-4",
    category: "custom",
    question: "Can training modules be customized for different workforce skill levels?",
    answer: "Absolutely. We adapt language (Marathi, Hindi, English), pace, and practical examples depending on whether the audience consists of ground security personnel, housekeeping teams, front-desk staff, or senior management.",
  },
  {
    id: "faq-5",
    category: "general",
    question: "How do we get a training proposal for our organization?",
    answer: "You can submit an enquiry via our Contact page or call our team directly at 090110 65099. We will discuss your team size, location, and operational needs to provide a structured training blueprint.",
  },
];
