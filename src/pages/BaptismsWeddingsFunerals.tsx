import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import weddingImg from "@/assets/baptisms-weddings-stock.jpg";

export default function BaptismsWeddingsFunerals() {
  return (
    <Layout>
      <PageHero
        title="Baptisms, Weddings & Funerals"
        imageSrc={weddingImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Baptisms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Baptisms at St Mary's are usually for people resident in the parish, but we recognise that for many people St Mary's is a spiritual home. You are most welcome.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Weddings</h2>
                <p className="text-muted-foreground leading-relaxed">
                  St Mary's is a beautiful and historic setting for a wedding. Available if you live in the parish, are a regular worshipper, or have an appropriate connection with the church.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Funerals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Funerals may be arranged through your undertaker, who will contact Fr Mark on behalf of the family.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <p className="text-foreground font-medium">
                  Contact: Fr Mark Nicholls — 07909 546 659 /{" "}
                  <a href="mailto:mmarini2001@aol.com" className="text-accent hover:underline">
                    mmarini2001@aol.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
