import Link from "next/link";
import { Tag } from "@prisma/client";

interface BlogFilterProps {
  tags: Tag[];
  currentTag?: string;
}

export function BlogFilter({ tags, currentTag }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/blog"
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          !currentTag
            ? "bg-foreground text-background"
            : "bg-surface-muted text-muted-foreground hover:bg-surface"
        }`}
      >
        All
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag.id}
          href={`/blog?tag=${tag.slug}`}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            currentTag === tag.slug
              ? "bg-foreground text-background"
              : "bg-surface-muted text-muted-foreground hover:bg-surface"
          }`}
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
