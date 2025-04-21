'use client';

import { useRef, useState } from 'react';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { dictionary } from '@/lib/words';
import { WordBank } from '@/types';

interface RowProps {
  word: string;
  gameOver: boolean;
  setGameOver: (value: boolean) => void;
  id: number;
  delay: number;
  setWordBank: React.Dispatch<React.SetStateAction<WordBank>>;
}

export default function Row({
  word,
  gameOver,
  setGameOver,
  id,
  delay,
  setWordBank,
}: RowProps) {
  const [guess, setGuess] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextInput: React.RefObject<HTMLInputElement> | null,
    prevInput: React.RefObject<HTMLInputElement> | null,
    currInput: React.RefObject<HTMLInputElement>
  ) => {
    const key = e.key;

    if (key !== 'Backspace') {
      const value = (e.target as HTMLInputElement).value.toUpperCase();
      if (guess.length < 5) {
        setGuess((prev) => prev + value);
        if (nextInput?.current && currInput.current) {
          currInput.current.disabled = true;
          nextInput.current.disabled = false;
          nextInput.current.focus();
        }
      }
    } else {
      if (guess.length > 0) {
        setGuess((prev) => prev.slice(0, -1));
        if (prevInput?.current && currInput.current) {
          currInput.current.disabled = true;
          currInput.current.value = '';
          prevInput.current.disabled = false;
          prevInput.current.focus();
        }
      }
    }
  };

  const updateStatus = (index: number) => {
    const char = guess.charAt(index);
    const input = inputRefs[index].current;
    if (!input) return;

    if (char === word.charAt(index)) {
      input.className = 'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev) => ({ ...prev, [char]: 'correct' }));
    } else if (word.includes(char)) {
      input.className = 'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev) => ({ ...prev, [char]: 'exists' }));
    } else {
      input.className = 'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev) => ({ ...prev, [char]: 'invalid' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (guess.length !== 5 || !dictionary.includes(guess.toLowerCase())) {
      toast.error('Invalid word!', { icon: '😢' });
      inputRefs[4].current?.focus();
      return;
    }

    setIsSubmitted(true);
    for (let i = 0; i < 5; i++) {
      updateStatus(i);
    }

    if (guess === word) {
      toast('Good Job!', { icon: '👏' });
      setGameOver(true);
    } else if (id === 6) {
      toast.error('Game Over!', { icon: '😢' });
      setGameOver(true);
    }
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        className="space-x-2 text-black dark:text-white"
      >
        {inputRefs.map((ref, i) => (
          <motion.input
            key={i}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 + i * 0.1, delay: delay + i * 0.1 }}
            className="char-input"
            type="text"
            maxLength={1}
            ref={ref}
            onKeyUp={(e) =>
              handleChange(
                e,
                inputRefs[i + 1] || null,
                inputRefs[i - 1] || null,
                ref
              )
            }
            disabled={i !== 0 || isSubmitted || gameOver}
          />
        ))}
        <button hidden type="submit">
          Submit
        </button>
      </motion.form>
    </div>
  );
}
