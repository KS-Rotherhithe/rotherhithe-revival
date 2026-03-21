import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";
import worshipImg from "@/assets/worship-stock.jpg";
import weddingImg from "@/assets/baptisms-weddings-stock.jpg";

export default function Worship() {
  return (
    <Layout>
      <PageHero
        title="Worship"
        subtitle="Join us for worship at St Mary the Virgin, Rotherhithe. All are welcome."
        imageSrc={worshipImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-6">Service Times</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold">Service</th>
                    <th className="text-left py-3 pr-4 font-semibold">Day</th>
                    <th className="text-left py-3 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Parish Eucharist</td>
                    <td className="py-3 pr-4">Sunday</td>
                    <td className="py-3">10:00am</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Evening Prayer</td>
                    <td className="py-3 pr-4">Sunday</td>
                    <td className="py-3">6:00pm</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Eucharist</td>
                    <td className="py-3 pr-4">Tue, Wed &amp; Thu</td>
                    <td className="py-3">12:00 noon</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Eucharist</td>
                    <td className="py-3 pr-4">Fri &amp; Sat</td>
                    <td className="py-3">9:30am</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Benediction is usually on festivals and the first Sunday of the month.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">More About Worship</h2>
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
