import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import contactImg from "@/assets/contact-stock.jpg";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        title="Contact"
        subtitle="Get in touch with St Mary's Rotherhithe."
        imageSrc={contactImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Phone:</strong><br />
                    07909 546 659
                  </p>
                  <p>
                    <strong className="text-foreground">Email:</strong><br />
                    <a href="mailto:hello@stmaryrotherhithe.com" className="text-accent hover:underline">
                      hello@stmaryrotherhithe.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Rector:</strong><br />
                    Fr Mark Nicholls
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Find Us</h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    <strong className="text-foreground">St Mary's Church</strong><br />
                    Saint Marychurch St<br />
                    London SE16 4HZ
                  </p>
                  <p>
                    The church is located on the south bank of the Thames in Rotherhithe, close to the Mayflower pub and Rotherhithe station (Overground).
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
