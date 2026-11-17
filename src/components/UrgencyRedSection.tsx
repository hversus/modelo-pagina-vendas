const UrgencyRedSection = () => {
  return (
    <section
      className="py-[35px] md:py-[55px] px-5 md:px-[60px]"
      style={{ backgroundColor: 'hsl(var(--lp-red-soft))' }}
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2
          className="text-[26px] md:text-[40px] lg:text-[46px] leading-[1.15] mb-4 md:mb-5"
          style={{
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 800,
            color: 'hsl(var(--lp-white))',
          }}
        >
          OFERTA PROMOCIONAL POR TEMPO LIMITADO
        </h2>

        <p
          className="text-[17px] md:text-[21px] leading-[1.5] mb-6 md:mb-8 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 500,
            color: 'hsl(var(--lp-white) / 0.95)',
          }}
        >
          Tenha em um único material 64 montagens práticas organizadas por tipo de ligação, comando, referência de velocidade e aplicação com motores elétricos. Pare de perder tempo procurando uma parte da ligação em um vídeo, outra no manual e outra em anotações espalhadas.
        </p>

        <p
          className="text-[17px] md:text-[21px] leading-[1.5] mb-6 md:mb-8 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 500,
            color: 'hsl(var(--lp-white) / 0.95)',
          }}
        >
          Com os mapas separados por aplicação, você pode abrir o PDF, localizar o serviço que está executando e consultar diretamente o que ligar, onde ligar, quais configurações realizar e como testar a montagem antes de concluir o atendimento.
        </p>

        <button
          className="group inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 px-8 h-[55px] md:h-[65px]"
          style={{
            backgroundColor: 'hsl(var(--lp-lime))',
            borderRadius: '50px',
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 700,
            color: 'hsl(var(--lp-black))',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.3)',
          }}
          onClick={() =>
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span className="text-[16px] md:text-[21px]">QUERO GARANTIR MEU ACESSO</span>
          <span className="text-[18px] md:text-[24px]">→</span>
        </button>
      </div>
    </section>
  );
};

export default UrgencyRedSection;
