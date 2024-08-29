'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      Hello world
      <Link href={'/play'}>playへ</Link>
    </main>
  );
}
