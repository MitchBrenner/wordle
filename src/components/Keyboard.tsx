import { WordBank } from '@/types';

import Key from './Key';

function Keyboard({ wordBank }: { wordBank: WordBank }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row space-x-2">
        <Key char="W" status={wordBank['W']} />
        <Key char="Q" status={wordBank['Q']} />
        <Key char="E" status={wordBank['E']} />
        <Key char="R" status={wordBank['R']} />
        <Key char="T" status={wordBank['T']} />
        <Key char="Y" status={wordBank['Y']} />
        <Key char="U" status={wordBank['U']} />
        <Key char="I" status={wordBank['I']} />
        <Key char="O" status={wordBank['O']} />
        <Key char="P" status={wordBank['P']} />
      </div>
      <div className="flex flex-row space-x-2">
        <Key char="S" status={wordBank['S']} />
        <Key char="A" status={wordBank['A']} />
        <Key char="D" status={wordBank['D']} />
        <Key char="F" status={wordBank['F']} />
        <Key char="G" status={wordBank['G']} />
        <Key char="H" status={wordBank['H']} />
        <Key char="J" status={wordBank['J']} />
        <Key char="K" status={wordBank['K']} />
        <Key char="L" status={wordBank['L']} />
      </div>
      <div className="flex flex-row space-x-2">
        <Key char="Z" status={wordBank['Z']} />
        <Key char="X" status={wordBank['X']} />
        <Key char="C" status={wordBank['C']} />
        <Key char="V" status={wordBank['V']} />
        <Key char="B" status={wordBank['B']} />
        <Key char="N" status={wordBank['N']} />
        <Key char="M" status={wordBank['M']} />
      </div>
    </div>
  );
}

export default Keyboard;
