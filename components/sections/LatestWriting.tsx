import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPublishedPosts } from "@/lib/posts";
import { MotionSection } from "../ui/MotionSection";

export async function LatestWritingSection() {
  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];

  try {
    posts = await getPublishedPosts();
  } catch (err) {
    // Graceful fallback if database connection is pending environment configuration
    posts = [];
  }

  // Strictly enforce requirement: render ONLY when published posts exist[cite: 1, 2]
  if (!posts || posts.length === 0) {
    return null;
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <MotionSection className="py-16 border-b border-border" delay={0.5}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Latest Writing
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Thoughts on software design, performance, and Web technologies.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          All posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="p-5 rounded-lg border border-border bg-surface hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.publishedAt && (
                <time className="text-xs font-mono text-muted-foreground shrink-0">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>
            {post.excerpt && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
