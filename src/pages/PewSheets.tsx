import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import WeeklyContentSection from "@/components/WeeklyContentSection";
import communityHeroImg from "@/assets/community-hero.webp";

export default function PewSheets() {
  return (
    <Layout>
      <PageHero
        title="Pew Sheets"
        subtitle="Weekly announcements and community news from St Mary's."
        imageSrc={communityHeroImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <WeeklyContentSection id="pew-sheets" showIntro />
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
