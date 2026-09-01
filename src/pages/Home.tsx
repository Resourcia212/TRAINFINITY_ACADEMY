import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { AboutSection } from '@/components/sections/AboutSection';
import { TrainingServices } from '@/components/sections/TrainingServices';
import { SecurityExpertiseSection } from '@/components/sections/SecurityExpertiseSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CustomizedTrainingSection } from '@/components/sections/CustomizedTrainingSection';
import { PoshPocsoSection } from '@/components/sections/PoshPocsoSection';
import { SafetyEmergencySection } from '@/components/sections/SafetyEmergencySection';
import { WhyTrainfinitySection } from '@/components/sections/WhyTrainfinitySection';
import { TrainingProcessSection } from '@/components/sections/TrainingProcessSection';
import { CredentialsPreviewSection } from '@/components/sections/CredentialsPreviewSection';
import { GalleryPreviewSection } from '@/components/sections/GalleryPreviewSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <TrainingServices />
      <SecurityExpertiseSection />
      <ServicesSection />
      <CustomizedTrainingSection />
      <PoshPocsoSection />
      <SafetyEmergencySection />
      <WhyTrainfinitySection />
      <TrainingProcessSection />
      <CredentialsPreviewSection />
      <GalleryPreviewSection />
      <FinalCTASection />
    </div>
  );
};
