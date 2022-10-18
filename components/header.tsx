import Link from 'next/link'
import Button from './button'

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">
          <a className="text-2xl font-logo">tomato</a>
        </Link>
      </h1>
      <span className="flex-1"></span>
      <Button>ログイン</Button>
    </header>
  );
};

export default Header;