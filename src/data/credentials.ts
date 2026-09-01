export interface CredentialDocument {
  id: string;
  title: string;
  category: 'Official Board Certificate' | 'Trainer Certification';
  issuingAuthority: string;
  recipient: string;
  date: string;
  description: string;
  isAuthentic: boolean;
  imagePath: string;
  details: {
    refNumber?: string;
    keyPoints: string[];
    signatory?: string;
  };
}

export const CREDENTIALS_DOCUMENTS: CredentialDocument[] = [
  {
    id: "nashik-security-board-certificate",
    title: "Nashik District Security Guard Board Training Certificate",
    category: "Official Board Certificate",
    issuingAuthority: "Nashik District Security Guard Board, Nashik (Govt. of Maharashtra Undertaking)",
    recipient: "M/s. Trainfinity Academy, Nashik",
    date: "15 April 2026",
    description: "Official certificate acknowledging Trainfinity Academy for conducting comprehensive training batches for registered security guards of the Nashik District Security Guard Board across multiple training phases.",
    isAuthentic: true,
    imagePath: "/images/credentials/nashik-security-board-certificate.jpg",
    details: {
      refNumber: "जावक क्र. नाजिसुरमं/सूर-प्रशिक्षण/ट्रिफिनिटी/२२६३/२०२६",
      keyPoints: [
        "Conducted training across batches: Dec 2025, Feb-Mar 2026, and April 2026",
        "Covered core security concepts, supervision & patrolling, fire & safety measures",
        "Taught emergency life-saving techniques, first aid, CPR, and POSH awareness",
        "Imparted smart skills, communication etiquette, and work-life balance",
        "Signed by Government Labour Officer & Secretary, Nashik District Security Guard Board"
      ],
      signatory: "M. J. Suryavanshi, Government Labour Officer & Secretary, Nashik District Security Guard Board, Nashik"
    }
  },
  {
    id: "posh-train-the-trainer-certificate",
    title: "POSH Train-the-Trainer Certification",
    category: "Trainer Certification",
    issuingAuthority: "TruIntel Reform Foundation, New Delhi",
    recipient: "Rishikesh Vijay Korde (Trainfinity Academy Faculty)",
    date: "31 July 2026",
    description: "Certified Train-the-Trainer credential under the Prevention of Sexual Harassment at Workplace (POSH Act, 2013), validating faculty expertise in workplace safety and compliance awareness.",
    isAuthentic: true,
    imagePath: "/images/credentials/posh-train-the-trainer-certificate.jpg",
    details: {
      refNumber: "TIR-POSH-5CE9YJ5K",
      keyPoints: [
        "Train-the-Trainer Certification Course on Prevention of Sexual Harassment at Workplace",
        "Structured under the statutory POSH Act, 2013 framework",
        "Recognized by TruIntel Reform Foundation (supported by Startup India / MSME)",
        "Certified National Trainer & Director General endorsement"
      ],
      signatory: "Dr. Himani Verma (National Trainer) & Dr. Suhaib Amin (Director General)"
    }
  }
];
