"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { allLessons, courseModules, faqItems, glossary, totalLessons, totalMinutes } from "./course-data";
import { useCourseProgress } from "./progress-store";

type IconName = "spark" | "book" | "search" | "share" | "arrow" | "check" | "clock" | "chart" | "menu" | "close" | "play" | "chevron" | "award" | "globe" | "shield" | "external" | "reset" | "copy" | "plus" | "lock";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" /><path d="M8 7h8M8 10h7" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></>,
    share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" /></>,
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    check: <path d="m5 12 4.2 4.2L19 6.5" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 6-7" /><path d="M16 6h4v4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    award: <><circle cx="12" cy="8" r="6" /><path d="m8.2 13-1 8 4.8-2.6 4.8 2.6-1-8" /><path d="m10 8 1.4 1.4L14.5 6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    reset: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3" /></>
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
}

export default function CourseExperience() {
  const { progress, saveProgress } = useCourseProgress();
  const [activeLessonId, setActiveLessonId] = useState(allLessons[0].id);
  const [openModuleId, setOpenModuleId] = useState(courseModules[0].id);
  const [quizSelection, setQuizSelection] = useState<{ lessonId: string; index: number } | null>(null);
  const [toast, setToast] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [glossaryQuery, setGlossaryQuery] = useState("");
  const [startingBalance, setStartingBalance] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [investmentYears, setInvestmentYears] = useState(20);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [annualInflation, setAnnualInflation] = useState(2.5);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  const activeLesson = allLessons.find((lesson) => lesson.id === activeLessonId) ?? allLessons[0];
  const selectedAnswer = quizSelection?.lessonId === activeLesson.id ? quizSelection.index : null;
  const activeIndex = allLessons.findIndex((lesson) => lesson.id === activeLesson.id);
  const completedCount = progress.completed.length;
  const completionPercent = Math.round((completedCount / totalLessons) * 100);
  const points = completedCount * 40 + progress.quizPassed.length * 15;
  const filteredLessons = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];
    return allLessons.filter((lesson) => `${lesson.title} ${lesson.summary} ${lesson.moduleTitle}`.toLowerCase().includes(query)).slice(0, 6);
  }, [searchTerm]);
  const filteredTerms = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];
    return glossary.filter((entry) => `${entry.term} ${entry.definition}`.toLowerCase().includes(query)).slice(0, 5);
  }, [searchTerm]);
  const visibleGlossary = useMemo(() => {
    const query = glossaryQuery.trim().toLowerCase();
    if (!query) return glossary;
    return glossary.filter((entry) => `${entry.term} ${entry.definition}`.toLowerCase().includes(query));
  }, [glossaryQuery]);

  const growthEstimate = useMemo(() => {
    const months = investmentYears * 12;
    const monthlyRate = annualReturn / 100 / 12;
    const multiplier = Math.pow(1 + monthlyRate, months);
    const futureValue = startingBalance * multiplier + (monthlyRate === 0 ? monthlyContribution * months : monthlyContribution * ((multiplier - 1) / monthlyRate));
    const contributions = startingBalance + monthlyContribution * months;
    return {
      futureValue,
      contributions,
      growth: Math.max(0, futureValue - contributions),
      inflationAdjusted: futureValue / Math.pow(1 + annualInflation / 100, investmentYears)
    };
  }, [startingBalance, monthlyContribution, investmentYears, annualReturn, annualInflation]);

  function announce(message: string) {
    setToast(message);
  }

  function jumpToLesson(lessonId: string, scroll = true) {
    const lesson = allLessons.find((item) => item.id === lessonId);
    if (!lesson) return;
    setActiveLessonId(lesson.id);
    setOpenModuleId(lesson.moduleId);
    setMobileCourseOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen(false);
    if (scroll) window.setTimeout(() => document.getElementById("lesson-reader")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }

  function chooseAnswer(index: number) {
    setQuizSelection({ lessonId: activeLesson.id, index });
    if (index === activeLesson.quiz.answer && !progress.quizPassed.includes(activeLesson.id)) {
      const saved = saveProgress({ ...progress, quizPassed: [...progress.quizPassed, activeLesson.id] });
      announce(saved ? "Correct! +15 knowledge points" : "Correct! Your answer is saved for this session, but browser storage is blocked.");
    }
  }

  function markLessonComplete() {
    if (progress.completed.includes(activeLesson.id)) {
      announce("Already in the books. Keep your momentum going.");
      return;
    }
    const nextCompleted = [...progress.completed, activeLesson.id];
    const saved = saveProgress({ ...progress, completed: nextCompleted });
    if (!saved) {
      announce("Lesson complete for this session. Your browser blocked saving progress between visits.");
      return;
    }
    announce(nextCompleted.length === totalLessons ? "Course complete! You did the work. Share your milestone." : "Lesson complete · +40 points. Nice work!");
  }

  async function shareProgress() {
    const url = typeof window === "undefined" ? "https://diyinvestingcourse.com" : window.location.origin;
    const shareText = completionPercent === 100
      ? "I finished the free DIY Investing Course. 27 practical lessons, no account, no stock picks—just the tools to make more informed investing decisions."
      : `I'm ${completionPercent}% through the free DIY Investing Course (${completedCount}/${totalLessons} lessons). No account, no stock picks—just practical investing education. Join me:`;
    const payload = { title: "DIY Investing Course", text: `${shareText} #DIYInvesting`, url };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        announce("Your course link is ready to share.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${payload.text} ${url}`);
        announce("Course link copied. Pass the knowledge on!");
      } else {
        window.prompt("Copy this course link to share:", url);
      }
    } catch {
      announce("Sharing was cancelled. Your progress is still saved on this device.");
    }
  }

  function jumpToFirstLesson() {
    jumpToLesson(allLessons[0].id);
  }

  const activeCompleted = progress.completed.includes(activeLesson.id);
  const activeQuizPassed = progress.quizPassed.includes(activeLesson.id);
  const moduleProgress = (moduleId: string) => {
    const courseModule = courseModules.find((item) => item.id === moduleId);
    if (!courseModule) return 0;
    return courseModule.lessons.filter((lesson) => progress.completed.includes(lesson.id)).length;
  };

  return (
    <div className="site-shell" id="home">
      <div className="announcement-bar"><span className="announcement-dot" /> A smarter way to DIY · <strong>100% free, always</strong> <span className="announcement-divider">/</span> No account. No email. No stock picks.</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="DIY Investing Course home">
          <span className="brand-mark"><span /></span>
          <span className="brand-name"><strong>DIY</strong><small>INVESTING COURSE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#course">The course</a>
          <a href="#practice">The calculator</a>
          <a href="#glossary">Glossary</a>
          <button className="nav-search" type="button" onClick={() => setSearchOpen(true)} aria-label="Search course topics"><Icon name="search" size={17} /></button>
          <button className="header-share" type="button" onClick={shareProgress}><Icon name="share" size={16} /> Share the course</button>
        </nav>
        <div className="mobile-nav-actions">
          <button className="icon-button" type="button" aria-label="Search lessons" onClick={() => setSearchOpen(true)}><Icon name="search" /></button>
          <button className="icon-button" type="button" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><Icon name={mobileMenuOpen ? "close" : "menu"} /></button>
        </div>
        {mobileMenuOpen && <nav className="mobile-nav-panel" aria-label="Mobile navigation"><a href="#course" onClick={() => setMobileMenuOpen(false)}>The course</a><a href="#practice" onClick={() => setMobileMenuOpen(false)}>The calculator</a><a href="#glossary" onClick={() => setMobileMenuOpen(false)}>Glossary</a><button type="button" onClick={shareProgress}>Share this course <Icon name="share" size={16} /></button></nav>}
      </header>

      {searchOpen && <div className="search-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}>
        <section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
          <div className="search-dialog-heading"><div><span className="eyebrow">THE COURSE INDEX</span><h2 id="search-title">What do you want to understand?</h2></div><button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><Icon name="close" /></button></div>
          <label className="search-field"><Icon name="search" size={20} /><input autoFocus value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Try “bonds”, “taxes”, or “diversification”…" /><kbd>ESC</kbd></label>
          {!searchTerm.trim() ? <p className="search-hint">Search every lesson and glossary term. No login needed.</p> : <div className="search-results">
            {filteredLessons.map((lesson) => <button key={lesson.id} className="search-result" type="button" onClick={() => jumpToLesson(lesson.id)}><span className="search-result-icon"><Icon name="book" size={17} /></span><span><strong>{lesson.title}</strong><small>{lesson.moduleTitle} · {lesson.minutes} min</small></span><Icon name="chevron" size={17} /></button>)}
            {filteredTerms.map((entry) => <a key={entry.term} className="search-result" href="#glossary" onClick={() => { setGlossaryQuery(entry.term); setSearchOpen(false); }}><span className="search-result-icon"><Icon name="spark" size={17} /></span><span><strong>{entry.term}</strong><small>{entry.definition}</small></span><Icon name="chevron" size={17} /></a>)}
            {filteredLessons.length === 0 && filteredTerms.length === 0 && <p className="search-hint">No exact match yet. Try a broader investing term.</p>}
          </div>}
          <div className="search-footer"><span>27 lessons</span><span>·</span><span>20 glossary terms</span><span>·</span><span>Always free</span></div>
        </section>
      </div>}

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="kicker-star"><Icon name="spark" size={15} /></span> A FIELD GUIDE FOR YOUR FINANCIAL FUTURE</div>
              <h1 id="hero-title">Invest with<br /><em>intention.</em></h1>
              <p className="hero-lead">Build the knowledge to make your own investing decisions. From first principles to portfolio fine-tuning, learn the why behind every what.</p>
              <div className="hero-cta-row"><button className="button-primary" type="button" onClick={jumpToFirstLesson}><Icon name="play" size={16} /> Start learning — it’s free</button><a className="text-link" href="#curriculum">Explore the syllabus <Icon name="arrow" size={16} /></a></div>
              <div className="hero-proof"><span><Icon name="book" size={15} /> {totalLessons} bite-size lessons</span><span><Icon name="lock" size={15} /> No account, ever</span><span><Icon name="spark" size={15} /> Your pace, your rules</span></div>
            </div>
            <div className="hero-art" aria-label="Illustration of an upward line and a steady investing journey">
              <div className="art-topline"><span className="art-eyebrow">THE LONG GAME</span><span className="art-live"><i /> COMPOUNDING TAKES TIME</span></div>
              <div className="art-center-copy"><span className="art-index">FIELD NOTE NO. 001</span><strong>Clarity<br />compounds.</strong><span className="art-subtitle">A learning curve, not a market forecast.</span></div>
              <svg className="hero-chart" viewBox="0 0 540 205" role="img" aria-label="Illustrative line ascending over a grid, not a return forecast">
                <defs><linearGradient id="areaFade" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c9fa79" stopOpacity="0.23" /><stop offset="100%" stopColor="#c9fa79" stopOpacity="0" /></linearGradient></defs>
                <path d="M0 40H540M0 90H540M0 140H540M0 190H540" stroke="white" strokeOpacity=".09" strokeWidth="1" />
                <path d="M40 162 C86 149 95 162 133 139 S185 150 223 117 S282 132 316 96 S370 119 407 76 S464 91 502 43 L502 200 L40 200Z" fill="url(#areaFade)" />
                <path d="M40 162 C86 149 95 162 133 139 S185 150 223 117 S282 132 316 96 S370 119 407 76 S464 91 502 43" fill="none" stroke="#c9fa79" strokeWidth="3" strokeLinecap="round" />
                <circle cx="502" cy="43" r="5" fill="#c9fa79" /><circle cx="502" cy="43" r="11" fill="#c9fa79" fillOpacity=".16" />
              </svg>
              <div className="art-bottomline"><span>TIME IN THE MARKET ≠ CERTAINTY</span><span className="art-marker">↗</span></div>
              <div className="art-stamp"><span>LEARN</span><span>·</span><span>QUESTION</span><span>·</span><span>GROW</span></div>
            </div>
          </div>
          <div className="hero-bottomline"><span>THE DIY INVESTOR’S STARTING POINT</span><span className="hero-bottom-right">EDUCATION, NOT A HOT TIP <span>↓</span></span></div>
        </section>

        <section className="quick-stats" aria-label="Course at a glance">
          <div><strong>{courseModules.length}</strong><span>thoughtful modules</span></div><i />
          <div><strong>{totalLessons}</strong><span>useful lessons</span></div><i />
          <div><strong>~{Math.round(totalMinutes / 60)} hrs</strong><span>learn at your pace</span></div><i />
          <div><strong>$0</strong><span>no accounts or upsells</span></div>
        </section>

        <section className="course-section" id="course" aria-labelledby="course-heading">
          <div className="section-intro course-intro">
            <div><span className="eyebrow">THE CLASSROOM · OPEN TO EVERYONE</span><h2 id="course-heading">A better investor<br /><em>starts right here.</em></h2></div>
            <p>No assumed knowledge. No noise. Follow the learning path, skip to what you need, or use the course like a reference shelf. Your progress lives on this device—not in an account.</p>
          </div>
          <div className="learner-layout">
            <aside className={`course-rail ${mobileCourseOpen ? "mobile-course-open" : ""}`} aria-label="Your course progress and curriculum">
              <div className="progress-card">
                <div className="progress-card-top"><span className="eyebrow">YOUR FIELD NOTES</span><button className="share-mini" type="button" onClick={shareProgress} aria-label="Share course progress"><Icon name="share" size={16} /></button></div>
                <div className="progress-overview"><div className="progress-ring" style={{ background: `conic-gradient(var(--green) ${completionPercent * 3.6}deg, #e7e9e1 0deg)` }}><span>{completionPercent}<small>%</small></span></div><div><strong>{completionPercent === 100 ? "You did it." : completedCount === 0 ? "Your journey starts here." : "Look at you go."}</strong><span>{completedCount} of {totalLessons} lessons complete</span><span className="points-line"><Icon name="spark" size={14} /> {points} knowledge points</span></div></div>
                <div className="progress-bar-track" role="meter" aria-label="Course progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={completionPercent}><span style={{ width: `${completionPercent}%` }} /></div>
                <div className="badge-row" aria-label="Course milestones">
                  {[{ n: 1, icon: "🌱", label: "Curious" }, { n: 5, icon: "🔎", label: "Explorer" }, { n: 14, icon: "🧭", label: "Builder" }, { n: totalLessons, icon: "🏁", label: "Finisher" }].map((badge) => <div className={`badge ${completedCount >= badge.n ? "badge-earned" : ""}`} key={badge.label} title={`${badge.label} — complete ${badge.n} lessons`}><span>{badge.icon}</span><small>{badge.label}</small></div>)}
                </div>
                <p className="privacy-note"><Icon name="shield" size={14} /> Saved privately in this browser.</p>
              </div>
              <div className="curriculum-nav-card">
                <div className="curriculum-nav-heading"><span className="eyebrow">YOUR LEARNING PATH</span><span className="lesson-total">{totalLessons} LESSONS</span></div>
                {courseModules.map((courseModule, moduleIndex) => {
                  const isOpen = openModuleId === courseModule.id || mobileCourseOpen;
                  const done = moduleProgress(courseModule.id);
                  return <div className="module-nav-group" key={courseModule.id}>
                    <button className={`module-toggle ${activeLesson.moduleId === courseModule.id ? "module-current" : ""}`} type="button" onClick={() => { setOpenModuleId(isOpen && !mobileCourseOpen ? "" : courseModule.id); setMobileCourseOpen(false); }} aria-expanded={isOpen} aria-controls={`nav-${courseModule.id}`}>
                      <span className="module-number">{String(moduleIndex + 1).padStart(2, "0")}</span><span className="module-title-wrap"><strong>{courseModule.title}</strong><small>{done}/{courseModule.lessons.length} done</small></span><span className="module-chevron"><Icon name="chevron" size={15} /></span>
                    </button>
                    {isOpen && <div className="lesson-nav-list" id={`nav-${courseModule.id}`}>{courseModule.lessons.map((lesson, index) => <button key={lesson.id} className={`lesson-nav-item ${activeLesson.id === lesson.id ? "lesson-nav-active" : ""}`} type="button" onClick={() => jumpToLesson(lesson.id)} aria-current={activeLesson.id === lesson.id ? "step" : undefined}><span className={`lesson-nav-state ${progress.completed.includes(lesson.id) ? "is-complete" : ""}`}>{progress.completed.includes(lesson.id) ? <Icon name="check" size={11} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</span><span className="lesson-nav-copy"><strong>{lesson.title}</strong><small><Icon name="clock" size={11} /> {lesson.minutes} min</small></span></button>)}</div>}
                  </div>;
                })}
                <button className="all-lessons-link" type="button" onClick={() => { document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" }); setMobileCourseOpen(false); }}><Icon name="book" size={15} /> Browse all {totalLessons} lessons <Icon name="arrow" size={14} /></button>
              </div>
              <div className="rail-reminder"><span className="reminder-spark"><Icon name="spark" size={16} /></span><p>Investing is a process, not a personality type. Keep asking good questions.</p></div>
            </aside>

            <div className="lesson-column">
              <button className="mobile-curriculum-toggle" type="button" onClick={() => setMobileCourseOpen((open) => !open)} aria-expanded={mobileCourseOpen}><Icon name="book" size={17} /> {mobileCourseOpen ? "Close your learning path" : "Browse your learning path"}<Icon name="chevron" size={16} /></button>
              <article className="lesson-reader" id="lesson-reader">
                <div className="lesson-reader-top"><div className="lesson-breadcrumb"><span>{activeLesson.moduleSubtitle}</span><span>/</span><span>LESSON {String(activeIndex + 1).padStart(2, "0")}</span></div><span className="read-time"><Icon name="clock" size={14} /> {activeLesson.minutes} MIN READ</span></div>
                <h3>{activeLesson.title}</h3>
                <p className="lesson-deck">{activeLesson.summary}</p>
                <div className="takeaways-card"><div className="takeaways-heading"><span><Icon name="spark" size={16} /></span><strong>THE SHORT VERSION</strong><small>Remember this</small></div><ul>{activeLesson.takeaways.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul></div>
                <div className="lesson-body">{activeLesson.sections.map((section, index) => <section className="lesson-section" key={section.heading}><div className="lesson-section-heading"><span>{String(index + 1).padStart(2, "0")}</span><h4>{section.heading}</h4></div>{section.paragraphs?.map((paragraph, pIndex) => <p key={`${section.heading}-${pIndex}`}>{paragraph}</p>)}{section.bullets && <ul className="lesson-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div>
                <div className="knowledge-check" aria-labelledby="quiz-heading"><div className="quiz-eyebrow"><span className="quiz-icon"><Icon name="spark" size={15} /></span><span>THE 10-SECOND CHECK</span><span className="quiz-points">+15 PTS</span></div><h4 id="quiz-heading">{activeLesson.quiz.question}</h4><div className="quiz-options" role="group" aria-label="Quiz answers">{activeLesson.quiz.choices.map((choice, index) => {const isSelected = selectedAnswer === index; const isCorrect = index === activeLesson.quiz.answer; const resultClass = isSelected ? isCorrect ? "answer-correct" : "answer-wrong" : selectedAnswer !== null && isCorrect ? "answer-reveal" : ""; return <button className={`quiz-option ${resultClass}`} type="button" key={choice} onClick={() => chooseAnswer(index)} aria-pressed={isSelected}><span className="answer-letter">{String.fromCharCode(65 + index)}</span><span>{choice}</span>{isSelected && isCorrect && <Icon name="check" size={16} />}</button>; })}</div>{(selectedAnswer !== null && selectedAnswer === activeLesson.quiz.answer || activeQuizPassed) && <p className="quiz-feedback quiz-success"><Icon name="check" size={15} /> {activeLesson.quiz.explanation}</p>}{selectedAnswer !== null && selectedAnswer !== activeLesson.quiz.answer && <p className="quiz-feedback quiz-try-again">Not quite. Give it another thought—learning the why is the point.</p>}</div>
                <div className="lesson-footer-actions"><button className={`button-complete ${activeCompleted ? "is-done" : ""}`} type="button" onClick={markLessonComplete}><span className="complete-check"><Icon name="check" size={17} /></span>{activeCompleted ? "Lesson complete" : "Mark lesson complete"}{!activeCompleted && <span className="complete-points">+40 PTS</span>}</button><a className="full-lesson-link" href={`/lessons/${activeLesson.id}`}>Open full, shareable lesson <Icon name="arrow" size={15} /></a></div>
                <div className="lesson-pagination"><button type="button" className="pagination-button pagination-prev" disabled={activeIndex === 0} onClick={() => jumpToLesson(allLessons[activeIndex - 1]?.id)}><span><Icon name="arrow" size={15} /></span><span><small>PREVIOUS LESSON</small><strong>{allLessons[activeIndex - 1]?.title ?? "Course start"}</strong></span></button><button type="button" className="pagination-button pagination-next" disabled={activeIndex >= allLessons.length - 1} onClick={() => jumpToLesson(allLessons[activeIndex + 1]?.id)}><span><small>NEXT LESSON</small><strong>{allLessons[activeIndex + 1]?.title ?? "You've reached the end"}</strong></span><span><Icon name="arrow" size={15} /></span></button></div>
              </article>
              <div className="reader-footnote"><Icon name="shield" size={15} /><p>Education only—not personalized investment, tax, or legal advice. Investing carries risk, including loss of principal. Details and laws can change; check current primary sources for your situation.</p></div>
            </div>
          </div>
        </section>

        <section className="syllabus-section" id="curriculum" aria-labelledby="syllabus-heading">
          <div className="section-intro syllabus-intro"><div><span className="eyebrow">THE WHOLE MAP · ALL 27 LESSONS</span><h2 id="syllabus-heading">A complete course.<br /><em>No missing steps.</em></h2></div><p>Move from your money foundations to a confident annual review. Every lesson stands on its own, with a quiz and a permanent, shareable reading page.</p></div>
          <div className="syllabus-grid">{courseModules.map((courseModule, index) => <article className="syllabus-card" id={`module-${courseModule.id}`} key={courseModule.id}><div className="syllabus-card-head"><span className="syllabus-number">{String(index + 1).padStart(2, "0")}</span><span className="syllabus-total">{courseModule.lessons.length} LESSONS</span></div><h3>{courseModule.title}</h3><p>{courseModule.description}</p><ol>{courseModule.lessons.map((lesson) => <li key={lesson.id}><a href={`/lessons/${lesson.id}`}><span>{lesson.title}</span><small>{lesson.minutes} min <Icon name="arrow" size={12} /></small></a></li>)}</ol></article>)}</div>
        </section>

        <section className="practice-section" id="practice" aria-labelledby="practice-heading">
          <div className="practice-copy"><span className="eyebrow">THE PRACTICE ROOM · NOT A PREDICTION</span><h2 id="practice-heading">See how time<br /><em>can add up.</em></h2><p>Explore a hypothetical monthly investing plan. The future is not a straight line—this calculator simply shows how a steady, assumed rate compounds mathematically.</p><div className="practice-disclaimer"><Icon name="shield" size={17} /><span>Illustration only. Not a forecast, guarantee, or investment recommendation. Excludes fees, taxes, and the uneven path of real returns.</span></div></div>
          <div className="calculator-card"><div className="calculator-top"><span><Icon name="chart" size={17} /> COMPOUNDING SANDBOX</span><span className="calculator-tag">CHANGE THE ASSUMPTIONS</span></div>
            <div className="calculator-inputs">
              <label className="range-control"><span><span>Starting amount</span><strong>{formatCurrency(startingBalance)}</strong></span><input type="range" min="0" max="100000" step="1000" value={startingBalance} onChange={(event) => setStartingBalance(Number(event.target.value))} aria-label="Starting amount in dollars" /><span className="range-ends"><small>$0</small><small>$100,000</small></span></label>
              <label className="range-control"><span><span>Monthly contribution</span><strong>{formatCurrency(monthlyContribution)}/mo</strong></span><input type="range" min="0" max="2000" step="25" value={monthlyContribution} onChange={(event) => setMonthlyContribution(Number(event.target.value))} aria-label="Monthly contribution in dollars" /><span className="range-ends"><small>$0</small><small>$2,000/mo</small></span></label>
              <label className="range-control"><span><span>Time invested</span><strong>{investmentYears} years</strong></span><input type="range" min="1" max="50" step="1" value={investmentYears} onChange={(event) => setInvestmentYears(Number(event.target.value))} aria-label="Investment time in years" /><span className="range-ends"><small>1 yr</small><small>50 yrs</small></span></label>
              <div className="calculator-two-ranges"><label className="range-control compact-range"><span><span>Assumed annual return</span><strong>{annualReturn.toFixed(1)}%</strong></span><input type="range" min="0" max="12" step="0.5" value={annualReturn} onChange={(event) => setAnnualReturn(Number(event.target.value))} aria-label="Hypothetical annual investment return" /><span className="range-ends"><small>0%</small><small>12%</small></span></label><label className="range-control compact-range"><span><span>Assumed inflation</span><strong>{annualInflation.toFixed(1)}%</strong></span><input type="range" min="0" max="8" step="0.5" value={annualInflation} onChange={(event) => setAnnualInflation(Number(event.target.value))} aria-label="Hypothetical annual inflation" /><span className="range-ends"><small>0%</small><small>8%</small></span></label></div>
            </div>
            <div className="calculator-result"><div className="result-main"><span>HYPOTHETICAL FUTURE BALANCE</span><strong>{formatCurrency(growthEstimate.futureValue)}</strong><small>At the assumed steady rate · not a forecast</small></div><div className="result-details"><div><span>Total amount contributed</span><strong>{formatCurrency(growthEstimate.contributions)}</strong></div><div><span>Hypothetical growth</span><strong>{formatCurrency(growthEstimate.growth)}</strong></div><div><span>Approx. value in today’s dollars</span><strong>{formatCurrency(growthEstimate.inflationAdjusted)}</strong></div></div><div className="result-bar" aria-hidden="true"><span style={{ width: `${Math.max(4, Math.min(100, (growthEstimate.contributions / Math.max(growthEstimate.futureValue, 1)) * 100))}%` }} /></div><div className="result-bar-legend"><span><i className="legend-contributed" />Contributions</span><span><i className="legend-growth" />Assumed growth</span></div></div>
            <p className="calculator-math">Assumes end-of-month contributions and constant monthly compounding. Real returns vary, can be negative, and are never this smooth.</p>
          </div>
        </section>

        <section className="glossary-section" id="glossary" aria-labelledby="glossary-heading">
          <div className="glossary-header"><div><span className="eyebrow">PLAIN-ENGLISH REFERENCE</span><h2 id="glossary-heading">Investing, <em>decoded.</em></h2><p>Twenty terms to make the jargon less mysterious.</p></div><label className="glossary-search"><Icon name="search" size={17} /><input value={glossaryQuery} onChange={(event) => setGlossaryQuery(event.target.value)} placeholder="Find a term…" aria-label="Search glossary" /></label></div>
          <div className="glossary-grid">{visibleGlossary.map((entry) => <article className="glossary-card" key={entry.term}><h3>{entry.term}</h3><p>{entry.definition}</p></article>)}{visibleGlossary.length === 0 && <p className="glossary-empty">No match yet. Try another word.</p>}</div>
        </section>

        <section className="resource-section" id="resources" aria-labelledby="resources-heading"><div className="resource-intro"><span className="eyebrow">A GOOD INVESTOR CHECKS THE SOURCE</span><h2 id="resources-heading">Go to the <em>original.</em></h2><p>These lessons teach frameworks. For rules, filings, and real terms, verify current information with the regulator or primary document—not a social post.</p></div><div className="resource-grid">
          {[
            { name: "SEC Investor.gov", type: "U.S. investor education", href: "https://www.investor.gov/", icon: "shield" as const },
            { name: "SEC EDGAR", type: "Company filings & disclosures", href: "https://www.sec.gov/edgar/search-and-access", icon: "book" as const },
            { name: "FINRA BrokerCheck", type: "Broker background lookup", href: "https://brokercheck.finra.org/", icon: "search" as const },
            { name: "IRS.gov", type: "Current federal tax guidance", href: "https://www.irs.gov/", icon: "book" as const },
            { name: "2026 IRS plan limits", type: "2026 IRA & 401(k) contribution limits", href: "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500", icon: "book" as const },
            { name: "FDIC & NCUA", type: "Deposit-insurance guidance", href: "https://www.fdic.gov/resources/deposit-insurance/", icon: "shield" as const },
            { name: "TreasuryDirect", type: "U.S. Treasury securities", href: "https://www.treasurydirect.gov/", icon: "globe" as const },
            { name: "FRED", type: "Federal Reserve economic data", href: "https://fred.stlouisfed.org/", icon: "chart" as const },
            { name: "SEC: T+1 settlement", type: "Current U.S. settlement basics", href: "https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin", icon: "clock" as const }
          ].map((source) => <a className="resource-link" key={source.name} href={source.href} target="_blank" rel="noopener noreferrer"><span className="resource-icon"><Icon name={source.icon} size={17} /></span><span><strong>{source.name}</strong><small>{source.type}</small></span><Icon name="external" size={15} /></a>)}
        </div><p className="global-note"><Icon name="globe" size={15} /> Course examples focus mainly on U.S. accounts and rules. If you live elsewhere, check your local regulator, tax authority, investor protections, and account terms.</p></section>

        <section className="faq-section" id="faq" aria-labelledby="faq-heading"><div className="faq-title"><span className="eyebrow">GOOD QUESTIONS, STRAIGHT ANSWERS</span><h2 id="faq-heading">Before you <em>begin.</em></h2><p>Clear about what’s here—and what this course isn’t.</p></div><div className="faq-list">{faqItems.map((item, index) => <details className="faq-item" key={item.question}><summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><span className="faq-plus"><Icon name="plus" size={17} /></span></summary><div className="faq-answer"><p>{item.answer}</p></div></details>)}</div></section>

        <section className="share-cta"><div className="share-cta-left"><span className="eyebrow">GOOD KNOWLEDGE GROWS WHEN IT’S SHARED</span><h2>Bring your people.<br /><em>Build your own plan.</em></h2><p>Send someone a no-hype, no-paywall place to learn the basics. Better money conversations start somewhere.</p><button type="button" className="share-cta-button" onClick={shareProgress}><Icon name="share" size={17} /> Share the course <Icon name="arrow" size={16} /></button></div><div className="share-quote-card"><div className="quote-mark">“</div><p>Learn the rules.<br />Question the noise.<br /><strong>Own your next move.</strong></p><div className="quote-footer"><span>DIY INVESTING COURSE</span><span>FREE · NO ACCOUNT</span></div><div className="share-watermark">D/I</div></div></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span /></span><span className="brand-name"><strong>DIY</strong><small>INVESTING COURSE</small></span></a><p className="footer-disclaimer">For education only. Not financial, investment, tax, or legal advice. All investing involves risk, including loss of principal. No returns are promised. Check current official sources and consider a qualified professional for personal decisions.</p><div className="footer-meta"><span>Built for the long game · © {new Date().getFullYear()} DIY Investing Course</span><span><Icon name="lock" size={13} /> Your progress stays on your device</span><a href="/sitemap.xml">Sitemap</a></div></footer>
      {toast && <div className="toast-message" role="status" aria-live="polite"><span><Icon name="check" size={17} /></span>{toast}</div>}
    </div>
  );
}
