import Link from "next/link";
import { Post, Tag, PostTag } from "@prisma/client";

// Inferring the nested Prisma type for the component prop
type PostWithTags = Post & {
  tags: (PostTag & { tag: Tag })[];
};

export function BlogList({ posts }: { posts: PostWithTags[] }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogCard({ post }: { post: PostWithTags }) {
  return (
    <article className="group flex flex-col items-start justify-between p-4 -mx-4 rounded-xl hover:bg-surface transition-colors">
      <div className="flex items-center gap-x-4 text-xs text-muted-foreground mb-2">
        <time dateTime={post.publishedAt?.toISOString()}>
          {post.publishedAt?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <div className="flex gap-2">
          {post.tags.map(({ tag }) => (
            <span key={tag.id} className="text-accent">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <div className="group relative">
        <h3 className="text-lg font-semibold leading-6 text-foreground group-hover:text-accent-foreground transition-colors">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
