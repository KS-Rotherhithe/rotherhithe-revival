import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import communityHeroImg from "@/assets/community-hero.webp";

export default function Safeguarding() {
  return (
    <Layout>
      <PageHero
        title="Safeguarding"
        subtitle="Our commitment to the safety and wellbeing of all."
        imageSrc={communityHeroImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              St Mary's is committed to safeguarding children, young people, and vulnerable adults. We follow the Diocese of Southwark's policies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a
                href="http://southwark.anglican.org/safeguarding/diocesan-policies-and-procedures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Diocese of Southwark Safeguarding Policies
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have any concerns about safeguarding at St Mary's please address them to the Parish Safeguarding Officer Mrs Christine Tejero at{" "}
              <a href="mailto:safeguarding@stmaryrotherhithe.com" className="text-accent hover:underline">
                safeguarding@stmaryrotherhithe.com
              </a>{" "}
              or alternatively, if appropriate, to the Clergy or Churchwardens.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
