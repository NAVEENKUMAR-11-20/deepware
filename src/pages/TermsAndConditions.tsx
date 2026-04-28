import SEO from '../components/SEO';

const TermsAndConditions = () => {
  return (
    <section className="bg-gradient-to-b from-[#162d50] via-[#1a3358] to-slate-950 text-white min-h-[calc(100vh-5rem)] relative overflow-hidden">
      <SEO 
        title="Terms & Conditions – DenveX"
        description="Review the terms and conditions for using DenveX's web design and development services."
        keywords="terms and conditions, DenveX legal, service agreement"
      />
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
            Terms & Conditions – DenveX
          </h1>
          <p className="text-blue-200">Latest Update: 4/25/2026</p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Welcome to DenveX. By accessing or using our website and services, you agree to the following Terms & Conditions.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10">
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              DenveX is a web development service provider offering website design, development, and related digital solutions. These terms govern your use of our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">2. Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We provide services including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Website design & development</li>
              <li>UI/UX design</li>
              <li>Website maintenance</li>
              <li>Hosting & deployment support</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">All services are subject to project scope, timelines, and agreed pricing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">By using our services, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Provide accurate project requirements and information</li>
              <li>Not use our services for illegal or harmful activities</li>
              <li>Ensure you have rights to any content you provide (images, text, logos)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">4. Payments & Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Payments must be made as per agreed milestones</li>
              <li>Advance payment may be required before starting a project</li>
              <li>No refunds once the project has started unless agreed otherwise</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">5. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>The final product will be transferred to the client upon full payment</li>
              <li>DenveX reserves the right to showcase completed work in its portfolio</li>
              <li>All third-party assets remain subject to their respective licenses</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">6. Project Delivery</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Timelines depend on project complexity and client response time</li>
              <li>Delays caused by incomplete client input are not our responsibility</li>
              <li>Minor revisions may be included; major changes may incur additional charges</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">DenveX is not liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Any indirect or consequential losses</li>
              <li>Downtime due to hosting/server issues</li>
              <li>Third-party service failures</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We reserve the right to terminate services if:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Terms are violated</li>
              <li>Payments are not made on time</li>
              <li>Misuse of services is detected</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">9. Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              We respect your privacy. Any personal data collected will be handled according to our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">10. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              DenveX may update these terms at any time. Continued use of the website means you accept the updated terms.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">11. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For any questions, contact us at:
            </p>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-2">
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Email:</span> teamdenvex@gmail.com
              </p>
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Mobile:</span> +91-7358349394
              </p>
              <p className="text-gray-200">
                <span className="text-blue-300 font-medium">Website:</span> <a href="http://www.denvex.in" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">www.denvex.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
