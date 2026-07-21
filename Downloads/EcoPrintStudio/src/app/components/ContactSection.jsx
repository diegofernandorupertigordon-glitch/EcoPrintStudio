import bgContactImg from '../../assets/3D_printed.png';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 scroll-mt-24 overflow-hidden">
      {/* Iluminación ambiental */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-[#1a6ef5]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[#7c3aed]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Imagen decorativa de fondo */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={bgContactImg}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] object-cover opacity-[0.06] rotate-12 scale-x-[-1]"
        />
        <img
          src={bgContactImg}
          alt=""
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-[300px] h-[300px] object-cover opacity-[0.04] -rotate-12"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Separador decorativo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#1a6ef5]" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1a6ef5]">
            Contacto
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#1a6ef5]" />
        </div>

        <h2 className="font-sans font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-none tracking-[-0.03em] text-[#e6eaf4]">
          ¿Listo para tu próximo proyecto?
        </h2>

        <p className="mt-4 text-[#94a3b8] text-sm leading-relaxed max-w-xl mx-auto">
          Contáctanos y recibe una cotización personalizada en 24 horas.
        </p>

        <a
          href="mailto:contacto@ecoprintstudio.com"
          className="relative mt-8 inline-block bg-gradient-to-r from-[#1a6ef5] to-[#3b9eff] hover:from-[#1555cc] hover:to-[#1a6ef5] text-white font-bold py-4 px-10 rounded transition-all duration-300 font-mono shadow-[0_0_20px_rgba(26,110,245,0.35)] hover:shadow-[0_0_30px_rgba(26,110,245,0.55)] active:scale-[0.97]"
        >
          Escríbenos
        </a>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-left">
          <div className="relative p-5 rounded-sm bg-[#12151e] border border-[rgba(255,255,255,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-3" style={{ background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a6ef5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="font-mono text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a6ef5]">
              Email
            </h3>
            <p className="mt-2 text-sm text-[#94a3b8]">contacto@ecoprintstudio.com</p>
          </div>

          <div className="relative p-5 rounded-sm bg-[#12151e] border border-[rgba(255,255,255,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-3" style={{ background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a6ef5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-mono text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a6ef5]">
              Ubicación
            </h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Quito, Ecuador</p>
          </div>

          <div className="relative p-5 rounded-sm bg-[#12151e] border border-[rgba(255,255,255,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-3" style={{ background: 'rgba(26,110,245,0.12)', border: '1px solid rgba(26,110,245,0.25)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a6ef5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-mono text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a6ef5]">
              Horario
            </h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Lun – Vie: 9:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

