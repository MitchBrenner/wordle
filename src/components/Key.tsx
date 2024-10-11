'use client';

import { useEffect, useState } from 'react';

function Key({ char, status }: { char: string; status: string }) {
  const [statusColor, setStatusColor] = useState('');

  const handleClick = (char: string) => {
    console.log(char);
  };

  useEffect(() => {
    switch (status) {
      case 'correct':
        setStatusColor('bg-[#538d4e] border-[#538d4e] text-white');
        break;
      case 'exists':
        setStatusColor('bg-[#b59f3b] border-[#b59f3b] text-white');
        break;
      case 'invalid':
        setStatusColor('bg-[#787c7e] border-[#787c7e] text-white');
        break;
      default:
        setStatusColor('bg-transparent');
        break;
    }
  }, [status]);

  return (
    <div
      onClick={() => handleClick(char)}
      className={`${statusColor} mb-2 flex w-2 items-center justify-center rounded-sm border-2 p-4 hover:cursor-pointer`}
    >
      {char}
    </div>
  );
}

export default Key;
