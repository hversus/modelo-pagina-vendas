import { Check } from "lucide-react";
import cartAsset from "@/assets/step-cart.png.asset.json";
import cardAsset from "@/assets/step-card.png.asset.json";
import folderAsset from "@/assets/step-folder.png.asset.json";

type Step = {
  number: string;
  icon: string;
  title: string;
  description?: string;
  extra?: string;
  bullets?: string[];
};

const steps: Step[] = [
  {
    number: "Passo 1",
    icon: cartAsset.url,
    title: "",
    description: "Você finaliza a compra de forma segura.",
  },
  {
    number: "Passo 2",
    icon: cardAsset.url,
    title: "",
    description: "Receba o acesso na hora, direto no seu WhatsApp e no seu e-mail.",
    extra: "O material é liberado logo após a confirmação do pagamento.",
    bullets: ["Celular", "Tablet", "Computador"],
  },
  {
    number: "Passo 3",
    icon: folderAsset.url,
    title: "",
    description: "Baixe e visualize o material.",
    extra: "Você poderá:",
    bullets: [
      "Baixar os mapas em PDF",
      "Consultar antes e durante os serviços",
      "Imprimir as páginas que desejar",
    ],
  },
];

const HowToAccessSection = () => {
  return (
    <section className="w-full py-[60px] md:py-[80px] px-4 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-[32px] md:mb-[48px]">
          <h2
            className="text-[26px] md:text-[40px] leading-[1.1]"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 900,
              color: "hsl(var(--lp-black))",
              letterSpacing: "-0.01em",
            }}
          >
            COMO FUNCIONA O ACESSO:
          </h2>
          <p
            className="mt-2 text-[15px] md:text-[18px]"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--lp-black))",
            }}
          >
            (PASSO A PASSO)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 md:p-7 rounded-2xl"
              style={{
                backgroundColor: "#f5f2ec",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={step.icon}
                alt={step.number}
                className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] object-contain mb-4"
              />
              <h3
                className="text-[16px] md:text-[18px] mb-2"
                style={{
                  fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                  fontWeight: 800,
                  color: "hsl(var(--lp-black))",
                }}
              >
                {step.number}
              </h3>
              {step.description && (
                <p
                  className="text-[16px] md:text-[19px] leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                    fontWeight: 500,
                    color: "hsl(var(--lp-black))",
                  }}
                >
                  {step.description}
                </p>
              )}
              {step.extra && (
                <p
                  className="mt-2 text-[16px] md:text-[19px] leading-relaxed"
                  style={{
                    fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                    fontWeight: 500,
                    color: "hsl(var(--lp-black))",
                  }}
                >
                  {step.extra}
                </p>
              )}
              {step.bullets && (
                <ul className="mt-4 w-full max-w-[240px] mx-auto space-y-2 text-left">
                  {step.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[16px] md:text-[19px]"
                      style={{
                        fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                        fontWeight: 500,
                        color: "hsl(var(--lp-black))",
                      }}
                    >
                      <Check
                        className="w-[16px] h-[16px] mt-[3px] shrink-0"
                        style={{ color: "#16a34a" }}
                        strokeWidth={3}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[36px] md:mt-[48px]">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 rounded-full text-[18px] md:text-[22px] font-bold transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              backgroundColor: "hsl(var(--lp-lime))",
              color: "hsl(var(--lp-black))",
              boxShadow: "0 8px 0 hsl(var(--lp-lime-shadow)), 0 0 32px hsl(var(--lp-lime) / 0.45)",
            }}
          >
            QUERO ACESSAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToAccessSection;
