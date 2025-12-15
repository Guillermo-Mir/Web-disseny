import React, { useRef, useEffect } from "react";

const Formulari = () => {

    const nombreRef = useRef(null);
    
    useEffect(() => {
        if (nombreRef.current) {
            nombreRef.current.focus();
        }
    }, []); 

    return (
        
        <div
            role="main"
            className="flex-1 flex flex-col items-center min-h-screen pb-20"
            style={{ backgroundColor: "#fef3c7" }}
        >

            <header
                role="banner"
                className="w-full h-72 flex items-center justify-center text-white p-8 mb-16 rounded-b-[4rem] shadow-2xl"
                style={{
                    backgroundImage:
                        "url('https://placehold.co/1920x400/8d6e63/ffffff?text=Contacto')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow:
                        "inset 0 0 0 2000px rgba(120, 53, 15, 0.7)", 
                }}
            >
                <div className="text-center backdrop-blur-sm p-6 rounded-xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4">
                        Contacta con Nosotros
                    </h1>
                    <p className="text-xl italic opacity-95">
                        Estaremos encantados de endulzar tu mensaje 
                    </p>
                </div>
            </header>

            <section 
                role="region"
                aria-labelledby="form-heading"
                className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-200"
            >
                <div className="text-center mb-10">
                    <h2 id="form-heading" className="text-4xl font-serif font-extrabold text-gray-900 mb-2">
                        Escríbenos
                    </h2>
                    <p className="text-orange-800 italic text-lg">
                        Te responderemos lo antes posible
                    </p>
                </div>

                <form className="flex flex-col gap-6">
                    <div>
                        <label 
                            htmlFor="nombre" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nombre
                        </label>
                        <input
                            id="nombre" 
                            ref={nombreRef} 
                            type="text"
                            placeholder="Tu nombre"
                            aria-label="Introduce tu nombre completo" 
                            className="w-full p-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            aria-label="Introduce tu dirección de correo electrónico"
                            className="w-full p-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="mensaje" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje" 
                            rows="5"
                            placeholder="Cuéntanos en qué podemos ayudarte..."

                            aria-label="Escribe tu mensaje o consulta"
                            className="w-full p-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-orange-700 hover:bg-orange-800 text-white font-serif font-bold text-xl py-4 rounded-2xl shadow-xl transition transform hover:scale-[1.02]"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </section>
        </div>
    );
};


export default Formulari;