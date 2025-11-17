import React from "react";

const Historia = () => {
  const timelineItems = [
    {
      periodo: "📜 Antigüedad",
      titulo: "Los Primeros Bocados Dulces",
      descripcion: "La historia de la pastelería se remonta al antiguo Egipto y Roma, donde ya se elaboraban panes endulzados con miel y frutas. Los egipcios fueron pioneros en técnicas de fermentación, mientras que los romanos desarrollaron las primeras tortas y postres a base de queso y harina.",
      imagenes: [
        { src: "pan-egipcio.jpg", titulo: "Egipto: Panes y Miel" },
        { src: "dulce-romano.jpg", titulo: "Roma: Postres con Queso" },
        { src: "azucar-india.jpg", titulo: "Asia: Descubrimiento del Azúcar" }
      ]
    },
    {
      periodo: "✨ Edad Media y Renacimiento",
      titulo: "Guardianes del Sabor y Nacimiento de la Pastelería Profesional",
      descripcion: "Durante la Edad Media, los conventos y monasterios preservaron recetas dulces. Con la llegada del azúcar a Europa y el Renacimiento, surgieron las primeras pastelerías profesionales en Italia y Francia, donde la presentación se convirtió en arte."
    },
    {
      periodo: "🥐 Siglo XVII - XXI",
      titulo: "Hitos Clave de la Pastelería Moderna",
      descripcion: "Desde la corte francesa hasta la globalización de la pastelería, chefs e innovadores han creado técnicas, recetas y diseños que hoy conocemos.",
      hitos: [
        { siglo: "Siglo XVII", titulo: "Corte Francesa", descripcion: "Marie-Antoine Carême codificó muchas recetas y técnicas, elevando la pastelería a la categoría de Haute Cuisine.", boton: "Más sobre Carême" },
        { siglo: "Siglo XIX", titulo: "Producción en Masa", descripcion: "La Revolución Industrial permitió el acceso a ingredientes más baratos y nuevas herramientas para producir dulces.", boton: "Avances Tecnológicos" },
        { siglo: "Siglo XX y XXI", titulo: "Fusión e Innovación", descripcion: "La pastelería se globaliza, incorporando sabores de todo el mundo y enfocándose en diseño, ligereza y salud.", boton: "Chefs Innovadores" },
      ]
    }
  ];

  return (
    <div className="bg-[#F3E9DC] flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div
        className="w-full h-96 flex items-center justify-center text-white mb-16 rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('fondo-historia.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.35)'
        }}
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 text-shadow-lg">
            Un Viaje Dulce a Través del Tiempo
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90">
            Descubre los orígenes y la evolución del arte de la repostería.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl w-full flex flex-col items-center">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-orange-400 h-full"></div>

        {timelineItems.map((item, idx) => {
          const isLeft = idx % 2 === 0; // alterna lados
          return (
            <div key={idx} className="relative w-full flex flex-col md:flex-row items-center mb-24">
              {/* Círculo en línea central */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-orange-400 rounded-full shadow-lg z-10"></div>

              {/* Contenido */}
              <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right md:order-1' : 'md:pl-12 md:text-left md:order-2'}`}>
                <h3 className="text-2xl font-serif font-bold text-gray-800">{item.periodo}</h3>
                <h2 className="text-xl md:text-3xl font-serif font-semibold mt-2 text-gray-700">{item.titulo}</h2>
                <p className="text-gray-600 mt-2">{item.descripcion}</p>

                {item.imagenes && item.imagenes.length > 0 && (
                  <div className={`flex flex-wrap justify-center gap-6 mt-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    {item.imagenes.map((img, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-md border-t-2 border-orange-300 max-w-xs flex flex-col items-center">
                        <img src={img.src} width={300} height={300} className="rounded" alt={img.titulo} />
                        <h4 className="mt-2 font-serif font-semibold text-center">{img.titulo}</h4>
                      </div>
                    ))}
                  </div>
                )}

                {item.hitos && (
                  <div className="flex flex-col gap-6 mt-6">
                    {item.hitos.map((h, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400 hover:border-orange-500 transition duration-300 flex flex-col md:flex-row gap-4 items-start">
                        <div className="md:w-1/4 font-serif text-xl text-orange-400 font-bold">{h.siglo}</div>
                        <div className="md:w-3/4 flex flex-col gap-2">
                          <h4 className="text-lg font-serif font-bold text-gray-800">{h.titulo}</h4>
                          <p className="text-gray-500">{h.descripcion}</p>
                          <button className="bg-orange-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-500 w-max mt-2">{h.boton}</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Historia;
