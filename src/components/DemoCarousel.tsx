import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import ImagePlaceholder from "./ImagePlaceholder";


const DemoCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", watchDrag: false, containScroll: false },
    [AutoScroll({ speed: 2.5, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })]
  );

  return (
    <section
      className="py-[50px] md:py-[90px] px-0 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--lp-white))" }}
    >
      <div className="text-center mb-[24px] md:mb-[44px] px-5 max-w-3xl mx-auto">
        <h2
          className="text-[26px] md:text-[40px] leading-[1.15] mb-4"
          style={{
            fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
            fontWeight: 800,
            color: "hsl(var(--lp-black))",
          }}
        >
          Esse mapa ajuda você a visualizar a montagem completa, configurar o necessário e executar o teste
        </h2>
      </div>


      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="flex-[1_0_95%] sm:flex-[1_0_70%] md:flex-[1_0_55%] lg:flex-[1_0_40%] min-w-0 px-4">
                <ImagePlaceholder label={`Imagem do carrossel ${index + 1}`} className="w-full aspect-[707/1000] rounded-[12px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCarousel;
