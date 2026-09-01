export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullOverview: string;
  isCoreExpertise: boolean;
  tag: string;
  iconName: string;
  heroImage: string;
  trainingChallenges: string[];
  recommendedPrograms: string[];
  customizedApproach: string;
  keyBenefits: string[];
  typicalAudience: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: "security",
    slug: "security",
    name: "Security",
    isCoreExpertise: true,
    tag: "Flagship Sector",
    shortDescription: "Security operations, professional conduct, patrolling, scanning, equipment awareness, and reinforcement training.",
    fullOverview: "Security is the core heritage and flagship specialization of Trainfinity Academy. We work closely with private security agencies, facility security teams, and institutional security guards to build a disciplined, alert, and capable protective workforce.",
    iconName: "Shield",
    heroImage: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Monotony leading to lapses in alertness during long shifts",
      "Lack of practical familiarity with modern detection equipment",
      "Poor incident recording and delayed escalation of suspicious activity",
      "Difficulty managing aggressive or non-compliant visitors politely"
    ],
    recommendedPrograms: [
      "Security & Safety Training",
      "Fire & Safety Training",
      "CPR & Basic Life Support (BLS)",
      "Workplace & Soft Skills Training"
    ],
    customizedApproach: "We combine physical parade discipline with practical equipment drills (HHMD, DFMD, baggage inspection), emergency response roleplays, and polite visitor communication coaching.",
    keyBenefits: [
      "Sharper vigilance and zero unauthorized perimeter breaches",
      "Professional demeanor reflecting organizational prestige",
      "Quick first-response to fire, medical, or security incidents",
      "Structured documentation and reporting integrity"
    ],
    typicalAudience: ["Guards", "Patrol Officers", "Gunmen", "Supervisors", "Security In-Charges"]
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    isCoreExpertise: false,
    tag: "Campus & Child Safety",
    shortDescription: "POCSO awareness, child safety, staff awareness, emergency preparedness, and workplace safety.",
    fullOverview: "Educational institutions carry the solemn responsibility of child safety and student welfare. Trainfinity Academy provides specialized training that sensitizes all campus personnel—from teachers and drivers to security and support staff—on child protection, emergency readiness, and respectful campus culture.",
    iconName: "GraduationCap",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Lack of understanding regarding POCSO reporting mandates",
      "Unmonitored campus blind-spots and school bus safety vulnerabilities",
      "Handling sensitive disclosures from students without causing panic",
      "Lack of emergency medical readiness during sports or playground injuries"
    ],
    recommendedPrograms: [
      "POCSO & Child Safety Awareness",
      "POSH Awareness & Compliance",
      "CPR & Basic Life Support (BLS)",
      "Fire & Safety Training"
    ],
    customizedApproach: "Sessions are stratified by audience: compassionate statutory compliance for teachers and management, alongside simple, language-adapted safety guidelines for transport drivers, ayahs, and security guards.",
    keyBenefits: [
      "Full compliance with child safeguarding legal frameworks",
      "Heightened vigilance around buses, playgrounds, and corridors",
      "Safe, supportive environment where students feel protected",
      "Prepared staff capable of responding to sudden playground emergencies"
    ],
    typicalAudience: ["Teachers", "School Administrators", "Bus Drivers & Attendants", "Campus Guards", "Housekeeping Staff"]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare",
    isCoreExpertise: false,
    tag: "Hospital Safety & Life Support",
    shortDescription: "Basic life support, CPR, emergency preparedness, professional communication, and workplace safety.",
    fullOverview: "In hospitals and clinics, high-pressure environments demand flawless emergency coordination and deeply empathetic communication. Trainfinity Academy trains non-clinical and support personnel to maintain hospital safety, manage patient crowds calmly, and assist during clinical emergencies.",
    iconName: "Stethoscope",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Managing anxious and grieving patient relatives during crises",
      "Immediate life support response by ward boys and security before doctors arrive",
      "Hospital fire risks due to oxygen lines, electrical equipment, and chemicals",
      "High turnover among ground support staff"
    ],
    recommendedPrograms: [
      "CPR & Basic Life Support (BLS)",
      "Workplace & Soft Skills Training",
      "Fire & Safety Training",
      "POSH Awareness & Compliance"
    ],
    customizedApproach: "Training emphasizes calm de-escalation of aggressive visitors, Code Red fire evacuation protocols, and rapid CPR initiation by auxiliary hospital staff.",
    keyBenefits: [
      "De-escalated hospital disputes and respectful patient interactions",
      "Enhanced emergency response index across all wards and emergency bays",
      "Strict compliance with NABH hospital safety standards",
      "Empathetic, disciplined auxiliary care teams"
    ],
    typicalAudience: ["Ward Boys & Orderlies", "Hospital Security", "Receptionists & Billing Staff", "Ambulance Drivers"]
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality",
    isCoreExpertise: false,
    tag: "Guest Safety & Excellence",
    shortDescription: "Guest safety, workplace awareness, communication, emergency response, and professional conduct.",
    fullOverview: "In hotels, resorts, and premium venues, guest security must blend seamlessly with warmth and hospitality. Trainfinity Academy trains hospitality teams to provide invisible yet vigilant security, polished communication, and immediate emergency responsiveness.",
    iconName: "UtensilsCrossed",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Balancing welcoming guest hospitality with strict security screening",
      "Discreetly handling intoxicated or disruptive guests without scene creation",
      "Kitchen and kitchen-hood fire hazard prevention",
      "Staff etiquette and gender sensitization across hotel shifts"
    ],
    recommendedPrograms: [
      "Workplace & Soft Skills Training",
      "Security & Safety Training",
      "Fire & Safety Training",
      "POSH Awareness & Compliance"
    ],
    customizedApproach: "We emphasize high-touch grooming, polite gate screening, rapid banquet/kitchen fire drill simulations, and respectful inter-departmental communication.",
    keyBenefits: [
      "Impeccable first impressions at hotel entry and valet points",
      "Uncompromising guest safety without feeling intrusive",
      "Zero-panic fire and medical evacuation readiness",
      "Harmonious workplace relations across hotel staff tiers"
    ],
    typicalAudience: ["Front Office Staff", "Hotel Security Personnel", "Food & Beverage Teams", "Valet & Doormen"]
  },
  {
    id: "housekeeping",
    slug: "housekeeping",
    name: "Housekeeping & Facility",
    isCoreExpertise: false,
    tag: "Facility Safety & Hygiene",
    shortDescription: "Workplace safety, professional conduct, operational awareness, and industry-specific training.",
    fullOverview: "Facility management and housekeeping teams are the daily backbone of any building. Trainfinity Academy equips facility personnel with safety consciousness, chemical handling precautions, professional body language, and proactive hazard reporting.",
    iconName: "Sparkles",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Improper handling of hazardous cleaning chemicals and slip risks",
      "Unintentional security vulnerabilities while cleaning private offices",
      "Lack of professional grooming and interaction etiquette",
      "Ignoring minor electrical or plumbing hazards until they escalate"
    ],
    recommendedPrograms: [
      "Workplace & Soft Skills Training",
      "Fire & Safety Training",
      "POSH Awareness & Compliance",
      "Security & Safety Training"
    ],
    customizedApproach: "Delivered in regional languages (Marathi/Hindi) with practical hands-on demonstrations of chemical safety (PPE), slip-and-fall prevention, and reporting protocols.",
    keyBenefits: [
      "Zero workplace chemical or slip accidents",
      "Discreet, trustworthy, and respectful conduct inside client spaces",
      "Active eyes and ears reporting safety hazards to facility managers",
      "Higher team pride, hygiene discipline, and reduced attrition"
    ],
    typicalAudience: ["Housekeeping Staff", "Facility Janitors", "Floor Supervisors", "Maintenance Technicians"]
  },
  {
    id: "corporate-hr",
    slug: "corporate-hr",
    name: "Corporate / HR",
    isCoreExpertise: false,
    tag: "Workforce & Compliance",
    shortDescription: "Soft skills, HRD, workplace awareness, communication, professional behaviour, and POSH.",
    fullOverview: "Modern corporate enterprises thrive when employees feel safe, respected, and continuously upskilled. Trainfinity Academy partners with HR leaders to deliver high-impact workshops on professional communication, statutory POSH compliance, executive safety, and collaborative workplace culture.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    trainingChallenges: [
      "Navigating POSH compliance and legal accountability for management",
      "Cross-generational communication gaps and workplace friction",
      "Lack of basic emergency CPR awareness among office professionals",
      "Stress, burnout, and declining workplace engagement"
    ],
    recommendedPrograms: [
      "POSH Awareness & Compliance",
      "Workplace & Soft Skills Training",
      "CPR & Basic Life Support (BLS)",
      "Customized Corporate Workshops"
    ],
    customizedApproach: "Tailored to corporate culture with interactive case law studies for IC members, leadership communication frameworks, and corporate wellness initiatives.",
    keyBenefits: [
      "Total statutory compliance under POSH and workplace safety norms",
      "Elevated employee engagement and reduced interpersonal grievances",
      "In-house emergency readiness with certified floor marshals",
      "Stronger employer brand and institutional credibility"
    ],
    typicalAudience: ["Corporate Employees", "HR Professionals", "Team Managers", "Internal Committee (IC) Members"]
  }
];
