import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';

const LOGO_SRC = '/images/logo.svg';
import {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const propertyIcons = {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-foreground">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_SRC}
                alt={siteConfig.name}
                width={280}
                height={140}
                className="h-auto w-full max-w-[200px] object-contain object-left"
              />
            </Link>
            <p className="mt-5 text-[13px] text-foreground/65 leading-relaxed">
              Premium commercial cleaning and facility management services for
              properties across Canada.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center text-[13px] text-foreground/65 hover:text-foreground transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                {siteConfig.links.email}
              </a>
              <a
                href={`tel:${siteConfig.links.phone.replace(/\D/g, '')}`}
                className="flex items-center text-[13px] text-foreground/65 hover:text-foreground transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.links.phone}
              </a>
              <div className="flex items-start text-[13px] text-foreground/65">
                <MapPin className="mr-2 h-4 w-4 mt-0.5 shrink-0" />
                {siteConfig.links.address}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-[12px] uppercase tracking-wider text-foreground/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.propertyTypes.map((property) => {
                const Icon = propertyIcons[property.icon as keyof typeof propertyIcons];
                return (
                  <li key={property.id}>
                    <Link
                      href={`/services/${property.id}`}
                      className="flex items-center text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                    >
                      {Icon && <Icon className="mr-2 h-4 w-4" />}
                      {property.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-[12px] uppercase tracking-wider text-foreground/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/proof"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-[12px] uppercase tracking-wider text-foreground/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/specialty"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Specialty Services
                </Link>
              </li>
              <li>
                <Link
                  href="/get-walkthrough"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Request Walkthrough
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[13px] text-foreground/65 hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-foreground/10">
          <p className="text-[12px] text-foreground/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
