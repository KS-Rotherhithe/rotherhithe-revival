import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import worshipImg from "@/assets/worship-hero.jpeg";

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
                    <td className="py-3 pr-4">Tue &amp; Thu</td>
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
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-6">What to Expect</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                St Mary's is a Church of England parish in the Anglo-Catholic tradition within the Diocese of Southwark. Our worship centres on the Eucharist.
              </p>
              <p>
                You don't need to know the order of service — just come as you are. Service booklets are provided, and someone will greet you at the door.
              </p>
              <p>
                Our main service is the <strong className="text-foreground">Parish Eucharist on Sundays at 10am</strong>. It typically lasts about an hour. After the service, everyone is welcome to stay for teas, coffees, and conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-6">Baptisms, Weddings &amp; Funerals</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-3">Baptisms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Baptisms at St Mary's are usually for people resident in the parish, but we recognise that for many people St Mary's is a spiritual home. You are most welcome.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold mb-3">Weddings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  St Mary's is a beautiful and historic setting for a wedding. Available if you live in the parish, are a regular worshipper, or have an appropriate connection with the church.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold mb-3">Funerals</h3>
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
