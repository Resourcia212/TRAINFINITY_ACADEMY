export interface GalleryItem {
  id: string;
  title: string;
  category: 'Security Operations' | 'POSH & HR Awareness' | 'Workshops & Seminars' | 'Healthcare & Corporate' | 'CPR & Medical Response';
  image: string;
  caption: string;
  location?: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Training Mandate at Maharashtra Labour Commissionerate",
    category: "Security Operations",
    image: "/images/gallery/maharashtra-govt-labour-commissioner-felicitation.png",
    caption: "Trainfinity Academy receiving official recognition and training mandate at Maharashtra Govt. Labour Commissioner Office (कामगार उप आयुक्त, नाशिक विभाग).",
    location: "Nashik, Maharashtra",
    featured: true
  },
  {
    id: "gal-2",
    title: "100+ Security Guards Training Certification Convocation",
    category: "Security Operations",
    image: "/images/gallery/security-guards-certification-convocation.png",
    caption: "Over one hundred registered security guards in formation holding their official Trainfinity Academy training completion certificates.",
    location: "Training Hall, Maharashtra",
    featured: true
  },
  {
    id: "gal-3",
    title: "Medicover Hospitals Staff & Security Care Training",
    category: "Healthcare & Corporate",
    image: "/images/gallery/medicover-hospitals-healthcare-staff-training.png",
    caption: "On-site patient support etiquette, empathetic communication, and hospital security protocols delivered to healthcare teams.",
    location: "Medicover Hospitals, Nashik",
    featured: true
  },
  {
    id: "gal-4",
    title: "Corporate POSH & Internal Committee Sensitization",
    category: "POSH & HR Awareness",
    image: "/images/gallery/corporate-posh-boardroom-training.png",
    caption: "Interactive executive session on workplace harassment prevention, gender sensitivity, and IC legal compliance under POSH Act 2013.",
    location: "Corporate Boardroom, Maharashtra",
    featured: true
  },
  {
    id: "gal-5",
    title: "Hands-on CPR & Casualty Recovery Practical Drills",
    category: "CPR & Medical Response",
    image: "/images/gallery/cpr-bls-casualty-recovery-drill.png",
    caption: "Security guards paired up for live chest compressions, airway management, and recovery position simulations under trainer supervision.",
    location: "Practical Drill Hall",
    featured: true
  },
  {
    id: "gal-6",
    title: "Parade Ground Security Guard Turnout & Marching Drill",
    category: "Security Operations",
    image: "/images/gallery/outdoor-security-drill-turnout-inspection.png",
    caption: "Squad drill alignment, posture correction, uniform turnout inspection, and physical conditioning on academy drill grounds.",
    location: "Academy Drill Grounds",
    featured: true
  },
  {
    id: "gal-7",
    title: "200+ Uniformed Security Guard Assembly with Academy Leadership",
    category: "Security Operations",
    image: "/images/gallery/mega-batch-security-guards-parade-formation.png",
    caption: "Grand group assembly of over two hundred certified security guards standing in squad formation with Trainfinity academic directors.",
    location: "Training Center, Maharashtra",
    featured: true
  },
  {
    id: "gal-8",
    title: "Mass Oath for Workplace Safety & Operational Discipline",
    category: "POSH & HR Awareness",
    image: "/images/gallery/mass-pledge-workplace-safety-discipline.png",
    caption: "Hundreds of trained guards and leadership team taking a solemn mass oath for workplace safety, vigilance, and institutional honor.",
    location: "Grand Auditorium",
    featured: true
  },
  {
    id: "gal-9",
    title: "Maharashtra Kamgar Kalyan Mandal Safety Seminar",
    category: "Workshops & Seminars",
    image: "/images/gallery/maharashtra-kamgar-kalyan-mandal-workshop.png",
    caption: "Workforce sensitization and industrial safety seminar delivered to registered welfare workers under Maharashtra Kamgar Kalyan Mandal.",
    location: "Nashik, Maharashtra",
    featured: true
  },
  {
    id: "gal-10",
    title: "Auditorium Security Operations & Standard Operating Procedures",
    category: "Security Operations",
    image: "/images/gallery/auditorium-security-personnel-lecture.png",
    caption: "Chief faculty delivering an intensive lecture on gate control, access protocols, and threat escalation to auditorium batches.",
    location: "Nashik Auditorium",
    featured: false
  },
  {
    id: "gal-11",
    title: "Work-Life Balance & Stress Mitigation for Security Guards",
    category: "Workshops & Seminars",
    image: "/images/gallery/security-work-life-balance-seminar.png",
    caption: "Digital multimedia lecture on fatigue management, mental composure, and personal well-being during extended guarding shifts (सुरक्षा रक्षकांसाठी काम-जीवन संतुलन).",
    location: "Auditorium, Nashik",
    featured: false
  },
  {
    id: "gal-12",
    title: "Security Legal Framework & Regulatory Powers Classroom Session",
    category: "Security Operations",
    image: "/images/gallery/security-legal-powers-classroom-session.png",
    caption: "Classroom instruction on statutory private security guard regulations, boundary authority, and reporting hierarchy.",
    location: "Training Hall",
    featured: false
  },
  {
    id: "gal-13",
    title: "High-Capacity Security Orientation & Handbook Study",
    category: "Security Operations",
    image: "/images/gallery/stadium-security-guard-orientation.png",
    caption: "Multi-batch security guard personnel studying comprehensive standard operating procedure handbooks and incident reporting logs.",
    location: "Large Auditorium",
    featured: false
  },
  {
    id: "gal-14",
    title: "Grand Theater Workforce Safety & Professional Development",
    category: "Workshops & Seminars",
    image: "/images/gallery/grand-theater-workforce-training-session.png",
    caption: "Multi-disciplinary training workshop combining safety protocols, emergency awareness, and institutional discipline.",
    location: "Institutional Center",
    featured: false
  },
  {
    id: "gal-15",
    title: "Security Trainee Merit & Certificate Award Ceremony",
    category: "Security Operations",
    image: "/images/gallery/security-officer-merit-felicitation.png",
    caption: "Trainfinity Academy faculty and institutional dignitaries awarding certified training credentials to outstanding security trainees.",
    location: "Nashik",
    featured: false
  },
  {
    id: "gal-16",
    title: "Verbal De-escalation & Public Interaction Drill",
    category: "Workshops & Seminars",
    image: "/images/gallery/verbal-deescalation-public-interaction-drill.png",
    caption: "Interactive scenario practice on resolving visitor conflicts, crowd management, and professional public etiquette.",
    location: "Auditorium",
    featured: false
  },
  {
    id: "gal-17",
    title: "Chief Faculty Masterclass & Behavioral Mentorship",
    category: "Workshops & Seminars",
    image: "/images/gallery/chief-instructor-stage-presentation.png",
    caption: "Lead trainer mentoring security personnel on professional integrity, discipline, and alertness.",
    location: "Auditorium",
    featured: false
  },
  {
    id: "gal-18",
    title: "Emergency First Aid & Cardiac Response Certification",
    category: "CPR & Medical Response",
    image: "/images/gallery/cpr-first-aid-medical-certification-felicitation.png",
    caption: "Security officer receiving specialized medical first responder and CPR certification in partnership with cardiology specialists.",
    location: "Medical Training Wing",
    featured: false
  },
  {
    id: "gal-19",
    title: "Interactive Security Symposium & Field Experience Q&A",
    category: "Workshops & Seminars",
    image: "/images/gallery/auditorium-interactive-security-symposium.png",
    caption: "Live interactive dialogue addressing real-world field situations, incident reporting, and safety challenges.",
    location: "Amphitheater",
    featured: false
  },
  {
    id: "gal-20",
    title: "Security Guard Board Induction & Discipline Protocols",
    category: "Security Operations",
    image: "/images/gallery/security-board-protocol-induction.png",
    caption: "In-depth induction into guard board regulations, patrol schedules, and duty vigilance.",
    location: "Training Hall",
    featured: false
  },
  {
    id: "gal-21",
    title: "Security Guard Trainees Active Case Study Review",
    category: "Security Operations",
    image: "/images/gallery/guard-trainees-interactive-learning.png",
    caption: "Attentive security trainees documenting key action plans for perimeter security and emergency evacuation.",
    location: "Training Auditorium",
    featured: false
  },
  {
    id: "gal-22",
    title: "Workplace Physical Fitness & Wellness for Guards",
    category: "Workshops & Seminars",
    image: "/images/gallery/workplace-fitness-guard-wellness-seminar.png",
    caption: "Practical conditioning, stretching routines, and stamina enhancement techniques for long-duration guarding shifts (कामावर असताना फिटनेस).",
    location: "Shirpur, Maharashtra",
    featured: false
  }
];

export const GALLERY_CATEGORIES = [
  "All",
  "Security Operations",
  "POSH & HR Awareness",
  "Workshops & Seminars",
  "Healthcare & Corporate",
  "CPR & Medical Response"
] as const;
