export default function Header() {
  return (
    <header className="border-b border-[#2e303a] bg-[#0b0d12] py-6 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold font-mono text-white">
        ECO<span className="text-[#1a6ef5]">PRINT</span>
      </div>
      <nav className="flex gap-6 font-sans text-sm text-gray-400">
        <a href="#servicios" className="hover:text-[#1a6ef5] transition-colors">Servicios</a>
        <a href="#proyectos" className="hover:text-[#1a6ef5] transition-colors">Proyectos</a>
        <a href="#contacto" className="hover:text-[#1a6ef5] transition-colors">Contacto</a>
      </nav>
    </header>
  );
}