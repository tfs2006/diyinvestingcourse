"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import { allLessons } from "./course-data";

export type CourseProgress = { completed: string[]; quizPassed: string[] };
const STORAGE_KEY = "diy-investing-course-progress-v1";
const EMPTY_SNAPSHOT = JSON.stringify({ completed: [], quizPassed: [] });
const validLessonIds = new Set(allLessons.map((lesson) => lesson.id));
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_SNAPSHOT;
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

function getServerSnapshot() {
  return EMPTY_SNAPSHOT;
}

function parseSnapshot(snapshot: string): CourseProgress {
  try {
    const parsed = JSON.parse(snapshot) as Partial<CourseProgress>;
    const keepKnownIds = (value: unknown) => Array.isArray(value)
      ? [...new Set(value.filter((id): id is string => typeof id === "string" && validLessonIds.has(id)))]
      : [];
    return { completed: keepKnownIds(parsed.completed), quizPassed: keepKnownIds(parsed.quizPassed) };
  } catch {
    return { completed: [], quizPassed: [] };
  }
}

export function useCourseProgress() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const persistedProgress = useMemo(() => parseSnapshot(snapshot), [snapshot]);
  const [sessionProgress, setSessionProgress] = useState<CourseProgress>({ completed: [], quizPassed: [] });
  const progress = useMemo(() => ({
    completed: [...new Set([...persistedProgress.completed, ...sessionProgress.completed])],
    quizPassed: [...new Set([...persistedProgress.quizPassed, ...sessionProgress.quizPassed])]
  }), [persistedProgress, sessionProgress]);

  const saveProgress = useCallback((nextProgress: CourseProgress) => {
    const normalized = {
      completed: [...new Set(nextProgress.completed.filter((id) => validLessonIds.has(id)))],
      quizPassed: [...new Set(nextProgress.quizPassed.filter((id) => validLessonIds.has(id)))]
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      listeners.forEach((listener) => listener());
      return true;
    } catch {
      setSessionProgress(normalized);
      return false;
    }
  }, []);

  return { progress, saveProgress };
}
