import AsyncStorage from '@react-native-async-storage/async-storage';
import { Intention } from '../types/intention';

const INTENTION_STORAGE_KEY = 'TODAY_INTENTION';

async function saveIntention(intention: Intention): Promise<void> {
  await AsyncStorage.setItem(INTENTION_STORAGE_KEY, JSON.stringify(intention));
}

async function loadStoredIntention(): Promise<Intention | null> {
  const raw = await AsyncStorage.getItem(INTENTION_STORAGE_KEY);
  if (!raw) {
    return null;
  }
  return JSON.parse(raw) as Intention;
}

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

function createTodayIntention(
  title: string,
  description: string,
  category?: string,
): Intention {
  return {
    id: Date.now().toString(),
    title,
    description,
    completed: false,
    date: getTodayDate(),
    category,
  };
}

export async function getTodayIntention(): Promise<Intention> {
  const today = getTodayDate();
  const stored = await loadStoredIntention();

  if (!stored || stored.date !== today) {
    const newIntention = createTodayIntention(
      'My Intention for Today',
      'Focus on completing my tasks efficiently.',
    );
    await saveIntention(newIntention);
    return newIntention;
  }
  return stored;
}

export async function markIntentionComplete(): Promise<Intention> {
  const intention = await getTodayIntention();
  if (intention.completed === true) {
    return intention;
  }
  const updatedIntention = {
    ...intention,
    completed: true,
  };
  await saveIntention(updatedIntention);
  return updatedIntention;
}
