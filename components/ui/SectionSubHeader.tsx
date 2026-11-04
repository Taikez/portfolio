interface SectionSubHeaderProps {
  text: string;
}

export default function SectionSubHeader({ text }: SectionSubHeaderProps) {
  return (
    <p className="text-muted-foreground text-lg md:text-xl max-w-xl font-medium leading-relaxed">
      {text}
    </p>
  );
}
