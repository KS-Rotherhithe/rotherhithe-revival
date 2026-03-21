import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";
import communityImg from "@/assets/community-stock.jpg";
import weddingImg from "@/assets/baptisms-weddings-stock.jpg";

export default function Community() {
  return (
    <Layout>
      <PageHero
        title="Community"
        subtitle="St Mary's is at the heart of the Rotherhithe community."
        imageSrc={communityImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a thousand years, St Mary's has served the people of Rotherhithe — in worship, celebration, and daily life. Today we continue that tradition, welcoming all who seek fellowship, support, or simply a warm cup of tea after the Sunday service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Parish Life</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <SubpageCard
                title="Baptisms, Weddings & Funerals"
                synopsis="St Mary's is a beautiful and historic setting for life's most important moments."
                imageSrc={weddingImg}
                href="/worship/baptisms-weddings-funerals"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
