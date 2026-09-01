export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: 'Security & Safety' | 'Workplace & HRD' | 'Compliance & Law' | 'Emergency & Health' | 'Industry-Specific' | 'Custom Solutions';
  tag: string;
  isCoreExpertise?: boolean;
  shortDescription: string;
  fullOverview: string;
  heroImage: string; // Replace with client's real image when provided
  serviceScope: string[];
  keyModules: {
    title: string;
    description: string;
    topics: string[];
  }[];
  targetAudience: string[];
  deliveryFormats: string[]; // On-site, In-house, Drill Workshop, Certification
  learningOutcomes: string[];
  prerequisites?: string;
  durationOptions: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "security-operations-training",
    slug: "security-operations-training",
    name: "Security & Guard Operations Training",
    category: "Security & Safety",
    tag: "Core Flagship Service",
    isCoreExpertise: true,
    shortDescription: "Comprehensive training for security guards, supervisors, and patrol officers covering discipline, gate management, patrolling, scanning, and incident response.",
    fullOverview: "Security operations training is the foundational flagship service of Trainfinity Academy. Drawing on our direct experience training batches for the Nashik District Security Guard Board, we equip guarding personnel with practical vigilance, metal detection and screening tools operation, access control protocols, and swift emergency action.",
    heroImage: "/images/gallery/mega-batch-security-guards-parade-formation.png",
    durationOptions: "1-Day Refresher, 3-Day Intensive, or 2-Week Induction Batch",
    serviceScope: [
      "Parade discipline, turnout inspection, and professional demeanor",
      "Perimeter defense, physical patrolling, and unlit area checks",
      "Hand-held and door-frame metal detector (HHMD/DFMD) screening",
      "Visitor registration, vehicle inspection, and material gate passes",
      "Incident logging, chain-of-command reporting, and crisis escalation"
    ],
    keyModules: [
      {
        title: "Basic Security Concepts & Code of Conduct",
        description: "Foundational mindset of proactive security, guard responsibilities, and situational alertness.",
        topics: [
          "Roles & responsibilities of on-duty guards",
          "Understanding access control and perimeter integrity",
          "Uniform maintenance, body language, and etiquette"
        ]
      },
      {
        title: "Detection Tools & Scanning Mastery",
        description: "Hands-on calibration and operation of screening gear without physical contact friction.",
        topics: [
          "HHMD body scanning techniques",
          "Door Frame Metal Detector (DFMD) alert protocols",
          "Under-Vehicle Search Mirror (UVSM) deployment",
          "Baggage and package inspection standards"
        ]
      },
      {
        title: "Patrolling Discipline & Incident Management",
        description: "Systematic foot patrols, clocking checkpoints, and real-world breach response.",
        topics: [
          "Silent night patrol techniques and hazard identification",
          "Radio communication & walkie-talkie codes",
          "Handling trespassing, theft attempts, and gate conflicts"
        ]
      }
    ],
    targetAudience: [
      "Security Guards & Patrolling Officers",
      "Head Guards & Shift Supervisors",
      "Facility Security Officers & Gate Staff",
      "Residential Society & Commercial Building Guards"
    ],
    deliveryFormats: [
      "On-site Client Premises Training",
      "Practical Drill Grounds",
      "Multi-Day Induction Programs",
      "Refresher Conditioning Batches"
    ],
    learningOutcomes: [
      "Heightened perimeter security and reduced unauthorized breaches",
      "Polite, assertive communication with visitors and executives",
      "Immediate, coordinated action during fire, medical, or security incidents",
      "Accurate shift logs, register books, and incident documentation"
    ]
  },
  {
    id: "corporate-soft-skills-hrd",
    slug: "corporate-soft-skills-hrd",
    name: "Corporate Soft Skills & HRD Training",
    category: "Workplace & HRD",
    tag: "Workforce Excellence",
    shortDescription: "Elevating professional communication, workplace etiquette, team synergy, conflict resolution, and customer interaction across corporate teams.",
    fullOverview: "Technical competence alone is not enough; organizational success requires effective interpersonal communication and behavioral alignment. Trainfinity Academy's Corporate Soft Skills and Human Resource Development service empowers employees and front-line staff to communicate with confidence, empathy, and professional poise.",
    heroImage: "/images/gallery/corporate-posh-boardroom-training.png",
    durationOptions: "Half-Day Workshop, 1-Day Seminar, or Multi-Week Modular Series",
    serviceScope: [
      "Verbal, non-verbal, and email communication standards",
      "Active listening, empathy, and constructive feedback",
      "Conflict de-escalation and difficult conversation management",
      "Work-life balance, emotional resilience, and stress management",
      "Team collaboration and cross-functional synergy"
    ],
    keyModules: [
      {
        title: "Professional Communication & Etiquette",
        description: "Polishing vocal tone, posture, grooming, and clarity in business interactions.",
        topics: [
          "Clear, articulate verbal communication",
          "Positive body language and listening skills",
          "Professional email and phone etiquette"
        ]
      },
      {
        title: "Conflict Resolution & Customer Care",
        description: "Turning tense moments into positive outcomes through emotional intelligence.",
        topics: [
          "De-escalating aggressive or frustrated clients",
          "Empathetic problem-solving techniques",
          "Managing workplace friction constructively"
        ]
      },
      {
        title: "Team Dynamics & Stress Management",
        description: "Fostering mutual respect, team cohesion, and personal resilience.",
        topics: [
          "Overcoming workplace burnout and shift fatigue",
          "Building inclusive, collaborative teams",
          "Time management and task prioritization"
        ]
      }
    ],
    targetAudience: [
      "Corporate Employees & Executive Teams",
      "Customer Support & Front Desk Representatives",
      "Operational Supervisors & Team Leads",
      "Service & Administrative Staff"
    ],
    deliveryFormats: [
      "Interactive On-site Workshops",
      "In-house Executive Seminars",
      "Scenario Roleplay Masterclasses"
    ],
    learningOutcomes: [
      "Noticeable improvement in client satisfaction scores",
      "Smoother internal coordination with reduced interpersonal friction",
      "Higher team motivation and lower workplace burnout",
      "Dignified, professional representation of your brand"
    ]
  },
  {
    id: "posh-compliance-services",
    slug: "posh-compliance-services",
    name: "POSH Awareness & Legal Compliance Services",
    category: "Compliance & Law",
    tag: "Certified Trainers",
    shortDescription: "Certified POSH training sessions, employee sensitization, Internal Committee (IC) capacity building, and statutory documentation under the POSH Act, 2013.",
    fullOverview: "Conducted by Certified POSH Trainers (including credentials from TruIntel Reform Foundation), Trainfinity Academy provides end-to-end Prevention of Sexual Harassment (POSH) compliance services. We help organizations cultivate a zero-tolerance culture of dignity, clarify legal definitions, and train Internal Committee (IC) members to conduct unbiased, compliant inquiries.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "Half-Day Sensitization Session or Full-Day IC Masterclass",
    serviceScope: [
      "Statutory compliance under the Sexual Harassment of Women at Workplace Act, 2013",
      "Workforce sensitization on acceptable workplace boundaries and consent",
      "Internal Committee (IC) drafting, role clarification, and inquiry procedures",
      "Handling informal conciliation vs. formal inquiry mechanisms",
      "Annual compliance report preparation and documentation guidance"
    ],
    keyModules: [
      {
        title: "Workplace Sensitization & Legal Scope",
        description: "Demystifying what constitutes harassment and building a culture of mutual respect.",
        topics: [
          "Understanding the POSH Act 2013 provisions",
          "Defining inappropriate verbal, physical, and digital conduct",
          "Myths, facts, and gray areas in workplace interactions"
        ]
      },
      {
        title: "Internal Committee (IC) Empowerment",
        description: "Equipping IC members with legal understanding and inquiry methodology.",
        topics: [
          "Step-by-step inquiry timeline and natural justice rules",
          "Confidential documentation and report drafting",
          "Recommending corrective and remedial actions"
        ]
      }
    ],
    targetAudience: [
      "All Organizational Employees & Contract Personnel",
      "Internal Committee (IC) Presiding Officers & Members",
      "Human Resource Managers & Department Heads",
      "Company Directors & Legal Counsels"
    ],
    deliveryFormats: [
      "On-site Organization-wide Sensitization",
      "Dedicated IC Legal Workshops",
      "Leadership Briefing Sessions"
    ],
    learningOutcomes: [
      "100% legal compliance with government POSH mandates",
      "Safe, respectful work culture where employees feel valued and protected",
      "Confident, legally educated Internal Committee ready to address grievances",
      "Protection of institutional reputation and brand trust"
    ]
  },
  {
    id: "pocso-child-safety-services",
    slug: "pocso-child-safety-services",
    name: "POCSO & Institutional Child Safety Services",
    category: "Compliance & Law",
    tag: "Child Welfare",
    shortDescription: "Specialized child safety workshops for schools, coaching institutes, daycare centers, and transport operators under the POCSO Act.",
    fullOverview: "Ensuring child safety across educational campuses, sports complexes, and school transit vehicles requires compassionate, legally grounded training. Trainfinity Academy delivers language-adapted POCSO training that educates staff, drivers, security, and teachers on mandatory reporting, identifying abuse indicators, and safeguarding child welfare.",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "Half-Day Institutional Workshop or Multi-Batch Staff Series",
    serviceScope: [
      "POCSO Act provisions and mandatory legal reporting obligations",
      "Recognizing behavioral indicators and physical signs of child distress",
      "Campus safety audits, blind-spot monitoring, and transport protocols",
      "Language-adapted modules for school bus drivers, conductors, and support staff",
      "Institutional Standard Operating Procedures (SOPs) for child protection"
    ],
    keyModules: [
      {
        title: "Legal Mandates & Duty of Care",
        description: "Understanding the law and the legal responsibility of every staff member.",
        topics: [
          "POCSO Act essentials for educational leadership",
          "Mandatory reporting timelines and legal liabilities for non-reporting",
          "Child-friendly reporting procedures"
        ]
      },
      {
        title: "Campus & Transport Vigilance",
        description: "Practical measures to ensure zero unmonitored blind-spots.",
        topics: [
          "Bus transit rules, pickup/drop safety, and driver codes",
          "Playground, washroom, and corridor supervision rules",
          "Handling disclosures with empathy without causing distress"
        ]
      }
    ],
    targetAudience: [
      "School Principals, Administrators & Teachers",
      "School Bus Drivers & Transport Attendants",
      "Campus Security Guards & Housekeeping Helpers",
      "Sports Coaches & Extracurricular Instructors"
    ],
    deliveryFormats: [
      "Institutional Campus Workshops",
      "Regional Language Sessions (Marathi / Hindi)",
      "Safety SOP Implementation Consultations"
    ],
    learningOutcomes: [
      "Total compliance with national child safeguarding frameworks",
      "Highly alert campus and transit staff protecting children daily",
      "Clear, confidential incident reporting mechanism",
      "Confidence and peace of mind for parents and school management"
    ]
  },
  {
    id: "cpr-bls-emergency-response",
    slug: "cpr-bls-emergency-response",
    name: "CPR, Basic Life Support (BLS) & Medical Emergency Services",
    category: "Emergency & Health",
    tag: "Life Saving Drills",
    shortDescription: "Certified practical training in Cardiopulmonary Resuscitation (CPR), Automated External Defibrillators (AED), and first-response casualty stabilization.",
    fullOverview: "When a sudden cardiac arrest, choking, or traumatic injury occurs in a workplace, immediate action within the first 4 minutes makes the difference between life and death. Trainfinity Academy provides hands-on CPR and BLS training using medical manikins so that your staff can act decisively before paramedics arrive.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "1-Day Practical Intensive or 4-Hour Rapid Certification",
    serviceScope: [
      "High-quality chest compressions and rescue breathing techniques",
      "Automated External Defibrillator (AED) operation and safety rules",
      "Foreign body airway obstruction (Heimlich maneuver) for adults and children",
      "Casualty assessment, recovery position, and vital signs monitoring",
      "Managing syncope (fainting), seizures, severe bleeding, and shock"
    ],
    keyModules: [
      {
        title: "Adult & Pediatric CPR Technique",
        description: "Muscle memory training on compression depth, rate, and recoil.",
        topics: [
          "Assessing scene safety and responsiveness",
          "Correct chest compression placement and 100-120 bpm rhythm",
          "Rescue breathing and barrier device usage"
        ]
      },
      {
        title: "AED Operation & Airway Choking Relief",
        description: "Defibrillator deployment and immediate choking interventions.",
        topics: [
          "Pad placement and voice-prompt following on AED units",
          "Back blows and abdominal thrusts for choking casualties",
          "Recovery position for unconscious breathing victims"
        ]
      }
    ],
    targetAudience: [
      "Emergency Response Teams (ERT) & Floor Marshals",
      "Security Guards & Front-line Facility Staff",
      "Industrial Plant Operators & Safety Officers",
      "Gym Trainers, Teachers, and General Workforce"
    ],
    deliveryFormats: [
      "Hands-on Manikin Training Drills",
      "On-site Emergency Simulation Exercises",
      "ERT Certification Drills"
    ],
    learningOutcomes: [
      "Zero hesitation in stepping forward during medical collapses",
      "Proper execution of high-quality chest compressions and AED use",
      "Lifesaving capability that protects colleagues and visitors",
      "Enhanced institutional occupational health & safety standard"
    ]
  },
  {
    id: "fire-safety-evacuation-drills",
    slug: "fire-safety-evacuation-drills",
    name: "Fire & Safety Drills & Evacuation Services",
    category: "Emergency & Health",
    tag: "Disaster Preparedness",
    shortDescription: "Hands-on fire extinguisher operation (PASS method), hazard audits, orderly building evacuation marshaling, and disaster response.",
    fullOverview: "A workplace fire emergency requires practiced muscle memory rather than panic. Trainfinity Academy's Fire & Safety service combines theoretical understanding of fire chemistry with hands-on extinguisher operation, smoke hazard management, and orderly floor evacuation coordination.",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "Half-Day Practical Drill or Full-Day Disaster Simulation",
    serviceScope: [
      "Fire triangle science and identification of Class A, B, C, D, K fire hazards",
      "Operating fire extinguishers using the P.A.S.S. method (Pull, Aim, Squeeze, Sweep)",
      "Hydrant, hose reel, and fire alarm panel basic awareness",
      "Smoke behavior, crawl techniques, and avoiding toxic inhalation",
      "Designing and executing building-wide mock evacuation drills"
    ],
    keyModules: [
      {
        title: "Fire Hazard Prevention & Extinguisher Mastery",
        description: "Selecting and deploying the correct fire extinguisher instantly.",
        topics: [
          "Water, Foam, CO2, and Dry Powder (DCP) extinguisher usage",
          "P.A.S.S. technique live practice",
          "Electrical and chemical fire precautions"
        ]
      },
      {
        title: "Floor Marshaling & Evacuation Management",
        description: "Coordinating calm, stampede-free exits during alarms.",
        topics: [
          "Designating emergency assembly points and headcount methods",
          "Checking washrooms, server rooms, and blind corners during alarms",
          "Stretcher carrying and assisting mobility-impaired persons"
        ]
      }
    ],
    targetAudience: [
      "Designated Fire Marshals & Wardens",
      "Security Guards & Maintenance Engineers",
      "Factory Floor Workers & Warehouse Crews",
      "Hospital & Hotel Facility Staff"
    ],
    deliveryFormats: [
      "Controlled Fire Extinguisher Drills",
      "Building-wide Evacuation Simulations",
      "Facility Safety Audits & Walkthroughs"
    ],
    learningOutcomes: [
      "Immediate, fearless selection and operation of correct extinguishers",
      "Orderly evacuation without panic, blockages, or confusion",
      "Proactive identification of workplace electrical and combustible hazards",
      "Compliance with local fire safety norms and statutory audit guidelines"
    ]
  },
  {
    id: "hospitality-hotel-staff-training",
    slug: "hospitality-hotel-staff-training",
    name: "Hospitality & Guest Experience Training",
    category: "Industry-Specific",
    tag: "Guest Safety & Polish",
    shortDescription: "Balancing discreet security vigilance with warm guest hospitality, VIP handling, banquet fire safety, and polished customer etiquette.",
    fullOverview: "In hotels and resorts, guest safety must blend seamlessly with warmth, discretion, and luxury service. Trainfinity Academy trains hospitality teams to provide polished guest greeting, discreet observation, and rapid response to kitchen fires or medical situations.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "2-Day Workshop or Ongoing Departmental Refresher",
    serviceScope: [
      "Polished guest greetings, body language, and grooming standards",
      "Discreet security screening at hotel entrance and valet points",
      "Managing intoxicated, noisy, or non-compliant guests politely",
      "Kitchen fire prevention, banquet emergency exits, and medical response"
    ],
    keyModules: [
      {
        title: "Guest-Centric Communication & Grooming",
        description: "Creating five-star first impressions at every touchpoint.",
        topics: [
          "Professional speech, eye contact, and posture",
          "Handling guest requests and special accommodation queries",
          "Cultural sensitivity and international guest etiquette"
        ]
      },
      {
        title: "Discreet Hotel Security & Emergency Readiness",
        description: "Maintaining safety without creating an intrusive atmosphere.",
        topics: [
          "Baggage screening and keycard access discipline",
          "Handling hotel disputes and room disturbance complaints",
          "Rapid banquet and kitchen fire response"
        ]
      }
    ],
    targetAudience: [
      "Front Office & Concierge Staff",
      "Hotel Security & Valet Teams",
      "Food & Beverage Service Staff",
      "Housekeeping & Banquet Crew"
    ],
    deliveryFormats: [
      "On-site Hotel Simulations",
      "Roleplay Sessions",
      "Shift-wise Modular Batches"
    ],
    learningOutcomes: [
      "Flawless first impressions reflecting brand luxury and warmth",
      "High guest safety standards without intrusive screening friction",
      "Rapid resolution of guest disputes with composure",
      "Preparedness for banquet or kitchen emergency situations"
    ]
  },
  {
    id: "healthcare-support-training",
    slug: "healthcare-support-training",
    name: "Healthcare & Patient Care Support Training",
    category: "Industry-Specific",
    tag: "Hospital Readiness",
    shortDescription: "Specialized training for hospital ward boys, security, and receptionists in patient handling, de-escalating grieving relatives, and hospital fire safety.",
    fullOverview: "Hospitals are high-stress environments where non-clinical staff play a pivotal role. Trainfinity Academy equips hospital security, ward attendants, and receptionists with the emotional composure to de-escalate grieving or anxious relatives, assist during Code Red fire situations, and initiate basic life support.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "1-Day or 2-Day Practical Hospital Workshop",
    serviceScope: [
      "De-escalation of agitated or anxious patient relatives during emergencies",
      "Hospital Code Red fire evacuation and non-ambulatory patient movement",
      "Basic Life Support and CPR refresher for auxiliary staff",
      "Patient privacy, respectful communication, and empathy training"
    ],
    keyModules: [
      {
        title: "Empathetic Patient Interaction & Conflict Control",
        description: "Handling high-stress hospital corridors with calmness.",
        topics: [
          "Managing emergency room crowd pressure",
          "Communicating with empathy to grieving families",
          "De-escalating disputes before violence occurs"
        ]
      },
      {
        title: "Hospital Safety Protocols & Life Support",
        description: "Protecting patients and facilities during hospital crises.",
        topics: [
          "Code Red fire evacuation procedures in wards",
          "Assisting doctors during CPR & emergency transport",
          "Infection control and hygiene precautions for support staff"
        ]
      }
    ],
    targetAudience: [
      "Hospital Security Guards & In-charges",
      "Ward Boys, Orderlies & Patient Care Attendants",
      "Reception, Admission & Billing Staff",
      "Ambulance Drivers & Emergency Support Crew"
    ],
    deliveryFormats: [
      "Hospital Ward Walkthroughs",
      "On-site Simulation Exercises",
      "Shift-adjusted Batches"
    ],
    learningOutcomes: [
      "Calm, respectful resolution of tense emergency room conflicts",
      "Rapid evacuation readiness for bed-ridden and ICU patients",
      "Strict compliance with NABH hospital safety standards",
      "Enhanced patient and family trust in hospital support staff"
    ]
  },
  {
    id: "housekeeping-facility-safety",
    slug: "housekeeping-facility-safety",
    name: "Housekeeping & Facility Safety Operations",
    category: "Industry-Specific",
    tag: "Facility Safety",
    shortDescription: "Chemical handling precautions (PPE), slip-and-fall prevention, professional etiquette, and proactive hazard reporting for facility maintenance teams.",
    fullOverview: "Housekeeping and facility staff maintain the cleanliness, hygiene, and daily safety of properties. Trainfinity Academy delivers practical training in regional languages (Marathi/Hindi) covering hazardous chemical handling, personal protective equipment (PPE), slip hazard mitigation, and polite client space etiquette.",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "Half-Day or 1-Day Regional Language Workshop",
    serviceScope: [
      "Safe storage and dilution of industrial cleaning chemicals (MSDS awareness)",
      "Slip-and-fall prevention and mandatory caution sign deployment",
      "Grooming, body language, and respectful conduct in client premises",
      "Active eyes and ears for reporting electrical, water, or structural hazards"
    ],
    keyModules: [
      {
        title: "Chemical Safety & Personal Protection",
        description: "Preventing chemical burns, inhalation hazards, and slips.",
        topics: [
          "Proper use of gloves, masks, and eye protection (PPE)",
          "Chemical dilution guidelines and ventilation precautions",
          "First aid for chemical splash or accidental ingestion"
        ]
      },
      {
        title: "Professional Conduct & Facility Vigilance",
        description: "Instilling pride of work and reporting instincts.",
        topics: [
          "Respectful etiquette in private offices and guest rooms",
          "Reporting suspicious unattended bags or exposed wiring",
          "Waste segregation and hygiene discipline"
        ]
      }
    ],
    targetAudience: [
      "Housekeeping Staff & Janitors",
      "Facility Supervisors & Shift Leads",
      "Commercial Building Maintenance Workers",
      "Industrial Cleaning Teams"
    ],
    deliveryFormats: [
      "On-site Practical Demonstrations",
      "Marathi / Hindi Delivery",
      "Visual Checklist Workbooks"
    ],
    learningOutcomes: [
      "Zero workplace chemical spills or slip-and-fall accidents",
      "Professional demeanor and discreet conduct inside client facilities",
      "Proactive hazard reporting preventing larger building damages",
      "Higher team morale, hygiene discipline, and lower attrition"
    ]
  },
  {
    id: "custom-institutional-solutions",
    slug: "custom-institutional-solutions",
    name: "Custom Institutional Training & Site Audits",
    category: "Custom Solutions",
    tag: "Tailored Programs",
    isCoreExpertise: true,
    shortDescription: "Customized multi-disciplinary training architecture combining security, safety, soft skills, and emergency drills built around your organization's exact SOPs.",
    fullOverview: "Every institution has a unique operational blueprint, workforce demographic, and risk landscape. Trainfinity Academy conducts thorough preliminary walkthroughs to design customized training curricula, mock drill schedules, and assessment frameworks tailored precisely to your organization.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    durationOptions: "Customized according to client scope and shift schedules",
    serviceScope: [
      "Preliminary site walkthrough and vulnerability assessment",
      "Custom curriculum design integrating your organization's specific SOPs",
      "Pre-and-post training competency assessments",
      "Post-training certification, reporting, and reinforcement toolkits"
    ],
    keyModules: [
      {
        title: "Needs Assessment & Curriculum Architecture",
        description: "Designing training that speaks directly to your organization's operational challenges.",
        topics: [
          "Site inspection and risk profiling",
          "Audience literacy and language customization",
          "SOP integration into roleplay simulations"
        ]
      },
      {
        title: "Multi-Tier Training Delivery & Reinforcement",
        description: "Engaging front-line staff, supervisors, and management in synchronized training.",
        topics: [
          "Stratified modules for ground staff and managers",
          "Live emergency mock drill evaluation",
          "Refresher schedule and performance audits"
        ]
      }
    ],
    targetAudience: [
      "Corporate Headquarters & IT Parks",
      "Manufacturing & Industrial Complexes",
      "Universities, Colleges & School Groups",
      "Residential Gated Communities & Large Societies"
    ],
    deliveryFormats: [
      "Bespoke On-site Programs",
      "Blended Workshops & Physical Drills",
      "Annual Training Partnerships"
    ],
    learningOutcomes: [
      "Synchronized readiness across all departments and staff tiers",
      "Seamless alignment with organizational standard operating procedures",
      "Verifiable improvements in discipline, safety, and customer satisfaction",
      "Long-term training partnership with certified faculty"
    ]
  }
];

export const SERVICE_CATEGORIES = [
  "All Services",
  "Security & Safety",
  "Workplace & HRD",
  "Compliance & Law",
  "Emergency & Health",
  "Industry-Specific",
  "Custom Solutions"
] as const;
