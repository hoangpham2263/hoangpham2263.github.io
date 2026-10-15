import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import HeroColumn, { ContentColumn } from "@/components/hero-column";
import MobileNav from "@/components/navbar/mobile-nav";
import type { Locale } from "@/i18n";

export default function LandingLayoutView({
  children,
  locale = "en",
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  return (
    <main className="relative w-full lg:h-screen lg:overflow-hidden p-0 sm:p-5">
      <MobileNav />
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap lg:flex-nowrap justify-between lg:divide-x">
        <HeroColumn className="w-full lg:w-2/5 bg-gradient-to-b from-primary/[0.07] via-primary/[0.02] to-transparent lg:rounded-l-2xl px-4 pt-5 pb-2 md:p-8 lg:h-full lg:min-h-0 lg:overflow-y-auto scrollbar-thin">
          <Hero locale={locale} />
        </HeroColumn>
        <ContentColumn
          id="tab-section"
          className="scroll-mt-14 relative w-full mt-0 md:mt-3 max-w-6xl mx-auto lg:mt-0 lg:w-3/5 lg:h-full lg:min-h-0 lg:overflow-y-auto scrollbar-hide px-4 pt-5 md:p-8 pb-16 lg:pb-20"
        >
          <Navbar />
          {children}
        </ContentColumn>
      </div>
    </main>
  );
}
