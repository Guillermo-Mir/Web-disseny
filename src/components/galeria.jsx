import React from "react";

class RecetasGaleria extends React.Component {
    recetas = [
        // ... (Tu array de recetas se mantiene idéntico con la propiedad 'receta') ...
        { 
            titulo: "Tarta Clásica de Manzana", 
            descripcion: "La receta de la abuela, con un toque de canela y miel.", 
            imagen: "/galeria/tarta-de-manzana.jpg", 
            alt: "Imagen de una tarta de manzana crujiente y dorada",
            receta: {
                ingredientes: [
                    "2 láminas de masa quebrada o de hojaldre",
                    "5 manzanas grandes (tipo Golden o Fuji)",
                    "100g de azúcar",
                    "50g de mantequilla derretida",
                    "1 cucharadita de canela en polvo",
                    "2 cucharadas de miel (para el brillo)"
                ],
                pasos: [
                    "Precalentar el horno a 180°C. Extender una lámina de masa en un molde y pinchar la base.",
                    "Pelar, descorazonar y cortar las manzanas en láminas finas.",
                    "Colocar las láminas de manzana superpuestas en círculos sobre la base de la masa. Espolvorear con el azúcar y la canela.",
                    "Bañar las manzanas con la mantequilla derretida.",
                    "Hornear durante 40-50 minutos, o hasta que la masa esté dorada y las manzanas tiernas.",
                    "Al sacar del horno, pincelar con la miel para dar brillo. Servir caliente o fría."
                ]
            }
        },
        { 
            titulo: "Muffins de Chocolate y Naranja", 
            descripcion: "Suaves y húmedos, un contraste cítrico y dulce.", 
            imagen: "/galeria/magdalenas-de-naranja-y-chocolate_version_1713412917.jpg", 
            alt: "Imagen de muffins de chocolate con ralladura de naranja",
            receta: {
                ingredientes: [
                    "200g de harina de trigo",
                    "150g de azúcar",
                    "50g de cacao en polvo sin azúcar",
                    "1 cucharadita de levadura química",
                    "1 huevo grande",
                    "100ml de aceite vegetal",
                    "120ml de leche",
                    "Ralladura y zumo de 1 naranja"
                ],
                pasos: [
                    "Precalentar el horno a 200°C y preparar las cápsulas de muffins.",
                    "En un bol, mezclar los ingredientes secos: harina, azúcar, cacao y levadura.",
                    "En otro bol, batir el huevo, el aceite, la leche, el zumo y la ralladura de naranja.",
                    "Incorporar los líquidos a los secos y remover solo hasta que se integren. ¡No batir en exceso!",
                    "Rellenar 2/3 de cada cápsula.",
                    "Hornear durante 18-20 minutos. Dejar enfriar sobre una rejilla."
                ]
            }
        },
        { 
            titulo: "Croissants Franceses Caseros", 
            descripcion: "El secreto del hojaldre perfecto y mantequilloso.", 
            imagen: "/galeria/maxresdefault.jpg", 
            alt: "Imagen de dos croissants recién horneados sobre una rejilla",
            receta: {
                ingredientes: [
                    "500g de harina de fuerza",
                    "250ml de leche templada",
                    "50g de azúcar",
                    "10g de sal",
                    "25g de levadura fresca",
                    "250g de mantequilla fría (para el hojaldrado)",
                    "1 huevo batido (para pincelar)"
                ],
                pasos: [
                    "Preparar la masa base con harina, azúcar, sal, levadura disuelta en leche y amasar hasta obtener una masa lisa.",
                    "Dejar reposar 1 hora.",
                    "Envolver la mantequilla en film, aplanarla en un cuadrado y refrigerar.",
                    "Estirar la masa, colocar la mantequilla en el centro y doblarla (esto se llama 'vuelta'). Repetir el proceso de estirado, doblado y refrigerado 3 veces (vueltas simples o dobles).",
                    "Estirar la masa final en un rectángulo fino. Cortar triángulos y enrollarlos desde la base hasta la punta.",
                    "Dejar levar los croissants hasta que dupliquen su tamaño. Pincelar con huevo y hornear a 190°C durante 15-20 minutos."
                ]
            }
        },
        { 
            titulo: "Flan de Vainilla Tradicional", 
            descripcion: "Textura cremosa y caramelo líquido, sin secretos.", 
            imagen: "/galeria/flan-vainilla-fotor-20230720193459-2-scaled.jpg", 
            alt: "Imagen de un flan con caramelo líquido y trozos de vaina",
            receta: {
                ingredientes: [
                    "500ml de leche entera",
                    "100g de azúcar",
                    "4 huevos grandes",
                    "1 vaina de vainilla (o esencia de vainilla)",
                    "Para el caramelo: 150g de azúcar y 50ml de agua"
                ],
                pasos: [
                    "Preparar el caramelo: calentar el azúcar y el agua hasta que adquiera un color dorado y verter en el fondo de los moldes de flan.",
                    "Calentar la leche con la vaina de vainilla (abierta) o la esencia hasta que hierva. Retirar del fuego y dejar infusionar.",
                    "En un bol, batir los huevos con el azúcar restante, sin incorporar mucho aire.",
                    "Retirar la vaina de la leche. Incorporar la leche caliente lentamente a la mezcla de huevos, sin dejar de remover.",
                    "Colar la mezcla y verter en los moldes acaramelados.",
                    "Cocinar al baño maría en el horno a 160°C durante 45-60 minutos, o hasta que el centro esté firme. Enfriar completamente antes de desmoldar."
                ]
            }
        },
        { 
            titulo: "Pastel de Tres Leches", 
            descripcion: "Un clásico latinoamericano, muy jugoso y ligero.", 
            imagen: "/galeria/treslechescake2770x628_3607.jpg", 
            alt: "Imagen de un pastel de tres leches con crema batida y cerezas",
            receta: {
                ingredientes: [
                    "Para el bizcocho: 4 huevos, 120g de harina, 120g de azúcar",
                    "Para la mezcla de tres leches: 1 lata de leche condensada, 1 lata de leche evaporada, 250ml de nata (crema de leche) líquida.",
                    "Para la cobertura: 200ml de nata para montar y 2 cucharadas de azúcar."
                ],
                pasos: [
                    "Preparar el bizcocho: Batir los huevos con el azúcar hasta que estén espumosos. Incorporar la harina tamizada con movimientos envolventes. Hornear a 170°C durante 20-25 minutos.",
                    "Una vez frío, desmoldar el bizcocho y pinchar toda la superficie con un tenedor.",
                    "Mezclar las tres leches (condensada, evaporada y nata líquida).",
                    "Verter lentamente la mezcla de tres leches sobre el bizcocho hasta que esté completamente empapado.",
                    "Refrigerar por al menos 4 horas (idealmente toda la noche).",
                    "Cubrir con nata montada (nata y azúcar batidos hasta formar picos firmes) antes de servir."
                ]
            }
        },
        { 
            titulo: "Galletas de Mantequilla", 
            descripcion: "Ideales para decorar y acompañar el café de la tarde.", 
            imagen: "/galeria/Galletas-de-mantequilla-1.jpg", 
            alt: "Imagen de galletas de mantequilla cortadas con formas y decoradas",
            receta: {
                ingredientes: [
                    "250g de mantequilla sin sal (a temperatura ambiente)",
                    "150g de azúcar glas",
                    "1 huevo mediano",
                    "400g de harina de trigo",
                    "1 cucharadita de extracto de vainilla"
                ],
                pasos: [
                    "Batir la mantequilla con el azúcar glas hasta obtener una crema suave y pálida.",
                    "Añadir el huevo y el extracto de vainilla. Batir hasta que se incorporen.",
                    "Incorporar la harina tamizada en dos tandas, mezclando hasta obtener una masa homogénea.",
                    "Envolver la masa en film y refrigerar por al menos 30 minutos.",
                    "Estirar la masa con un rodillo y cortar las galletas con los cortadores deseados.",
                    "Hornear a 170°C durante 12-15 minutos, o hasta que los bordes estén ligeramente dorados. Dejar enfriar sobre una rejilla."
                ]
            }
        }
    ];

    render() {
        return (
            <main className="flex-1 flex flex-col items-center min-h-screen pb-20" style={{ backgroundColor: "#fef3c7" }}>
                <header
                    className="w-full h-96 flex items-center justify-center text-white p-8 mb-16 rounded-b-[4rem] overflow-hidden shadow-2xl"
                    style={{
                        backgroundImage: "url('https://placehold.co/1920x400/d97706/ffffff?text=Nuestras+Recetas')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: 'inset 0 0 0 2000px rgba(185, 96, 0, 0.5), 0 20px 30px -5px rgba(0, 0, 0, 0.4)'
                    }}
                >
                    <div className="text-center max-w-4xl backdrop-blur-sm p-6 rounded-xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 tracking-tight leading-snug">
                            El Recetario de la Casa Dulce
                        </h1>
                        <p className="text-xl md:text-2xl font-light italic opacity-95">
                            Sabores que puedes recrear. La tradición de la repostería en tus manos.
                        </p>
                    </div>
                </header>

                <section className="flex flex-col gap-12 max-w-7xl w-full px-4 md:px-6">

                    <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 text-center mb-6">
                        Recetas para endulzar tu día
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {this.recetas.map((receta, index) => (
                            <figure 
                                key={index} 
                                // Cambios en la tarjeta: Bordes ligeramente más suaves y sombra más definida
                                className="bg-white rounded-[2rem] shadow-2xl overflow-hidden transition duration-300 border-b-8 border-orange-500 hover:shadow-orange-300/50" 
                            >
                                <div className="relative">
                                    <img 
                                        src={receta.imagen} 
                                        alt={receta.alt} 
                                        width={400} 
                                        height={300} 
                                        className="w-full h-64 object-cover" 
                                        onError={(e) => { e.target.src = 'https://placehold.co/400x300/fff7ed/d97706?text=Foto+Receta'; }}
                                    />
                                    {/* Overlay sutil para el título si la imagen fuera muy brillante */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
                                        <h3 className="text-2xl font-serif font-bold text-white text-shadow-md">
                                            {receta.titulo}
                                        </h3>
                                    </div>
                                </div>

                                <figcaption className="p-6 flex flex-col items-center text-center">
                                    
                                    {/* Mueve el título fuera de figcaption si ya está en el overlay, o hazlo más sutil */}
                                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">{receta.titulo}</h3> */}
                                    <p className="text-gray-600 text-sm italic mb-4">
                                        {receta.descripcion}
                                    </p>
                                    
                                    {/* Detalles de la Receta */}
                                    <div className="w-full text-left mt-4 border-t pt-4 border-gray-200">
                                        
                                        {/* INGREDIENTES */}
                                        <h4 className="text-lg font-extrabold text-orange-700 mb-2 flex items-center">
                                            <span className="mr-2 text-2xl"></span> Ingredientes
                                        </h4>
                                        <ul className="list-disc list-outside text-gray-800 text-xs space-y-0.5 mb-4 pl-6 opacity-90">
                                            {receta.receta.ingredientes.map((ingrediente, i) => (
                                                <li key={`ing-${index}-${i}`} className="leading-tight">
                                                    {ingrediente}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* PASOS */}
                                        <h4 className="text-lg font-extrabold text-orange-700 mb-2 flex items-center border-t pt-3 border-gray-100">
                                            <span className="mr-2 text-2xl"></span> Preparación
                                        </h4>
                                        <ol className="list-decimal list-outside text-gray-800 text-xs space-y-2 pl-6">
                                            {receta.receta.pasos.map((paso, i) => (
                                                <li key={`paso-${index}-${i}`} className="leading-snug">
                                                    {paso}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                    
                                    <p className="text-xs text-orange-400 mt-4 italic pt-2 w-full text-center">
                                        ¡Atrévete a hornear la tradición!
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            </main>
        );
    }
}

export default RecetasGaleria;