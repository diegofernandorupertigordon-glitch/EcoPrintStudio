import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-16 scroll-mt-24"
      style={{
        background: '#12151e',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} img={s.img} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}



