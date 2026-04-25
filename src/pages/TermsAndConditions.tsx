const TermsAndConditions = () => {
  return (
    <section className="bg-white text-slate-900 min-h-[calc(100vh-5rem)]">
      <div className="mx-auto max-w-4xl px-6 py-10 mt-24 space-y-8">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            📄 Terms & Conditions – Denvex
          </h1>
          <p className="text-gray-700">Effective Date: [Insert Date]</p>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Denvex. By accessing or using our website and services, you agree to the following Terms & Conditions.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Denvex is a web development service provider offering website design, development, and related digital solutions. These terms govern your use of our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Services</h2>
            <p className="text-gray-700 leading-relaxed">We provide services including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Website design & development</li>
              <li>UI/UX design</li>
              <li>Website maintenance</li>
              <li>Hosting & deployment support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">All services are subject to project scope, timelines, and agreed pricing.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">By using our services, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Provide accurate project requirements and information</li>
              <li>Not use our services for illegal or harmful activities</li>
              <li>Ensure you have rights to any content you provide (images, text, logos)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments & Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Payments must be made as per agreed milestones</li>
              <li>Advance payment may be required before starting a project</li>
              <li>No refunds once the project has started unless agreed otherwise</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>The final product will be transferred to the client upon full payment</li>
              <li>Denvex reserves the right to showcase completed work in its portfolio</li>
              <li>All third-party assets remain subject to their respective licenses</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">6. Project Delivery</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Timelines depend on project complexity and client response time</li>
              <li>Delays caused by incomplete client input are not our responsibility</li>
              <li>Minor revisions may be included; major changes may incur additional charges</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">Denvex is not liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Any indirect or consequential losses</li>
              <li>Downtime due to hosting/server issues</li>
              <li>Third-party service failures</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">We reserve the right to terminate services if:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Terms are violated</li>
              <li>Payments are not made on time</li>
              <li>Misuse of services is detected</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">9. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy. Any personal data collected will be handled according to our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Denvex may update these terms at any time. Continued use of the website means you accept the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email: teamdenvex@gmail.com<br />
              Website: <a href="http://www.denvex.in" className="text-slate-900 font-medium hover:text-slate-700 underline">www.denvex.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
