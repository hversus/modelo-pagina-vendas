import { Check, ArrowRight, Shield } from "lucide-react";
import paymentIcons from "@/assets/payment-icons.webp";
import clockIcon from "@/assets/clock-alarm.svg";
import ImagePlaceholder from "./ImagePlaceholder";
import iconWhatsapp from "@/assets/icon-whatsapp.png.asset.json";
import iconGmail from "@/assets/icon-gmail.png.asset.json";




const FONT = "Montserrat, Inter, Lato, system-ui, sans-serif";

const basicFeatures = [
  "+60 Mapas Práticos de Inversores de Frequência",
];

const completeFeatures = [
  "+60 Mapas Práticos de Inversores de Frequência",
  "Bônus 1: +30 Rotas Visuais de Falhas e Alarmes em Inversores de Frequência",
  "Bônus 2: Tabela Rápida de Parâmetros Essenciais por Função",
  "Bônus 3: +25 Testes Elétricos com Multímetro e Alicate Amperímetro",
  "Bônus 4: Kit de Comissionamento e Registro de Parametrização",
  "Envio imediato por WhatsApp e e-mail",
  "Acesso vitalício ao material",
  "Garantia de 15 dias incondicional",
  "Clique no botão abaixo e garanta já o seu! ↴",
];



const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="bg-[hsl(var(--lp-light))] py-[30px] md:py-[50px] px-5 md:px-[60px]"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Banner de urgência topo */}
        <div className="flex justify-center mb-[18px] md:mb-[22px]">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
            style={{ backgroundColor: "hsl(var(--lp-danger))" }}
          >
            <img src={clockIcon} alt="" className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            <span
              className="text-[14px] md:text-[17px] font-extrabold tracking-wide text-white uppercase"
              style={{ fontFamily: FONT }}
            >
              Oferta válida por tempo limitado
            </span>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-[24px] md:mb-[36px]">
          <h2
            className="text-[24px] md:text-[36px] leading-[1.15]"
            style={{ fontFamily: FONT, fontWeight: 800, color: "hsl(var(--lp-black))" }}
          >
            Aproveite Enquanto o <br className="hidden md:block" />
            Plano Completo está em <span style={{ color: "hsl(var(--lp-danger))" }}>Promoção!</span>
          </h2>
          <p
            className="mt-3 text-[15px] md:text-[19px] leading-[1.4] flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
            style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-black) / 0.85)" }}
          >
            <span>E receba instantaneamente no seu</span>
            <span className="inline-flex items-center gap-1.5">
              <img src={iconWhatsapp.url} alt="" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] object-contain" />
              WhatsApp
            </span>
            <span>e</span>
            <span className="inline-flex items-center gap-1.5">
              <img src={iconGmail.url} alt="" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] object-contain" />
              e-mail
            </span>
          </p>
          <div
            className="mx-auto mt-4 h-[2px] w-[60px]"
            style={{ backgroundColor: "hsl(var(--lp-black) / 0.2)" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-[26px] md:gap-[32px]">
          {/* ============ Plano Básico ============ */}
          <div
            className="w-full max-w-[380px] lg:max-w-[400px] rounded-[16px] p-[22px] md:p-[26px] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "hsl(var(--lp-nude))",
              boxShadow: "0 12px 30px hsl(var(--lp-green-deep) / 0.12)",
              border: "1px solid hsl(var(--lp-nude-accent) / 0.2)",
            }}
          >
            <h3
              className="text-center text-[22px] md:text-[26px] mb-[16px] uppercase tracking-wide"
              style={{ fontFamily: FONT, fontWeight: 800, color: "hsl(var(--lp-black))" }}
            >
              Plano Básico
            </h3>

            <div className="mb-[16px] flex items-center justify-center">
              <ImagePlaceholder label="Insira o mockup do Plano Básico aqui" className="w-full max-w-[300px] aspect-square" />
            </div>



            <div className="space-y-[10px] mb-[18px]">
              {basicFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check
                    className="w-[16px] h-[16px] flex-shrink-0 mt-0.5"
                    style={{ color: "hsl(var(--lp-check))" }}
                    strokeWidth={3}
                  />
                  <span
                    className="text-[15px] md:text-[18px] leading-[1.45]"
                    style={{ fontFamily: FONT, fontWeight: 500, color: "hsl(var(--lp-black) / 0.85)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-center text-[20px] md:text-[24px] mb-[2px] line-through"
              style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-danger))" }}
            >
              R$39,90
            </p>

            <div className="text-center mb-[4px]">
              <span
                className="text-[42px] md:text-[52px]"
                style={{ fontFamily: FONT, fontWeight: 800, color: "hsl(var(--lp-check))" }}
              >
                R$17,90
              </span>
            </div>

            <p
              className="text-center text-[15px] md:text-[19px] mb-[12px]"
              style={{ fontFamily: FONT, fontWeight: 600, color: "hsl(var(--lp-black) / 0.7)" }}
            >
              ou 2x de R$9,42 no cartão
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-[14px] text-center">
              <span
                className="text-[13px] md:text-[15px] flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1"
                style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-black) / 0.85)" }}
              >
                Receba direto no seu
                <span className="inline-flex items-center gap-1">
                  <img src={iconWhatsapp.url} alt="" className="w-[16px] h-[16px] object-contain" />
                  WhatsApp
                </span>
                e
                <span className="inline-flex items-center gap-1">
                  <img src={iconGmail.url} alt="" className="w-[16px] h-[16px] object-contain" />
                  e-mail
                </span>
              </span>
            </div>


            <a
              href="https://pay.hotmart.com/I107735079K?checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto w-full h-[54px] md:h-[58px] rounded-md flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] px-4 text-center"
              style={{
                backgroundColor: "hsl(var(--lp-lime))",
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(15px, 3.5vw, 18px)",
                color: "hsl(var(--lp-black))",
                boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow))",
                whiteSpace: "nowrap",
              }}
            >
              QUERO APROVEITAR
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>

            <div className="flex justify-center mt-[16px]">
              <div
                className="w-full max-w-[380px] rounded-md px-4 py-3 text-center uppercase"
                style={{
                  backgroundColor: "hsl(var(--lp-danger))",
                  color: "hsl(var(--lp-white))",
                  fontFamily: FONT,
                  fontWeight: 800,
                  fontSize: "clamp(12px, 2.7vw, 15px)",
                  letterSpacing: "0.06em",
                }}
              >
                Ainda dá tempo de levar a melhor opção!
              </div>
            </div>

          </div>

          {/* ============ Plano Completo ============ */}
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] mt-[24px] lg:mt-0">
            {/* Badge MAIS VENDIDO */}
            <div className="absolute -top-[24px] left-1/2 -translate-x-1/2 z-10">
              <span
                className="px-4 py-[7px] rounded-full whitespace-nowrap text-[14px] md:text-[16px] font-extrabold uppercase tracking-wide"
                style={{
                  backgroundColor: "hsl(var(--lp-lime))",
                  color: "hsl(var(--lp-black))",
                  boxShadow: "0 4px 12px hsl(var(--lp-black) / 0.25)",
                  fontFamily: FONT,
                }}
              >
                ⭐ Mais Vendido
              </span>
            </div>

            <div
              className="rounded-[16px] overflow-hidden"
              style={{
                background: "hsl(var(--lp-green-soft))",
                boxShadow: "0 12px 30px hsl(var(--lp-green-deep) / 0.22)",
                border: "1px solid hsl(var(--lp-green-deep) / 0.25)",
              }}
            >
              {/* Header vermelho */}
              <div
                className="pt-[38px] pb-[12px] px-4 text-center"
                style={{ backgroundColor: "hsl(var(--lp-danger))" }}
              >
                <h3
                  className="text-[20px] md:text-[24px] uppercase tracking-wide text-white"
                  style={{ fontFamily: FONT, fontWeight: 800 }}
                >
                  Plano Completo
                </h3>
              </div>

              <div className="p-[22px] md:p-[26px]">
                <p
                  className="text-center text-[14px] md:text-[16px] uppercase tracking-wider mb-[10px]"
                  style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-lime))" }}
                >
                  ✓ Todos os bônus inclusos
                </p>

                <h4
                  className="text-center text-[17px] md:text-[20px] leading-[1.2] mb-[16px] uppercase"
                  style={{ fontFamily: FONT, fontWeight: 800, color: "hsl(var(--lp-white))" }}
                >
                  +60 Mapas Práticos de Inversores de Frequência
                </h4>

                <div className="flex justify-center mb-[18px]">
                  <ImagePlaceholder label="Insira o mockup do Plano Completo aqui" dark className="w-full max-w-[340px] aspect-square" />
                </div>



                <div className="space-y-[10px] mb-[20px]">
                  {completeFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        className="w-[16px] h-[16px] flex-shrink-0 mt-0.5"
                        style={{ color: "hsl(var(--lp-lime))" }}
                        strokeWidth={3}
                      />
                      <span
                        className="text-[15px] md:text-[18px] leading-[1.45]"
                        style={{ fontFamily: FONT, fontWeight: 500, color: "hsl(var(--lp-white) / 0.92)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="text-center text-[20px] md:text-[24px] mb-[2px] line-through"
                  style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-danger))" }}
                >
                  R$59,90
                </p>

                <div className="text-center mb-[4px]">
                  <span
                    className="text-[48px] md:text-[58px]"
                    style={{ fontFamily: FONT, fontWeight: 800, color: "hsl(var(--lp-lime))" }}
                  >
                    R$27,90
                  </span>
                </div>

                <p
                  className="text-center text-[15px] md:text-[19px] mb-[14px]"
                  style={{ fontFamily: FONT, fontWeight: 600, color: "hsl(var(--lp-white) / 0.75)" }}
                >
                  ou 3x de R$9,96 no cartão
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-[16px] text-center">
                  <span
                    className="text-[13px] md:text-[15px] flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1"
                    style={{ fontFamily: FONT, fontWeight: 700, color: "hsl(var(--lp-white))" }}
                  >
                    Receba direto no seu
                    <span className="inline-flex items-center gap-1">
                      <img src={iconWhatsapp.url} alt="" className="w-[16px] h-[16px] object-contain" />
                      WhatsApp
                    </span>
                    e
                    <span className="inline-flex items-center gap-1">
                      <img src={iconGmail.url} alt="" className="w-[16px] h-[16px] object-contain" />
                      e-mail
                    </span>
                  </span>
                </div>


                <a
                  href="https://pay.hotmart.com/I107735079K?off=5fkxtl9z&checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[58px] md:h-[64px] rounded-md flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] px-4 text-center"
                  style={{
                    backgroundColor: "hsl(var(--lp-lime))",
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: "clamp(15px, 3.5vw, 18px)",
                    color: "hsl(var(--lp-black))",
                    boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow))",
                    whiteSpace: "nowrap",
                  }}
                >
                  QUERO APROVEITAR
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>

                <div className="flex justify-center items-center gap-2 mt-[16px]">
                  <Shield className="w-4 h-4" style={{ color: "hsl(var(--lp-lime))" }} />
                  <span
                    className="text-[14px] md:text-[17px]"
                    style={{ fontFamily: FONT, fontWeight: 500, color: "hsl(var(--lp-white) / 0.7)" }}
                  >
                    15 dias de garantia incondicional
                  </span>
                </div>

                <div className="flex justify-center mt-[10px]">
                  <img
                    src={paymentIcons}
                    alt="Formas de pagamento"
                    className="h-[22px] md:h-[26px] object-contain opacity-90"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
