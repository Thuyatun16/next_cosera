"use client";

import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to NextCosera</h1>
        <p className={styles.subtitle}>
          A hands-on tutorial for learning the fundamentals of Next.js.
        </p>
        <Link href="/posts/1" className={styles.ctaButton}>
          Explore the Posts
        </Link>
      </section>

      <section className={styles.tutorialSection}>
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Key Next.js Concepts</h2>
        <div className={styles.tutorialGrid}>
          <div className={styles.tutorialCard}>
            <h3>File-based Routing</h3>
            <p>Next.js uses the file system to define routes. Every `.js` or `.jsx` file in the `src/app` directory becomes a route.</p>
          </div>
          <div className={styles.tutorialCard}>
            <h3>Layouts</h3>
            <p>Shared UI components, like headers and footers, can be defined in a `layout.js` file. This avoids re-rendering on navigation.</p>
          </div>
          <div className={styles.tutorialCard}>
            <h3>Client and Server Components</h3>
            <p>Next.js allows you to choose where your components are rendered. Use client components for interactivity and server components for performance.</p>
          </div>
          <div className={styles.tutorialCard}>
            <h3>Data Fetching</h3>
            <p>Fetch data on the server with `async/await` in server components, or on the client with hooks like `useEffect` and `useState`.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
