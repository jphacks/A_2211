import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4 bg-pink-red">
      <Image src="/images/tomatoicon.png" width={40} height={40} />
      <h1>
        <Link href="/">
        
          <a className="mx-2 text-2xl font-logo text-white">Priority TOMATO</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;