interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  if (imageSrc) {
    return (
      <section className="relative h-[340px] md:h-[420px] flex items-end overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="container relative z-10 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-white/85 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
