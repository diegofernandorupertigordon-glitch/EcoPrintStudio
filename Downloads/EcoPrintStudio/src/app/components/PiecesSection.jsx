import TitleTag from './TitleTag';
import PieceCard from './PieceCard';
import { pieces } from '../data/pieces';

export default function PiecesSection() {
  return (
    <section id="proyectos" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-8">
          <TitleTag>Piezas</TitleTag>
          <h2 className="mt-3 font-sans font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-none tracking-[-0.03em] text-[#e6eaf4]">
            Piezas que hablan por sí solas
          </h2>
        </div>

        <p className="max-w-[28rem] text-sm leading-relaxed text-[#7a85a0]">
          Tecnología de impresión industrial aplicada a resultados que se ven y se miden.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pieces.map((p) => (
            <PieceCard key={p.id} title={p.title} tag={p.tag} img={p.img} alt={p.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

