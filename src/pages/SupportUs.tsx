import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import choirImg from "@/assets/support-choir.webp";

export default function SupportUs() {
  return (
    <Layout>
      <PageHero
        title="Support Us"
        subtitle="Help us maintain this historic church for future generations."
        imageSrc={choirImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              St Mary's has served Rotherhithe for over 1,000 years. Your generosity helps us keep the church doors open, maintain our Grade I listed building, and continue serving the community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-6">Donate</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Thank you for all of you who support St. Mary's financially. It is due to your generosity that we can keep the church doors open. We are also looking for grants to help with some repair and improvement works including roof and the interior plasterwork repairs.
              </p>
              <p>
                For those visiting the church we have a permanently installed card reader where you can tap and donate. Alternatively, you can drop your cash donations in the donation box.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold mb-4">By Bank Transfer</h2>
            <p className="text-muted-foreground mb-4">
              You can set up regular donations from your bank account:
            </p>
            <div className="bg-secondary rounded-lg p-6">
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground min-w-[120px]">Account name:</dt>
                  <dd className="text-muted-foreground">Saint Mary The Virgin Rotherhithe Parochial Church Council</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground min-w-[120px]">Sort code:</dt>
                  <dd className="text-muted-foreground font-mono">30-90-74</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground min-w-[120px]">Account number:</dt>
                  <dd className="text-muted-foreground font-mono">13368960</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold mb-4">Gift Aid</h2>
            <p className="text-muted-foreground leading-relaxed">
              UK taxpayers can increase their donation by 25% at no extra cost through Gift Aid. If you donate through the card reader, all donations under £30 get Gift Aid added automatically.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
