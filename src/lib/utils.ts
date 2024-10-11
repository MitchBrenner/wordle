import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { words } from './words';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomWord() {
  const word = words[Math.floor(Math.random() * words.length)]; // Return the random word
  console.log('test: ', word);
  return word;
}
