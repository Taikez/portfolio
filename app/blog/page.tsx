import { BlogList } from "@/components/blog/BlogList";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { EmptyState } from "@/components/blog/EmptyState";
import db from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "I am a highly efficient, pragmatic software developer who thrives in fast-paced environments, eliminating unnecessary complexity to build strong, scalable foundations.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const currentTag = searchParams.tag;

  // Fetch all tags that have at least one published post
  const activeTags = await db.tag.findMany({
    where: {
      posts: { some: { post: { status: "PUBLISHED" } } },
    },
    orderBy: { name: "asc" },
  });

  // Fetch posts, filtering by status and optionally by the selected tag
  const posts = await db.post.findMany({
    where: {
      status: "PUBLISHED",
      ...(currentTag ? { tags: { some: { tag: { slug: currentTag } } } } : {}),
    },
    include: {
      tags: {
        include: { tag: true },
      },
    },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mt-2 text-muted-foreground">
          Writing about software, building, and lessons learned.
        </p>
      </header>

      {activeTags.length > 0 && (
        <BlogFilter tags={activeTags} currentTag={currentTag} />
      )}

      {posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <EmptyState hasFilter={!!currentTag} />
      )}
    </div>
  );
}
