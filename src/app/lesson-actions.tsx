"use client";

import { useState } from "react";
import type { Quiz } from "./course-data";
import { useCourseProgress } from "./progress-store";

export default function LessonActions({ lessonId, quiz }: { lessonId: string; quiz: Quiz }) {
  const { progress, saveProgress } = useCourseProgress();
  const completed = progress.completed.includes(lessonId);
  const quizPassed = progress.quizPassed.includes(lessonId);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [notice, setNotice] = useState("");

  function markDone() {
    if (completed) {
      setNotice("Already complete. Your progress is saved on this device.");
      return;
    }
    const saved = saveProgress({ ...progress, completed: [...progress.completed, lessonId] });
    setNotice(saved ? "Lesson complete. Progress saved privately in this browser." : "Lesson complete for this session. Browser storage is blocked, so progress may reset when you leave.");
  }

  function answer(index: number) {
    setSelectedAnswer(index);
    if (index === quiz.answer && !quizPassed) {
      const saved = saveProgress({ ...progress, quizPassed: [...progress.quizPassed, lessonId] });
      setNotice(saved ? "Correct. Your knowledge check is saved on this device." : "Correct. Your answer is saved for this session, but browser storage is blocked.");
    }
  }

  async function shareLesson() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "DIY Investing Course", text: "A free investing lesson with no account required.", url });
        setNotice("Lesson shared.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setNotice("Lesson link copied. Pass it along!");
      } else {
        window.prompt("Copy this lesson link:", url);
      }
    } catch {
      setNotice("Sharing was cancelled. You can copy the lesson link from your browser.");
    }
  }

  return (
    <section className="deep-actions" aria-label="Lesson quiz and progress">
      <div className="deep-quiz">
        <div className="deep-quiz-label"><span>QUICK KNOWLEDGE CHECK</span><span>NO PRESSURE · TRY AGAIN ANYTIME</span></div>
        <h2>{quiz.question}</h2>
        <div className="deep-quiz-options" role="group" aria-label="Choose an answer">
          {quiz.choices.map((choice, index) => {
            const isCorrect = index === quiz.answer;
            const isSelected = selectedAnswer === index;
            const answerClass = isSelected ? isCorrect ? "deep-answer-correct" : "deep-answer-wrong" : selectedAnswer !== null && isCorrect ? "deep-answer-reveal" : "";
            return <button className={`deep-answer ${answerClass}`} type="button" key={choice} onClick={() => answer(index)} aria-pressed={isSelected}><span>{String.fromCharCode(65 + index)}</span><span>{choice}</span>{isSelected && isCorrect && <b>✓</b>}</button>;
          })}
        </div>
        {(selectedAnswer === quiz.answer || quizPassed) && <p className="deep-feedback"><strong>That’s it.</strong> {quiz.explanation}</p>}
        {selectedAnswer !== null && selectedAnswer !== quiz.answer && <p className="deep-feedback deep-feedback-try">Not quite. Revisit the key idea, then try again.</p>}
      </div>
      <div className="deep-completion-row"><button className={`deep-complete-button ${completed ? "deep-completed" : ""}`} type="button" onClick={markDone}><span>{completed ? "✓" : "○"}</span>{completed ? "Lesson complete · saved on this device" : "Mark this lesson complete"}</button><button className="deep-share-button" type="button" onClick={shareLesson}>Share this lesson <span>↗</span></button></div>
      <p className="deep-status" role="status" aria-live="polite">{notice}</p>
    </section>
  );
}
