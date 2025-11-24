import React from "react";

class Home extends React.Component {
    render() {
        return (

            <div className="flex-1 flex flex-col items-center" style={{ backgroundColor: "#F3E9DC" }}>
                <div
                    className="w-full h-96 flex items-center justify-center text-white p-8 mb-12"
                    style={{
                        backgroundImage: "url('home/fondo.jpg')", 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#F3E9DC', 
                        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'
                    }}
                >

                    <div className="text-center max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-shadow-lg">
                            La Dulzura de la Tradición
                        </h1>
                        <p className="text-xl md:text-2xl font-light">
                            Descubre nuestros sabores artesanales, hechos con pasión y los mejores ingredientes.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-12 max-w-6xl w-full py-12">
                    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center gap-8 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                            Especialidad de la casa
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 w-full">
                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="/home/brazo-gitano-nata-380x380.jpg" width={300} height={300} className="rounded" />
                                <h4 className="text-center font-semibold">Brazo de gitano</h4>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="/home/foto-cuadrada-2025-01-15T112519.300.png" width={300} height={300} className="rounded" />
                                <h4 className="text-center font-semibold">Tarta de queso</h4>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="/home/tarta-fresitas-1024x1024.jpg" width={300} height={300} className="rounded" />
                                <h4 className="text-center font-semibold">Tarta de fresa</h4>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Mundo de la Pastelería</h2>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Desde los primeros panes dulces en la antigüedad hasta las sofisticadas creaciones
                            modernas, la pastelería ha sido un arte que combina sabor y estética. Cada pastel,
                            cada tarta y cada delicia cuenta una historia de tradición, innovación y pasión
                            por la repostería. Nuestro mundo de la pastelería celebra estas historias, trayendo
                            sabores y texturas que deleitan tanto a la vista como al paladar. En cada bocado, buscamos
                            despertar la nostalgia y la alegría, conectando el pasado con la dulzura del presente.
                        </p>
                    </div>

                    <div className="w-full">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800">
                            Novedades del Gremio
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">


                            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 border-t-4 border-gray-400 hover:border-orange-500 transition duration-300">
                                <h3 className="text-xl font-bold text-gray-800">
                                    La mejor palmera de España la elabora una pastelería aragonesa
                                </h3>
                                <p className="text-sm text-gray-500 flex-grow">
                                    Un dulce reconocimiento al trabajo artesanal...
                                </p>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-500 transition self-start">
                                    Leer noticia
                                </button>
                            </div>


                            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 border-t-4 border-gray-400 hover:border-orange-500 transition duration-300">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Abre una panadería-pastelería con sabores de Portugal en Vigo
                                </h3>
                                <p className="text-sm text-gray-500 flex-grow">
                                    Una nueva propuesta que trae lo mejor de la repostería lusa...
                                </p>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-500 transition self-start">
                                    Leer noticia
                                </button>
                            </div>


                            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 border-t-4 border-gray-400 hover:border-orange-500 transition duration-300">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Una pastelería gana fama mundial por su respuesta a influencer
                                </h3>
                                <p className="text-sm text-gray-500 flex-grow">
                                    El ingenio y la calidad triunfan en redes sociales...
                                </p>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-500 transition self-start">
                                    Leer noticia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
