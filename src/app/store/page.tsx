import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store",
  description: "New DIY Investing Course merch is coming soon. Join the waitlist for launch updates.",
  alternates: { canonical: "/store" }
};

export default function StorePage() {
  return (
    <main className="store-shell">
      <section className="store-hero">
        <p className="store-kicker">COMING SOON · LIMITED FIRST DROP</p>
        <h1>
          Your portfolio called.<br />
          It wants <em>better merch.</em>
        </h1>
        <p className="store-lead">
          We’re building DIY Investing Course gear for people who read the footnotes, ignore the hype, and rebalance on purpose.
          Tees, desk gear, and a few nerdy surprises are on the way.
        </p>
        <div className="store-badges">
          <span>📈 No meme slogans</span>
          <span>🧠 High-signal designs</span>
          <span>🚀 First access for waitlist members</span>
        </div>
      </section>

      <section className="store-waitlist" aria-labelledby="store-waitlist-heading">
        <h2 id="store-waitlist-heading">Get first dibs when the store opens</h2>
        <p>Join the launch list and we’ll email you when new merch goes live.</p>

        <form
          className="store-form"
          action="https://formsubmit.co/divyinvestingcourse@4ourmedia.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="DIY Investing Course Store Waitlist Signup" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.diyinvestingcourse.com/store?subscribed=true" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="store-honey" aria-hidden="true" />

          <label htmlFor="store-email">Email address</label>
          <input
            id="store-email"
            name="email"
            type="email"
            placeholder="you@longterm.com"
            autoComplete="email"
            required
          />

          <label htmlFor="store-name">First name (optional)</label>
          <input id="store-name" name="first_name" type="text" placeholder="Warren" autoComplete="given-name" />

          <label className="store-consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>I agree to receive launch emails about the DIY Investing Course store.</span>
          </label>

          <button type="submit">Notify me at launch</button>
        </form>

        <p className="store-note">
          By signing up, you agree to our <Link href="/terms">Terms</Link>, <Link href="/privacy">Privacy Policy</Link>, and <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
      </section>

      <footer className="store-footer-links">
        <Link href="/">← Back to the course</Link>
      </footer>
    </main>
  );
}
