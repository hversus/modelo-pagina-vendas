import checkMark from "@/assets/check-mark.svg";
import ImagePlaceholder from "./ImagePlaceholder";

const items = [
  {
    title: "Montagens completas organizadas por aplicação",
    description:
      "Localize o serviço que precisa executar e abra o mapa correspondente para visualizar a montagem completa, sem precisar reunir partes da solução em diferentes vídeos, manuais e anotações.",
  },
  {
    title: "Ligações, bornes e caminho dos fios",
    description:
      "Visualize a alimentação do inversor, a ligação do motor, o circuito de comando, os componentes envolvidos, os bornes utilizados e o caminho de cada fio dentro da aplicação.",
  },
  {
    title: "Parâmetros necessários para cada montagem",
    description:
      "Confira quais funções precisam ser configuradas para colocar a aplicação em funcionamento, incluindo dados do motor, fonte de comando, referência de velocidade, entradas, saídas, rampas e demais ajustes exigidos pela montagem.",
  },
  {
    title: "Teste funcional e resposta esperada",
    description:
      "Depois de realizar a ligação e a parametrização, siga a sequência indicada para testar o conjunto e conferir se o inversor, o comando e o motor estão respondendo como previsto.",
  },
];

const WhatYouFindSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-[30px] md:mb-[50px]">
          <h2
            className="text-[26px] md:text-[38px] leading-tight"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--lp-white))",
            }}
          >
            O que você encontra nos +60 Mapas Práticos de Inversores de Frequência
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div
            className="w-full rounded-[16px] overflow-hidden"
            style={{ backgroundColor: "hsl(var(--lp-white))" }}
          >
            <ImagePlaceholder label="Insira sua imagem aqui" className="w-full aspect-[3/4]" />
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[16px] p-5 md:p-6"
                style={{
                  backgroundColor: "hsl(var(--lp-white))",
                  boxShadow: "0 4px 20px hsl(var(--lp-dark) / 0.08)",
                  border: "1px solid hsl(var(--lp-dark) / 0.06)",
                }}
              >
                <img
                  src={checkMark}
                  alt=""
                  aria-hidden="true"
                  className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    className="text-[16px] md:text-[18px] mb-1.5"
                    style={{
                      fontFamily:
                        "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 700,
                      color: "hsl(var(--lp-dark))",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[15px] md:text-[19px] leading-[1.5]"
                    style={{
                      fontFamily:
                        "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 500,
                      color: "hsl(var(--lp-dark) / 0.75)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouFindSection;
