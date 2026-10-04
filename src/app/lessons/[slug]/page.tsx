import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LessonActions from "../../lesson-actions";
import { allLessons, courseModules, totalMinutes } from "../../course-data";

const siteUrl = "https://diyinvestingcourse.com";
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = allLessons.find((item) => item.id === slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: `${lesson.title} — Free Investing Lesson`,
    description: lesson.summary,
    alternates: { canonical: `/lessons/${lesson.id}` },
    keywords: [lesson.title, lesson.moduleTitle, "DIY investing", "investing course", "investing education"],
    openGraph: {
      type: "article",
      url: `${siteUrl}/lessons/${lesson.id}`,
      siteName: "DIY Investing Course",
      title: `${lesson.title} | DIY Investing Course`,
      description: lesson.summary,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Free lesson: ${lesson.title}` }]
    },
    twitter: { card: "summary_large_image", title: `${lesson.title} | DIY Investing Course`, description: lesson.summary }
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lessonIndex = allLessons.findIndex((item) => item.id === slug);
  const lesson = allLessons[lessonIndex];
  if (!lesson) notFound();

  const courseModule = courseModules.find((item) => item.id === lesson.moduleId);
  if (!courseModule) notFound();
  const moduleIndex = courseModules.findIndex((item) => item.id === lesson.moduleId);
  const lessonNumberInModule = courseModule.lessons.findIndex((item) => item.id === lesson.id) + 1;
  const previous = allLessons[lessonIndex - 1];
  const next = allLessons[lessonIndex + 1];
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "LearningResource"],
        "@id": `${siteUrl}/lessons/${lesson.id}#lesson`,
        headline: lesson.title,
        name: lesson.title,
        description: lesson.summary,
        url: `${siteUrl}/lessons/${lesson.id}`,
        isPartOf: { "@type": "Course", "@id": `${siteUrl}/#course`, name: "DIY Investing Course" },
        educationalLevel: "Beginner to intermediate",
        learningResourceType: "Free self-paced investing lesson",
        isAccessibleForFree: true,
        inLanguage: "en-US",
        timeRequired: `PT${lesson.minutes}M`,
        teaches: lesson.takeaways,
        about: { "@type": "Thing", name: courseModule.title },
        publisher: { "@type": "Organization", name: "DIY Investing Course", url: siteUrl },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/lessons/${lesson.id}` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DIY Investing Course", item: siteUrl },
          { "@type": "ListItem", position: 2, name: courseModule.title, item: `${siteUrl}/#module-${courseModule.id}` },
          { "@type": "ListItem", position: 3, name: lesson.title, item: `${siteUrl}/lessons/${lesson.id}` }
        ]
      }
    ]
  };

  return (
    <div className="deep-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <header className="deep-header">
        <Link href="/" className="deep-brand" aria-label="DIY Investing Course home"><span className="deep-brand-mark">D/I</span><span><strong>DIY</strong><small>INVESTING COURSE</small></span></Link>
        <Link href="/#course" className="deep-back-link"><span>←</span> Back to your course</Link>
      </header>
      <main className="deep-main">
        <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">DIY Investing Course</Link><span>/</span><Link href={`/#module-${courseModule.id}`}>{courseModule.title}</Link><span>/</span><span aria-current="page">{lesson.title}</span></nav>
        <article className="deep-article">
          <header className="deep-article-header">
            <div className="deep-label-row"><span className="deep-module-label">MODULE {String(moduleIndex + 1).padStart(2, "0")} · {courseModule.title.toUpperCase()}</span><span className="deep-lesson-counter">LESSON {lessonNumberInModule} OF {courseModule.lessons.length}</span></div>
            <h1>{lesson.title}</h1>
            <p className="deep-deck">{lesson.summary}</p>
            <div className="deep-meta-row"><span>DIY INVESTING COURSE</span><i /> <span>{lesson.minutes} MIN READ</span><i /> <span>NO ACCOUNT REQUIRED</span></div>
          </header>
          <div className="deep-takeaways"><span className="deep-takeaways-label">IN THIS LESSON</span><ul>{lesson.takeaways.map((takeaway) => <li key={takeaway}><span>↗</span>{takeaway}</li>)}</ul></div>
          <div className="deep-lesson-body">{lesson.sections.map((section, index) => <section className="deep-section" key={section.heading}><div className="deep-section-heading"><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2></div>{section.paragraphs?.map((paragraph, paragraphIndex) => <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>)}{section.bullets && <ul className="deep-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div>
          <LessonActions lessonId={lesson.id} quiz={lesson.quiz} />
          <section className="deep-sources" id="sources"><h2>Keep learning from primary sources</h2><p>For details that change, check the current original document and official guidance. This course is education, not personalized investment, tax, or legal advice.</p><div><a href="https://www.investor.gov/" target="_blank" rel="noopener noreferrer">Investor.gov ↗</a><a href="https://www.sec.gov/edgar/search-and-access" target="_blank" rel="noopener noreferrer">SEC EDGAR ↗</a><a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer">IRS.gov ↗</a>{lesson.id === "retirement-account-map" && <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer">IRS: 2026 contribution limits ↗</a>}<a href="https://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer">FINRA BrokerCheck ↗</a></div><small>U.S. examples are used in several lessons. Investors elsewhere should check local laws, regulators, tax authorities, and account terms.</small></section>
          <nav className="deep-pagination" aria-label="Other course lessons"><div>{previous && <Link href={`/lessons/${previous.id}`}><small>← PREVIOUS LESSON</small><strong>{previous.title}</strong><span>{previous.moduleTitle}</span></Link>}</div><div>{next && <Link href={`/lessons/${next.id}`}><small>NEXT LESSON →</small><strong>{next.title}</strong><span>{next.moduleTitle}</span></Link>}</div></nav>
        </article>
        <aside className="deep-course-cta"><span className="deep-course-icon">{String(moduleIndex + 1).padStart(2, "0")}</span><div><span className="deep-cta-label">THE WHOLE COURSE · FREE · {Math.round(totalMinutes / 60)}+ HOURS</span><p>{courseModule.description}</p><Link href="/#course">Explore the full learning path <span>↗</span></Link></div></aside>
      </main>
      <footer className="deep-footer"><Link href="/">DIY Investing Course</Link><span>For education only. Investing involves risk, including possible loss of principal.</span><Link href="/sitemap.xml">Sitemap</Link></footer>
    </div>
  );
}
