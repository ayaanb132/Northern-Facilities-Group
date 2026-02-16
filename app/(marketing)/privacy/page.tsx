import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Northern Facilities Group. How we collect, use, and protect your personal information. PIPEDA compliant.',
  pathname: '/privacy',
});

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">
          Last Updated: February 16, 2026
        </p>

        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-a:underline prose-a:underline-offset-2">
          <h2>Introduction</h2>
          <p>
            Northern Facilities Group Inc. (&quot;NFG,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;Company&quot;) is committed to protecting your privacy and ensuring transparency about how we collect, use, and manage your personal information. This Privacy Policy explains our practices when you visit our website at <strong>northernfacilitiesgroup.ca</strong> (the &quot;Website&quot;), contact us for services, or engage with Northern Facilities Group in any capacity.
          </p>
          <p>
            We comply with all applicable Canadian privacy legislation, including the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and any applicable provincial privacy laws.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Provide Directly</h3>
          <p>We collect personal information only when you voluntarily provide it to us through:</p>

          <p><strong>Contact Forms & Inquiries:</strong></p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Company name and details</li>
            <li>Description of your inquiry or service request</li>
            <li>Any additional information you choose to include</li>
          </ul>

          <p><strong>Service Requests & Walkthroughs:</strong></p>
          <ul>
            <li>Name, email, phone number</li>
            <li>Company name and role</li>
            <li>Property address and type (residential, commercial, apartment building, etc.)</li>
            <li>Square footage, number of floors, specific facility details</li>
            <li>Service frequency and timeline preferences</li>
            <li>Any special requirements or notes</li>
          </ul>

          <p><strong>Quote Requests:</strong></p>
          <ul>
            <li>Email address</li>
            <li>Property details and service type</li>
            <li>Scope of work information</li>
            <li>Preferred pricing structure</li>
          </ul>

          <p><strong>Communication with Us:</strong></p>
          <ul>
            <li>Email correspondence</li>
            <li>Phone call records (if you call us)</li>
            <li>In-person meetings or consultations</li>
            <li>Messages sent through our website or messaging tools</li>
          </ul>

          <p><strong>Employment Applications:</strong></p>
          <ul>
            <li>Resume, cover letter, and contact information</li>
            <li>Work history and references</li>
            <li>Interview notes and assessment results</li>
            <li>Background check information (if applicable, with your consent)</li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <p><strong>Website Usage Data:</strong></p>
          <ul>
            <li>Pages you visit and the order in which you visit them</li>
            <li>Time spent on each page</li>
            <li>Links you click</li>
            <li>Referring website or search terms that led you to us</li>
            <li>Device information: browser type, operating system, device model</li>
            <li>IP address (used for security, rate limiting, and analytics)</li>
            <li>General location data (city/region level, not precise GPS)</li>
          </ul>

          <p><strong>Cookies & Similar Technologies:</strong></p>
          <ul>
            <li>We use cookies to enhance your experience, remember preferences, and analyze how you use our Website</li>
            <li>You can control cookies through your browser settings; opt-out may limit some features</li>
            <li>Third-party analytics tools (Google Analytics, Plausible, or similar) may also use cookies</li>
          </ul>

          <p><strong>Forms & Interactions:</strong></p>
          <ul>
            <li>Hidden fields (honeypots) on forms to detect and prevent spam—do not fill these</li>
            <li>Time and method of form submission</li>
            <li>Any errors or incomplete submissions</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the personal information we collect for the following legitimate purposes:</p>

          <p><strong>Service Delivery:</strong></p>
          <ul>
            <li>Respond to your inquiries, quotes, and service requests</li>
            <li>Schedule walkthroughs, consultations, and site visits</li>
            <li>Provide cleaning and facility management services as contracted</li>
            <li>Send service confirmations, invoices, and scheduling updates</li>
            <li>Handle billing and payment processing</li>
            <li>Manage client relationships and ongoing communication</li>
          </ul>

          <p><strong>Business Operations:</strong></p>
          <ul>
            <li>Evaluate service requests and assess feasibility</li>
            <li>Improve our services, operations, and customer experience</li>
            <li>Maintain records of client interactions and service history</li>
            <li>Conduct market research and gather customer feedback</li>
            <li>Analyze website performance and user behavior</li>
          </ul>

          <p><strong>Marketing & Communications:</strong></p>
          <ul>
            <li>Send promotional content, newsletters, and updates only where you have opted in or where permitted by law</li>
            <li>Communicate about new services, special offers, or company news</li>
            <li>Conduct surveys or request testimonials (with your consent)</li>
          </ul>

          <p><strong>Legal & Safety:</strong></p>
          <ul>
            <li>Comply with Canadian laws, regulations, and legal obligations</li>
            <li>Protect against fraud, abuse, or misuse of our Website or services</li>
            <li>Prevent spam and malicious activity (rate limiting, security measures)</li>
            <li>Defend our legal rights and enforce our agreements</li>
            <li>Respond to lawful requests from government authorities</li>
          </ul>

          <p><strong>Recruitment:</strong></p>
          <ul>
            <li>Review job applications and assess candidate qualifications</li>
            <li>Conduct interviews and background checks</li>
            <li>Maintain records for future opportunities (with your consent)</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p><strong>We do not sell, rent, lease, or trade your personal information to third parties.</strong></p>
          <p>We may share your information only in these specific circumstances:</p>

          <p><strong>Service Providers & Vendors:</strong></p>
          <ul>
            <li>Email delivery platforms (e.g., Resend, SendGrid)</li>
            <li>Website hosting and cloud storage providers</li>
            <li>Payment processors and financial institutions</li>
            <li>Analytics services (Google Analytics, Plausible, etc.)</li>
            <li>Customer relationship management (CRM) systems</li>
            <li>Scheduling and communication tools</li>
          </ul>
          <p>All service providers are contractually obligated to use your information only as necessary, maintain appropriate security, comply with privacy laws, and not disclose your information without authorization.</p>

          <p><strong>Professional Advisors:</strong> Legal counsel, accountants, or business consultants (only information necessary for their role); insurance brokers or regulatory bodies when required by law.</p>

          <p><strong>Legal Requirements & Court Orders:</strong> We may disclose information if required by law, regulation, court order, or government request. Where legally permissible, we will notify you of such disclosures.</p>

          <p><strong>Business Transfers:</strong> If Northern Facilities Group merges, is acquired, or sells assets, your information may be transferred as part of that transaction. We will provide notice of any such change.</p>

          <p><strong>Aggregated & De-Identified Data:</strong> We may share aggregated statistics or de-identified information that cannot reasonably identify you.</p>

          <h2>4. Data Retention</h2>
          <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable law.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-secondary">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Type of Information</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-3 border-t">Contact form inquiries (non-client)</td><td className="px-4 py-3 border-t">12 months</td></tr>
                <tr><td className="px-4 py-3 border-t">Client contact & service records</td><td className="px-4 py-3 border-t">Duration of service + 7 years</td></tr>
                <tr><td className="px-4 py-3 border-t">Payment and billing records</td><td className="px-4 py-3 border-t">7 years (required by law)</td></tr>
                <tr><td className="px-4 py-3 border-t">Employment applications (unsuccessful)</td><td className="px-4 py-3 border-t">12 months</td></tr>
                <tr><td className="px-4 py-3 border-t">Employment records (hired)</td><td className="px-4 py-3 border-t">Duration of employment + 7 years</td></tr>
                <tr><td className="px-4 py-3 border-t">Website analytics data</td><td className="px-4 py-3 border-t">13-26 months</td></tr>
                <tr><td className="px-4 py-3 border-t">Email communications</td><td className="px-4 py-3 border-t">3-7 years</td></tr>
              </tbody>
            </table>
          </div>
          <p>If you request deletion of your information and there is no legal obligation to retain it, we will delete it within 30 days of your request.</p>

          <h2>5. Your Privacy Rights</h2>
          <p>Depending on your location in Canada, you have the following rights:</p>

          <p><strong>5.1 Right to Access:</strong> You may request access to the personal information we hold about you. We will provide this information within 30 days of your request.</p>

          <p><strong>5.2 Right to Correction:</strong> You have the right to request correction of personal information that is inaccurate, incomplete, or outdated. We will update your information and confirm within 30 days.</p>

          <p><strong>5.3 Right to Deletion:</strong> You may request deletion of your personal information, subject to legal obligations to retain certain records (e.g., financial, contract, or tax records). We will confirm deletion within 30 days where applicable.</p>

          <p><strong>5.4 Right to Withdraw Consent:</strong> Where we rely on your consent to process information, you may withdraw that consent at any time.</p>

          <p><strong>5.5 Right to Opt Out of Marketing:</strong> You may opt out by clicking the &quot;unsubscribe&quot; link in any marketing email, contacting us directly, or updating your preferences.</p>

          <p><strong>5.6 Right to Lodge a Complaint:</strong> If you believe we have violated your privacy rights, you may file a complaint with the <strong>Office of the Privacy Commissioner of Canada</strong> (www.priv.gc.ca or 1-800-282-1376) or your Provincial Privacy Authority.</p>

          <h2>6. Data Security</h2>
          <p>We implement reasonable technical and organizational safeguards, including:</p>
          <ul>
            <li>Secure HTTPS encryption for data transmission</li>
            <li>Secure password protection for account access</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Firewalls and intrusion detection systems</li>
            <li>Secure storage of data in Canada-based servers</li>
            <li>Limited access to personal information (need-to-know basis)</li>
            <li>Employee training on privacy and data protection</li>
          </ul>
          <p>No method of transmission or storage over the Internet is 100% secure. In the event of a data breach that poses a risk to your privacy, we will notify you and relevant authorities as required by law.</p>

          <h2>7. Cookies & Tracking Technologies</h2>
          <p>
            Cookies are small text files stored on your device. We use <strong>Essential Cookies</strong> (required for functionality), <strong>Analytics Cookies</strong> (for understanding usage), and <strong>Marketing Cookies</strong> (only where you have consented). You can control cookies through your browser settings. Third-party services (Google Analytics, Plausible, etc.) may place their own cookies—review their privacy policies.
          </p>

          <h2>8. Third-Party Links & Services</h2>
          <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Review their privacy policies before providing personal information.</p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>Our Website and services are not directed at children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe a child has provided information to us, please contact us immediately.</p>

          <h2>10. International Data Transfers</h2>
          <p>Your information may be processed or stored in Canada or in other countries where our service providers operate. By using our Website or services, you consent to such transfer. We ensure appropriate safeguards for international transfers and comply with PIPEDA.</p>

          <h2>11. Updates to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new &quot;Last Updated&quot; date. Continued use of our Website after changes constitutes acceptance. If you disagree with any changes, you may opt out of services or request deletion of your information.</p>

          <h2>12. Contact Us</h2>
          <p>For questions, concerns, or requests regarding your privacy or this Privacy Policy:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@northernfacilitiesgroup.ca">privacy@northernfacilitiesgroup.ca</a></li>
            <li><strong>Phone:</strong> {siteConfig.links.phone}</li>
            <li><strong>Mailing Address:</strong> Northern Facilities Group Inc., 30 Eglinton Ave W, Mississauga, ON L5R 3E7, Canada</li>
          </ul>
          <p>We aim to respond to all privacy inquiries within <strong>30 days</strong>. For complex requests, we may require up to 60 days.</p>

          <h2>13. Additional Information for Residents in Specific Provinces</h2>
          <p><strong>Quebec Residents:</strong> Law 25 (Privacy Law) may apply in addition to PIPEDA. You may have additional rights. Contact us for details.</p>
          <p><strong>British Columbia Residents:</strong> The Personal Information Protection Act (PIPA) may apply. Contact us if you have questions about your rights under PIPA.</p>

          <h2>14. Data Protection Officer</h2>
          <p>Northern Facilities Group has designated a Data Protection Lead for privacy matters. Contact: <a href="mailto:privacy@northernfacilitiesgroup.ca">privacy@northernfacilitiesgroup.ca</a></p>

          <p className="mt-12 text-muted-foreground italic">
            This Privacy Policy is part of our commitment to transparency and respecting your privacy rights. Thank you for trusting Northern Facilities Group with your information.
          </p>
        </div>
      </div>
    </article>
  );
}
