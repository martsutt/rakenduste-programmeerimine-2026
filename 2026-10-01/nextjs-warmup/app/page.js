import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main>
      <h1>Next.js Warm-up</h1>

      <p>
        <Link href="/about">About</Link>
      </p>

      <Counter />
    </main>
  );
}