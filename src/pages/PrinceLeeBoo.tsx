import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2008/07/prince-and-capt-wilson.webp";

export default function PrinceLeeBoo() {
  return (
    <Layout>
      <PageHero title="Prince Lee Boo" imageSrc={HERO_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Prince Lee Boo and Rotherhithe</h2>
              <p>
                Prince Lee Boo was born in one of the Pacific Islands and is buried in St Mary's churchyard. When he lived the world was still being discovered, and the Pacific Islands were no easy exercise for an explorer of that time.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/80">
                "None but a seaman can realise how terrible was the sound of the waves breaking on the coral reef, mingling with the shouting of operations our dangerous situation made necessary."
              </blockquote>
              <p>
                The story of how a Pacific Island prince came to be buried at St Mary's begins in September 1782, when three Rotherhithe men sailed out of Falmouth aboard the East India Company's packet the Antelope. They were, in addition to Captain Wilson his son Henry and his brother Mathias. Theirs was a secret voyage, perhaps the first voyage of an East India Company Ship to round the Horn and cross the Pacific from east to west.
              </p>
              <p>
                Less than three weeks after departing the coast of China, on the stormy night of 9th August 1783, The Antelope was blown off course and wrecked on the reefs of a group of islands Captain Wilson named the "Pelews". Later these became known as the Palau Islands and more recently, the Republic of Belau.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2008/07/carving-from-bellau-depicting-the-shipwrecked-sailors-and-their-island-hosts.webp"
                  alt="Carving from Belau, depicting the shipwrecked sailors and their island hosts"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Carving from Belau, depicting the shipwrecked sailors and their island hosts</figcaption>
              </figure>

              <p>
                Although he lost his ship, Captain Wilson and all but one of his men saved themselves by using the ship's two boats and an improvised raft to traverse the reef. They took refuge on Ulong, a nearby island which was at that time uninhabited. It was in the southern portion of a chain of islands ruled by chiefs whose highest-ranking member was titled Ibedul. The English came to know the chief as Abba Thulle.
              </p>
              <p>
                It was soon agreed that Oroolong could be regarded as a sanctuary for the men of the Antelope, and that trees on the island could be felled for the construction of a vessel in which they could return to China. In exchange for this hospitality the English would help in subduing rival island villagers.
              </p>
              <p>
                Abba Thulle often visited the Englishmen's shipyard on Oroolong bringing food, without which the men of the Antelope might not have survived. Perhaps because Abba Thulle was an expert wood carver himself and carried an adze on his shoulder, almost as a badge of honour, he greatly admired the craftsmanship of the English. He hoped his son could learn what the English knew and requested that his second son, Lee Boo, travel with them and become an Englishman.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Lee Boo in England</h2>
              <p>
                After the long voyage to England aboard the company's Indiaman, the Morse, the ship arrived at Portsmouth on 14 July 1784. Lee Boo described his coach ride to London saying he had been put into "a little house which was run away with by horses."
              </p>
              <p>
                Upon arrival in London Lee Boo was taken to the home of Captain Wilson in Paradise Row in Rotherhithe. He went with them to church services at St Mary's; it was said he understood the intent of the people at prayer even if he did not comprehend all that he saw.
              </p>
              <p>
                During his visit Lee Boo met the London poet George Keates and witnessed Vincenzo Lunardi's first balloon flight. For most of the five months he spent in England he attended school at an academy in Rotherhithe, where "his application was equal to his great desire of learning."
              </p>
              <p>
                In mid-December of 1784 it was discovered that Lee Boo had the smallpox. Before he died on 27 December, Lee Boo spoke to his surgeon friend: "Good Friend, when you go to Pelew, tell Abba Thulle that Lee Boo take much drink to make smallpox go away, but he die: that the Captain and Mother very kind – all English very good men."
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2008/07/lee-boo-tomb.webp"
                  alt="Prince Lee Boo's tomb"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Prince Lee Boo's tomb</figcaption>
              </figure>

              <p>
                Lee Boo was buried in the churchyard to the left of the entrance to St Mary's, in Captain Wilson's family grave. In 1892 a memorial plaque was placed in St Mary's to keep alive the memory of Lee Boo and the people of Pelew.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2008/07/lee-boo-memorial-plaque.webp"
                  alt="Memorial to Prince Lee Boo"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Memorial to Prince Lee Boo</figcaption>
              </figure>

              <p>
                In 1912, the London County Council renamed that portion of Neptune Street closest to St Mary's "Rupack Street". Thus in symbolism at least, Lee Boo is not alone in London, and Rotherhithe has not forgotten that distant royal family who earned a place in British history.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2008/07/prince-and-capt-wilson.webp"
                  alt="Prince Lee Boo and Captain Wilson"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Prince Lee Boo and Captain Wilson</figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
