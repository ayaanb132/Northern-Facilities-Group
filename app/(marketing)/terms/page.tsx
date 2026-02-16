import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service',
  description:
    'Terms of service for Northern Facilities Group website and commercial cleaning services. Ontario law applies.',
  pathname: '/terms',
});

export default function TermsPage() {
  return (
    <article className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-12">
          Last Updated: February 16, 2026
        </p>

        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-a:underline prose-a:underline-offset-2">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing, browsing, or using the Northern Facilities Group website at <strong>northernfacilitiesgroup.ca</strong> (the &quot;Website&quot;), or by requesting or using our cleaning and facility management services (collectively, &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Agreement&quot;).
          </p>
          <p>
            <strong>If you do not agree to any part of these terms, you must immediately discontinue use of the Website and refrain from requesting our Services.</strong>
          </p>
          <p>
            These Terms, along with our Privacy Policy, constitute the entire agreement between you and Northern Facilities Group Inc. (&quot;NFG,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of our Website.
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>&quot;Website&quot;</strong> means northernfacilitiesgroup.ca and all associated pages, subdomains, and content</li>
            <li><strong>&quot;Services&quot;</strong> means commercial cleaning, facility management, and related services provided by NFG</li>
            <li><strong>&quot;Client&quot;</strong> means any individual, business, or organization requesting or receiving Services from NFG</li>
            <li><strong>&quot;Content&quot;</strong> means all text, graphics, images, logos, videos, and other materials on our Website</li>
            <li><strong>&quot;Personal Information&quot;</strong> means information that identifies you personally (see our Privacy Policy)</li>
            <li><strong>&quot;Service Agreement&quot;</strong> means any signed or digitally accepted contract between you and NFG detailing specific service delivery terms</li>
          </ul>

          <h2>3. Use of Website</h2>
          <h3>3.1 License Grant</h3>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Website for lawful purposes only. This license does not permit you to:</p>
          <ul>
            <li>Reproduce, distribute, publish, or display any Content without our written permission</li>
            <li>Modify or create derivative works based on our Content</li>
            <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            <li>Use our Website for commercial purposes (except as an authorized client receiving Services)</li>
            <li>Access our Website through automated means (bots, scrapers, etc.) without permission</li>
          </ul>

          <h3>3.2 Acceptable Use</h3>
          <p>You agree to use our Website and Services only for lawful purposes and in a manner that does not violate any applicable Canadian federal, provincial, or local laws; infringe upon the rights of others; restrict anyone else&apos;s use; transmit malicious code; attempt unauthorized access; impersonate any person or entity; engage in harassment or abuse; or spam.</p>

          <h3>3.3 Prohibited Activities</h3>
          <p>Specifically prohibited: hacking, phishing, bypassing security measures, collecting user data for marketing without consent, reverse-engineering, creating false accounts, facilitating illegal activity, or unauthorized vulnerability testing. We reserve the right to immediately terminate your access for violations.</p>

          <h2>4. Website Content & Intellectual Property</h2>
          <p>All Content on our Website is the exclusive property of Northern Facilities Group Inc. or licensed to us. Content is protected by copyright, trademark, and trade secret law. You may download, print, or save reasonable portions for personal, non-commercial use only. Without our written permission, you may not sell, license, distribute, or use our logos or branding. &quot;Northern Facilities Group&quot; and our logo are trademarks of Northern Facilities Group Inc.</p>

          <h2>5. Disclaimers & Limitations of Warranty</h2>
          <p><strong>Our Website is provided on an &quot;AS-IS&quot; and &quot;AS AVAILABLE&quot; basis without any warranties, express or implied.</strong> We make no representations regarding accuracy, fitness for a particular purpose, non-infringement, or quality. We do not warrant uninterrupted, error-free, or virus-free operation. We are not responsible for third-party content, links, or external websites. For actual cleaning and facility management Services, service terms are outlined in your specific Service Agreement.</p>

          <h2>6. Limitation of Liability</h2>
          <p><strong>To the fullest extent permitted by Canadian law, Northern Facilities Group shall not be liable for indirect, incidental, consequential, special, or punitive damages</strong>—including loss of profits, revenue, data, business opportunities, or business interruption.</p>
          <p><strong>In no case shall our total liability to you exceed the amount you paid us for Services in the 12 months preceding the claim, or $1,000 CAD, whichever is greater.</strong></p>
          <p>Nothing in this Agreement shall exclude or limit our liability for gross negligence, willful misconduct, death or personal injury caused by our negligence, fraud, or as otherwise prohibited by law.</p>

          <h2>7. Service Agreements & Actual Service Delivery</h2>
          <p><strong>These Website Terms govern your use of our Website only.</strong> If you engage NFG for cleaning or facility management services, delivery is governed by a separate written or digital Service Agreement specifying scope, pricing, schedule, term, quality standards, and insurance. That agreement supersedes conflicting provisions herein. We are not responsible for damage to personal property unless caused by our gross negligence. Access must be provided as scheduled; missed access may incur fees. We are not liable for disruptions due to circumstances beyond our control.</p>

          <h2>8. Your Responsibilities as a Client</h2>
          <p>If you engage NFG for Services, you agree to: provide safe access at scheduled times; disclose hazards; remove or secure valuables; provide accurate property information; pay invoices by the due date; comply with your Service Agreement and all applicable laws.</p>

          <h2>9. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless Northern Facilities Group Inc., its officers, directors, employees, agents, and partners from any claims, demands, losses, damages, or expenses arising from your use of our Website or Services, your violation of this Agreement, your violation of any law, your infringement of third-party rights, or your negligent or wrongful conduct.</p>

          <h2>10. Disclaimers Regarding Third-Party Services</h2>
          <p>We do not endorse, warrant, or assume responsibility for the accuracy, quality, legality, or safety of third-party products, services, or websites. Your use of third-party services is subject to their terms and policies.</p>

          <h2>11. User-Generated Content & Feedback</h2>
          <p>We have no obligation to display user-generated content and may remove any content at our sole discretion. If you provide feedback, testimonials, or reviews, you grant NFG a worldwide, royalty-free, perpetual license to use, reproduce, and display such content in marketing and promotional contexts. You are solely responsible for content you provide and warrant that you own or have rights to it.</p>

          <h2>12. Modifications to Terms & Website</h2>
          <p>We reserve the right to modify these Terms at any time. Changes are effective upon posting. Continued use constitutes acceptance. We may modify, update, or discontinue Website features, remove Content, change pricing, or suspend access for maintenance or security reasons.</p>

          <h2>13. Termination & Suspension</h2>
          <p>You may discontinue use at any time. If you have an active Service Agreement, termination may be subject to notice periods and fees. We may terminate or suspend your access without notice if you violate this Agreement, engage in illegal or harmful activity, or fail to comply with payment obligations. Upon termination, your license is revoked and you must cease all use.</p>

          <h2>14. Governing Law & Dispute Resolution</h2>
          <p>This Agreement shall be governed by the laws of the <strong>Province of Ontario, Canada</strong>. You and NFG consent to the exclusive jurisdiction of the courts of Ontario. Before pursuing legal action, contact us at (855) 664-1144 or legal@northernfacilitiesgroup.ca and allow 30 days for response. Any legal action must be commenced within <strong>2 years</strong> of the cause of action or it will be permanently barred.</p>

          <h2>15. Severability</h2>
          <p>If any provision is found invalid or unenforceable, that provision shall be severed and the remaining provisions shall continue in full force and effect.</p>

          <h2>16. Entire Agreement</h2>
          <p>This Agreement, along with our Privacy Policy and any applicable Service Agreement, constitutes the entire agreement between you and Northern Facilities Group. It supersedes all prior agreements, representations, and communications. No employee or agent has authority to modify this Agreement orally.</p>

          <h2>17. Waiver</h2>
          <p>Our failure to enforce any provision does not constitute a waiver. No waiver is effective unless in writing and signed by our authorized representative.</p>

          <h2>18. Assignment</h2>
          <p>You may not assign your rights or obligations without our prior written consent. We may assign this Agreement to any successor or affiliate without notice.</p>

          <h2>19. Contact Information</h2>
          <p>For questions, concerns, or notices regarding these Terms of Service:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:legal@northernfacilitiesgroup.ca">legal@northernfacilitiesgroup.ca</a></li>
            <li><strong>Phone:</strong> {siteConfig.links.phone}</li>
            <li><strong>Mailing Address:</strong> Northern Facilities Group Inc., 30 Eglinton Ave W, Mississauga, ON L5R 3E7, Canada</li>
          </ul>
          <p>We will respond to inquiries within <strong>5-10 business days</strong>.</p>

          <h2>20. Additional Provisions</h2>
          <p><strong>Survival:</strong> Sections regarding Intellectual Property, Indemnification, Limitation of Liability, and Governing Law survive termination.</p>
          <p><strong>Force Majeure:</strong> We are not liable for failure or delay due to circumstances beyond our reasonable control (natural disasters, pandemics, severe weather, government actions, etc.).</p>
          <p><strong>No Partnership:</strong> Nothing in this Agreement creates a partnership, joint venture, or agency relationship. You are not authorized to bind us.</p>

          <h2>21. Acknowledgment</h2>
          <p><strong>By accessing our Website or requesting our Services, you acknowledge that:</strong></p>
          <ul>
            <li>You have read and understand this Agreement</li>
            <li>You agree to be bound by all terms and conditions</li>
            <li>You have the authority to enter into this Agreement</li>
            <li>You will comply with all applicable laws</li>
            <li>You understand our limitation of liability provisions</li>
          </ul>

          <div className="mt-12 p-6 rounded-xl bg-secondary/50 border border-border">
            <h3 className="text-lg font-semibold mb-4">Quick Reference</h3>
            <p><strong>Need help?</strong></p>
            <ul>
              <li><strong>Website Issues:</strong> support@northernfacilitiesgroup.ca</li>
              <li><strong>Service Questions:</strong> {siteConfig.links.phone}</li>
              <li><strong>Legal/Privacy:</strong> legal@northernfacilitiesgroup.ca</li>
            </ul>
            <p className="mt-4"><strong>Important pages:</strong></p>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <p className="mt-12 text-muted-foreground italic">
            Northern Facilities Group Inc. reserves all rights not expressly granted in this Agreement.
          </p>
        </div>
      </div>
    </article>
  );
}
