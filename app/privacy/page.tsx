import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

const PAGE_PATH = "/privacy";
const PAGE_TITLE = "Privacy Policy";
const PAGE_DESCRIPTION =
  "Read how Amit Sarvaiya and REKHABEN AMITBHAI SARVAIYA collect, use, and protect your personal data across the website, webinars, and WhatsApp communication.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function PrivacyPage() {
  const canonicalUrl = getCanonicalUrl(PAGE_PATH);

  const schemaGraph = [
    getWebPageSchema({
      url: canonicalUrl,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: PAGE_TITLE, path: PAGE_PATH },
    ]),
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <JsonLd graph={schemaGraph} />
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
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
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              We respect your privacy. This Privacy Policy explains how we collect, use, and protect
              your personal data when you use our website, WhatsApp, or attend our webinars.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>
                <strong>Personal Information:</strong> Name, phone number, email, WhatsApp details.
              </li>
              <li>
                <strong>Health-related Information:</strong> General lifestyle or health goals you
                share voluntarily (not medical records).
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser, cookies.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              3. How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>To provide coaching and community access.</li>
              <li>
                To send reminders, updates, and program-related communications via WhatsApp, SMS,
                email.
              </li>
              <li>
                To run ads, remarketing, and targeted campaigns (Google, Facebook, YouTube).
              </li>
              <li>To improve our services and community experience.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">4. Legal Basis</h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed mb-2">
              We process your data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Your consent.</li>
              <li>Our legitimate business interests.</li>
              <li>Compliance with applicable Indian laws.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              5. Sharing of Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>With webinar/CRM tools (Zoom, AiSensy, WhatsApp Business API).</li>
              <li>
                With advertising platforms (Google, Facebook, YouTube) for targeted ads.
              </li>
              <li>With legal authorities if required.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              6. Data Retention
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              We store your data until you withdraw consent or discontinue services.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">7. User Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>Right to access, correct, or delete your data.</li>
              <li>Right to opt out of marketing messages anytime (reply STOP on WhatsApp).</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">8. Security</h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              We use secure servers and industry-standard measures. However, no system is 100% safe,
              and we cannot guarantee complete protection.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              9. Ads, Cookies & Tracking
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>We use cookies, Google Ads, and Facebook Pixel for marketing.</li>
              <li>Ads may appear based on your browsing behavior.</li>
              <li>
                You can opt out via Google Ads Settings or Facebook Ad Preferences.
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              10. Health Disclaimer
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
              <li>The advice provided is general wellness guidance only.</li>
              <li>
                We do not diagnose or treat diseases. Always consult your doctor before making health
                decisions.
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              11. Policy Updates
            </h2>
            <p className="text-base md:text-lg text-textSecondary leading-relaxed">
              We may update this Privacy Policy. Updated versions will be available on our website with
              a new effective date.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">12. Contact Us</h2>
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
