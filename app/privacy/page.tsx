import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Tara-Fusion',
  description: 'Privacy Policy for the Tara-Fusion Landing Page',
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">1. Data Controller</h2>
            <p className="text-gray-300 mb-4">
              The data controller responsible for data processing on this website is:
            </p>
            <p className="text-gray-300">
              UpTux<br />
              Contact: See <Link href="/impressum" className="text-brand-accent hover:underline">Imprint</Link>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">2. Collection and Storage of Personal Data</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Email Newsletter</h3>
            <p className="text-gray-300 mb-4">
              When you subscribe to our newsletter, we collect your email address. This data is used exclusively for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Information about important development milestones of Tara-Fusion</li>
              <li>Notification about the official release of Tara-Fusion</li>
            </ul>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Storage Period:</strong> Your email address will only be stored until the release of Tara-Fusion. After the release, all collected email addresses will be permanently deleted.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Legal Basis:</strong> The processing is based on your consent in accordance with Art. 6 para. 1 lit. a GDPR (General Data Protection Regulation).
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Voluntary Nature:</strong> Providing your email address is voluntary. However, without providing your email address, we cannot send you updates about Tara-Fusion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">3. Data Sharing and Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Your email address will not be shared with, sold to, or rented to third parties. Data sharing only occurs if:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>It is legally required by law</li>
              <li>It is technically necessary for the delivery of the newsletter (e.g., to our email service provider)</li>
            </ul>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Data Processors:</strong> If we use third-party service providers to process your data, they are carefully selected and contractually bound to comply with GDPR requirements. These processors act solely on our instructions and are obligated to maintain the confidentiality and security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">4. Your Rights Under GDPR</h2>
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Right of Access (Art. 15 GDPR):</strong> You can request information about your stored personal data</li>
              <li><strong className="text-white">Right to Rectification (Art. 16 GDPR):</strong> You can request the correction of inaccurate data</li>
              <li><strong className="text-white">Right to Erasure (Art. 17 GDPR):</strong> You can request the deletion of your data ("right to be forgotten")</li>
              <li><strong className="text-white">Right to Restriction of Processing (Art. 18 GDPR):</strong> You can request the restriction of data processing under certain circumstances</li>
              <li><strong className="text-white">Right to Data Portability (Art. 20 GDPR):</strong> You can request to receive your data in a structured, commonly used, and machine-readable format</li>
              <li><strong className="text-white">Right to Withdraw Consent (Art. 7 para. 3 GDPR):</strong> You can withdraw your consent at any time with effect for the future. The lawfulness of processing based on consent before its withdrawal remains unaffected</li>
              <li><strong className="text-white">Right to Object (Art. 21 GDPR):</strong> You have the right to object to the processing of your personal data under certain circumstances</li>
              <li><strong className="text-white">Right to Lodge a Complaint (Art. 77 GDPR):</strong> You can file a complaint with a data protection supervisory authority</li>
            </ul>
            <p className="text-gray-300 mb-4">
              To exercise your rights or to remove your email address from our list, please contact us using the contact details provided in the <Link href="/impressum" className="text-brand-accent hover:underline">Imprint</Link>. We will respond to your request without undue delay and in any event within one month of receipt of the request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">5. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data transmitted, stored, or otherwise processed. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Encryption of data transmission using SSL/TLS technology</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Our security measures are continuously improved in accordance with technological developments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              This website currently does not use cookies or tracking technologies. Should this change in the future, we will update this privacy policy accordingly and, where required by law, obtain your consent before implementing such technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">7. International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your personal data is processed within the European Economic Area (EEA). If data is transferred to countries outside the EEA, we ensure that appropriate safeguards are in place in accordance with Art. 44 et seq. GDPR, such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>EU Commission adequacy decisions</li>
              <li>Standard contractual clauses approved by the EU Commission</li>
              <li>Binding corporate rules</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">8. Automated Decision-Making and Profiling</h2>
            <p className="text-gray-300 mb-4">
              We do not use automated decision-making or profiling as defined in Art. 22 GDPR. Your email address is processed solely for the purpose of sending you newsletter updates about Tara-Fusion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">9. Data Protection Officer</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about data protection, you can contact us using the contact details provided in the <Link href="/impressum" className="text-brand-accent hover:underline">Imprint</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-accent">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to update this privacy policy to reflect changes in our data processing practices or legal requirements. The current version of the privacy policy will always be available on this page. We recommend that you review this privacy policy periodically.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Material Changes:</strong> If we make material changes to this privacy policy that affect how we process your personal data, we will notify you via email (if you have subscribed to our newsletter) before the changes take effect.
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-12">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
