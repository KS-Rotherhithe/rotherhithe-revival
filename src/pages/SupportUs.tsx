import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";
import supportImg from "@/assets/support-stock.jpg";

export default function SupportUs() {
  return (
    <Layout>
      <PageHero
        title="Support Us"
        subtitle="Help us maintain this historic church for future generations."
        imageSrc={supportImg}
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              St Mary's has served Rotherhithe for over 1,000 years. Your generosity helps us keep the church doors open, maintain our Grade I listed building, and continue serving the community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Ways to Help</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <SubpageCard
                title="Donate"
                synopsis="Support St Mary's through bank transfer, card donation, or Gift Aid. Every contribution makes a difference."
                imageSrc={supportImg}
                href="/support-us/donate"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
