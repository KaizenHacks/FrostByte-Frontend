import {
  navLinks,
  contactEmail,
  eventMeta,
  kaizenHacksMeta,
  communityMeta,
} from '@/lib/constants';
import FrostbyteLogo from '@/components/FrostbyteLogo';

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="0" ry="0" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.55 3.73 1.51 5.27L2 22l4.98-1.59a9.86 9.86 0 005.06 1.41h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 17.8c-1.62 0-3.21-.43-4.61-1.26l-.33-.2-3.41 1.09 1.11-3.32-.22-.35A7.87 7.87 0 014.13 11.9c0-4.36 3.55-7.91 7.91-7.91 2.11 0 4.1.82 5.59 2.31 1.49 1.49 2.31 3.48 2.31 5.59 0 4.36-3.55 7.91-7.9 7.91zm4.33-5.93c-.24-.12-1.41-.7-1.63-.78-.22-.08-.37-.12-.53.12-.16.24-.61.78-.75.94-.14.16-.27.18-.51.06-.24-.12-1.02-.38-1.94-1.21-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.41h-.45c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.41-.58 1.61-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

const verifiedLinks = [
  { platform: 'KaizenHacks Website', href: kaizenHacksMeta.website, icon: GlobeIcon },
  { platform: 'Instagram', href: kaizenHacksMeta.instagram, icon: InstagramIcon },
  { platform: 'LinkedIn', href: kaizenHacksMeta.linkedin, icon: LinkedInIcon },
  { platform: 'GitHub', href: kaizenHacksMeta.github, icon: GitHubIcon },
  { platform: 'WhatsApp Community', href: communityMeta.url, icon: WhatsAppIcon },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#171F2D]/85 backdrop-blur-sm border-t-2 border-[#53647B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand & Organizer */}
          <div>
            <div className="flex items-center gap-3.5">
              <FrostbyteLogo
                variant="footer"
                glow
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-xl sm:text-2xl text-[#F5F7FA]">
                    {eventMeta.name}
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#6D9EFF] shadow-[1px_1px_0_#0D1117]" />
                </div>
                <span className="font-pixel text-[9px] text-[#A5AFBD] tracking-wider uppercase">
                  {eventMeta.attribution}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#A5AFBD] mt-3 leading-relaxed max-w-sm">
              {eventMeta.tagline} {eventMeta.shortDescription}
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {verifiedLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.platform}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.platform}
                    className="p-2.5 bg-[#1C2536] border border-[#53647B] text-[#A5AFBD] hover:text-[#F5F7FA] hover:border-[#6D9EFF] shadow-[2px_2px_0_#0D1117] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Quest Navigation */}
          <div>
            <h3 className="font-pixel text-[11px] text-[#C2E1E8] tracking-widest uppercase mb-4">
              [NAV_INDEX]
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-pixel text-[10px] text-[#A5AFBD] hover:text-[#6D9EFF] uppercase tracking-wider transition-colors inline-block"
                  >
                    &gt; {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#registration"
                  className="font-pixel text-[10px] text-[#6D9EFF] hover:text-[#C2E1E8] uppercase tracking-wider transition-colors inline-block"
                >
                  &gt; Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Command Base */}
          <div>
            <h3 className="font-pixel text-[11px] text-[#C2E1E8] tracking-widest uppercase mb-4">
              [HQ_COMMUNICATION]
            </h3>
            <p className="font-sans text-sm text-[#A5AFBD] mb-2">
              Support, partnerships, and organizer transmissions:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="font-pixel text-xs text-[#6D9EFF] hover:text-[#C2E1E8] transition-colors inline-block break-all"
            >
              {contactEmail}
            </a>

            <div className="mt-4 pt-3 border-t border-[#53647B]/30 space-y-2">
              <a
                href={kaizenHacksMeta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 p-2 bg-[#091F42]/80 border border-[#254B85]/60 hover:border-[#6D9EFF] transition-colors"
                aria-label="KaizenHacks Official Website"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={kaizenHacksMeta.logo}
                  alt="KaizenHacks Official Logo"
                  width="110"
                  height="30"
                  className="h-6 w-auto object-contain"
                />
              </a>
              <p className="font-sans text-xs text-[#53647B]">
                ORGANIZER: <span className="text-[#A5AFBD] font-semibold">{kaizenHacksMeta.attribution}</span>
              </p>
              <p className="font-sans text-xs text-[#53647B]">
                NETWORK: <span className="text-[#A5AFBD]">{kaizenHacksMeta.networkType}</span>
              </p>
              <p className="font-sans text-xs text-[#53647B]">
                COMMUNITY: <a href={communityMeta.url} target="_blank" rel="noopener noreferrer" className="text-[#6D9EFF] hover:underline">WhatsApp Group &rarr;</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#53647B]/40 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-pixel text-[9px] text-[#53647B] tracking-wider">
            &copy; {eventMeta.year} {eventMeta.name} &bull; {eventMeta.attribution}. ALL RIGHTS RESERVED.
          </p>
          <p className="font-pixel text-[9px] text-[#6D9EFF]/70 tracking-widest uppercase">
            GROW TOGETHER. BUILD INDEPENDENTLY. // {kaizenHacksMeta.name.toUpperCase()} {eventMeta.year}
          </p>
        </div>
      </div>
    </footer>
  );
}
