import { Zap, Smartphone } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import iconWhatsapp from "@/assets/icon-whatsapp.png.asset.json";
import iconGmail from "@/assets/icon-gmail.png.asset.json";
import heroAvatars from "@/assets/hero-eletricistas-avatars.png.asset.json";

const HeroSection = () => {
  const fontFamily = "Montserrat, Inter, Lato, system-ui, sans-serif";

  return (
    <section
      className="relative py-[30px] md:py-[50px] px-5 md:px-[60px] lg:px-[80px]"
      style={{ backgroundColor: "hsl(214 52% 30%)" }}
    >
      <div className="relative max-w-[920px] mx-auto z-10 flex flex-col items-center text-center">
        <h1
          className="text-[24px] xs:text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[1.08] mb-4"
          style={{
            fontFamily,
            fontWeight: 800,
            color: "hsl(var(--lp-white))",
          }}
        >
          +60 MAPAS PRÁTICOS DE INVERSORES DE FREQUÊNCIA
        </h1>

        <p
          className="max-w-[760px] text-[17px] md:text-[24px] lg:text-[27px] leading-[1.2] mb-4"
          style={{
            fontFamily,
            fontWeight: 800,
            color: "hsl(var(--lp-lime))",
          }}
        >
          ENCONTRE A APLICAÇÃO, ABRA O MAPA CORRESPONDENTE E SAIBA O QUE LIGAR, ONDE LIGAR, QUAIS PARÂMETROS CONFIGURAR E COMO TESTAR
        </p>

        <div className="w-full flex items-center justify-center mb-6">
          <ImagePlaceholder label="Insira seu mockup aqui" dark className="w-full max-w-[600px] aspect-square" />
        </div>

        <p
          className="max-w-[700px] mb-6 text-[17px] md:text-[21px] lg:text-[23px] leading-[1.5]"
          style={{
            fontFamily,
            fontWeight: 500,
            color: "hsl(var(--lp-white) / 0.9)",
          }}
        >
          Ligações de potência, circuitos de comando, identificação de bornes, parâmetros e testes funcionais organizados em 64 mapas práticos para aplicações reais com motores elétricos. Você abre no celular, localiza o serviço que precisa executar e visualiza, em uma única prancha, a montagem completa: alimentação, motor, comando, caminho dos fios, configuração necessária e sequência de teste.
        </p>


        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 h-[36px]"
            style={{
              backgroundColor: "hsl(var(--lp-white))",
              color: "hsl(var(--lp-black))",
              fontFamily,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Zap className="w-[16px] h-[16px]" fill="currentColor" />
            Acesso imediato
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 h-[36px]"
            style={{
              backgroundColor: "hsl(var(--lp-white))",
              color: "hsl(var(--lp-black))",
              fontFamily,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Smartphone className="w-[16px] h-[16px]" />
            100% digital
          </span>
        </div>

        <p
          className="text-[14px] md:text-[17px] text-center flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-5"
          style={{
            fontFamily,
            fontWeight: 700,
            color: "hsl(var(--lp-white))",
          }}
        >
          <span className="w-full md:w-auto">Você recebe tudo na hora, direto no seu</span>
          <img src={iconWhatsapp.url} alt="WhatsApp" className="w-[20px] h-[20px] inline-block" />
          <span>WhatsApp e no seu</span>
          <img src={iconGmail.url} alt="E-mail" className="w-[20px] h-[20px] inline-block" />
          <span>e-mail</span>
        </p>

        <button
          className="group inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 px-8 h-[55px] md:h-[62px] mb-4"
          style={{
            backgroundColor: "hsl(var(--lp-lime))",
            borderRadius: "10px",
            fontFamily,
            fontWeight: 700,
            color: "hsl(var(--lp-black))",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.3)",
          }}
          onClick={() =>
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-[15px] md:text-[20px]">QUERO ACESSAR OS MAPAS PRÁTICOS AGORA</span>
          <span className="text-[18px] md:text-[22px]">→</span>
        </button>

        <div className="flex flex-col items-center gap-2 mt-4">
          <img
            src={heroAvatars.url}
            alt="Feito para eletricistas, técnicos de manutenção e instaladores"
            className="h-[48px] md:h-[56px] w-auto object-contain"
          />
          <p
            className="text-[15px] md:text-[18px] text-center"
            style={{
              fontFamily,
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
              letterSpacing: "0.5px",
            }}
          >
            ELETRICISTAS, TÉCNICOS DE MANUTENÇÃO, ELETROTÉCNICOS E INSTALADORES
          </p>
          <p
            className="text-[15px] md:text-[18px] text-center"
            style={{
              fontFamily,
              fontWeight: 800,
              color: "hsl(var(--lp-lime))",
              letterSpacing: "0.5px",
            }}
          >
            QUE PRECISAM LIGAR, CONFIGURAR E TESTAR INVERSORES EM SERVIÇOS REAIS
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
