import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const MAYFLOWER_TABLET_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/mayflowertablet.webp";
const BLUE_PLAQUE_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/the-blue-plaque.webp";
const PRINT_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/America-Rotherhithe-print.webp";
const CAPTAIN_WOOD_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Captain-Anthony-Wood-memorial.webp";
const CAPTAINS_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/captains-composite.webp";

export default function TheMayflower() {
  return (
    <Layout>
      <PageHero title="The Mayflower & Pilgrim Fathers" imageSrc={MAYFLOWER_TABLET_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                In 1620, the Mayflower sailed to America from Rotherhithe, the home of Captain Christopher Jones and others associated with the voyage. The connections between America and Rotherhithe established by the Mayflower still endure more than 400 years later.
              </p>
              <p>
                At that time, Rotherhithe was a close-knit community of mariners whose lives were shaped by the river. The parish church of St Mary the Virgin stood at the heart of the village, its tower a welcome landmark to homecoming sailors.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Rotherhithe and the Pilgrims</h2>
              <p>
                The years following the Reformation were a period of religious fervour when many were willing to face persecution, exile or even martyrdom for the sake of their beliefs. The Pilgrim Fathers were an expression of both these aspects of their times. The desire for liberty of conscience drove them first to voluntary exile in Holland.
              </p>
              <p>
                By 1620, the Pilgrim Fathers had the accounts of earlier explorers and settlers to inspire and guide them. Captain Christopher Jones could rely on the map made by the famous Captain John Smith who had published A Description of New England in 1616.
              </p>
              <p>
                On the 5th August 1620, the Mayflower set sail from Southampton together with its sister ship the Speedwell. Some 300 miles from home they had to turn back because the Speedwell was leaking. They finally departed on 6th September 1620 from Plymouth, England.
              </p>
              <p>
                The voyage was a testing time for Captain Christopher Jones, first officer John Clarke and all the officers and crew of the Mayflower. Even after they had sighted land at Cape Cod, the ship might well have been wrecked had it not been for the Captain's skill in navigation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="my-12">
              <img src={MAYFLOWER_TABLET_IMG} alt="Mayflower Tablet" className="w-full max-w-md mx-auto rounded-lg shadow-md" loading="lazy" />
              <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
                The Mayflower Tablet — Christopher Jones, Master of the Ship, lived in Rotherhithe
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-serif text-2xl font-semibold text-foreground">The Blue Plaque</h2>
              <p>
                On Thanksgiving Day, 25th November 2004, a new 'Blue Plaque' was unveiled on the outside of St. Mary's church tower, officially identifying the church as a place of special historic interest connected to the Mayflower voyage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <figure>
                <img src={BLUE_PLAQUE_IMG} alt="The Blue Plaque" className="w-full rounded-lg shadow-md" loading="lazy" />
                <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">The Blue Plaque</figcaption>
              </figure>
              <figure>
                <img src={PRINT_IMG} alt="America and Rotherhithe print" className="w-full rounded-lg shadow-md" loading="lazy" />
                <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">'America and Rotherhithe' — the 275th anniversary print</figcaption>
              </figure>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Captain Anthony Wood</h2>
              <p>
                The memorial to Captain Anthony Wood was saved from the old church. The carved ship is thought to be a faithful image of a merchant ship of the 1600's.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <figure>
                <img src={CAPTAIN_WOOD_IMG} alt="Captain Anthony Wood memorial" className="w-full rounded-lg shadow-md" loading="lazy" />
                <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">Memorial to Captain Anthony Wood</figcaption>
              </figure>
              <figure>
                <img src={CAPTAINS_IMG} alt="Captain Thomas Stone's memorial" className="w-full rounded-lg shadow-md" loading="lazy" />
                <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">Captain Thomas Stone's memorial</figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
