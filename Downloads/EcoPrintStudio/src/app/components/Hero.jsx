import { useState } from 'react';
import heroImg from '../../assets/inicio.png';
import QuoteModal from './QuoteModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Iluminación ambiental: reflejos cian y violeta */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#1a6ef5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#7c3aed]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#06b6d4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between gap-12">
          {/* Left: Copy */}
          <div className="flex-1">
            <h1 className="font-mono text-[64px] leading-[1.1] font-[800] tracking-[-0.04em] text-white/90">
              Soluciones Industriales de{' '}
              <span className="text-[#1a6ef5] tracking-[-0.02em] drop-shadow-[0_0_12px_rgba(26,110,245,0.5)]">
                Impresión
              </span>
            </h1>

            <p className="mt-6 text-[18px] leading-[1.7] font-normal tracking-[0.01em] text-[#c8cfe0] max-w-2xl drop-shadow-sm">
              Tecnología de vanguardia para procesos de producción complejos. Calidad,
              precisión y eficiencia en cada detalle.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative bg-gradient-to-r from-[#1a6ef5] to-[#3b9eff] hover:from-[#1555cc] hover:to-[#1a6ef5] text-white font-bold py-3 px-8 rounded transition-all duration-300 font-mono shadow-[0_0_20px_rgba(26,110,245,0.4)] hover:shadow-[0_0_30px_rgba(26,110,245,0.6)] active:scale-[0.97]"
              >
                <span className="relative z-10">Cotiza tu pieza</span>
              </button>
            </div>
          </div>

          {/* Right: Image con ecosistema 3D */}
          <div className="flex-1 flex justify-end">
            <div className="relative w-full max-w-xl">
              {/* Capas de iluminación detrás de la imagen */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#1a6ef5]/20 via-[#06b6d4]/10 to-[#7c3aed]/20 blur-3xl rounded-[3rem]" />
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#7c3aed]/15 via-transparent to-[#06b6d4]/15 blur-2xl rounded-[2.5rem]" />

              {/* Recuadro brillante tipo ecosistema */}
              <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#1a6ef5]/40 via-[#06b6d4]/20 to-[#7c3aed]/40">
                <div className="absolute inset-0 rounded-[2rem] bg-[#0b0d12]" />
              </div>

              <img
                src={heroImg}
                alt="EcoPrint Studio — Plataforma de impresión 3D industrial"
                className="relative rounded-[2rem] border border-white/10 shadow-2xl shadow-[#1a6ef5]/10"
              />

              {/* Destello especular */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-[#06b6d4]/20 to-transparent rounded-full blur-md pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

