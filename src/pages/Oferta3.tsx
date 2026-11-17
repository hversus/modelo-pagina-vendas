import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const FONT = "Montserrat, Inter, Lato, system-ui, sans-serif";
const CTA_CLASS =
  "inline-flex items-center justify-center gap-3 rounded-full px-7 md:px-10 h-[54px] md:h-[62px] transition-transform duration-300 hover:scale-105";

const goToPricing = () =>
  document.getElementById("oferta-3-pricing")?.scrollIntoView({ behavior: "smooth" });

const CtaButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    onClick={goToPricing}
    className={CTA_CLASS}
    style={{
      backgroundColor: "hsl(var(--lp-lime))",
      color: "hsl(var(--lp-black))",
      fontFamily: FONT,
      fontWeight: 800,
      boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow)), 0 10px 28px hsl(0 0% 0% / 0.18)",
    }}
  >
    {children}
    <ArrowRight className="w-5 h-5" aria-hidden="true" />
  </button>
);

const benefits = [
  {
    title: "Benefício principal da oferta",
    description: "Explique aqui a transformação mais importante que o produto entrega.",
  },
  {
    title: "Mais clareza para agir",
    description: "Mostre como a solução ajuda o cliente a sair da dúvida e avançar.",
  },
  {
    title: "Aplicação prática",
    description: "Descreva o que a pessoa conseguirá fazer com o material em mãos.",
  },
  {
    title: "Acesso simples e imediato",
    description: "Comunique como o cliente recebe e começa a usar o produto.",
  },
];

const faqItems = [
  {
    question: "O que está incluído na OFERTA 3?",
    answer: "Substitua este texto pela resposta sobre o produto principal, materiais e condições da oferta.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Explique aqui o prazo, o canal de entrega e os dispositivos compatíveis.",
  },
  {
    question: "Para quem esta oferta é indicada?",
    answer: "Descreva o público ideal e o momento em que a solução faz mais sentido.",
  },
  {
    question: "Existe garantia?",
    answer: "Informe o prazo e as condições da garantia da oferta.",
  },
];

const Oferta3 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "OFERTA 3 | Página de oferta";
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "hsl(var(--lp-white))" }}>
      {/* 1. Banner superior */}
      <section
        className="px-5 py-3 text-center"
        style={{ backgroundColor: "hsl(var(--lp-danger))", color: "hsl(var(--lp-white))" }}
      >
        <p className="text-[13px] md:text-[16px] font-bold" style={{ fontFamily: FONT }}>
          OFERTA 3 · espaço reservado para uma condição especial
        </p>
      </section>

      {/* 2. Hero */}
      <section
        className="px-5 py-[52px] md:px-[60px] md:py-[92px]"
        style={{ backgroundColor: "hsl(var(--lp-green-soft))" }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] md:text-[14px]"
            style={{
              backgroundColor: "hsl(var(--lp-white) / 0.14)",
              color: "hsl(var(--lp-white))",
              fontFamily: FONT,
              fontWeight: 700,
            }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            PÁGINA DE TRABALHO · OFERTA 3
          </span>

          <h1
            className="max-w-4xl text-[34px] leading-[1.05] md:text-[58px]"
            style={{ color: "hsl(var(--lp-white))", fontFamily: FONT, fontWeight: 800 }}
          >
            Título principal da sua nova oferta
          </h1>

          <p
            className="mt-5 max-w-3xl text-[18px] leading-[1.45] md:text-[25px]"
            style={{ color: "hsl(var(--lp-lime))", fontFamily: FONT, fontWeight: 800 }}
          >
            Subtítulo com a promessa clara, específica e desejável do produto.
          </p>

          <div className="my-8 w-full max-w-[560px]">
            <ImagePlaceholder label="Insira aqui o mockup principal da OFERTA 3" dark className="aspect-square w-full rounded-[18px]" />
          </div>

          <p
            className="max-w-3xl text-[16px] leading-[1.65] md:text-[20px]"
            style={{ color: "hsl(var(--lp-white) / 0.9)", fontFamily: FONT, fontWeight: 500 }}
          >
            Use este espaço para explicar, em poucas linhas, o problema que a oferta resolve,
            para quem ela foi criada e por que o cliente deve agir agora.
          </p>

          <div className="mt-7">
            <CtaButton>QUERO CONHECER A OFERTA 3</CtaButton>
          </div>
        </div>
      </section>

      {/* 3. Demonstrativo visual */}
      <section className="overflow-hidden px-0 py-[50px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-white))" }}>
        <div className="mx-auto mb-9 max-w-3xl px-5 text-center">
          <h2 className="text-[28px] leading-[1.15] md:text-[42px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>
            Veja o que você vai encontrar na prática
          </h2>
          <p className="mt-3 text-[16px] md:text-[20px]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>
            Substitua os espaços abaixo pelas imagens, telas ou mockups do produto.
          </p>
        </div>

        <div className="flex gap-4 overflow-hidden px-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="min-w-[78%] sm:min-w-[42%] md:min-w-[28%]">
              <ImagePlaceholder label={`Demonstração ${index + 1}`} className="aspect-[4/5] w-full rounded-[16px]" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Benefícios */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <h2 className="text-[28px] leading-[1.12] md:text-[42px]" style={{ color: "hsl(var(--lp-white))", fontFamily: FONT, fontWeight: 800 }}>
              O que muda quando você usa esta solução
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ImagePlaceholder label="Insira uma imagem que represente o benefício" className="min-h-[360px] w-full rounded-[18px]" />
            <div className="flex flex-col gap-4">
              {benefits.map((item) => (
                <article key={item.title} className="rounded-[16px] p-5 md:p-6" style={{ backgroundColor: "hsl(var(--lp-white))", boxShadow: "0 4px 20px hsl(var(--lp-dark) / 0.08)" }}>
                  <div className="flex items-start gap-4">
                    <Check className="mt-1 h-6 w-6 shrink-0" style={{ color: "hsl(var(--lp-check))" }} strokeWidth={3} />
                    <div>
                      <h3 className="text-[17px] md:text-[20px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>{item.title}</h3>
                      <p className="mt-1 text-[15px] leading-[1.5] md:text-[18px]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA de urgência */}
      <section className="px-5 py-[48px] text-center md:px-[60px] md:py-[70px]" style={{ backgroundColor: "hsl(var(--lp-red-soft))" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[30px] leading-[1.1] md:text-[48px]" style={{ color: "hsl(var(--lp-white))", fontFamily: FONT, fontWeight: 800 }}>
            Uma condição especial para começar hoje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.55] md:text-[21px]" style={{ color: "hsl(var(--lp-white) / 0.94)", fontFamily: FONT }}>
            Use este bloco para reforçar o momento, a condição promocional e o motivo para não deixar a decisão para depois.
          </p>
          <div className="mt-7"><CtaButton>QUERO GARANTIR MEU ACESSO</CtaButton></div>
        </div>
      </section>

      {/* 6. Ideal para você */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-sage))" }}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-center text-[36px] leading-[1.05] md:text-[52px] lg:text-left" style={{ color: "hsl(var(--lp-white))", fontFamily: FONT, fontWeight: 800 }}>
            ESTA OFERTA FOI CRIADA PARA QUEM DESEJA
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Alcançar um resultado específico", "Ter um caminho mais simples", "Aplicar o conhecimento rapidamente", "Contar com um material de apoio"].map((item) => (
              <div key={item} className="rounded-[18px] p-5" style={{ backgroundColor: "hsl(var(--lp-white))" }}>
                <Check className="mb-3 h-7 w-7" style={{ color: "hsl(var(--lp-check))" }} strokeWidth={3} />
                <p className="text-[16px] leading-[1.45] md:text-[18px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 700 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. O que você vai receber */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-light))" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[30px] leading-[1.08] md:text-[44px]" style={{ color: "hsl(var(--lp-green-deep))", fontFamily: FONT, fontWeight: 800 }}>
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>
          <div className="mx-auto mt-6 max-w-[560px]">
            <ImagePlaceholder label="Insira aqui o mockup do produto principal" className="aspect-square w-full rounded-[18px]" />
          </div>
          <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
            {["Produto principal da oferta", "Material complementar", "Acesso ou suporte", "Atualizações futuras", "Checklist de aplicação", "Orientações para começar"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "hsl(var(--lp-check))" }} strokeWidth={3} />
                <span className="text-[15px] leading-[1.45] md:text-[17px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bônus */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-white))" }}>
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2" style={{ backgroundColor: "hsl(var(--lp-lime))", color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>
            <Gift className="h-5 w-5" aria-hidden="true" />
            BÔNUS DA OFERTA 3
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {["Bônus estratégico", "Bônus de implementação", "Bônus surpresa"].map((item, index) => (
              <article key={item} className="rounded-[18px] p-5 text-left" style={{ backgroundColor: "hsl(var(--lp-accordion))", border: "1px solid hsl(var(--lp-dark) / 0.08)" }}>
                <ImagePlaceholder label={`Imagem do bônus ${index + 1}`} className="mb-5 aspect-[4/3] w-full rounded-[12px]" />
                <h3 className="text-[19px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>{item}</h3>
                <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>Descreva aqui o valor e a utilidade deste bônus.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Preços */}
      <section id="oferta-3-pricing" className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-light))" }}>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[30px] md:text-[44px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>ESCOLHA COMO COMEÇAR</h2>
          <p className="mt-3 text-[16px] md:text-[20px]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>Configure aqui os planos, valores e links de pagamento.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {["Plano Essencial", "Plano Completo"].map((plan, index) => (
              <article key={plan} className="rounded-[20px] p-6 text-left" style={{ backgroundColor: index === 1 ? "hsl(var(--lp-nude))" : "hsl(var(--lp-white))", border: index === 1 ? "2px solid hsl(var(--lp-nude-accent) / 0.35)" : "1px solid hsl(var(--lp-dark) / 0.1)", boxShadow: "0 12px 30px hsl(var(--lp-dark) / 0.08)" }}>
                <p className="text-center text-[14px] uppercase tracking-[0.12em]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT, fontWeight: 800 }}>{plan}</p>
                <h3 className="mt-3 text-center text-[34px] md:text-[42px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>R$ 00,00</h3>
                <ul className="my-6 space-y-3">
                  {["Entrega principal", "Bônus selecionado", "Acesso imediato"].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[16px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT }}>
                      <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "hsl(var(--lp-check))" }} strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button type="button" className={`${CTA_CLASS} w-full`} onClick={() => alert("Configure aqui o link de pagamento da OFERTA 3.")} style={{ backgroundColor: "hsl(var(--lp-lime))", color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800, boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow))" }}>
                  ESCOLHER {plan.toUpperCase()}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Garantia */}
      <section className="px-5 py-[48px] md:px-[60px] md:py-[70px]" style={{ backgroundColor: "hsl(var(--lp-blue))" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <ShieldCheck className="h-28 w-28 shrink-0" style={{ color: "hsl(var(--lp-nude))" }} strokeWidth={1.5} />
          <div>
            <h2 className="text-[28px] md:text-[38px]" style={{ color: "hsl(var(--lp-white))", fontFamily: FONT, fontWeight: 800 }}>Sua compra protegida</h2>
            <p className="mt-3 text-[16px] leading-[1.6] md:text-[19px]" style={{ color: "hsl(var(--lp-white) / 0.92)", fontFamily: FONT }}>
              Insira aqui a política de garantia, o prazo de avaliação e as instruções para solicitar suporte ou reembolso.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Como funciona */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-white))" }}>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[30px] md:text-[44px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>COMO FUNCIONA O ACESSO</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Finalize a compra", "Escolha o plano e conclua o pagamento."],
              ["2", "Receba o acesso", "Envie aqui as instruções de entrega e suporte."],
              ["3", "Comece a aplicar", "Oriente o cliente sobre o primeiro passo."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-[18px] p-6" style={{ backgroundColor: "hsl(var(--lp-accordion))" }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "hsl(var(--lp-lime))", color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 900 }}>{number}</div>
                <h3 className="text-[18px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ e rodapé */}
      <section className="px-5 py-[50px] md:px-[60px] md:py-[82px]" style={{ backgroundColor: "hsl(var(--lp-light))" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[30px] md:text-[44px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 800 }}>PERGUNTAS FREQUENTES</h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-[14px] bg-white" style={{ border: "1px solid hsl(var(--lp-dark) / 0.1)" }}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="text-[16px] md:text-[19px]" style={{ color: "hsl(var(--lp-black))", fontFamily: FONT, fontWeight: 700 }}>{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: "hsl(var(--lp-black))" }} aria-hidden="true" />
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-[15px] leading-[1.55] md:text-[17px]" style={{ color: "hsl(var(--lp-muted))", fontFamily: FONT }}>{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center" style={{ backgroundColor: "hsl(var(--lp-card-black))" }}>
        <p className="text-[13px]" style={{ color: "hsl(var(--lp-subtle))", fontFamily: FONT }}>
          OFERTA 3 · Página-base para construir uma nova oferta.
        </p>
      </footer>
    </main>
  );
};

export default Oferta3;
