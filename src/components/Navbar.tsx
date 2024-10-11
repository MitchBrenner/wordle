import Link from 'next/link';

import { ModeToggle } from './ModeToggle';

function Navbar() {
  return (
    <nav className="border-b-1 flex items-center justify-between p-5">
      <div className="font-bol flex items-center space-x-1 text-xl">
        {/* <Box /> */}
        <Link href={'/'}>Wordle Clone</Link>
      </div>
      <div className="flex space-x-3">
        <ModeToggle />
        {/* <Button variant={'outline'}>Sign Up</Button> */}
      </div>
    </nav>
  );
}

export default Navbar;
