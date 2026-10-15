import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
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
        <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:min-h-0 lg:overflow-y-auto scrollbar-thin">
          <Hero locale={locale} />
        </div>
        <div
          id="tab-section"
          className="scroll-mt-14 relative w-full mt-3 max-w-6xl mx-auto lg:mt-0 lg:w-3/5 lg:h-full lg:min-h-0 lg:overflow-y-auto scrollbar-hide p-2 md:p-8 pb-16 lg:pb-20"
        >
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
}
