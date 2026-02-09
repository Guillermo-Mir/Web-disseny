import React from "react";

class Home extends React.Component {
    render() {
        return (
            <main className="flex-1 flex flex-col items-center" style={{ backgroundColor: "#F3E9DC" }}>

                <header
                    className="w-full h-96 flex items-center justify-center text-white p-8 mb-12"
                    style={{
                        backgroundImage: "url('home/fondo.jpg')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#F3E9DC', 
                        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)' 
                    }}
                >
                    <div className="text-center max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg">
                            La Dulzura de la Tradición
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                            Descubre nuestros sabores artesanales, hechos con pasión y los mejores ingredientes.
                        </p>
                    </div>
                </header>
                
                <div className="flex flex-col gap-12 max-w-6xl w-full py-12">
                    
                    <section className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center gap-8 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900">
                            Especialidad de la casa
                        </h2>
                        
                        <div className="flex flex-wrap justify-center gap-8 w-full">
                            {["Brazo de gitano", "Tarta de queso", "Tarta de fresa"].map((postre, index) => (
                                <figure key={index} className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-pointer">
                                    <img 
                                        src={`/home/${index === 0 ? 'brazo-gitano-nata-380x380.jpg' : index === 1 ? 'foto-cuadrada-2025-01-15T112519.300.png' : 'tarta-fresitas-1024x1024.jpg'}`} 
                                        width={300} height={300} className="rounded" alt={`Imagen de ${postre}`} 
                                    />
                                    <figcaption>
                                        <h4 className="text-center font-semibold text-gray-900">{postre}</h4>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow-md p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Mundo de la Pastelería</h2>
                        <p className="text-gray-800 text-base leading-relaxed">
                            Desde los primers panes dulces en la antigüedad hasta las sofisticadas creaciones
                            modernas, la pastelería ha sido un arte que combina sabor y estética.
                        </p>
                    </section>

                    <section className="w-full">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-900">
                            Novedades del Gremio
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {[
                                { t: "La mejor palmera de España la elabora una pastelería aragonesa", d: "Un dulce reconocimiento al trabajo artesanal..." },
                                { t: "Abre una panadería-pastelería con sabores de Portugal en Vigo", d: "Una nueva propuesta que trae lo mejor de la repostería lusa..." },
                                { t: "Una pastelería gana fama mundial por su respuesta a influencer", d: "El ingenio y la calidad triunfan en redes sociales..." }
                            ].map((noticia, i) => (
                                <article key={i} className="group bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 border-t-4 border-gray-900 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors">
                                        {noticia.t}
                                    </h3>
                                    <p className="text-sm text-gray-700 flex-grow">
                                        {noticia.d}
                                    </p>
                                    <button className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-full 
                                        transition-all duration-200
                                        hover:bg-black hover:shadow-md
                                        active:scale-95 active:bg-gray-800
                                        focus:outline-none focus:ring-4 focus:ring-orange-200
                                        self-start">
                                        Leer noticia
                                    </button>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default Home;