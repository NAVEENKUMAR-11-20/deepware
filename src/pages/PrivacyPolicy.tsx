const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-[#162d50] via-[#1a3358] to-slate-950 text-white min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Light navy blue gradient background with decorative glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br from-[#1e3f6e]/80 via-[#1b3660]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_center,rgba(56,139,248,0.15),transparent_60%)]" />
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500/12 to-indigo-500/8 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10 mt-24 space-y-8 relative z-10">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy – DenveX
          </h1>
          <p className="text-blue-200">Effective Date: April 25, 2026</p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Welcome to DenveX. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10">
          <p className="text-gray-300 leading-relaxed italic">
            By accessing or using our services, you agree to the terms outlined in this Privacy Policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We may collect information about you in a variety of ways, including:</p>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-200">a. Personal Data</h3>
              <p className="text-gray-300 mb-2">Personally identifiable information that you voluntarily provide to us, such as:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details or inquiries</li>
              </ul>
              <p>This typically happens when you:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Fill out contact forms</li>
                <li>Request a quote</li>
                <li>Subscribe to newsletters</li>
              </ul>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-medium text-blue-200">b. Automatically Collected Data</h3>
              <p className="text-gray-300 mb-2">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
                <li>Referring URLs</li>
              </ul>
              <p>This helps us understand user behavior and improve our services.</p>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-medium text-blue-200">c. Cookies and Tracking Technologies</h3>
              <p className="text-gray-300 leading-relaxed">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Enhance user experience</li>
                <li>Analyze website traffic</li>
                <li>Remember user preferences</li>
              </ul>
              <p>You can control cookie settings through your browser.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>To provide and manage our services</li>
              <li>To respond to inquiries and customer support requests</li>
              <li>To improve our website and user experience</li>
              <li>To personalize content and communication</li>
              <li>To send updates, promotional materials, or important notices</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">3. Sharing Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We do not sell your personal data. However, we may share your information in the following situations:</p>
            <div className="space-y-4 text-gray-300">
              <p><span className="text-blue-200 font-medium">a. Service Providers:</span> We may share data with trusted third-party vendors who assist in website hosting, analytics, payment processing, or marketing services.</p>
              <p><span className="text-blue-200 font-medium">b. Legal Requirements:</span> We may disclose your information if required to comply with legal obligations, protect our rights, or prevent fraud.</p>
              <p><span className="text-blue-200 font-medium">c. Business Transfers:</span> In case of a merger, acquisition, or asset sale, your data may be transferred as part of that transaction.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">4. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes. When no longer needed, your data is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information, including secure servers, encryption where applicable, and access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">6. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">7. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal data from children. If we become aware of such data, we will take steps to delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              If you access our services from outside your country, your information may be transferred to and processed in a different country. By using our services, you consent to this transfer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">10. Updates to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Effective Date.” We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, you can contact us at:
            </p>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-2">
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Company:</span> DenveX
              </p>
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Email:</span> teamdenvex@gmail.com
              </p>
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Phone:</span> +91 73583 49394
              </p>
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Address:</span> Arumbakkam, Chennai - 600205
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">12. Consent</h2>
            <p className="text-gray-300 leading-relaxed">
              By using our website and services, you consent to this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
