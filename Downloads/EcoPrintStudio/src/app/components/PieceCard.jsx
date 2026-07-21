export default function PieceCard({ title, tag, img, alt }) {
  return (
    <article className="relative rounded-sm overflow-hidden bg-[var(--card)] border border-[rgba(255,255,255,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,110,245,0.2),0_0_0_1px_rgba(26,110,245,0.3)] hover:-translate-y-1 min-h-[320px]">
      <div className="absolute inset-0">
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover filter brightness-[0.85] saturate-[1.1] transition-transform duration-500 hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,13,18,0.9)] via-transparent to-transparent" />
      </div>

      <div className="relative p-4">
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#1a6ef5]">
            {tag}
          </span>
        </div>

        <h3 className="mt-2 font-sans font-bold text-[14px] text-white">
          {title}
        </h3>
      </div>
    </article>
  );
}

