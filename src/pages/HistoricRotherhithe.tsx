import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const SHIPPING_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/shipping-in-the-pool-of-london.webp";

export default function HistoricRotherhithe() {
  return (
    <Layout>
      <PageHero title="Historic Rotherhithe" imageSrc={SHIPPING_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Rotherhithe is an 'urban village' in South East London. The name is Saxon, meaning 'Mariners' landing place', which demonstrates the long history of habitation in the area. The river Thames half surrounds the district, which used to consist of marshes, meadows, and rivulets – prehistoric animal and human remains have been found and ancient causeways, deep under the present surface of the ground, leading towards the river, give a clue about the importance of the river Thames and of the community living on its banks.
              </p>
              <p>
                Over the centuries, the area has been transformed from one of total rurality to become one of complete urban living. There have been immeasurable changes in the social and working structures of the community – emerging from a village of mariners, ship repairers, ship breakers, whalers, market gardeners and finally, dockers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="my-12">
              <img src={SHIPPING_IMG} alt="Shipping in the Pool of London, with St. Mary's in the background" className="w-full rounded-lg shadow-md" loading="lazy" />
              <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">Shipping in the Pool of London, with St. Mary's in the background</figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-serif text-2xl font-semibold text-foreground">The Docks</h2>
              <p>
                Docks had existed in the neighbourhood from the 17th Century, reaching a peak of activity prior to the 2nd World War. It was an area vibrant with life, highly populated, with sons following their fathers into the same trade. Even so, here was an area of great poverty and social deprivation. In the 1930's this led to Bermondsey Borough Council developing an ambitious programme of 'slum clearance' and the start of successful rebuilding.
              </p>
              <p>
                The 2nd World War left the area severely bombed, with many human casualties. After the war, the docks required business, but the political balance of the country at this time weighed heavily against inner city trade and industry. The result of containerisation and the building of larger ships created trade further down the river at Tilbury. As a consequence the 'Surrey docks' at Rotherhithe were closed in 1971 and fell into decay.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Regeneration</h2>
              <p>
                The London Docklands Development Corporation transformed the area from the 1980s onwards. Much good has come of this, but many problems remain; what cannot be constructed is the sense of belonging, with that closeness and concern for neighbours which underpinned the old community. Some of this remains, but much has yet to be conceived and born out of patient work and unselfish community building. Time will tell!
              </p>
              <p>
                St Mary's continues to play its part in building community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
