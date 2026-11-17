import seloGarantia from "@/assets/selo-garantia-15-dias.avif";

const GuaranteeSection = () => {
  return (
    <section
      className="py-[40px] md:py-[60px] px-5 md:px-[60px]"
      style={{ backgroundColor: 'hsl(var(--lp-blue))' }}
    >
      <div className="w-full max-w-4xl mx-auto space-y-[40px]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-shrink-0">
            <img
              src={seloGarantia}
              alt="Selo de garantia de satisfação"
              className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <h2
              className="text-[24px] md:text-[32px] leading-[1.2] mb-3"
              style={{
                fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--lp-white))',
              }}
            >
              Garantia de{" "}
              <span style={{ color: 'hsl(var(--lp-nude))' }}>15 dias</span>
            </h2>
            <p
              className="text-[16px] md:text-[20px] uppercase tracking-wide mb-3"
              style={{
                fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--lp-nude))',
              }}
            >
              Seu investimento é totalmente seguro
            </p>
            <p
              className="text-[17px] md:text-[21px] leading-[1.6]"
              style={{
                fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                fontWeight: 400,
                color: 'hsl(var(--lp-white) / 0.92)',
              }}
            >
              Você terá <strong>15 dias para acessar e avaliar o material</strong>. Caso os mapas práticos não ajudem você a localizar as aplicações, visualizar as ligações, identificar os bornes, conferir as configurações necessárias e executar os testes apresentados, basta solicitar o reembolso dentro do prazo da garantia e devolveremos o valor pago. <strong>Sem complicação e sem burocracia.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
