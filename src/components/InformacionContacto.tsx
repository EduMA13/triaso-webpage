import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const InformacionContacto = () => {
  return (
    <section className="w-full bg-white px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Información de contacto */}
      <div>
        <h2 className="text-3xl font-bold text-[#002c5f] mb-4">Contacto</h2>
        <p className="text-sm font-medium text-gray-700 mb-6">
          ¿Tienes algo en mente? Hablemos. <br /> Estamos aquí para ayudarte. Completa el
          formulario o contáctanos en los siguientes medios y nos pondremos en contacto contigo lo antes posible.
        </p>

        <h3 className="text-xl font-semibold text-[#002c5f] mb-4">
          Información de contacto
        </h3>

        <ul className="space-y-4 text-gray-800">
          <li className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-2xl text-[#002c5f]" />
            <div className="font-medium">
              <strong className="block">Dirección</strong>
              <span>Carretera al Pueblito #405, KM 0.5 Durango, Dgo.</span>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaPhoneAlt className="text-2xl text-[#002c5f]" />
            <div className="font-medium">
              <strong className="block">Teléfonos</strong>
              <span className="block">(618) 183 0730</span>
              <span className="block">(618) 271 6593</span>
              <span className="block">(618) 804 4882</span>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaEnvelope className="text-2xl text-[#002c5f]" />
            <div className="font-medium">
              <strong className="block">Correo</strong>
              <span>Informes@Nortam.mx</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Formulario */}
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4 w-full mx-auto">
        <h3 className="text-lg font-semibold text-[#002c5f]">Solicitar Información</h3>

        <div>
          <label className="block font-medium text-sm mb-1">Nombre completo</label>
          <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Correo electrónico</label>
          <input type="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Teléfono</label>
          <input type="tel" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Mensaje</label>
          <textarea rows="1" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A0110C] text-white font-semibold py-2 rounded hover:bg-red-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default InformacionContacto;
