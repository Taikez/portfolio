// components/layout/site-footer.tsx
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const FOOTER_LINKS = [
    { label: "Email", url: `mailto:${SITE_CONFIG.email}` },
    { label: "GitHub", url: SITE_CONFIG.githubUrl },
    { label: "LinkedIn", url: SITE_CONFIG.linkedinUrl },
    { label: "Resume", url: SITE_CONFIG.resumePdfUrl },
  ];

  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Let's build something useful.
          </h2>
          <p className="text-sm text-muted-foreground">
            Currently available for new opportunities.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-8 md:px-12 flex items-center justify-between text-xs text-muted-foreground">
        <p>
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
