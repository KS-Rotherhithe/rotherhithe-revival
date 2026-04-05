import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";
import communityHeroImg from "@/assets/community-hero.webp";

export default function Community() {
  return (
    <Layout>
      <PageHero
        title="Community"
        subtitle="Events, gatherings, and community life at St Mary's Rotherhithe."
        imageSrc={communityHeroImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              St Mary's hosts events throughout the year — concerts, recitals, community gatherings, and special services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Follow us on{" "}
              <a href="https://facebook.com/StMaryRotherhithe" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Facebook</a>
              {" "}and{" "}
              <a href="https://www.instagram.com/stmaryrotherhithe/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              All proceeds from events support the daily running costs of St Mary's and the Restoration Fund.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Explore
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <SubpageCard
                title="Safeguarding"
                synopsis="Our commitment to safeguarding children, young people, and vulnerable adults."
                imageSrc={communityHeroImg}
                href="/community/safeguarding"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SubpageCard
                title="Community Links"
                synopsis="Useful links to our diocese, local organisations, and community partners."
                imageSrc={communityHeroImg}
                href="/community/community-links"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
