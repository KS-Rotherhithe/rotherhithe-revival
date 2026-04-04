import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";

const SHIPPING_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/shipping-in-the-pool-of-london.webp";
const MAYFLOWER_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/mayflowertablet.webp";
const LEE_BOO_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2008/07/prince-and-capt-wilson.webp";
const MANOR_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2025/08/Emily-Carr-Gomm-memorial-tablet-rotherhithe.webp";
const PARISH_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Mediaeval-Wall-Crypt.webp";
const SEAFARERS_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/bishops-chair.webp";

export default function History() {
  return (
    <Layout>
      <PageHero
        title="History"
        subtitle="Christians have worshipped on this site for over 1,000 years. Explore our rich heritage."
        imageSrc={SHIPPING_IMG}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rotherhithe's story is woven into the fabric of London and the wider world — from Saxon mariners to the Pilgrim Fathers, from Brunel's Thames Tunnel to the Fighting Temeraire. St Mary's has stood at the heart of it all.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Explore Our Past</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal>
              <SubpageCard
                title="Historic Rotherhithe"
                synopsis="From Saxon 'Mariners' landing place' to modern urban village — the story of a community shaped by the Thames."
                imageSrc={SHIPPING_IMG}
                href="/history/historic-rotherhithe"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SubpageCard
                title="The Mayflower & Pilgrim Fathers"
                synopsis="In 1620, the Mayflower sailed to America from Rotherhithe. The connections established still endure 400 years later."
                imageSrc={MAYFLOWER_IMG}
                href="/history/the-mayflower"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <SubpageCard
                title="Prince Lee Boo"
                synopsis="The extraordinary story of a Pacific Island prince who came to Rotherhithe in 1784 and is buried in St Mary's churchyard."
                imageSrc={LEE_BOO_IMG}
                href="/history/prince-lee-boo"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <SubpageCard
                title="The Manor of Rotherhithe"
                synopsis="From the royal demesne to the Carr-Gomm family — the story of the manor and its generous benefactors."
                imageSrc={MANOR_IMG}
                href="/history/the-manor-of-rotherhithe"
              />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <SubpageCard
                title="The Parish"
                synopsis="Over 700 years of parish history — medieval origins, the 1714 rebuild, Victorian restoration, and notable memorials."
                imageSrc={PARISH_IMG}
                href="/history/the-parish"
              />
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <SubpageCard
                title="Seafarers & Maritime Heritage"
                synopsis="Shipbuilding, the Greenland Dock, and the Fighting Temeraire — Rotherhithe's deep connection with the sea."
                imageSrc={SEAFARERS_IMG}
                href="/history/seafarers-maritime-heritage"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
