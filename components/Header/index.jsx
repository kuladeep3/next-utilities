import Link from "next/link";

function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/parallel">Parallel</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
