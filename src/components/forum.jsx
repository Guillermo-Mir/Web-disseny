import React from "react";

const temasForo = [
  {
    id: 1,
    titulo: "Técnicas Clásicas de Pastelería",
    descripcion: "Desde el hojaldre perfecto hasta la crema pastelera sin grumos.",
    icono: "🎂",
    hilos: [
      { titulo: "¿Cómo conseguir el punto de nieve perfecto? (4 claves)", respuestas: 45, ultimoMensaje: "Hace 2h por Ana_Chef" },
      { titulo: "El secreto del almíbar para bizcochos y cómo calcular el punto", respuestas: 12, ultimoMensaje: "Ayer por Juan_R" },
      { titulo: "Diferencias entre masa quebrada y sablé, y sus usos", respuestas: 31, ultimoMensaje: "Hace 4 días por Dulce_Tradicion" },
      { titulo: "Guía de temperatura para macarons perfectos", respuestas: 58, ultimoMensaje: "Hoy por Macaron_Expert" },
      { titulo: "Uso correcto de la gelatina y agar-agar: Consejos", respuestas: 20, ultimoMensaje: "Hace 1 semana por Gelatin_Master" },
    ]
  },
  {
    id: 2,
    titulo: "Recetas Veganas y Alternativas",
    descripcion: "Intercambio de ideas sin lácteos ni huevos. Postres inclusivos y sanos.",
    icono: "🌱",
    hilos: [
      { titulo: "Sustitutos de huevo para masas ligeras (aquafaba, chía, etc.)", respuestas: 67, ultimoMensaje: "Hace 30m por VeganBaker" },
      { titulo: "Las mejores harinas sin gluten para repostería: ¿Cuál elegir?", respuestas: 29, ultimoMensaje: "Hace 1h por María_GlutenFree" },
      { titulo: "Bizcocho de chocolate vegano y húmedo: ¡Mi mejor receta!", respuestas: 5, ultimoMensaje: "Hoy por PostreSano" },
      { titulo: "Endulzantes naturales: Stevia, eritritol y sirope de agave", respuestas: 41, ultimoMensaje: "Hace 2 días por Saludable_Postre" },
      { titulo: "Crema de queso para tarta vegana (Sin tofu)", respuestas: 18, ultimoMensaje: "Ayer por Fit_Dessert" },
    ]
  },
  {
    id: 3,
    titulo: "Decoración y Estilismo de Postres",
    descripcion: "Tendencias, uso de manga pastelera, fondant y glaseados avanzados.",
    icono: "🎨",
    hilos: [
      { titulo: "Tutorial: Flores de fondant nivel principiante (Paso a paso)", respuestas: 89, ultimoMensaje: "Hace 8h por DecoCake" },
      { titulo: "Colores alimentarios naturales: ¿Cuáles funcionan mejor en cremas?", respuestas: 19, ultimoMensaje: "Hace 1 día por ArtistaDulce" },
      { titulo: "Cómo evitar que el glaseado real se agriete al secarse", respuestas: 4, ultimoMensaje: "Ayer por ReposteraPro" },
      { titulo: "Últimas tendencias en tartas de boda minimalistas", respuestas: 17, ultimoMensaje: "Hace 3 días por Wedding_Planner" },
      { titulo: "Técnicas de 'drip cake': chocolate vs. caramelo", respuestas: 25, ultimoMensaje: "Hace 1 semana por Gota_Perfecta" },
    ]
  },
  {
    id: 4,
    titulo: "Ingredientes, Calidad y Almacenamiento",
    descripcion: "Discusión sobre la calidad de la materia prima y cómo conservarla correctamente.",
    icono: "🧈",
    hilos: [
      { titulo: "La mejor mantequilla para hojaldre: ¿con o sin sal?", respuestas: 22, ultimoMensaje: "Hace 12h por MantequillaLover" },
      { titulo: "Cómo conservar los frutos secos para que no se enrancien", respuestas: 14, ultimoMensaje: "Hace 6 días por FrutosSecos_C" },
      { titulo: "Dudas sobre el uso de la levadura química vs. la fresca", respuestas: 7, ultimoMensaje: "Hoy por PanaderaNovata" },
      { titulo: "Selección del mejor cacao para brownies", respuestas: 33, ultimoMensaje: "Hace 4h por ChocoAdicta" },
    ]
  },
  {
    id: 5,
    titulo: "Cultura e Historia de la Repostería",
    descripcion: "Curiosidades, tradiciones y libros imprescindibles del sector.",
    icono: "📚",
    hilos: [
      { titulo: "El origen del pastel Sacher y su receta original", respuestas: 9, ultimoMensaje: "Hace 2 días por HistoriadorDulce" },
      { titulo: "Los 5 libros de pastelería que todo aficionado debe tener", respuestas: 35, ultimoMensaje: "Hace 1 día por Lector_Pastelero" },
      { titulo: "Postres navideños tradicionales en Latinoamérica (Mesa de debate)", respuestas: 11, ultimoMensaje: "Hace 5 días por Tradicion_Latina" },
    ]
  },
];

class ForoReposteria extends React.Component {
  render() {
    return (
      <main className="flex-1 flex flex-col items-center min-h-screen" style={{ backgroundColor: "#F3E9DC" }}>

        <header
          className="w-full h-80 flex items-center justify-center text-white p-8 mb-16"
          style={{
            backgroundImage: "url('https://placehold.co/1920x400/D4A373/F3E9DC?text=COMUNIDAD+DE+REPOSTERÍA+ONLINE')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">
              Comunidad Dulce: El Foro
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Un espacio para compartir trucos, resolver dudas y aprender entre apasionados de la repostería.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-12 max-w-6xl w-full py-8 px-4 md:px-0">

          {temasForo.map((tema) => (
            <section
              key={tema.id}
              className="bg-white rounded-xl shadow-2xl p-6 w-full border-t-8 border-orange-500"
            >
              <div className="flex items-start justify-between mb-4 border-b pb-4 border-gray-100">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{tema.icono}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {tema.titulo}
                    </h2>
                    <p className="text-sm text-gray-500">{tema.descripcion}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-orange-700 uppercase tracking-wider">
                        Hilo de Discusión
                      </th>
                      <th className="px-4 py-3 w-20 text-center text-xs font-bold text-orange-700 uppercase tracking-wider hidden sm:table-cell">
                        Respuestas
                      </th>
                      <th className="px-4 py-3 w-40 text-left text-xs font-bold text-orange-700 uppercase tracking-wider hidden md:table-cell">
                        Último Mensaje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {tema.hilos.map((hilo, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/50 transition">
                        <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">
                          <span className="text-gray-800 font-semibold">
                            {hilo.titulo}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-gray-500 hidden sm:table-cell">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            {hilo.respuestas}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">
                          {hilo.ultimoMensaje}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-right text-sm text-gray-500 italic">
                Únete a la conversación y comparte tu experiencia con la comunidad
              </div>

            </section>
          ))}

          <section className="bg-white rounded-xl shadow-lg p-8 border-b-4 border-gray-300">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Estadísticas de la Comunidad Dulce</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <h3 className="text-5xl font-extrabold text-orange-600">5.230</h3>
                <p className="text-gray-600 font-semibold mt-1">Miembros Registrados</p>
              </div>
              <div>
                <h3 className="text-5xl font-extrabold text-orange-600">89.4K</h3>
                <p className="text-gray-600 font-semibold mt-1">Mensajes Totales</p>
              </div>
              <div>
                <h3 className="text-5xl font-extrabold text-orange-600">45</h3>
                <p className="text-gray-600 font-semibold mt-1">Hilos Activos Hoy</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    );
  }
}

export default ForoReposteria;