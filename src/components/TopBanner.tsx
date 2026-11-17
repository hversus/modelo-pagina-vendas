import { Zap } from "lucide-react";

const TopBanner = () => {
  return (
    <div
      className="w-full py-3 px-4 flex items-center justify-center gap-2 whitespace-nowrap"
      style={{ backgroundColor: "hsl(var(--lp-danger))" }}
    >
      <Zap className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse flex-shrink-0" strokeWidth={2.5} />
      <span
        className="text-[13px] md:text-[17px] font-bold text-white tracking-wide text-center uppercase"
        style={{ fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif" }}
      >
        OFERTA DISPONÍVEL SOMENTE HOJE
      </span>
    </div>
  );
};

export default TopBanner;
