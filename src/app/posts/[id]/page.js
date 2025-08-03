"use client";
import { useParams } from "next/navigation";
import { posts } from "@/app/data/post";
import styles from "./Post.module.css";
import Link from "next/link";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <Link href="/" className={styles.backLink}>
        &larr; Back to Home
      </Link>
    </main>
  );
}
