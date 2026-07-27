import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Amit Sarvaiya",
  description: "Terms and Conditions for Amit Sarvaiya's Health & Wellness Services",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-veryLightBg transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              1. Introduction
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed mb-4">
              Welcome to{" "}
              <a href="https://amitsarvaiya.com" className="text-primary hover:underline">
                https://amitsarvaiya.com
              </a>{" "}
              ("Website"). The services provided here, including webinars, community groups, WhatsApp
              communication, and health & lifestyle guidance, are operated by{" "}
              <strong>REKHABEN AMITBHAI SARVAIYA</strong> ("Company," "we," "our," "us").
            </p>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              By accessing our website, WhatsApp number (+91 9274460030), webinars, or coaching
              services, you agree to these Terms & Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              2. Services Offered
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Online/offline health & wellness guidance.</li>
              <li>Weight loss and lifestyle improvement coaching.</li>
              <li>Access to community groups, live sessions, and webinars.</li>
              <li>General education and motivation on healthy living.</li>
            </ul>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed mt-4">
              <strong>Disclaimer:</strong> We are not a hospital, clinic, or medical practitioner. The
              information provided is for educational and lifestyle guidance only.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">3. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>You must be 18+ to use our services.</li>
              <li>
                If you are under medical treatment, pregnant, or suffering from a chronic illness,
                consult your doctor before following any advice.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              4. No Medical Guarantee
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Individual results vary based on dedication, health condition, and lifestyle.</li>
              <li>
                We do not guarantee weight loss, recovery, or cure from any medical condition.
              </li>
              <li>
                Our advice is not a substitute for professional medical diagnosis, treatment, or
                prescription.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              5. Payments & Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Fees for programs, webinars, or memberships must be paid as communicated.</li>
              <li>
                Once services are delivered (webinars, consultations, PDFs, community access), fees
                are non-refundable.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              6. Community Rules
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Respectful communication is mandatory.</li>
              <li>Spam, abuse, or sharing false information may lead to removal.</li>
              <li>We may moderate or terminate access without prior notice.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              All content, images, guides, and videos shared through the website, webinars, or WhatsApp
              are the property of <strong>REKHABEN AMITBHAI SARVAIYA</strong>. You may not copy,
              reproduce, or distribute without permission.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed mb-2">
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Health complications due to misuse of advice.</li>
              <li>Losses caused by reliance on testimonials or community results.</li>
              <li>Technical issues (WhatsApp, webinar software, internet disruptions).</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              9. Governing Law
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              These Terms are governed by the laws of India. Disputes will fall under the jurisdiction
              of Ahmedabad, Gujarat.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">10. Contact</h2>
            <div className="text-base md:text-lg text-textSecondary leading-relaxed space-y-2">
              <p>
                <strong>Company:</strong> REKHABEN AMITBHAI SARVAIYA
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://amitsarvaiya.com" className="text-primary hover:underline">
                  amitsarvaiya.com
                </a>
              </p>
              <p>
                <strong>Phone/WhatsApp:</strong>{" "}
                <a href="tel:+919274460030" className="text-primary hover:underline">
                  +91 9274460030
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
