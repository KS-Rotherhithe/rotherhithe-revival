import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import supportImg from "@/assets/support-stock.jpg";

export default function Donate() {
  return (
    <Layout>
      <PageHero title="Donate" imageSrc={supportImg} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Thank you for all of you who support St. Mary's financially. It is due to your generosity that we can keep the church doors open. We are also looking for grants to help with some repair and improvement works including roof and the interior plasterwork repairs.
              </p>
              <p>
                For those visiting the church we have a permanently installed card reader where you can tap and donate. Alternatively, you can drop your cash donations in the donation box.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">By Bank Transfer</h2>
              <p>
                You can set up regular donations from your bank account:
              </p>
              <div className="bg-secondary rounded-lg p-6 not-prose">
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

              <h2 className="font-serif text-2xl font-semibold text-foreground">Gift Aid</h2>
              <p>
                UK taxpayers can increase their donation by 25% at no extra cost through Gift Aid. If you donate through the card reader, all donations under £30 get Gift Aid added automatically.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
