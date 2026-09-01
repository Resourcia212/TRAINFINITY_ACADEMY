import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import {
  Phone,
  MapPin,
  Instagram,
  Send,
  Clock,
  Mail,
  ShieldCheck,
  User,
  Building2,
  ChevronDown,
  Layers,
  Calendar,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ACADEMY_INFO } from '@/data/siteContent';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  organization: z.string().optional(),
  serviceCategory: z.string().min(1, { message: 'Please select a category' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid 10-digit phone number' })
    .regex(/^[0-9+\s-]{10,15}$/, { message: 'Please enter a valid phone number' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .or(z.literal('')),
  serviceRequirement: z.string().min(1, { message: 'Please select a specific training service' }),
  preferredFormat: z.string().min(1, { message: 'Please select a delivery format' }),
  message: z.string().min(10, { message: 'Please provide details about your team and requirements (at least 10 characters)' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedProgram = searchParams.get('program') || '';
  const preSelectedService = searchParams.get('service') || '';
  const initialService = preSelectedService || preSelectedProgram || 'Security & Guard Operations Training';

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      organization: '',
      serviceCategory: 'Security & Safety',
      phone: '',
      email: '',
      serviceRequirement: initialService,
      preferredFormat: 'On-site at Client Facility',
      message: '',
    },
  });

  useEffect(() => {
    if (preSelectedService) {
      setValue('serviceRequirement', preSelectedService);
    } else if (preSelectedProgram) {
      setValue('serviceRequirement', preSelectedProgram);
    }
  }, [preSelectedService, preSelectedProgram, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log('Training Service Enquiry Submitted:', data);

    toast.success('Training Service Enquiry Received', {
      description: 'Thank you. A Trainfinity Academy training coordinator will contact you shortly to structure your customized blueprint.',
      duration: 5000,
    });

    reset();
  };

  const serviceOptions = [
    'Security & Guard Operations Training',
    'Corporate Soft Skills & HRD Training',
    'POSH Awareness & Legal Compliance Services',
    'POCSO & Institutional Child Safety Services',
    'CPR, Basic Life Support (BLS) & Medical Emergency',
    'Fire & Safety Drills & Evacuation Services',
    'Hospitality & Guest Experience Training',
    'Healthcare & Patient Care Support Training',
    'Housekeeping & Facility Safety Operations',
    'Custom Institutional Training & Site Audits',
    'Other Specialized Training Requirement',
  ];

  const categoryOptions = [
    'Security & Safety',
    'Workplace & HRD',
    'Compliance & Law',
    'Emergency & Health',
    'Industry-Specific Training',
    'Custom Institutional Solutions',
  ];

  const formatOptions = [
    'On-site at Client Facility',
    'In-house Academy Facility',
    'Practical Drill Grounds',
    'Customized Multi-Location Schedule',
  ];

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Contact & Service Enquiry' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
            <span>Institutional & Corporate Inquiries</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-brand-navy tracking-tight leading-[1.2] mb-3">
            Let's Discuss Your Training Needs.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Reach out to discuss specialized training services, on-site drill scheduling, batch requirements, or statutory compliance workshops across Maharashtra.
          </p>
        </div>

        {/* Perfectly Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-stretch">
          {/* Left Column: Academy Contact Details & Commitment Panel (Full Height) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Primary Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-brand-bg-soft border border-slate-200/90 shadow-2xs space-y-6 flex-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-teal block mb-1">
                  Head Office & Academy
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy">
                  TRAINFINITY ACADEMY
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-teal border border-slate-200 shrink-0 shadow-2xs mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-navy block text-xs uppercase tracking-wider">
                      Office Location
                    </span>
                    <p className="text-slate-600 leading-relaxed mt-0.5 font-normal text-xs sm:text-sm">
                      {ACADEMY_INFO.address.line1},<br />
                      {ACADEMY_INFO.address.line2},<br />
                      {ACADEMY_INFO.address.line3},<br />
                      {ACADEMY_INFO.address.city} – {ACADEMY_INFO.address.pincode}, {ACADEMY_INFO.address.state}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-teal border border-slate-200 shrink-0 shadow-2xs">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-navy block text-xs uppercase tracking-wider">
                      Direct Coordinator Line
                    </span>
                    <a
                      href={`tel:${ACADEMY_INFO.phone.tel}`}
                      className="text-brand-navy font-bold text-sm sm:text-base hover:text-brand-teal transition-colors mt-0.5 inline-block"
                    >
                      {ACADEMY_INFO.phone.display}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-teal border border-slate-200 shrink-0 shadow-2xs">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-navy block text-xs uppercase tracking-wider">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${ACADEMY_INFO.email}`}
                      className="text-slate-600 hover:text-brand-teal transition-colors mt-0.5 inline-block text-xs sm:text-sm font-medium"
                    >
                      {ACADEMY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-teal border border-slate-200 shrink-0 shadow-2xs">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-navy block text-xs uppercase tracking-wider">
                      Operational Hours
                    </span>
                    <span className="text-slate-600 mt-0.5 block text-xs sm:text-sm">{ACADEMY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Engagement Highlights */}
              <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-brand-teal shrink-0" />
                  <span><strong>Fast Response:</strong> Inquiry acknowledgement within 4 business hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileCheck className="w-4 h-4 text-brand-teal shrink-0" />
                  <span><strong>Custom SOP Blueprint:</strong> Tailored training scope built for your facility</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span><strong>Maharashtra Coverage:</strong> On-site delivery across Nashik, Pune, Mumbai & MMR</span>
                </div>
              </div>
            </div>

            {/* Instagram Social Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-brand-navy text-white flex items-center justify-between border border-slate-800 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-pink-400 border border-white/15 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-300 block uppercase font-bold tracking-wider">Follow On Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {ACADEMY_INFO.instagram.handle}
                  </span>
                </div>
              </div>

              <a
                href={ACADEMY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* Right Column: Executive Proposal Request Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-card relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Subtle top decorative border accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal-bright" />

              <div>
                {/* Form Title */}
                <div className="mb-7 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-brand-teal" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                      Proposal Request
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                    Training Service Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Submit your requirement details and our academic director will prepare a tailored proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Patil"
                        {...register('fullName')}
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm bg-slate-50/70 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all shadow-2xs ${
                          errors.fullName
                            ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                            : 'border-slate-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Organization & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Organization / Institution
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          placeholder="e.g. Acme Industries Ltd / Society"
                          {...register('organization')}
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/70 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Category Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Service Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          {...register('serviceCategory')}
                          className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/70 text-slate-800 appearance-none focus:outline-none focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs cursor-pointer font-medium"
                        >
                          {categoryOptions.map((cat) => (
                            <option key={cat} value={cat} className="py-2 text-slate-800 bg-white">
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          placeholder="e.g. 090110 65099"
                          {...register('phone')}
                          className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm bg-slate-50/70 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all shadow-2xs ${
                            errors.phone
                              ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          placeholder="e.g. contact@organization.com"
                          {...register('email')}
                          className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm bg-slate-50/70 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all shadow-2xs ${
                            errors.email
                              ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Specific Service Selected & Delivery Format */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selected Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Service Blueprint <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register('serviceRequirement')}
                          className="w-full px-3.5 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/70 text-slate-800 appearance-none focus:outline-none focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs cursor-pointer font-medium"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="py-2 text-slate-800 bg-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.serviceRequirement && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">
                          {errors.serviceRequirement.message}
                        </p>
                      )}
                    </div>

                    {/* Preferred Delivery Format */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Preferred Delivery Mode
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <select
                          {...register('preferredFormat')}
                          className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/70 text-slate-800 appearance-none focus:outline-none focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-2xs cursor-pointer font-medium"
                        >
                          {formatOptions.map((fmt) => (
                            <option key={fmt} value={fmt} className="py-2 text-slate-800 bg-white">
                              {fmt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Message / Batch Size & Location Details <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-3.5 text-slate-400 pointer-events-none">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Specify your audience roles, approximate number of trainees, location in Maharashtra, and preferred training dates..."
                        {...register('message')}
                        className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm bg-slate-50/70 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all shadow-2xs leading-relaxed ${
                          errors.message
                            ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                            : 'border-slate-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-bold shadow-md hover:bg-brand-navy-deep active:scale-[0.99] transition-all disabled:opacity-70 cursor-pointer group mt-2"
                  >
                    <Send className="w-4 h-4 text-brand-teal-bright group-hover:translate-x-0.5 transition-transform" />
                    <span>{isSubmitting ? 'Submitting Service Enquiry...' : 'Submit Service Enquiry'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
