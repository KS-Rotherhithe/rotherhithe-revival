import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/bishops-chair.webp";

export default function SeafarersMaritimeHeritage() {
  return (
    <Layout>
      <PageHero title="Seafarers & Maritime Heritage" imageSrc={HERO_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg font-medium text-foreground italic">
                Rotherhithe means "Mariners' landing place" in Saxon — a testament to its deep connection with the sea.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Shipbuilding</h2>
              <p>
                Today Rotherhithe remains very much a separate community with a character of its own. Bounded by the Thames on one side, and on the other by the waters of the Surrey Commercial docks, it is easy to understand its long tradition of seafaring and all that has to do with ships.
              </p>
              <p>
                In 1620, when it was the home of Christopher Jones and others associated with the Mayflower, the neighbourhood was even more isolated. Rotherhithe, or by its old name Redriffe, consisted only of Rotherhithe Street, the longest Street in London, which follows the great bend of the Thames and is built on the river embankment.
              </p>
              <p>
                At this time the heart of the village of Rotherhithe was the parish church of St Mary the Virgin. The Church's position on the river bank made its tower a welcome landmark to homecoming sailors. A finely sculptured stone relief of a ship in full sail, nearly contemporary with the Mayflower, commemorates Captain Anthony Wood who died in 1625.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/80">
                'His soul a ship with graces fully laded<br />
                Through surges deep did plough and safely waded.<br />
                At Rotherhithe he did at length arrive<br />
                And to their poor his tribute fully gives<br />
                And in this port he doth at anchor stay,<br />
                Hopefully expecting Resurrection's day.'
              </blockquote>
              <p>
                Rotherhithe men who were not sailors were shipbuilders and their wooden sailing ships looked a fine sight at anchor in the Thames. In 1612 Rotherhithe received recognition as an official centre of the shipwright's craft when a charter was granted to 'The Master, Wardens and Commonality of the Art or Mystery of Shipwrights of Redrith in the County of Surrey.'
              </p>
              <p>
                In 1700, the first of the great wet docks was constructed, known originally as the Howland Great Wet Dock. It came to be known as the Greenland dock after 1725 when the South Sea Company leased it for the Greenland whaling trade. The other docks, which made up the 365 acres of the Surrey Commercial Docks, were constructed in the 19th Century.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Fighting Temeraire</h2>
              <p>
                HMS Temeraire, which fought at Trafalgar, was broken up at Rotherhithe in 1838. Church furniture was made from the salvaged timber, including the Bishop's Chair still in use today.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/bishops-chair.webp"
                  alt="Bishop's Chair made from HMS Temeraire timber"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Bishop's Chair made from HMS Temeraire timber</figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
