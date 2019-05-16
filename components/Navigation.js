import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link prefetch href="/">
        <a href="/">Home</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/posts">
        <a href="/posts">Posts</a>
      </Link>
    </li>
  </ul>
);
