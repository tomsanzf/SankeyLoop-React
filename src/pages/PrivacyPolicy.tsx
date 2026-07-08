import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-[#a09d98] text-sm mb-8 pb-8 border-b border-[#272521]">
          Last Updated: July 4, 2026
        </p>
        
        <div className="space-y-8 text-[#d0cdc8] leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">1. Introduction</h2>
            <p>
              Welcome to SankeyLoop ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (sankeyloop.com) and use our interactive flow diagram builder.
            </p>
          </section>

          <section className="bg-[#1a1917] border border-[#333128] p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3 flex items-center gap-2">
              <span>📢</span> 2. Google AdSense &amp; Advertising Cookies (Important Disclosure)
            </h2>
            <p className="mb-4">
              SankeyLoop uses third-party advertising services, including **Google AdSense**, to display advertisements when you visit our website. These third-party vendors use cookies to serve ads based on your prior visits to our site and other sites on the Internet.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#a09d98]">
              <li>
                <strong className="text-[#f0ede8]">Google DoubleClick DART Cookie:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to SankeyLoop and/or other sites on the Internet.
              </li>
              <li>
                <strong className="text-[#f0ede8]">Opting Out of Personalized Advertising:</strong> You may opt out of personalized advertising by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#ff813f] underline hover:text-white font-medium">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#ff813f] underline hover:text-white font-medium">aboutads.info</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">3. Local Browser Storage &amp; Diagram Data</h2>
            <p className="mb-3">
              SankeyLoop is built with user privacy and data security as a core architectural principle. Unlike conventional cloud web tools, **we do not transmit, store, or analyze your diagram input data on remote servers.**
            </p>
            <p>
              All flow values, custom node titles, color configurations, and financial numbers entered into the SankeyLoop editor are processed entirely within your local web browser's memory and saved locally using standard browser <code className="bg-[#272521] px-1.5 py-0.5 rounded text-sm text-[#ff813f]">localStorage</code>. You retain 100% ownership and control over your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">4. Analytics &amp; Log Files</h2>
            <p>
              Like most standard websites, SankeyLoop utilizes log files and anonymous traffic analytics to understand website performance and improve user experience. These logs capture generic data including Internet Protocol (IP) addresses, browser types, Internet Service Providers (ISPs), referring/exit pages, and date/time stamps. This information is not linked to any personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">5. Your GDPR &amp; CCPA Privacy Rights</h2>
            <p className="mb-3">
              Depending on your location, you may have specific data protection rights under the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#a09d98]">
              <li>The right to access, update, or delete personal information.</li>
              <li>The right to restrict or object to automated data processing and profiling.</li>
              <li>The right to data portability and non-discrimination.</li>
            </ul>
            <p className="mt-3">
              Because SankeyLoop operates purely client-side without user accounts or server databases, clearing your web browser cache and local storage immediately erases any stored preferences or diagrams from your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify users of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">7. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, please contact us via email at <a href="mailto:tomsanzf@gmail.com" className="text-[#ff813f] underline hover:text-white">tomsanzf@gmail.com</a> or visit our <a href="/contact" className="text-[#ff813f] underline hover:text-white">Contact Page</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
