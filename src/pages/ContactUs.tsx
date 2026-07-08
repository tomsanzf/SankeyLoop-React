import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Feature Request / General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:tomsanzf@gmail.com?subject=${encodeURIComponent(
      `[SankeyLoop Contact] ${subject}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1 w-full">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact &amp; Support</h1>
        <p className="text-[#a09d98] text-base mb-8 pb-8 border-b border-[#272521]">
          Have a question about Sankey diagrams, feature suggestions, or need assistance with custom flow visualization?
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6 text-[#d0cdc8]">
            <div>
              <h3 className="text-lg font-semibold text-[#f0ede8] mb-2">Direct Email</h3>
              <p className="text-sm text-[#a09d98] mb-2">For bug reports, feature requests, or general feedback:</p>
              <a 
                href="mailto:tomsanzf@gmail.com" 
                className="text-[#ff813f] font-medium hover:underline break-all"
              >
                tomsanzf@gmail.com
              </a>
            </div>

            <div className="pt-4 border-t border-[#272521]">
              <h3 className="text-lg font-semibold text-[#f0ede8] mb-2">Support Development</h3>
              <p className="text-sm text-[#a09d98] mb-3">
                SankeyLoop is free and open to everyone. If you love the tool, consider supporting future development:
              </p>
              <a 
                href="https://buymeacoffee.com/tsanz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#1a1917] border border-[#ff813f] text-[#ff813f] hover:bg-[#ff813f] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all no-underline"
              >
                ☕ Buy Me a Coffee
              </a>
            </div>

            <div className="pt-4 border-t border-[#272521]">
              <h3 className="text-lg font-semibold text-[#f0ede8] mb-2">Response Times</h3>
              <p className="text-sm text-[#a09d98]">
                We typically review and respond to community inquiries within 24–48 hours on business days.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-[#161513] border border-[#272521] p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-[#1a281c] border border-[#2f5e38] p-6 rounded-xl text-center">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold text-lg text-white mb-2">Email Client Opened!</h3>
                <p className="text-sm text-[#b5dec0] mb-4">
                  We have generated your draft message in your default email application. Please click send in your email client to complete the message delivery.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-[#2a4d31] hover:bg-[#35613e] text-white px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#a09d98] uppercase mb-1.5" htmlFor="name">
                      Your Name
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#a09d98] uppercase mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#a09d98] uppercase mb-1.5" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Feature Request / General Inquiry">Feature Request / General Inquiry</option>
                    <option value="Bug Report / Tool Issue">Bug Report / Tool Issue</option>
                    <option value="Data Visualization / Consulting Question">Data Visualization / Consulting Question</option>
                    <option value="Advertising / AdSense Inquiry">Advertising / Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#a09d98] uppercase mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe what you would like to see in SankeyLoop or how we can help..."
                    className="w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg p-3.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors resize-y font-sans"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#e8541a] hover:bg-[#d44812] text-white py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer shadow-md mt-2"
                >
                  Open in Email Client &amp; Send →
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
