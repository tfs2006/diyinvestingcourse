import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer about educational content and investment risks"
};

export default function DisclaimerPage() {
  return (
    <html lang="en">
      <body>
        <main className="legal-page">
          <article className="legal-content">
            <h1>Disclaimer</h1>
            
            <section>
              <h2>Educational Content Only</h2>
              <p>
                This website and its content constitute educational material only. The DIY Investing Course is not personalized investment advice, tax advice, legal advice, or a recommendation to buy or sell any security or investment product.
              </p>
            </section>

            <section>
              <h2>No Investment Advice</h2>
              <p>
                Nothing on this site should be construed as:
              </p>
              <ul>
                <li>A recommendation to invest in any particular security</li>
                <li>An offer to buy or sell any investment</li>
                <li>Solicitation for an investment</li>
                <li>Personalized financial, tax, or legal advice</li>
                <li>A forecast or guarantee of future performance</li>
              </ul>
            </section>

            <section>
              <h2>Investment Risks</h2>
              <p>
                Investing involves substantial risk of loss, including the potential loss of principal. The performance of any investment depends on many factors beyond anyone's control. Past performance is not indicative of future results.
              </p>
              <p>
                Specific risks include but are not limited to:
              </p>
              <ul>
                <li>Market risk (stock and bond prices fluctuate)</li>
                <li>Interest rate risk (bond values may decline if rates rise)</li>
                <li>Inflation risk (purchasing power may decline)</li>
                <li>Company-specific risk (individual investments may fail)</li>
                <li>Liquidity risk (some investments cannot be sold quickly)</li>
                <li>Regulatory and tax risks (laws and taxes can change)</li>
              </ul>
            </section>

            <section>
              <h2>Hypothetical Scenarios</h2>
              <p>
                Any calculators, projections, or hypothetical scenarios on this site are for illustration purposes only. They assume constant rates of return, which does not reflect real-world investing. Actual returns will vary, can be negative, and are never this smooth. These illustrations are not forecasts and should not be relied upon for investment decisions.
              </p>
            </section>

            <section>
              <h2>Third-Party Information</h2>
              <p>
                While we strive to provide accurate and current information, we make no representations or warranties regarding the accuracy, completeness, or timeliness of any information, including links to third-party websites. Information and laws change frequently. Before making any financial decision, verify current information directly with:
              </p>
              <ul>
                <li>The SEC (Securities and Exchange Commission)</li>
                <li>FINRA (Financial Industry Regulatory Authority)</li>
                <li>The IRS (Internal Revenue Service)</li>
                <li>Your state's securities regulator</li>
                <li>Your broker or financial institution</li>
                <li>A qualified financial advisor, tax professional, or attorney</li>
              </ul>
            </section>

            <section>
              <h2>No Fiduciary Duty</h2>
              <p>
                We do not act as your financial advisor, broker, or fiduciary. We have no duty to act in your best interest. Any use of this site does not establish an advisor-client, broker-client, or fiduciary relationship.
              </p>
            </section>

            <section>
              <h2>Professional Advice</h2>
              <p>
                Before making any significant financial decision, you should consult with a qualified professional advisor (financial advisor, accountant, attorney, tax specialist) who understands your complete financial situation, goals, and constraints.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for:
              </p>
              <ul>
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Loss of money, profits, or data</li>
                <li>Errors, omissions, or inaccuracies</li>
                <li>Any decision or action taken based on this content</li>
              </ul>
            </section>

            <section>
              <h2>Your Responsibility</h2>
              <p>
                You are solely responsible for your investment decisions. You acknowledge that you have reviewed this disclaimer, understand the risks of investing, and have sought professional advice appropriate to your situation.
              </p>
            </section>

            <section>
              <h2>Changes to Disclaimer</h2>
              <p>
                We may update this disclaimer at any time. Your continued use of this site constitutes acceptance of any changes.
              </p>
            </section>

            <section className="legal-footer">
              <p>
                <strong>Last Updated:</strong> October 2026
              </p>
              <p>
                If you have questions about this disclaimer, please contact us at <a href="mailto:contact@diyinvestingcourse.com">contact@diyinvestingcourse.com</a>.
              </p>
            </section>
          </article>

          <style jsx>{`
            .legal-page {
              max-width: 800px;
              margin: 0 auto;
              padding: 40px 20px;
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.6;
              color: #333;
            }

            .legal-content {
              background: white;
            }

            h1 {
              font-size: 2.5em;
              margin-bottom: 1.5em;
              color: #1a1a1a;
            }

            h2 {
              font-size: 1.5em;
              margin-top: 1.5em;
              margin-bottom: 0.75em;
              color: #2a2a2a;
              border-bottom: 2px solid #f0f0f0;
              padding-bottom: 0.5em;
            }

            section {
              margin-bottom: 2em;
            }

            p {
              margin-bottom: 1em;
            }

            ul {
              margin-left: 1.5em;
              margin-bottom: 1em;
            }

            li {
              margin-bottom: 0.5em;
            }

            a {
              color: #0066cc;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            .legal-footer {
              margin-top: 3em;
              padding-top: 2em;
              border-top: 2px solid #f0f0f0;
              color: #666;
              font-size: 0.9em;
            }
          `}</style>
        </main>
      </body>
    </html>
  );
}
