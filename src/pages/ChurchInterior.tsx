import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const NAVE_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Nave-and-East-end-ws.jpg";
const REREDOS_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/dscn4457-4.jpg";
const ARCH_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/the-church-arch.jpg";
const INTERIOR_GALLERY_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/interior-from-organ-gallery.jpg";
const EAST_WINDOW_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/assumption-of-the-virgin-mary.jpg";
const CHARLES_ARMS_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/charlse-coat-of-arms.jpg";
const CHAPEL_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/imgp0875-5.jpg";
const ORGAN_FONT_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/organ-font.jpg";
const CRYPT_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/the-crypt.jpg";
const PULPIT_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Pulpit.jpg";
const CHOIR_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Choir-composite-1.webp";
const LECTERN_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/lectern.jpg";

export default function ChurchInterior() {
  return (
    <Layout>
      <PageHero title="The Church Interior" imageSrc={NAVE_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Internally the church has changed a great deal since 1715. Built to seat 1,000 people, there were galleries, box pews, and a large three-tiered pulpit. In 1876 William Butterfield, influenced by the Oxford movement, carried out a re-ordering of the interior of St. Mary's. Butterfield designed an altar worthy of being the focal point of the building and painted the church in vivid colours. Marble steps were built, and choir stalls were created from the old gallery fronts. The box pews were cut down to size, and the pulpit dismantled. The present pulpit is the surviving top deck of the original. Wrought iron screens were constructed from the old 18th century hat racks!
              </p>
              <p>
                The reredos, carved by Joseph Wade (whose memorial cartouche is in the south aisle), had copies of old master paintings installed in 1925. Above the reredos, the east window is filled by a representation of the Assumption of Our Lady. The 16th century German glass was brought to Rotherhithe in the early 19th century, possibly taken as a prize of war during the Napoleonic wars.
              </p>
              <p>
                The smaller reredos of the sacrament chapel was brought to St. Mary's when the Clare College Mission closed in 1966. It is a woodcarving depicting the Epiphany, made in Oberammergau. The links with Clare College were created in 1730 and continue to this day.
              </p>
            </div>
          </ScrollReveal>

          {/* Image gallery */}
          <div className="mt-12 space-y-12">
            <ScrollReveal>
              <figure>
                <img src={REREDOS_IMG} alt="The reredos decorated by Wade's carvings" className="w-full rounded-lg shadow-md" loading="lazy" />
                <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The reredos, decorated by Wade's carvings</figcaption>
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <img src={ARCH_IMG} alt="The Chancel Arch" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Chancel Arch — gold with Bishop's mitres and Royal crowns</figcaption>
                </figure>
                <figure>
                  <img src={EAST_WINDOW_IMG} alt="The East Window" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The East Window — The Assumption of the Virgin Mary</figcaption>
                </figure>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h2 className="font-serif text-2xl font-semibold text-foreground">The Arms of Charles II</h2>
                <p>A finely carved shield of the Royal Arms of the time of Charles the Second, which was moved from its original position over the Chancel Arch in 1876 and is now sited over the entrance to the vestry. An assurance of loyalty to the Crown in politically uncertain times.</p>
              </div>
              <figure className="mt-6">
                <img src={CHARLES_ARMS_IMG} alt="The Arms of Charles II" className="w-full max-w-md mx-auto rounded-lg shadow-md" loading="lazy" />
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <img src={CHAPEL_IMG} alt="Reredos of the Sacrament Chapel" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Reredos of the Sacrament Chapel — an Oberammergau wood carving</figcaption>
                </figure>
                <figure>
                  <img src={ORGAN_FONT_IMG} alt="The West end, Organ and Font" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The West end — the Organ and Font</figcaption>
                </figure>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h2 className="font-serif text-2xl font-semibold text-foreground">The Crypt</h2>
                <p>Parts of the earlier building are visible in the approach passage to the three large vaulted spaces which make up the main crypt areas. The last burial in the crypt was in 1850. The remains of some 2,000 bodies and coffins were covered with quicklime, and sealed over.</p>
              </div>
              <figure className="mt-6">
                <img src={CRYPT_IMG} alt="The Crypt" className="w-full rounded-lg shadow-md" loading="lazy" />
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <img src={PULPIT_IMG} alt="The Pulpit" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Pulpit — the surviving top tier of the original three-tiered pulpit</figcaption>
                </figure>
                <figure>
                  <img src={LECTERN_IMG} alt="The Lectern" className="w-full rounded-lg shadow-md" loading="lazy" />
                  <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Lectern — carved oak, presented in the 19th century</figcaption>
                </figure>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h2 className="font-serif text-2xl font-semibold text-foreground">The Bishop's Chair</h2>
                <p>
                  This unusual chair (one of two) was made from timber salvaged from 'The Fighting Temeraire', a 98 gun ship of the line which fought at the battle of Trafalgar (1805). The ship was broken up in 1838 at the yard of John Beatson (a Churchwarden). Two episcopal chairs and the altar in the sacrament chapel are made of wood salvaged from it.
                </p>
                <p>
                  The artist J M W Turner made this British ship the subject of his picture 'The Fighting Temeraire towed to her last berth', which is on view in the National Gallery, Trafalgar Square.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
