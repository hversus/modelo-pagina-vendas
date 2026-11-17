type ImagePlaceholderProps = {
  label: string;
  className?: string;
  dark?: boolean;
};

const ImagePlaceholder = ({ label, className = "", dark = false }: ImagePlaceholderProps) => (
  <div
    role="img"
    aria-label={label}
    className={`flex items-center justify-center border-2 border-dashed text-center px-4 ${dark ? "border-[hsl(var(--lp-white)/0.55)] bg-[hsl(var(--lp-white)/0.08)] text-[hsl(var(--lp-white))]" : "border-[hsl(var(--lp-dark)/0.4)] bg-[hsl(var(--lp-white)/0.75)] text-[hsl(var(--lp-dark))]"} ${className}`}
  >
    <span className="text-[14px] md:text-[16px] font-semibold leading-snug">{label}</span>
  </div>
);

export default ImagePlaceholder;