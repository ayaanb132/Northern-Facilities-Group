import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for Northern Facilities Group website and services.',
  pathname: '/privacy',
});

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: February 7, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <h2>Introduction</h2>
          <p>
            {siteConfig.name} (“{siteConfig.shortName},” “we,” “our,” or “us”) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website at{' '}
            <a href={siteConfig.url} className="text-primary underline underline-offset-2">
              {siteConfig.url.replace(/^https?:\/\//, '')}
            </a>{' '}
            or use our commercial cleaning and facility management services in Canada.
            We comply with applicable Canadian privacy laws, including the Personal
            Information Protection and Electronic Documents Act (PIPEDA) where it applies.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            We collect personal information that you voluntarily provide when you:
          </p>
          <ul>
            <li>Submit our <strong>contact form</strong> (name, email, phone, subject, message)</li>
            <li>Request a <strong>walkthrough</strong> (name, email, phone, company, property type, square footage, and any message you include)</li>
            <li>Request a <strong>quote</strong> (email, property type, service tier)</li>
            <li>Subscribe to communications (if offered)</li>
            <li>Communicate with us by email, phone, or in person</li>
          </ul>
          <p>
            We use hidden fields (e.g. honeypots) on forms to reduce spam. Do not fill
            those in; they are not used for any purpose other than spam detection.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you use our website, we may automatically collect:
          </p>
          <ul>
            <li><strong>Usage data:</strong> pages visited, time on site, referring URL</li>
            <li><strong>Technical data:</strong> browser type, device type, operating system</li>
            <li><strong>IP address:</strong> used temporarily for security (e.g. rate limiting form submissions) and for analytics when analytics tools are enabled</li>
          </ul>

          <h3>Analytics and Cookies</h3>
          <p>
            We may use analytics services (such as Google Analytics or Plausible) to
            understand how visitors use our site. These may use cookies or similar
            technologies and collect anonymized or pseudonymized usage data. You can
            control cookies through your browser settings; some site features may not
            work fully if you disable cookies.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to inquiries and contact or walkthrough requests</li>
            <li>Provide quotes, proposals, and our cleaning and facility management services</li>
            <li>Send service-related communications (e.g. confirmations, scheduling)</li>
            <li>Send marketing or promotional communications only where you have agreed or where permitted by law</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Protect against abuse (e.g. rate limiting, spam prevention)</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h2>Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information. We may share your
            information only in these circumstances:
          </p>
          <ul>
            <li><strong>Service providers:</strong> e.g. email delivery (Resend), hosting, or analytics providers, under contracts that protect your information</li>
            <li><strong>Professional advisors:</strong> lawyers, accountants, or insurers when necessary for our operations</li>
            <li><strong>Legal requirements:</strong> when required by law, court order, or government authority, or to protect our rights and safety</li>
          </ul>
          <p>
            We may disclose aggregated or de-identified information that cannot reasonably be used to identify you.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep your personal information only as long as needed for the purposes
            described in this policy, or as required by law. For example, we may retain
            contact and inquiry information for a reasonable period to respond to
            follow-ups and to maintain records of our business relationship. You may
            ask us to delete your information subject to legal and contractual
            requirements.
          </p>

          <h2>Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your
            personal information (e.g. secure transmission, access controls, and
            secure storage). No method of transmission or storage over the Internet
            is completely secure; we cannot guarantee absolute security.
          </p>

          <h2>Your Rights (Including Canadian Rights)</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li><strong>Access:</strong> request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> request deletion of your information, subject to legal and contractual obligations</li>
            <li><strong>Withdraw consent:</strong> where we rely on consent, you may withdraw it at any time</li>
            <li><strong>Opt out of marketing:</strong> unsubscribe from marketing emails using the link in our messages or by contacting us</li>
          </ul>
          <p>
            To exercise these rights, contact us using the details below. If you are
            in Canada and are not satisfied with our response, you may have the right
            to lodge a complaint with the Office of the Privacy Commissioner of Canada
            or your provincial privacy authority, as applicable.
          </p>

          <h2>Children</h2>
          <p>
            Our website and services are not directed at children under the age of 13
            (or higher where required by law). We do not knowingly collect personal
            information from children. If you believe we have collected such
            information, please contact us and we will take steps to delete it.
          </p>

          <h2>International Transfer</h2>
          <p>
            Your information may be processed or stored in Canada or in other
            countries where our service providers operate. By using our website or
            services, you consent to such transfer. We ensure appropriate safeguards
            where required by applicable law.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the
            updated policy on this page and change the “Last updated” date. We
            encourage you to review this page periodically. Continued use of our
            website or services after changes constitutes acceptance of the updated
            policy where permitted by law.
          </p>

          <h2>Contact Us</h2>
          <p>
            For privacy-related questions, access requests, or complaints, contact us:
          </p>
          <ul>
            <li><strong>Email:</strong>{' '}
              <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline underline-offset-2">
                {siteConfig.links.email}
              </a>
            </li>
            <li><strong>Phone:</strong> {siteConfig.links.phone}</li>
            <li><strong>Address:</strong> {siteConfig.links.address}</li>
          </ul>
          <p>
            We will respond to legitimate requests within the timeframes required by
            applicable law.
          </p>
        </div>
      </div>
    </article>
  );
}
