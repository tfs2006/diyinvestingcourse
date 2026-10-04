import CourseExperience from "./course-experience";
import { courseModules, faqItems, totalLessons, totalMinutes } from "./course-data";

const siteUrl = "https://diyinvestingcourse.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "DIY Investing Course",
      url: siteUrl,
      description: "A free, self-paced course for learning to invest with clarity and confidence.",
      inLanguage: "en-US"
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DIY Investing Course",
      url: siteUrl,
      description: "Independent investor education for people learning to manage their own investments."
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/#course`,
      name: "DIY Investing Course: A Complete Guide to Investing for Yourself",
      description: `A free, self-paced ${totalLessons}-lesson course teaching beginners and self-directed investors about goals, stocks, bonds, funds, diversification, valuation, risk, taxes, and portfolio maintenance. It is general education, not personalized financial advice.`,
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      isAccessibleForFree: true,
      inLanguage: "en-US",
      educationalLevel: "Beginner to intermediate",
      courseMode: "Online, self-paced",
      timeRequired: `PT${Math.floor(totalMinutes / 60)}H${totalMinutes % 60}M`,
      teaches: ["Investing fundamentals", "Stocks and company research", "Bonds and interest rates", "Index funds and ETFs", "Portfolio design and diversification", "Investment risk", "Account and tax awareness", "Behavioral finance", "Investment due diligence"],
      syllabusSections: courseModules.map((courseModule) => ({
        "@type": "Syllabus",
        name: courseModule.title,
        description: courseModule.description,
        url: `${siteUrl}/#module-${courseModule.id}`,
        numberOfLessons: courseModule.lessons.length
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <CourseExperience />
    </>
  );
}
