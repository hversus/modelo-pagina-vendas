import { Check, Zap } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const items = [
  "+60 Mapas Práticos de Inversores de Frequência",
  "Material visual em PDF, organizado e fácil de consultar",
  "64 mapas práticos de execução",
  "Mapas organizados por ligação, comando, referência e aplicação",
  "Índice visual para localizar rapidamente o serviço desejado",
  "Uma prancha visual independente para cada montagem",
  "Objetivo e funcionamento esperado da aplicação",
  "Alimentação e proteção do circuito",
  "Ligação de potência entre rede, inversor e motor",
  "Circuito de comando completo",
  "Identificação dos bornes utilizados",
  "Caminho visual dos fios e conexões",
  "Componentes necessários para cada montagem",
  "Dados do motor que precisam ser configurados",
  "Funções e parâmetros necessários para a aplicação",
  "Sequência de configuração da montagem",
  "Procedimento de teste funcional",
  "Resposta esperada do inversor e do motor",
  "Mapas de comando pela IHM e comando externo",
  "Mapas de comando a dois e três fios",
  "Mapas de avanço, retorno, parada e reset",
  "Mapas com potenciômetro, sinal analógico e frequências fixas",
  "Mapas para bombas, ventiladores, esteiras, exaustores e outras aplicações",
  "Acesso vitalício para consultar antes e durante os serviços",
];

const WhatYouGetSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-light))" }}
    >
      <div className="w-full max-w-[680px] mx-auto text-center">
        <h2
          className="text-[30px] md:text-[40px] leading-[1.05] mb-5 md:mb-6"
          style={{
            fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
            fontWeight: 800,
            color: "hsl(var(--lp-green-deep))",
          }}
        >
          TUDO O QUE <span style={{ color: "hsl(var(--lp-title-accent))" }}>VOCÊ VAI RECEBER</span>
        </h2>

        <div
          className="inline-flex items-center gap-2 rounded-full px-5 h-[38px] md:h-[42px] mb-6 md:mb-7"
          style={{ backgroundColor: "hsl(var(--lp-lime))" }}
        >
          <Zap
            className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] flex-shrink-0"
            style={{ color: "hsl(var(--lp-black))" }}
            fill="currentColor"
            aria-hidden="true"
          />
          <span
            className="text-[15px] md:text-[18px] font-extrabold"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              color: "hsl(var(--lp-black))",
            }}
          >
            ACESSO IMEDIATO
          </span>
        </div>

        <div
          className="rounded-[22px] p-5 md:p-7 mb-6 md:mb-8"
          style={{
            backgroundColor: "hsl(var(--lp-green-pale))",
            border: "1px solid hsl(var(--lp-white) / 0.15)",
            boxShadow: "0 12px 30px hsl(var(--lp-black) / 0.22)",
          }}
        >
          <h3
            className="text-[22px] md:text-[28px] leading-[1.1] mb-5 md:mb-6"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
            }}
          >
            Acesso imediato ao material completo
          </h3>

          <div className="mb-6 md:mb-7 flex items-center justify-center">
            <ImagePlaceholder label="Insira seu mockup aqui" dark className="w-full max-w-[420px] aspect-square" />
          </div>

          <div className="text-left space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check
                  className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] flex-shrink-0 mt-0.5"
                  style={{ color: "hsl(var(--lp-lime))" }}
                  strokeWidth={3}
                />
                <span
                  className="text-[16px] md:text-[20px] leading-[1.45]"
                  style={{
                    fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                    fontWeight: 500,
                    color: "hsl(var(--lp-white) / 0.95)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-[20px] md:text-[24px] font-extrabold mt-6 md:mt-7"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              color: "hsl(var(--lp-lime))",
            }}
          >
            E MUITO MAIS…
          </p>

          <button
            className="group w-full mt-6 md:mt-7 inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 px-8 h-[55px] md:h-[62px]"
            style={{
              backgroundColor: "hsl(var(--lp-lime))",
              borderRadius: "50px",
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--lp-black))",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.3)",
            }}
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-[16px] md:text-[21px]">
              QUERO RECEBER OS MAPAS PRÁTICOS
            </span>
            <span className="text-[18px] md:text-[24px]">→</span>
          </button>

          <p
            className="text-[14px] md:text-[17px] mt-4"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 500,
              color: "hsl(var(--lp-white) / 0.8)",
            }}
          >
            Você recebe o acesso após a confirmação do pagamento diretamente no seu WhatsApp e no seu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
