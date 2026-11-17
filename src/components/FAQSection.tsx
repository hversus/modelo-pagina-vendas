import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como recebo os +60 Mapas Práticos de Inversores de Frequência?",
    answer: "O acesso é enviado logo após a confirmação do pagamento, direto no seu WhatsApp e no seu e-mail. O material é em PDF e pode ser baixado na hora.",
  },
  {
    question: "Consigo localizar rapidamente a aplicação que preciso executar?",
    answer: "Sim. O material é organizado por aplicação, o que permite localizar o mapa correspondente e abrir direto na montagem que você precisa executar.",
  },
  {
    question: "Os mapas apresentam montagens completas ou apenas explicações sobre inversores?",
    answer: "Os mapas apresentam montagens completas. Cada prancha mostra a aplicação do começo ao fim, e não apenas explicações teóricas sobre inversores.",
  },
  {
    question: "O material mostra as ligações de potência e de comando?",
    answer: "Sim. Cada mapa apresenta a alimentação, a ligação de potência e o circuito de comando utilizado na aplicação.",
  },
  {
    question: "Os mapas identificam os bornes e o caminho dos fios?",
    answer: "Sim. Os bornes utilizados são identificados e o caminho de cada fio é indicado, para você saber o que ligar e onde ligar.",
  },
  {
    question: "O material apresenta as configurações necessárias e a sequência de teste?",
    answer: "Sim. Cada mapa traz os dados do motor, as funções e os parâmetros exigidos, a sequência de configuração e o teste funcional indicado.",
  },
  {
    question: "Os mapas estão organizados por tipo de ligação, comando e aplicação?",
    answer: "Sim. A organização segue tipo de ligação, tipo de comando e aplicação, o que facilita a consulta durante o serviço.",
  },
  {
    question: "Serve para eletricistas que realizam instalações e manutenções industriais?",
    answer: "Sim. O material foi feito para uso prático em campo, tanto em instalações novas quanto em manutenções.",
  },
  {
    question: "Serve para técnicos, eletrotécnicos, instaladores e estudantes da área?",
    answer: "Sim. O conteúdo é visual e direto, atendendo tanto quem já atua na área quanto quem está em formação.",
  },
  {
    question: "O material substitui as especificações técnicas e os procedimentos do equipamento instalado?",
    answer: "Não. O material é um guia visual de apoio. As especificações técnicas, os manuais e os procedimentos do equipamento instalado devem sempre ser consultados e respeitados.",
  },
  {
    question: "Quanto tempo leva para receber o material?",
    answer: "O acesso é imediato. Assim que o pagamento é confirmado, você recebe o material no WhatsApp e no e-mail.",
  },
  {
    question: "Posso imprimir o PDF?",
    answer: "Sim. Você pode imprimir as páginas que desejar e levar os mapas para o local do serviço.",
  },
  {
    question: "O material possui garantia?",
    answer: "Sim. Você tem 15 dias de garantia. Se não gostar do material, é só solicitar a devolução e o valor é reembolsado.",
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="py-[25px] md:py-[50px] px-5 md:px-[60px]"
      style={{ backgroundColor: 'hsl(var(--lp-light))' }}
    >
      <div className="w-full max-w-[800px] mx-auto">
        <div className="text-center mb-[30px] md:mb-[40px]">
          <h2 
            className="text-[28px] md:text-[42px]"
            style={{ 
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 700,
              color: 'hsl(var(--lp-black))'
            }}
          >
            Perguntas Frequentes
          </h2>
          <p
            className="mt-3 text-[16px] md:text-[20px]"
            style={{
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 400,
              color: 'hsl(var(--lp-muted))'
            }}
          >
            Tire suas dúvidas antes de garantir o seu material
          </p>
        </div>
        
        <div className="space-y-[10px]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[14px] overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: 'hsl(var(--lp-white))',
                boxShadow: openIndex === index 
                  ? '0 8px 25px hsl(var(--lp-dark) / 0.12)' 
                  : '0 2px 10px hsl(var(--lp-dark) / 0.06)',
                border: '1px solid hsl(var(--lp-accent) / 0.12)'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-[16px] md:p-[18px] text-left cursor-pointer"
              >
                <span 
                  className="text-[16px] md:text-[20px] pr-4"
                  style={{ 
                    fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--lp-black))'
                  }}
                >
                  {faq.question}
                </span>
                
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? 'hsl(var(--lp-lime))' : 'hsl(var(--lp-accent) / 0.1)',
                  }}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" style={{ color: 'hsl(var(--lp-black))' }} strokeWidth={3} />
                  ) : (
                    <Plus className="w-4 h-4" style={{ color: 'hsl(var(--lp-accent))' }} strokeWidth={3} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-[16px] md:px-[18px] pb-[16px] md:pb-[18px]">
                  <p
                    className="text-[15px] md:text-[17px] leading-relaxed"
                    style={{
                      fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                      fontWeight: 400,
                      color: 'hsl(var(--lp-muted))'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-[40px]">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 h-[55px] md:h-[60px] rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'hsl(var(--lp-lime))',
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 700,
              color: 'hsl(var(--lp-black))',
              boxShadow: '0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.15)',
            }}
          >
            <span className="text-[16px] md:text-[20px]">SIM, QUERO ACESSAR OS MAPAS PRÁTICOS AGORA! →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
