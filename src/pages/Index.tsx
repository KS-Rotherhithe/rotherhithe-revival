import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SubpageCard from "@/components/SubpageCard";
import homeHeroImg from "@/assets/home-hero.png";
import homeJoinusImg from "@/assets/home-joinus.png";
import worshipTileImg from "@/assets/worship-hero.jpeg";
import supportImg from "@/assets/support-choir.webp";

const RECTOR_PHOTO = "https://stmaryrotherhithe.com/wp-content/uploads/2005/05/20180124_114315-1.webp";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[540px] flex items-center overflow-hidden">
        <img
          src={homeHeroImg}
          alt="St Mary's Church, Rotherhithe"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              Est. 1716 · Rotherhithe, London
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-xl text-balance">
              Welcome to St Mary the Virgin
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-white/85 text-lg md:text-xl max-w-lg leading-relaxed">
              A living parish church on the banks of the Thames — worshipping on this site for over 1,000 years.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/worship"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all"
              >
                Join Us This Sunday
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-white/10 active:scale-[0.97] transition-all"
              >
                Plan Your Visit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service times */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  Join Us This Sunday
                </h2>
                <p className="text-lg text-accent font-semibold mb-1">Parish Eucharist — Sundays at 10:00am</p>
                <p className="text-muted-foreground italic mb-6">All welcome. Teas and coffees served after the service.</p>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Weekday &amp; Weekend Services</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 pr-4 font-semibold">Service</th>
                        <th className="text-left py-3 pr-4 font-semibold">Day</th>
                        <th className="text-left py-3 font-semibold">Time</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4">Parish Eucharist</td>
                        <td className="py-3 pr-4">Sunday</td>
                        <td className="py-3">10:00am</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4">Evening Prayer</td>
                        <td className="py-3 pr-4">Sunday</td>
                        <td className="py-3">6:00pm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4">Eucharist</td>
                        <td className="py-3 pr-4">Tue &amp; Thu</td>
                        <td className="py-3">12:00 noon</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Eucharist</td>
                        <td className="py-3 pr-4">Fri &amp; Sat</td>
                        <td className="py-3">9:30am</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Benediction is usually on festivals and the first Sunday of the month.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={homeJoinusImg}
                  alt="Interior of St Mary's Church"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* From the Rector */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center max-w-4xl mx-auto">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">From the Rector</h2>
                <blockquote className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-accent pl-6">
                  On behalf of everyone at St Mary's, welcome. Whether you are joining us for worship, exploring our history, or researching your family roots — you are most welcome here.
                </blockquote>
                <p className="mt-6 font-medium text-foreground">— Fr Mark Nicholls, Rector</p>
              </div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-secondary mx-auto">
                <img
                  src={RECTOR_PHOTO}
                  alt="Fr Mark Nicholls"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick links as SubpageCards */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Explore St Mary's
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <SubpageCard
                title="Worship With Us"
                synopsis="Sunday Parish Eucharist at 10am. Weekday services throughout the week. All are welcome."
                imageSrc={worshipTileImg}
                href="/worship"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SubpageCard
                title="Support St Mary's"
                synopsis="Help us maintain this Grade I listed church for future generations through donations and volunteering."
                imageSrc={supportImg}
                href="/support-us"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg mb-2">
              <strong className="text-foreground">St Mary's Church</strong>, Saint Marychurch St, London SE16 4HZ
            </p>
            <p className="text-muted-foreground mb-8">
              Phone: 07909 546 659 · Email:{" "}
              <a href="mailto:hello@stmaryrotherhithe.com" className="text-accent hover:underline">
                hello@stmaryrotherhithe.com
              </a>
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
