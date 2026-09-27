import { ProjectLink } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export function ExternalLink({ link }: { link?: ProjectLink }) {
  if (!link) return null;

  const displayUrl = link.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-mono text-xs text-slate-300 hover:text-teal-300 transition-colors group/link"
    >
      <span className="truncate max-w-[140px]">{displayUrl}</span>
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  );
}
