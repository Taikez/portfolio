import Link from "next/link";

export function EmptyState({ hasFilter }: { hasFilter: boolean }) {
  return (
    <div className="py-12 text-center border border-dashed border-border rounded-xl">
      <h3 className="text-sm font-semibold text-foreground">
        {hasFilter ? "No matching posts" : "No posts yet"}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {hasFilter
          ? "There are no published articles with this tag."
          : "I haven't published any articles yet. Check back soon."}
      </p>
      {hasFilter && (
        <div className="mt-4">
          <Link
            href="/blog"
            className="text-sm text-accent hover:text-accent-foreground transition-colors"
          >
            Clear filter &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
