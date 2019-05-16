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
    <li>
      Data served from{" "}
      <a target="_blank" href="https://wp-next-demo.armyofbees.net/">
        https://wp-next-demo.armyofbees.net/
      </a>
    </li>
  </ul>
);
