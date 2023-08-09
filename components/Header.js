import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

import logo from '../pages/assets/logo.png';



export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12 text-center">
     <Image
        src={logo}
        alt="logo"
        width={100} // Set the desired width of the image
        height={100} // Set the desired height of the image
        className="rounded-full block mx-auto mb-4 bg-black p-2"
      />
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
