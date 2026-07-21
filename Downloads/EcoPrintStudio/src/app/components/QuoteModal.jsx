import { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    descripcion: '',
  });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:contacto@ecoprintstudio.com?subject=Cotización de pieza - ${formData.nombre}&body=Nombre: ${encodeURIComponent(formData.nombre)}%0AEmail: ${encodeURIComponent(formData.email)}%0ATeléfono: ${encodeURIComponent(formData.telefono)}%0AEmpresa: ${encodeURIComponent(formData.empresa)}%0A%0ADescripción de la pieza:%0A${encodeURIComponent(formData.descripcion)}`;

    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#12151e] border border-[#2e303a] rounded-sm p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7a85a0] hover:text-white transition-colors text-xl leading-none"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-[#1a6ef5] text-4xl mb-4">&#10003;</div>
            <h3 className="font-sans font-bold text-lg text-white">
              ¡Solicitud enviada!
            </h3>
            <p className="mt-2 text-sm text-[#7a85a0]">
              Te contactaremos a la brevedad.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-sans font-black text-[clamp(1.3rem,2.5vw,1.8rem)] text-white">
              Cotiza tu pieza
            </h2>
            <p className="mt-2 text-sm text-[#7a85a0]">
              Completa el formulario y te enviaremos una cotización personalizada.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7a85a0] mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-[#1c2030] border border-[#2e303a] rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-[#5a6580] focus:outline-none focus:border-[#1a6ef5] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7a85a0] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1c2030] border border-[#2e303a] rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-[#5a6580] focus:outline-none focus:border-[#1a6ef5] transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7a85a0] mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-[#1c2030] border border-[#2e303a] rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-[#5a6580] focus:outline-none focus:border-[#1a6ef5] transition-colors"
                    placeholder="+593 99 999 9999"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7a85a0] mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-[#1c2030] border border-[#2e303a] rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-[#5a6580] focus:outline-none focus:border-[#1a6ef5] transition-colors"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7a85a0] mb-1">
                  Descripción de la pieza
                </label>
                <textarea
                  name="descripcion"
                  required
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full bg-[#1c2030] border border-[#2e303a] rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-[#5a6580] focus:outline-none focus:border-[#1a6ef5] transition-colors resize-none"
                  placeholder="Describe la pieza que necesitas: material, dimensiones, cantidad, tolerancias..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a6ef5] hover:bg-blue-700 text-white font-bold py-3 rounded transition-all duration-300 font-mono text-sm"
              >
                Enviar solicitud
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

