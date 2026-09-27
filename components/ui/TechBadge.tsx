export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-300">
      {name}
    </span>
  );
}
