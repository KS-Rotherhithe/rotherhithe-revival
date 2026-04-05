import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import contactImg from "@/assets/contact-church.jpeg";

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
                    <br />
                    <a href="mailto:mmarini2001@aol.com" className="text-accent hover:underline">
                      mmarini2001@aol.com
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

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Our Location</h2>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1242.1!2d-0.05177!3d51.50106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035c9b1c53f7%3A0x4b6e57d38e7b3b0a!2sSt+Mary&#39;s+Church%2C+St+Marychurch+St%2C+London+SE16+4JE!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St Mary's Church, Rotherhithe location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
