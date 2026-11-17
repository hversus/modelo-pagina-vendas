import checkMark from "@/assets/check-mark.svg";

const idealItems = [
  {
    description: "Encontrar a aplicação correspondente ao serviço e visualizar a montagem completa sem precisar criar o circuito do zero.",
  },
  {
    description: "Identificar rapidamente a ligação de potência, o circuito de comando, os bornes envolvidos e o caminho de cada fio.",
  },
  {
    description: "Conferir as funções e configurações necessárias para colocar o inversor e o motor em funcionamento naquela aplicação.",
  },
  {
    description: "Executar o teste indicado, observar a resposta esperada e confirmar o funcionamento da montagem antes de finalizar o serviço.",
  },
];

const IdealForYouSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-sage))" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <h2
            className="text-[34px] leading-[1.06] md:text-[42px] lg:text-[48px] lg:leading-[1.05] text-center lg:text-left"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
            }}
          >
            <span className="block">ESTE MATERIAL FOI</span>
            <span className="block">DESENVOLVIDO</span>
            <span className="block">PARA QUEM</span>
            <span className="block">DESEJA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {idealItems.map((item, index) => (
              <div
                key={index}
                className="rounded-[18px] p-[20px] md:p-[24px] text-left"
                style={{
                  backgroundColor: "hsl(var(--lp-white))",
                  boxShadow: "0 4px 20px hsl(var(--lp-dark) / 0.08)",
                  border: "1px solid hsl(var(--lp-dark) / 0.06)",
                }}
              >
                <div className="flex items-start gap-3.5">
                  <img
                    src={checkMark}
                    alt=""
                    aria-hidden="true"
                    className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] flex-shrink-0 mt-0.5"
                  />
                  <p
                    className="text-[16px] md:text-[19px] leading-[1.5]"
                    style={{
                      fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 600,
                      color: "hsl(var(--lp-black) / 0.9)",
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

export default IdealForYouSection;
