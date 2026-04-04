import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://stmaryrotherhithe.com/wp-content/uploads/2025/08/Emily-Carr-Gomm-memorial-tablet-rotherhithe.webp";

export default function ManorOfRotherhithe() {
  return (
    <Layout>
      <PageHero title="The Manor of Rotherhithe" imageSrc={HERO_IMG} />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                The Manor of Rotherhithe was recorded in Norman times as part of the royal demesne. A long succession of owners and tenants have held rights over the area, often for relatively short periods, and of many little is known.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Sir William Gomm</h2>
              <p>
                The life of Field Marshall Sir William Maynard Gomm (born Barbados 1784), who inherited the estate in 1822, would be considered remarkable by any standards. He received his first commission in 1795, before he was 10 years old, and took part in two pitched battles before he was 14 years of age! He fought in many battles in the Napoleonic wars, and was Quartermaster-General of Picton's division at Quatre Bras and Waterloo.
              </p>
              <p>
                In 1839 he became Commander-in-Chief in Jamaica, at a time when the troops at Kingston were decimated by fever, and was instrumental in the building of a sanatorium in the hills. His service in the British Army spanned eighty years.
              </p>
              <p>
                Sir William and his second wife Lady Elizabeth gave generous aid to the charities, schools, and churches of Rotherhithe. His first wife, who died in 1827, was the daughter of the great grandson of William Penn, the founder of Pennsylvania.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Carr-Gomm Family</h2>
              <p>
                Elizabeth Lady Gomm survived her husband by two years. She bequeathed the estate to her niece who became Mrs Emily Blanche Carr-Gomm, Lady of the Manor. Mr and Mrs Carr-Gomm also proved good friends to the people of Rotherhithe, continuing the family tradition of charitable service. Their eldest son Hubert became Liberal MP for Rotherhithe in 1906. In memory of his mother he underpinned the tower of St. Mary's to prevent its imminent collapse.
              </p>

              <figure className="my-8">
                <img
                  src="https://stmaryrotherhithe.com/wp-content/uploads/2025/08/Emily-Carr-Gomm-memorial-tablet-rotherhithe.webp"
                  alt="Memorial to Mrs. Emily Blanche Carr-Gomm, Lady of the Manor of Rotherhithe"
                  className="rounded-lg w-full"
                  loading="lazy"
                />
                <figcaption className="text-sm text-center mt-2">Memorial to Mrs. Emily Blanche Carr-Gomm, Lady of the Manor of Rotherhithe</figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
