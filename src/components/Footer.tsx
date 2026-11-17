const Footer = () => {
  return (
    <footer 
      className="py-[30px] px-5 md:px-[60px] mt-[40px]"
      style={{ backgroundColor: 'hsl(var(--lp-card-black))' }}
    >
      <div className="w-full max-w-4xl mx-auto text-center space-y-[14px]">
        <p 
          className="text-[14px] leading-[1.8]"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 400,
            color: 'hsl(var(--lp-subtle))'
          }}
        >
          Copyright © 2026 · Todos os direitos reservados.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Este é um material técnico independente e não possui vínculo, autorização, parceria ou endosso de fabricantes de inversores de frequência, motores elétricos ou equipamentos industriais.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Este material possui finalidade técnica e de apoio à consulta. As ligações, configurações e testes apresentados devem ser conferidos e aplicados de acordo com as características do equipamento instalado, a tensão de alimentação, os dados do motor, os componentes utilizados e as condições reais da instalação.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          A instalação, a parametrização, os testes e qualquer intervenção em circuitos elétricos devem ser realizados por profissional capacitado, com o sistema desenergizado sempre que aplicável e respeitando as normas de segurança e os procedimentos técnicos correspondentes.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Este site não possui qualquer vínculo com Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-2xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          A reprodução não autorizada, total ou parcial, por qualquer meio, constitui violação de direitos autorais e pode resultar em sanções civis e criminais, de acordo com a legislação aplicável.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
