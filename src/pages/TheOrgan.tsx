import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const ORGAN_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/organ-font.jpg";
const ORGAN_CONSOLE_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/organ-console.webp";

export default function TheOrgan() {
  return (
    <Layout>
      <PageHero title="The Organ" imageSrc={ORGAN_IMG} subtitle="Built by John Byfield in 1764 — its sound is much as Handel and his contemporaries would have heard." />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Built by John Byfield in 1764, the organ retains more of its original tonal qualities than any comparable instrument of its date. Its sound is much as Handel and his contemporaries would have heard.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">History</h2>
              <p>
                The Vestry decided to rebuild St Mary's as early as 1705, but a faculty was not applied for until 1714. Not until 1746 did they decide to complete the tower and in the following year to provide it with bells. A further eighteen years elapsed before the new church was provided with an organ. Until then a small band of musical instruments led the singing of hymns and psalms.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 italic text-foreground/80">
                "Whereas many of the Parishioners have expressed their desire of having an Organ erected in this Church which they apprehend would be not only a very decent Ornament but also add to the Solemnity of Divine Service, we do unanimously agree that an Organ will make a very useful and agreeable addition to this Church and therefore authorise and desire the Churchwardens to erect the same as soon as possible."
                <br /><span className="text-sm not-italic text-muted-foreground">— Vestry minute, 24th April 1764</span>
              </blockquote>

              <p>
                The organ is enclosed at the front by a polished mahogany case and at the back by dark stained wainscoting of pine standing between the case and the west wall. The breadth and depth of the organ as it stands today are exactly the same as the measurements stated in the faculty.
              </p>

              <p>
                The organ retains more of its tonal qualities than any comparable instrument of its date. It is important for the understanding of 18th century church music and has attracted recitalists from far and wide. Nevertheless its original purpose of providing accompaniment for services at St. Mary's remains paramount.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="mt-12">
              <img src={ORGAN_CONSOLE_IMG} alt="The Organ Console" className="w-full rounded-lg shadow-md" loading="lazy" />
              <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Organ Console</figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">The Stoplist</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-3">Great</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Open diapason 8ft — Byfield, mostly</li>
                    <li>Open diapason 8ft — Russell</li>
                    <li>Stopped diapason 8ft — Byfield</li>
                    <li>Principal 4ft — Byfield</li>
                    <li>Twelfth 2⅔ft — Byfield</li>
                    <li>Fifteenth 2ft — Byfield</li>
                    <li>Sesquialtera IV — Byfield/Goetze & Gwynn</li>
                    <li>Cornet treble 8ft — Mander/Goetze & Gwynn</li>
                    <li>Trumpet 8ft — Mostly Byfield</li>
                    <li>Clarion 4ft — Victorian/Mander</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-3">Choir</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Stopped diapason 8ft — Byfield</li>
                    <li>Principal 4ft — Byfield</li>
                    <li>Flute 4ft — Byfield</li>
                    <li>Fifteenth 2ft — Byfield</li>
                    <li>Cremona 8ft — Russell/Mander</li>
                  </ul>

                  <h3 className="font-serif text-lg font-semibold mb-3 mt-6">Swell</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Double diapason 16ft — Byfield/Gray & Davidson</li>
                    <li>Open diapason 8ft — Russell/Gray & Davidson</li>
                    <li>Stopped diapason 8ft — Byfield/Gray & Davidson</li>
                    <li>Principal 4ft — Byfield/Gray & Davidson</li>
                    <li>Fifteenth 2ft — Byfield/Gray & Davidson</li>
                    <li>Trumpet 8ft — Byfield/Gray & Davidson</li>
                    <li>Oboe 8ft — Byfield/Gray & Davidson</li>
                  </ul>

                  <h3 className="font-serif text-lg font-semibold mb-3 mt-6">Pedals</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Grand bourdon 16ft — Gray and Davidson</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Further reading: <em>The Organ at St Mary's, Rotherhithe</em> by Austin Niland (Positif Press, ISBN 0906894115).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
