import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export const SafetyEmergencySection: React.FC = () => {
  const blocks = [
    {
      id: 'cpr',
      tag: 'Cardiac Response',
      title: 'Cardiopulmonary Resuscitation (CPR)',
      description: 'Hands-on practice on medical manikins for high-quality chest compressions, rescue breathing, and choking relief.',
      icon: <Heart className="w-4 h-4 text-brand-teal" />,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      points: [
        'Adult, child and infant compression techniques',
        'Heimlich maneuver for airway obstruction',
        'Recognizing unconsciousness and syncope'
      ],
      link: '/services/cpr-bls-emergency-response'
    },
    {
      id: 'bls',
      tag: 'Life Support Protocol',
      title: 'Basic Life Support (BLS) & AED',
      description: 'First-responder protocols, AED defibrillator familiarization, recovery positions, and stabilizing casualties before medical transport.',
      icon: <Activity className="w-4 h-4 text-brand-teal" />,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      points: [
        'Automated External Defibrillator (AED) operation',
        'Severe bleeding control and shock management',
        'Coordinating with local emergency medical services'
      ],
      link: '/services/cpr-bls-emergency-response'
    },
    {
      id: 'fire',
      tag: 'Disaster Drills',
      title: 'Basic Fire & Evacuation Safety',
      description: 'Live fire extinguisher operation (PASS method), building evacuation marshaling, and workplace hazard mitigation.',
      icon: <Flame className="w-4 h-4 text-brand-teal" />,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      points: [
        'Operating Class A, B, C, D fire extinguishers',
        'Escape route clearance and assembly point drills',
        'Electrical and chemical fire prevention measures'
      ],
      link: '/services/fire-safety-evacuation-drills'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg-soft border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="EMERGENCY READINESS"
          title="Safety & Emergency Preparedness"
          subtitle="Equipping workforce teams and security guards with the physical skills and mental composure to act decisively during medical crises and fire outbreaks."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {blocks.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-card hover:border-brand-teal/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-navy shadow-xs">
                      {b.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    {b.icon}
                  </div>
                </div>

                {/* Body with crystal-clear contrast */}
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-teal mb-1.5">
                    Hands-on Drill Module
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2 group-hover:text-brand-teal transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {b.description}
                  </p>

                  <div className="space-y-1.5 pt-3.5 border-t border-slate-100">
                    {b.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={b.link}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-deep active:scale-95 transition-all shadow-xs"
                >
                  <span>Explore Drill Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
