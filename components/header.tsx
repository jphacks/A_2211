import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4 bg-pink-red w-full sticky top-0 z-10">
      <Image src="/images/tomatoicon.png" width={40} height={40} />
      <h1>
        <Link href="/">
          <a className="mx-2 text-2xl font-logo text-white">Priority TOMATO</a>
        </Link>
      </h1>
      
      
      <h1>
        <Link href="/use">
          <a className="mx-2 text-1xl font-logo text-white">使い方</a>
        </Link>
      </h1>
      <span className="flex-1"></span>
    </header>
  );
};

export default Header;