import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";

const CHURCH_EXTERIOR = "https://stmaryrotherhithe.com/wp-content/uploads/2025/08/stmarys-2017.webp";
const NAVE_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Nave-and-East-end-ws.jpg";
const ORGAN_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/organ-font.jpg";

export default function Visit() {
  return (
    <Layout>
      <PageHero
        title="Visit"
        subtitle="Plan your visit to St Mary's — a Grade I listed church on the banks of the Thames."
        imageSrc={CHURCH_EXTERIOR}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              St Mary's is open for visitors throughout the week. Whether you are here to worship, explore our remarkable history, or simply enjoy a moment of quiet reflection by the Thames, you are most welcome.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Discover the Church</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <SubpageCard
                title="The Church Interior"
                synopsis="Explore the nave, reredos, stained glass, the Bishop's Chair made from HMS Temeraire timber, and more."
                imageSrc={NAVE_IMG}
                href="/visit/the-church-interior"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SubpageCard
                title="The Organ"
                synopsis="Built by John Byfield in 1764, the organ retains more of its original tonal qualities than any comparable instrument."
                imageSrc={ORGAN_IMG}
                href="/visit/the-organ"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
