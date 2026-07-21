export default function ServiceCard({ img, title, desc }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#12151e] border border-[rgba(255,255,255,0.06)]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
        />
      </div>

      <div>
        <h3 className="font-bold text-sm" style={{ color: '#e6eaf4' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#7a85a0' }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

