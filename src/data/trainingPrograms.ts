export interface TrainingProgram {
  id: string;
  slug: string;
  title: string;
  category: 'Security' | 'Workplace' | 'Compliance' | 'Emergency' | 'Custom';
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  tag: string;
  iconName: string;
  image: string;
  duration: string;
  targetAudience: string[];
  keyTopics: string[];
  learningOutcomes: string[];
  methodology: string[];
  relatedIndustries: string[];
}

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "security-and-safety",
    slug: "security-and-safety",
    title: "Security & Safety Training",
    category: "Security",
    featured: true,
    tag: "Core Flagship Expertise",
    shortDescription: "Comprehensive operational readiness covering basic security concepts, guard drills, scanning & equipment handling, patrolling discipline, and rapid incident response.",
    fullDescription: "Security & Safety training is the foundational cornerstone of Trainfinity Academy. Built from extensive practical experience conducting training for security personnel across Maharashtra, this program transforms security forces from passive observers into disciplined, alert, and proactive protectors of premises, assets, and human lives.",
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
    duration: "Flexible Modular (1 Day to 3 Weeks intensive batches)",
    targetAudience: [
      "Security Guards and Patrol Officers",
      "Head Guards and Security Supervisors",
      "Facility Security Managers",
      "Commercial & Industrial Gate Staff",
      "Residential Society Security Personnel"
    ],
    keyTopics: [
      "Basic Security Concepts & Guard Responsibilities",
      "Security Equipment Operation (HHMD, DFMD, X-ray scanning)",
      "Systematic Patrolling Methods & Vigilance Techniques",
      "Access Control, Gate Registering & Material Movement",
      "Conflict De-escalation & Professional Conduct",
      "Emergency Evacuation & First-Response Coordination",
      "Security Reinforcement Drills & Physical Posture"
    ],
    learningOutcomes: [
      "Mastery of security equipment operation and baggage scanning vigilance",
      "Heightened situational awareness and perimeter breach detection",
      "Professional demeanor, smart communication, and conflict mitigation",
      "Rapid, synchronized reaction during security breaches or emergencies",
      "Detailed incident logging, report generation, and chain-of-command escalation"
    ],
    methodology: [
      "Hands-on equipment simulation and live screening drills",
      "Perimeter patrolling walkthroughs and blind-spot identification",
      "Real-world conflict roleplaying with de-escalation coaching",
      "Daily discipline drills and physical readiness exercises"
    ],
    relatedIndustries: ["Security", "Corporate / HR", "Hospitality", "Healthcare", "Education", "Housekeeping"]
  },
  {
    id: "workplace-soft-skills",
    slug: "workplace-soft-skills",
    title: "Workplace & Soft Skills Training",
    category: "Workplace",
    featured: false,
    tag: "People & Team Growth",
    shortDescription: "Enhancing professional etiquette, communication clarity, customer interaction, emotional balance, and team collaboration across all workforce levels.",
    fullDescription: "Technical capability must be backed by interpersonal competence. Trainfinity Academy's Workplace & Soft Skills programs bridge communication gaps, instill professional conduct, and empower team members to represent their organization with dignity, empathy, and clarity.",
    iconName: "Users",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    duration: "1 to 3 Days interactive workshop",
    targetAudience: [
      "Front-line Service & Front-Desk Teams",
      "Field Supervisors & Team Leads",
      "Administrative and Operational Staff",
      "Customer-Facing Staff across Industries"
    ],
    keyTopics: [
      "Professional Workplace Communication & Tone",
      "Body Language, Grooming & First Impressions",
      "Active Listening & Empathic Customer Service",
      "Conflict Resolution & De-escalating Frustrated Visitors",
      "Work-Life Balance & Stress Management on the Job",
      "Team Coordination & Cross-Functional Respect"
    ],
    learningOutcomes: [
      "Confident, polite, and articulate verbal & non-verbal interaction",
      "Reduced workplace interpersonal friction and improved team cohesion",
      "Enhanced visitor and customer experience at organizational touchpoints",
      "Constructive handling of pressure and workplace challenges"
    ],
    methodology: [
      "Interactive roleplays and situational scenario handling",
      "Video feedback and posture/expression refinement",
      "Group discussions, empathy mapping, and team exercises"
    ],
    relatedIndustries: ["Corporate / HR", "Hospitality", "Healthcare", "Education", "Housekeeping"]
  },
  {
    id: "posh-workplace-awareness",
    slug: "posh-workplace-awareness",
    title: "POSH Awareness & Compliance",
    category: "Compliance",
    featured: false,
    tag: "Workplace Dignity & Law",
    shortDescription: "Sensitization and compliance workshops under the POSH Act 2013, fostering safe, respectful, and harassment-free work environments.",
    fullDescription: "Conducted by certified POSH trainers, Trainfinity Academy delivers comprehensive Prevention of Sexual Harassment (POSH) training. We clarify statutory frameworks, educate employees on behavioral boundaries, and empower Internal Committees (IC) to conduct fair, legally sound inquiries.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    duration: "Half-Day / Full-Day Certification Sessions",
    targetAudience: [
      "All Employees & Contract Staff",
      "Internal Committee (IC) Members",
      "HR Managers & People Leaders",
      "Supervisors & Department Heads"
    ],
    keyTopics: [
      "Understanding the POSH Act 2013 & Legal Mandates",
      "Defining Workplace Sexual Harassment with Nuanced Examples",
      "Red Flags, Inappropriate Conduct & Digital Communications",
      "Rights, Responsibilities & Complaint Redressal Mechanisms",
      "Role, Powers, and In-depth Process for Internal Committees (IC)",
      "Building a Culture of Zero Tolerance and Mutual Respect"
    ],
    learningOutcomes: [
      "Clear employee awareness of unacceptable conduct and boundaries",
      "Confidence among staff in reporting channels without fear of retaliation",
      "Fully compliant, legally educated Internal Committee members",
      "Protection of organizational reputation and institutional trust"
    ],
    methodology: [
      "Case study analysis of real workplace scenarios",
      "Interactive Q&A clarifying gray areas and myths",
      "IC inquiry simulation and documentation best-practices"
    ],
    relatedIndustries: ["Corporate / HR", "Education", "Healthcare", "Hospitality", "Security"]
  },
  {
    id: "pocso-child-safety",
    slug: "pocso-child-safety",
    title: "POCSO & Child Safety Awareness",
    category: "Compliance",
    featured: false,
    tag: "Child Protection & Responsibility",
    shortDescription: "Specialized training for educational institutions, transport staff, and child-care facilities on POCSO guidelines, vigilance, and child safety protocols.",
    fullDescription: "Protecting children requires vigilant, trained adults across school campuses, sports complexes, and childcare environments. Trainfinity Academy provides compassionate, non-sensational, and legally grounded POCSO (Protection of Children from Sexual Offences) training for teachers, administrative staff, drivers, security, and caregivers.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    duration: "Half-Day / Full-Day Institutional Workshops",
    targetAudience: [
      "School Teachers & Academic Administrators",
      "School Bus Drivers & Transport Attendants",
      "Campus Security & Housekeeping Staff",
      "Sports Coaches & Extracurricular Mentors"
    ],
    keyTopics: [
      "Key Provisions of the POCSO Act & Mandatory Reporting Duties",
      "Recognizing Behavioral Indicators and Signs of Distress in Children",
      "Safe Touch vs. Unsafe Touch Education Guidelines",
      "Campus & Transport Safety Protocols and Blind-spot Vigilance",
      "Institutional Crisis Response & Handling Disclosures Responsibly",
      "Staff Conduct Guidelines and Child Safeguarding Codes"
    ],
    learningOutcomes: [
      "Empowered staff capable of identifying and reporting child distress early",
      "Transparent child-safe operational protocols across campus touchpoints",
      "Full compliance with mandatory child protection reporting standards",
      "Peace of mind for parents and institutional leadership"
    ],
    methodology: [
      "Sensitive, scenario-based institutional discussions",
      "Language-adapted modules for support staff (drivers, security, helpers)",
      "Standard Operating Procedure (SOP) walkthroughs and incident checklists"
    ],
    relatedIndustries: ["Education", "Security", "Hospitality"]
  },
  {
    id: "cpr-basic-life-support",
    slug: "cpr-basic-life-support",
    title: "CPR & Basic Life Support (BLS)",
    category: "Emergency",
    featured: false,
    tag: "Critical Life-Saving Skills",
    shortDescription: "Hands-on life support and emergency response training covering high-quality CPR, choking relief, recovery position, and automated external defibrillator (AED) awareness.",
    fullDescription: "In sudden cardiac arrest or choking emergencies, minutes decide survival. Trainfinity Academy delivers practical CPR & Basic Life Support training that empowers ordinary employees, security guards, and staff to step forward confidently and sustain life until professional medical assistance arrives.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    duration: "1 Day Practical Certification Drill",
    targetAudience: [
      "Emergency Response Teams (ERT)",
      "Security Guards & Facility Management Staff",
      "School & College Physical Education Staff",
      "Industrial Floor Marshals & Safety Officers",
      "General Corporate Workforce"
    ],
    keyTopics: [
      "Recognizing Cardiac Arrest & Assessing Responsiveness",
      "Adult, Child & Infant CPR Technique (Compression & Ventilation)",
      "Automated External Defibrillator (AED) Familiarization & Safety",
      "Choking Relief (Heimlich Maneuver) for Adults and Children",
      "Recovery Position for Unconscious Breathing Casualties",
      "Managing Shock, Bleeding, and Syncope (Fainting)"
    ],
    learningOutcomes: [
      "Confidence to perform chest compressions with correct depth and rate",
      "Seamless coordination during on-premise medical crises",
      "Immediate life support capability before ambulance arrival",
      "Enhanced workplace health & safety readiness index"
    ],
    methodology: [
      "Repetitive practice on CPR training manikins",
      "Live time-pressured emergency simulation drills",
      "Individual technique correction and physical rhythm calibration"
    ],
    relatedIndustries: ["Healthcare", "Security", "Corporate / HR", "Hospitality", "Education"]
  },
  {
    id: "fire-and-safety",
    slug: "fire-and-safety",
    title: "Fire & Safety Training",
    category: "Emergency",
    featured: false,
    tag: "Disaster & Fire Preparedness",
    shortDescription: "Practical fire hazard identification, fire extinguisher operation (PASS), orderly building evacuation drills, and industrial safety protocols.",
    fullDescription: "A fire outbreak requires calm, systematic action, not panic. Trainfinity Academy's Fire & Safety training equips personnel with practical understanding of fire chemistry, hands-on extinguisher operation, smoke hazard management, and safe evacuation execution.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    duration: "Half-Day to Full-Day Drill & Mock Evacuation",
    targetAudience: [
      "Designated Fire Wardens & Floor Marshals",
      "Security and Maintenance Crews",
      "Manufacturing & Warehouse Workforce",
      "Hotel & Hospital Facility Staff"
    ],
    keyTopics: [
      "Fire Triangle, Classes of Fire (A, B, C, D, K) & Extinguisher Types",
      "Operating Fire Extinguishers using the P.A.S.S. Method",
      "Smoke Behavior, Hazard Recognition & Safe Movement in Smoke",
      "Hose Reel, Hydrant System Awareness & Assembly Point Protocols",
      "Designing and Executing Rapid Building Evacuation Drills",
      "Basic Electrical & Chemical Fire Prevention Safeguards"
    ],
    learningOutcomes: [
      "Immediate, fearless selection and operation of correct extinguishers",
      "Flawless evacuation marshalling without stampedes or blockages",
      "Proactive reporting of electrical and combustible fire hazards",
      "Compliance with facility safety protocols and audit standards"
    ],
    methodology: [
      "Controlled live fire suppression practice (where permitted/demonstrated)",
      "Emergency staircase and escape route mock drills",
      "Equipment inspection checklists and maintenance audits"
    ],
    relatedIndustries: ["Security", "Housekeeping", "Hospitality", "Healthcare", "Corporate / HR"]
  }
];
