import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}

export default Footer;
