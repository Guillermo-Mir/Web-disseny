import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="flex-1 flex flex-col items-center" style={{ backgroundColor: "#F3E9DC" }}>
                <div className="flex flex-col gap-12 max-w-6xl w-full py-12">

                    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center gap-8 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                            Especialidad de la casa
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 w-full">
                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="brazo-gitano-nata-380x380.jpg" width={300} height={300} className="rounded"/>
                                <h4 className="text-center font-semibold">Brazo de gitano</h4>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="foto-cuadrada-2025-01-15T112519.300.png" width={300} height={300} className="rounded"/>
                                <h4 className="text-center font-semibold">Tarta de queso</h4>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-3">
                                <img src="tarta-fresitas-1024x1024.jpg" width={300} height={300} className="rounded"/>
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center w-full">
                        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-4">
                            <h3 className="text-lg font-semibold text-center">
                                La mejor palmera de España la elabora una pastelería aragonesa
                            </h3>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                    Leer noticia
                                </button>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-4">
                            <h3 className="text-lg font-semibold text-center">
                                Abre una panadería-pastelería con sabores de Portugal en Vigo
                            </h3>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                    Leer noticia
                                </button>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-4">
                            <h3 className="text-lg font-semibold text-center">
                                Una pastelería gana fama mundial por su respuesta a influencer
                            </h3>
                                <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                    Leer noticia
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
