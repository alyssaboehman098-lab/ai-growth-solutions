export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          Grow Your Business With AI Automation
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          We help businesses generate more leads, automate customer support,
          and save hours every week through intelligent AI solutions.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold">
            Book Free Consultation
          </button>

          <button className="border border-white px-8 py-4 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              AI Chatbots
            </h3>
            <p className="text-gray-300">
              24/7 website assistants that answer questions and convert
              visitors into qualified leads.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Lead Automation
            </h3>
            <p className="text-gray-300">
              Automatically follow up with prospects through email and SMS.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Workflow Automation
            </h3>
            <p className="text-gray-300">
              Eliminate repetitive tasks and allow your team to focus on
              revenue-generating work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-5xl font-bold mb-6">$497</div>

            <ul className="space-y-3">
              <li>✓ AI Chatbot</li>
              <li>✓ Lead Capture</li>
              <li>✓ Monthly Support</li>
            </ul>
          </div>

          <div className="bg-cyan-500 text-black rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <div className="text-5xl font-bold mb-6">$997</div>

            <ul className="space-y-3">
              <li>✓ Everything in Starter</li>
              <li>✓ Email Automation</li>
              <li>✓ Review Generation</li>
              <li>✓ Analytics</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <div className="text-5xl font-bold mb-6">$1997</div>

            <ul className="space-y-3">
              <li>✓ Everything in Growth</li>
              <li>✓ CRM Integration</li>
              <li>✓ Custom Workflows</li>
              <li>✓ Priority Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client Success
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl">
            <p className="text-gray-300 mb-4">
              "The automation system saved us 15+ hours every week and improved
              lead response time dramatically."
            </p>
            <strong>Local Business Owner</strong>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <p className="text-gray-300 mb-4">
              "We started booking more appointments within the first month."
            </p>
            <strong>Service Company</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-gray-900">
        <h2 className="text-5xl font-bold mb-6">
          Ready To Grow?
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Schedule a free strategy call and see how AI can help your business.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-10 py-5 rounded-lg font-bold text-lg">
          Schedule Consultation
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 AI Growth Solutions. All Rights Reserved.
      </footer>
    </main>
  );
}