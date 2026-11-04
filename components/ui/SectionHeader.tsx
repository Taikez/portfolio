interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h1 className="text-[3rem] sm:text-4rem] md:text-[5rem] font-black tracking-tight text-foreground mb-4">
      {title}
      <span className="text-accent">.</span>
    </h1>
  );
}
