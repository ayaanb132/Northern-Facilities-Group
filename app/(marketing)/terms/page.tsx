import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service',
  description: 'Terms of service for Northern Facilities Group website and services.',
  pathname: '/terms',
});

export default function TermsPage() {
  return (
    <article className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: February 1, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the {siteConfig.name} website, you agree to be
            bound by these Terms of Service. If you disagree with any part of these
            terms, you may not access our website.
          </p>

          <h2>Services Description</h2>
          <p>
            {siteConfig.name} provides commercial cleaning and facility management
            services. The specific terms of service delivery are outlined in
            individual service agreements with clients.
          </p>

          <h2>Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Infringe the rights of others</li>
            <li>Restrict or inhibit anyone's use of the website</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit harmful code or interfere with website functionality</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The content on this website, including text, graphics, logos, and
            images, is the property of {siteConfig.name} and is protected by
            copyright and other intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our written permission.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without any warranties, express or
            implied. We do not warrant that the website will be uninterrupted,
            error-free, or free of harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.name} shall not be
            liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the website.
          </p>

          <h2>Service Agreements</h2>
          <p>
            These Terms of Service govern your use of our website. Actual cleaning
            and facility management services are governed by separate service
            agreements that detail scope, pricing, and terms specific to each client
            relationship.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {siteConfig.name} and its
            officers, directors, employees, and agents from any claims, damages, or
            expenses arising from your use of the website or violation of these
            terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the Province of Ontario, Canada, without regard to its conflict
            of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We
            will notify users of significant changes by posting the new Terms on
            this page.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: {siteConfig.links.email}</li>
            <li>Phone: {siteConfig.links.phone}</li>
            <li>Address: {siteConfig.links.address}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
