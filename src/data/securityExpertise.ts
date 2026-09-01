export interface SecurityPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  iconName: string;
}

export interface ProgressionStage {
  stepNumber: number;
  stageName: string;
  phase: string;
  focus: string;
  details: string;
}

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    number: "01",
    title: "Basic Security Concepts",
    subtitle: "Foundations of Vigilance",
    description: "Instilling the foundational mindset of proactive security, guard code of conduct, situational awareness, and perimeter protection principles.",
    topics: [
      "Role & responsibilities of security personnel",
      "Perimeter security & access control basics",
      "Visitor and vehicle entry-exit logging",
      "Observation techniques and recognizing anomalies"
    ],
    iconName: "Shield",
  },
  {
    number: "02",
    title: "Security Equipment Operation",
    subtitle: "Modern Detection Tools",
    description: "Hands-on calibration and operational mastery of handheld metal detectors (HHMD), door frame detectors (DFMD), baggage scanners, and communication sets.",
    topics: [
      "Correct body frisking with HHMD without physical contact",
      "Door Frame Metal Detector (DFMD) calibration and alert response",
      "Walkie-talkie & two-way radio communication codes",
      "Basic understanding of CCTV angle blind-spots"
    ],
    iconName: "Radio",
  },
  {
    number: "03",
    title: "Systematic Patrolling",
    subtitle: "Active Perimeter Defense",
    description: "Training in randomized patrol schedules, identifying unlit or vulnerable boundary points, clocking patrol checkpoints, and prompt reporting.",
    topics: [
      "Foot patrol discipline and silent inspection methods",
      "Checking locks, seals, emergency exits, and lighting",
      "Patrol baton handling and personal protection posture",
      "Night shift vigilance and anti-fatigue techniques"
    ],
    iconName: "Footprints",
  },
  {
    number: "04",
    title: "Scanning & Detection",
    subtitle: "Threat Identification",
    description: "Deep screening protocols for incoming bags, parcels, and vehicle trunks to intercept contraband, unauthorized materials, or hazardous goods.",
    topics: [
      "Baggage screening protocols and physical check techniques",
      "Under-vehicle search mirror (UVSM) deployment",
      "Identification of concealed sharp objects or prohibited items",
      "Chain of custody and impounding protocol"
    ],
    iconName: "Scan",
  },
  {
    number: "05",
    title: "Security Guard Training",
    subtitle: "Field Discipline & Posture",
    description: "Physical turnout, uniform standards, polite yet firm communication, shift handover discipline, and emergency alarm response.",
    topics: [
      "Turnout, uniform inspection, and posture maintenance",
      "Polite communication with visitors and executives",
      "Gate register maintenance & material in/out gate passes",
      "Fire alarm and intrusion alarm initial response"
    ],
    iconName: "UserCheck",
  },
  {
    number: "06",
    title: "Security Reinforcement",
    subtitle: "Sustained Operational Readiness",
    description: "Periodic refresher drills, surprise simulation audits, incident roleplays, and continuous physical fitness conditioning.",
    topics: [
      "Surprise mock breach simulations",
      "Crowd control and peaceful de-escalation drills",
      "Post-incident reporting and evidentiary logging",
      "Refresher physical fitness and parade drill reinforcement"
    ],
    iconName: "RefreshCw",
  },
];

export const PROGRESSION_TIMELINE: ProgressionStage[] = [
  {
    stepNumber: 1,
    stageName: "FOUNDATION",
    phase: "Phase 1: Mindset & Protocol",
    focus: "Basic Security Concepts & Code of Conduct",
    details: "Instilling security ethics, alertness, discipline, and understanding of legal boundaries and organizational safety mandates.",
  },
  {
    stepNumber: 2,
    stageName: "EQUIPMENT",
    phase: "Phase 2: Tool Mastery",
    focus: "Hands-on Detection & Communication Tech",
    details: "Extensive hands-on practice with HHMD, DFMD, walkie-talkies, and understanding scanner alerts.",
  },
  {
    stepNumber: 3,
    stageName: "PATROLLING",
    phase: "Phase 3: Perimeter Defense",
    focus: "Patrol Routines & Vulnerability Auditing",
    details: "Walking perimeters, checking critical points, managing night shifts, and maintaining continuous radio checks.",
  },
  {
    stepNumber: 4,
    stageName: "SCANNING",
    phase: "Phase 4: Threat Interception",
    focus: "Vehicle & Baggage Screening Protocols",
    details: "Under-vehicle inspection, visitor luggage verification, and handling prohibited or suspicious items.",
  },
  {
    stepNumber: 5,
    stageName: "REINFORCEMENT",
    phase: "Phase 5: Scenario Drills",
    focus: "Mock Breach Drills & Conflict De-escalation",
    details: "Live simulations of trespassing, unruly visitors, medical collapse, and fire emergencies to build muscle memory.",
  },
  {
    stepNumber: 6,
    stageName: "FIELD READINESS",
    phase: "Phase 6: Deployment Ready",
    focus: "Independent Vigilance & Posture",
    details: "Final assessment and field certification, ready to maintain order, safety, and institutional trust.",
  },
];
