import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for the DIY Investing Course website"
};

export default function CookiePolicyPage() {
  return (
    <html lang="en">
      <body>
        <main className="legal-page">
          <article className="legal-content">
            <h1>Cookie Policy</h1>

            <section>
              <h2>What This Policy Covers</h2>
              <p>
                This Cookie Policy explains how DIY Investing Course uses cookies and similar technologies when you visit our website,
                including the store waitlist page.
              </p>
            </section>

            <section>
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device by your browser. They help websites remember preferences,
                understand usage patterns, and improve performance.
              </p>
            </section>

            <section>
              <h2>2. Cookies We Use</h2>
              <ul>
                <li><strong>Essential cookies:</strong> Help core site features function correctly.</li>
                <li><strong>Analytics cookies:</strong> Help us understand site traffic and improve content.</li>
                <li><strong>Preference storage:</strong> Stores course progress in your browser on your own device.</li>
              </ul>
            </section>

            <section>
              <h2>3. Third-Party Tools</h2>
              <p>
                We may use third-party analytics providers (for example, Google Analytics) that set or read cookies subject to
                their own privacy policies.
              </p>
            </section>

            <section>
              <h2>4. How to Control Cookies</h2>
              <p>
                You can control or delete cookies through your browser settings. Disabling some cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2>5. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Continued use of the site after updates means you accept
                the revised policy.
              </p>
            </section>

            <section className="legal-footer">
              <p>
                <strong>Last Updated:</strong> October 2026
              </p>
              <p>
                Questions? Contact us at <a href="mailto:divyinvestingcourse@4ourmedia.com">divyinvestingcourse@4ourmedia.com</a>.
              </p>
            </section>
          </article>
        </main>
      </body>
    </html>
  );
}
