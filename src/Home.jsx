import React from "react";

class Home extends React.Component {
    render() {
        return (
            // Contenedor principal: sin cambios en el fondo
            <div className="flex-1 flex flex-col items-center" style={{ backgroundColor: "#F3E9DC" }}>

                
                <div className="flex flex-col gap-12 max-w-6xl w-full py-12">
                

                    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center gap-5">
                        <h2 className="text-2xl font-semibold mb-4">Especialidad de la casa</h2>
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            <img src="brazo-gitano-nata-380x380.jpg" width={300} height={300} className="rounded" />
                            <img src="foto-cuadrada-2025-01-15T112519.300.png" width={300} height={300} className="rounded" />
                            <img src="tarta-fresitas-1024x1024.jpg" width={300} height={300} className="rounded" />
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
                        
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                Noticia 
                            </button>
                        </div>
    
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                Noticia 
                            </button>
                        </div>
    
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                                Noticia 
                            </button>
                        </div>
    
                    </div>
                </div> 

            </div>
        );
    }
}

export default Home;