import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Mediaeval-Wall-Crypt.webp";

export default function TheParish() {
  return (
    <Layout>
      <PageHero title="The Parish" imageSrc={HERO_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Rotherhithe has been a place of human habitation for many centuries. Men and women have lived, worked, and worshipped here since Roman times. There is documentary evidence that a church has existed on this site since 1282, when the Abbot of Westminster and the Rector were involved in a lawsuit over fishing rights. However, when the tower was underpinned in 1913 Roman bricks were found, so it is probable that there was an earlier building on the site.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Mediaeval-Wall-Crypt.webp"
                  alt="Mediaeval wall of chalk and flint, in the approach to the crypt"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Mediaeval wall of chalk and flint, in the approach to the crypt</figcaption>
              </figure>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Medieval Origins</h2>
              <p>
                The area was eventually served by Catholic priests from Bermondsey Abbey. Following the break with Rome under Henry VIII in 1538, the vestments, silver and gold plate and other gifts of the cathedral were sold to provide money to repair the mediaeval church.
              </p>
              <p>
                Some remains of the mediaeval building can still be seen, for example stone blocks incorporated into the walls on each side of the organ. In the crypt parts of the old church walls of chalk and flint are visible, and some later Tudor brickwork.
              </p>
              <p>
                Rotherhithe had to adapt to the reformed religion of the 16th Century, and gradually became a fervently puritan area. It was during this time that the Mayflower sailed to America (1620) and established the links between America and Rotherhithe.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/tudor-brickwork-in0the-approach-to-the-crypt.webp"
                  alt="Tudor brickwork in the approach to the crypt"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Tudor brickwork in the approach to the crypt</figcaption>
              </figure>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Rebuilding: 1710–1747</h2>
              <p>
                In 1710, when the parishioners of St Mary's petitioned parliament for a grant to rebuild their church 'which standing very low and near the banks of the Thames, is often overflowed, whereby the foundation of the church and tower is rotted and in great danger of falling', they pleaded that 'the inhabitants consisting of seamen and seafaring men in general have sustained great losses by sea during a long war.'
              </p>
              <p>
                John James, a major architect of his day (and an associate of Sir Christopher Wren) was in charge of the work. As money was short the tower was not finished until 1747, when Lancelot Dowbiggin completed the rebuild. Since then the external appearance of the church has remained almost unchanged.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Victorian Restoration</h2>
              <p>
                In 1876, William Butterfield re-ordered the interior: designing a new altar, creating choir stalls from old gallery fronts, cutting down box pews, and dismantling the three-tiered pulpit.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Notable Memorials</h2>

              <h3 className="font-serif text-xl font-semibold text-foreground">Peter Hills (d. 1614)</h3>
              <p>
                A brass plate commemorates 'Peter Hills, Mariner, one of the Elder Brothers of the Company of the Trinity' and Master of Trinity House in 1593. He died six years before the sailing of the Mayflower and, together with Robert Bell, 'gave the free School and £3 per annum to the master to teach eight children, sons of seafaring men'.
              </p>
              <figure className="my-8">
                <img src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/peter-hills-brass-plate-rotherhithe.webp" alt="Peter Hills brass plate" className="rounded-lg w-full" loading="lazy" />
              </figure>

              <h3 className="font-serif text-xl font-semibold text-foreground">The Reynolds Memorial (1593)</h3>
              <p>
                This is one of the few remaining memorials from the earlier building. In nearby London in 1593 there was a great upsurge in deaths from the plague.
              </p>
              <figure className="my-8">
                <img src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/Reynolds-memorial.webp" alt="Reynolds Memorial" className="rounded-lg w-full" loading="lazy" />
              </figure>

              <h3 className="font-serif text-xl font-semibold text-foreground">Everilda Bracken</h3>
              <p>
                This simple memorial commemorates one who died caring for the sick during the second and most serious outbreak of cholera ever to affect England and Wales. In the period 1848-1849 over 53,000 deaths from this disease were registered.
              </p>
              <figure className="my-8">
                <img src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/everilda-bracken.webp" alt="Everilda Bracken memorial" className="rounded-lg w-full" loading="lazy" />
              </figure>

              <h3 className="font-serif text-xl font-semibold text-foreground">The Free School Charity Board</h3>
              <p>
                The sum left by Peter Hills was small. It became insufficient to support the school, but others came forward to help. Their contributions were recorded and displayed in the church. The school was funded in this way until the early 20th century.
              </p>
              <figure className="my-8">
                <img src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/free-school-charity-board.webp" alt="Free School Charity Board" className="rounded-lg w-full" loading="lazy" />
              </figure>

              <h3 className="font-serif text-xl font-semibold text-foreground">Brass of Peter Hills and his two wives</h3>
              <p>
                The brasses commemorating Peter Hills were salvaged from the old building and fixed to the floor of the middle aisle of the present church. Despite the severe damage the portraits retain a presence.
              </p>
              <figure className="my-8">
                <img src="https://stmaryrotherhithe.com/wp-content/uploads/2005/05/peter-hill-and-his-two-wives.webp" alt="Peter Hills and his two wives" className="rounded-lg w-full" loading="lazy" />
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
