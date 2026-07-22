import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Task Not Found</h2>
      <p>Sorry</p>
      <Link href="/">
        Return to Home Page
      </Link>
    </div>
  );
}
