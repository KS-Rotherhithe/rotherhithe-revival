import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import communityHeroImg from "@/assets/community-hero.webp";

export default function CommunityLinks() {
  return (
    <Layout>
      <PageHero
        title="Community Links"
        subtitle="Useful links to our diocese, local organisations, and community partners."
        imageSrc={communityHeroImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Church and Diocese</h2>
            <ul className="space-y-2 mb-10">
              <li>
                <a href="https://southwark.anglican.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Diocese of Southwark
                </a>
              </li>
              <li>
                <a href="https://www.churchofengland.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  The Church of England
                </a>
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Local Community</h2>
            <ul className="space-y-2">
              <li>
                <a href="http://www.docklandsringers.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Docklands Ringing Centre
                </a>
              </li>
              <li>
                <a href="https://bedehouse.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Bede House
                </a>
              </li>
              <li>
                <a href="https://www.rbhistory.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Rotherhithe and Bermondsey Local History Society
                </a>
              </li>
              <li>
                <a href="http://www.rbcs-choir.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Rotherhithe and Bermondsey Choral Society
                </a>
              </li>
              <li>
                <a href="https://www.peterhillsschool.co.uk/index.asp" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Peter Hills with St Mary's & St Paul's CofE School
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
