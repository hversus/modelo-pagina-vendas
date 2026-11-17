import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import DemoCarousel from "@/components/DemoCarousel";

import WhatYouFindSection from "@/components/WhatYouFindSection";

import UrgencyRedSection from "@/components/UrgencyRedSection";
import IdealForYouSection from "@/components/IdealForYouSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import HowToAccessSection from "@/components/HowToAccessSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Banner Superior de Urgência */}
      <TopBanner />
      
      {/* 2. Hero - Bloco 1 */}
      <HeroSection />


      {/* 3. Amostras dos Mapas Práticos */}
      <DemoCarousel />

      {/* 4. O que você encontra nos Mapas Práticos */}
      <WhatYouFindSection />

      {/* 5. Urgência (Bloco vermelho) */}
      <UrgencyRedSection />

      
      {/* 7. Ideal para você */}
      <IdealForYouSection />
      
      {/* 8. O que você vai receber - Bloco 5 */}
      <WhatYouGetSection />
      
      {/* 9. Bônus - Bloco 7 */}
      <BonusSection />
      
      
      {/* 11. Preços - Bloco 9 */}
      <PricingSection />
      
      {/* 11. Garantia + Autoridade - Bloco 8 */}
      <GuaranteeSection />


      {/* 12. Como funciona (passo a passo) - Bloco 9 */}
      <HowToAccessSection />

      
      
      {/* 13. FAQ */}
      <FAQSection />
      
      {/* 14. Footer */}
      <Footer />
    </main>
  );
};

export default Index;
