import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { SITE_CONFIG } from "@/lib/config";
import { SOCIALS } from "@/lib/socials";

export function HeroSection() {
  const [firstName, ...lastNameArr] = SITE_CONFIG.name.split(" ");
  const lastName = lastNameArr.join(" ");

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 border-b border-border overflow-hidden">
      {/* Subtle left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent/20 hidden md:block"></div>

      {/* Top Corners: Location & Position Meta */}
      <div className="absolute top-6 md:top-10 left-0 right-0 w-full flex justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 z-20 pointer-events-none md:pl-8">
        <span>Jakarta</span>
        <span>{SITE_CONFIG.title}</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full md:pl-8 mt-4 md:mt-0">
        {/* Left Column: Hero Text */}
        <div className="flex-1 w-full relative z-10">
          <h1 className="text-[5.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-foreground mb-8">
            I'm {firstName} <br />
            {lastName}
            <span className="text-accent drop-shadow-md">,</span>
          </h1>

          <p className="text-muted-foreground text-xl md:text-2xl max-w-xl mb-12 leading-relaxed font-medium">
            {SITE_CONFIG.positioning.replace(".", ",")} find me elsewhere at
          </p>

          {/* Social Links Row using react-social-icons */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-muted-foreground">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-lg md:text-xl font-bold tracking-tight text-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 ease-out group-hover:-translate-y-1 flex items-center justify-center">
                  <SocialIcon
                    url={social.url}
                    network={social.network}
                    fgColor="currentColor"
                    bgColor="transparent"
                    as="div"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Creative Image Container & Floating Elements */}
        <div className="relative w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-[4/5] shrink-0 mx-auto md:mx-0 group">
          {/* Background offset shadow/shape */}
          <div className="absolute inset-0 bg-accent/10 rounded-tl-[4rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>

          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-tl-[4rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-border/50 bg-surface-muted shadow-xl z-20">
            <Image
              src="/images/avatar.png"
              alt={`Portrait of ${SITE_CONFIG.name}`}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-tl-[4rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl border-[1px] border-foreground/10 pointer-events-none z-20"></div>
          </div>

          <div className="absolute -right-12 top-0 text-[7rem] font-black text-muted-foreground/20 rotate-12 select-none pointer-events-none drop-shadow-sm z-30 transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-[15deg]">
            {"//"}
          </div>
          <div className="absolute -left-6 top-16 text-[4rem] leading-none font-black text-muted-foreground/15 rotate-90 select-none pointer-events-none z-10 transition-transform duration-700 ease-out group-hover:-translate-x-2">
            ...
          </div>
        </div>
      </div>
    </section>
  );
}
