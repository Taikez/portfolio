import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";
import { getPublishedPosts } from "@/actions/posts";
import SectionSubHeader from "../ui/SectionSubHeader";

export async function LatestWritingSection() {
  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];

  try {
    posts = await getPublishedPosts();
  } catch (err) {
    // Graceful fallback if database connection is pending environment configuration
    posts = [];
  }

  // Graceful Empty State
  if (!posts || posts.length === 0) {
    return (
      <MotionSection
        className="py-20 md:py-28 border-b border-border"
        delay={0.5}
      >
        <div className="mb-12 md:mb-16">
          <SectionHeader title="I write blogs" />
          <SectionSubHeader text="Thoughts on software design, performance, and Web technologies." />
        </div>
        <div className="py-12 text-center border border-dashed border-border/60 rounded-3xl bg-surface-muted/10">
          <h3 className="text-base font-bold text-foreground">No posts yet</h3>
          <p className="mt-2 text-sm text-muted-foreground font-medium">
            I'm currently writing new content. Check back soon.
          </p>
        </div>
      </MotionSection>
    );
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <MotionSection
      className="py-20 md:py-28 border-b border-border"
      delay={0.5}
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <SectionHeader title="I write blogs" />
          <SectionSubHeader text="Thoughts on software design, performance, and Web technologies." />
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors pb-1 border-b-2 border-foreground/20 hover:border-foreground"
        >
          All posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="group p-6 md:p-8 rounded-3xl border border-border/50 bg-surface-muted/20 hover:bg-surface-muted/60 transition-all duration-300 shadow-sm hover:shadow-md hover:border-accent/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.publishedAt && (
                <time className="text-xs md:text-sm font-medium text-muted-foreground shrink-0">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>
            {post.excerpt && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </div>

      {/* Mobile All Posts Link */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground"
        >
          All posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MotionSection>
  );
}
