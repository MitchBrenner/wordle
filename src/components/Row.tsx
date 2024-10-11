'use client';

import { useRef, useState } from 'react';

// React
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { dictionary } from '@/lib/words';

function Row({
  word,
  gameOver,
  setGameOver,
  id,
  delay,
  setWordBank,
}: {
  word: string;
  gameOver: boolean;
  setGameOver: (value: boolean) => void;
  id: number;
  delay: number;
  setWordBank: (value: any) => void;
}) {
  const [guess, setGuess] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);

  // Handle input change function
  const handleChange = (e, nextInput, prevInput, currInput) => {
    if (guess.length === 0 && inputRef1.current != null) {
      inputRef1.current.disabled = false;
      inputRef1.current.focus();
    }

    if (
      prevInput != null &&
      prevInput.current != null &&
      prevInput.current.value.length === 0
    ) {
      prevInput.current.focus();
    }

    if (guess.length <= 5) {
      if (e.key != 'Backspace') {
        if (guess.length < 5) {
          setGuess((prev) => prev + e.target.value.toUpperCase());
        }
        if (nextInput != null && nextInput.current != null) {
          nextInput.current.disabled = false;
          nextInput.current.focus();
          currInput.current.disabled = true;
        }
      } else if (e.key === 'Backspace') {
        if (guess.length >= 0) {
          setGuess((prev) => prev.slice(0, guess.length - 1));

          if (
            guess.length != 0 &&
            prevInput != null &&
            prevInput.current != null &&
            currInput.current.value.length === 0 &&
            guess.length != 5
          ) {
            prevInput.current.disabled = false;
            currInput.current.disabled = true;
            currInput.current.value = '';
            prevInput.current.focus();
            prevInput.current.value = '';
          } else if (
            guess.length != 0 &&
            prevInput != null &&
            prevInput.current != null &&
            currInput.current.value.length === 0 &&
            guess.length != 5
          ) {
            prevInput.current.disabled = false;
            currInput.current.disabled = true;
            prevInput.current.focus();
          }
        }
      }
    }
  };

  // Handle form submit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      inputRef1.current == null ||
      inputRef2.current == null ||
      inputRef3.current == null ||
      inputRef4.current == null ||
      inputRef5.current == null
    ) {
      return;
    }

    if (guess.length != 5) {
      return;
    }

    if (!dictionary.includes(guess.toLowerCase())) {
      toast.error('Invalid word!', {
        icon: '😢',
      });
      inputRef5.current.focus();
      console.log('Invalid word');

      return;
    }

    setIsSubmitted(true);
    console.log('submitted', guess);
    console.log('word', word);

    // check first letter
    if (guess.charAt(0) === word.charAt(0)) {
      inputRef1.current.className =
        'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(0)]: 'correct',
        };
      });
    } else if (word.includes(guess.charAt(0))) {
      inputRef1.current.className =
        'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(0)]: 'exists',
        };
      });
    } else {
      inputRef1.current.className =
        'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(0)]: 'invalid',
        };
      });
    }

    // check second letter
    if (guess.charAt(1) === word.charAt(1)) {
      inputRef2.current.className =
        'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(1)]: 'correct',
        };
      });
    } else if (word.includes(guess.charAt(1))) {
      inputRef2.current.className =
        'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(1)]: 'exists',
        };
      });
    } else {
      inputRef2.current.className =
        'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(1)]: 'invalid',
        };
      });
    }

    // check third letter
    if (guess.charAt(2) === word.charAt(2)) {
      inputRef3.current.className =
        'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(2)]: 'correct',
        };
      });
    } else if (word.includes(guess.charAt(2))) {
      inputRef3.current.className =
        'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(2)]: 'exists',
        };
      });
    } else {
      inputRef3.current.className =
        'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(2)]: 'invalid',
        };
      });
    }

    // check forth letter
    if (guess.charAt(3) === word.charAt(3)) {
      inputRef4.current.className =
        'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(3)]: 'correct',
        };
      });
    } else if (word.includes(guess.charAt(3))) {
      inputRef4.current.className =
        'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(3)]: 'exists',
        };
      });
    } else {
      inputRef4.current.className =
        'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(3)]: 'invalid',
        };
      });
    }

    // check first letter
    if (guess.charAt(4) === word.charAt(4)) {
      inputRef5.current.className =
        'char-input bg-[#538d4e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(4)]: 'correct',
        };
      });
    } else if (word.includes(guess.charAt(4))) {
      inputRef5.current.className =
        'char-input bg-[#b59f3b] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(4)]: 'exists',
        };
      });
    } else {
      inputRef5.current.className =
        'char-input bg-[#787c7e] border-none text-white';
      setWordBank((prev: object) => {
        return {
          ...prev,
          [guess.charAt(4)]: 'invalid',
        };
      });
    }

    if (guess === word) {
      toast('Good Job!', {
        icon: '👏',
      });
      setGameOver(true);
    }
    if (id === 6 && guess !== word) {
      setGameOver(true);
      toast.error('Game Over!', {
        icon: '😢',
      });
    }
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        className="space-x-2 text-black dark:text-white"
      >
        <motion.input
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: delay }}
          className="char-input"
          type="text"
          maxLength={1}
          ref={inputRef1}
          onKeyUp={(e) => handleChange(e, inputRef2, null, inputRef1)}
          disabled={isSubmitted || gameOver}
        />
        <motion.input
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          className="char-input"
          type="text"
          maxLength={1}
          ref={inputRef2}
          onKeyUp={(e) => handleChange(e, inputRef3, inputRef1, inputRef2)}
          disabled={true || isSubmitted || gameOver}
        />
        <motion.input
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="char-input"
          type="text"
          maxLength={1}
          ref={inputRef3}
          onKeyUp={(e) => handleChange(e, inputRef4, inputRef2, inputRef3)}
          disabled={true || isSubmitted || gameOver}
        />
        <motion.input
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + 0.3 }}
          className="char-input"
          type="text"
          maxLength={1}
          ref={inputRef4}
          onKeyUp={(e) => handleChange(e, inputRef5, inputRef3, inputRef4)}
          disabled={true || isSubmitted || gameOver}
        />
        <motion.input
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          className="char-input"
          type="text"
          maxLength={1}
          ref={inputRef5}
          onKeyUp={(e) => handleChange(e, null, inputRef4, inputRef5)}
          disabled={true || isSubmitted || gameOver}
        />
        <button hidden type="submit">
          Submit
        </button>
      </motion.form>
    </div>
  );
}

export default Row;
