const TermsAndConditions = () => {
  return (
    <section className="bg-white text-slate-900 min-h-[calc(100vh-5rem)] py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                📄 Terms & Conditions – DenveX
              </h1>
              {/* <p className="text-sm text-slate-500">Effective Date: [Insert Date]</p> */}
            </div>

            <div className="prose prose-slate max-w-none text-slate-700">
              <p>
                Welcome to DenveX. By accessing or using our website and services, you agree to the following Terms & Conditions.
              </p>

              <h2>1. Introduction</h2>
              <p>
                DenveX is a web development service provider offering website design, development, and related digital solutions. These terms govern your use of our website and services.
              </p>

              <h2>2. Services</h2>
              <p>We provide services including but not limited to:</p>
              <ul>
                <li>Website design & development</li>
                <li>UI/UX design</li>
                <li>Website maintenance</li>
                <li>Hosting & deployment support</li>
              </ul>
              <p>All services are subject to project scope, timelines, and agreed pricing.</p>

              <h2>3. User Responsibilities</h2>
              <p>By using our services, you agree to:</p>
              <ul>
                <li>Provide accurate project requirements and information</li>
                <li>Not use our services for illegal or harmful activities</li>
                <li>Ensure you have rights to any content you provide (images, text, logos)</li>
              </ul>

              <h2>4. Payments & Pricing</h2>
              <ul>
                <li>Payments must be made as per agreed milestones</li>
                <li>Advance payment may be required before starting a project</li>
                <li>No refunds once the project has started unless agreed otherwise</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <ul>
                <li>The final product will be transferred to the client upon full payment</li>
                <li>DenveX reserves the right to showcase completed work in its portfolio</li>
                <li>All third-party assets remain subject to their respective licenses</li>
              </ul>

              <h2>6. Project Delivery</h2>
              <ul>
                <li>Timelines depend on project complexity and client response time</li>
                <li>Delays caused by incomplete client input are not our responsibility</li>
                <li>Minor revisions may be included; major changes may incur additional charges</li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <p>DenveX is not liable for:</p>
              <ul>
                <li>Any indirect or consequential losses</li>
                <li>Downtime due to hosting/server issues</li>
                <li>Third-party service failures</li>
              </ul>

              <h2>8. Termination</h2>
              <p>We reserve the right to terminate services if:</p>
              <ul>
                <li>Terms are violated</li>
                <li>Payments are not made on time</li>
                <li>Misuse of services is detected</li>
              </ul>

              <h2>9. Privacy</h2>
              <p>We respect your privacy. Any personal data collected will be handled according to our Privacy Policy.</p>

              <h2>10. Changes to Terms</h2>
              <p>DenveX may update these terms at any time. Continued use of the website means you accept the updated terms.</p>

              <h2>11. Contact Information</h2>
              <p>

                For any questions,<br />
                contact us at:<br />
                Email: teamdenvex@gmail.com<br />
                Website: <a href="http://www.denvex.in" className="text-slate-900 font-medium hover:text-slate-700 underline">www.denvex.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
