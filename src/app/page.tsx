'use client';

import { useEffect, useState } from 'react';

import Keyboard from '@/components/Keyboard';
import Row from '@/components/Row';
import { Button } from '@/components/ui/button';
import { randomWord } from '@/lib/utils';

export default function Home() {
  // const test_word = randomWord().toUpperCase();
  const [test_word, setTestWord] = useState('XXXXX');
  const [gameOver, setGameOver] = useState(false);
  const [wordBank, setWordBank] = useState({
    A: 'not guessed',
    B: 'not guessed',
    C: 'not guessed',
    D: 'not guessed',
    E: 'not guessed',
    F: 'not guessed',
    G: 'not guessed',
    H: 'not guessed',
    I: 'not guessed',
    J: 'not guessed',
    K: 'not guessed',
    L: 'not guessed',
    M: 'not guessed',
    N: 'not guessed',
    O: 'not guessed',
    P: 'not guessed',
    Q: 'not guessed',
    R: 'not guessed',
    S: 'not guessed',
    T: 'not guessed',
    U: 'not guessed',
    V: 'not guessed',
    W: 'not guessed',
    X: 'not guessed',
    Y: 'not guessed',
    Z: 'not guessed',
  });

  useEffect(() => {
    setTestWord(randomWord().toUpperCase());
  }, []);

  // useEffect(() => {}, [wordBank]);

  return (
    <div className="flex flex-col space-y-20">
      <div className="mt-10 flex w-screen flex-col items-center justify-center space-y-2">
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={1}
          delay={0.5}
          setWordBank={setWordBank}
        />
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={2}
          delay={0.4}
          setWordBank={setWordBank}
        />
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={3}
          delay={0.3}
          setWordBank={setWordBank}
        />
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={4}
          delay={0.2}
          setWordBank={setWordBank}
        />
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={5}
          delay={0.1}
          setWordBank={setWordBank}
        />
        <Row
          word={test_word}
          gameOver={gameOver}
          setGameOver={setGameOver}
          id={6}
          delay={0}
          setWordBank={setWordBank}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <Keyboard wordBank={wordBank} />
        <Button
          className="w-auto"
          variant={'secondary'}
          onClick={() => window.location.reload()}
          suppressHydrationWarning
        >
          New Game
        </Button>
        {gameOver && (
          <h1 className="text-xl">
            The correct word was{' '}
            <span className="text-2xl font-bold text-[#538d4e]">
              {test_word}
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}
