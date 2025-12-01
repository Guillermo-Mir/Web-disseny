import React from "react";
import VideoPlayer from "./VideoPlayer"; // Importa tu componente VideoPlayer

class Historia extends React.Component {
    render() {
        return (
            <div className="flex-1 flex flex-col items-center min-h-screen pb-20" style={{ backgroundColor: "#fef3c7" }}>
                
                {/* Cabecera Estilizada (Banner Principal) */}
                <header
                    className="w-full h-96 flex items-center justify-center text-white p-8 mb-20 rounded-b-[4rem] overflow-hidden shadow-2xl"
                    style={{
                        backgroundImage: "url('https://placehold.co/1920x400/8d6e63/ffffff?text=La+Casa+Dulce+-+Nuestra+Historia')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: 'inset 0 0 0 2000px rgba(120, 53, 15, 0.6), 0 20px 30px -5px rgba(0, 0, 0, 0.4)'
                    }}
                >
                    <div className="text-center max-w-4xl backdrop-blur-sm p-6 rounded-xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 tracking-tight leading-snug">
                            El Legado de La Casa Dulce
                        </h1>
                        <p className="text-xl md:text-2xl font-light italic opacity-95">
                            Una historia de azúcar, mantequilla y pasión por el arte de endulzar la vida.
                        </p>
                    </div>
                </header>

                {/* Cuerpo de la Historia (Secciones/Capítulos) */}
                <div className="flex flex-col gap-24 max-w-7xl w-full px-4 md:px-6">

                    {/* Capítulo 1: Los Orígenes (Elara Valle) */}
                    <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-200">
                        <div className="text-center mb-10">
                            <span className="text-lg font-sans font-semibold text-red-600 mb-2 tracking-widest border-b-2 border-red-200 w-max pb-1 inline-block">
                                CAPÍTULO 1
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900">
                                La Harina y la Miel
                            </h2>
                            <p className="text-xl font-serif italic text-orange-800 mt-2">
                                El nacimiento de una tradición.
                            </p>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed text-center mb-12 max-w-4xl mx-auto">
                            La historia de la familia Valle comienza con Elara, a finales del siglo XIX. Con un horno de barro y recetas heredadas de su abuela, Elara horneaba panes endulzados con miel local y los primeros "bizcochos de fiesta" de la región. Su secreto radicaba en la calidad de los ingredientes y la paciencia.
                        </p>
                        
                        {/* Contenedor de Story Image Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* StoryImageCard 1 */}
                            <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-orange-200 overflow-hidden transform hover:-translate-y-1">
                                <div className="relative h-52">
                                    <img 
                                        src="/historia/Miel-y-alimentacion-en-egipto.webp" 
                                        className="w-full h-full object-cover" 
                                        alt="El Primer Horno"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 p-4 text-xl font-serif font-bold text-white">El Primer Horno</h4>
                                </div>
                                <div className="p-4 bg-orange-50">
                                    <p className="text-gray-700 text-sm italic">El horno de leña, donde todo comenzó, fuente de los primeros aromas dulces.</p>
                                </div>
                            </article>

                            {/* StoryImageCard 2 */}
                            <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-orange-200 overflow-hidden transform hover:-translate-y-1">
                                <div className="relative h-52">
                                    <img 
                                        src="/historia/queso-grecia-clasica.webp" 
                                        className="w-full h-full object-cover" 
                                        alt="Los Bizcochos de Elara"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 p-4 text-xl font-serif font-bold text-white">Los Bizcochos de Elara</h4>
                                </div>
                                <div className="p-4 bg-orange-50">
                                    <p className="text-gray-700 text-sm italic">Recetas simples pero perfectas: el inicio del legado Valle.</p>
                                </div>
                            </article>

                            {/* StoryImageCard 3 */}
                            <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-orange-200 overflow-hidden transform hover:-translate-y-1">
                                <div className="relative h-52">
                                    <img 
                                        src="/historia/antillas.webp" 
                                        className="w-full h-full object-cover" 
                                        alt="El Viaje del Azúcar"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 p-4 text-xl font-serif font-bold text-white">El Viaje del Azúcar</h4>
                                </div>
                                <div className="p-4 bg-orange-50">
                                    <p className="text-gray-700 text-sm italic">La primera vez que Elara consiguió azúcar refinado, un lujo transformador.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* Capítulo 2: La Formación (Mateo Valle) */}
                    <section className="flex flex-col md:flex-row items-stretch bg-amber-50 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Contenido de Texto */}
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center">
                            <span className="text-lg font-sans font-semibold text-red-600 mb-2 tracking-widest border-b-2 border-red-200 w-max pb-1">
                                CAPÍTULO 2
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-4 leading-tight">
                                El Viaje del Aprendiz
                            </h2>
                            <p className="text-xl font-serif italic text-orange-800 mb-6">
                                "De la tradición rural a la Alta Repostería de Europa."
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Mateo Valle, hijo de Elara, sintió la llamada de las grandes capitales pasteleras. Dejó el pueblo para formarse en París y Viena, donde aprendió la precisión del hojaldre, la elegancia de los 'entremets' y la ciencia de los mousses. Regresó con un conocimiento que fusionaría el sabor de su hogar con la sofisticación europea.
                            </p>
                            <div className="mt-6 border-t pt-4 border-orange-200">
                                {/* StoryMilestone 1 */}
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-white hover:bg-orange-50 border border-orange-200">
                                    <div className="p-3 rounded-full bg-orange-500 text-white flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl">☕</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-gray-900">1940: París</h4>
                                        <p className="text-sm text-gray-600">Estudio intensivo con maestros de la repostería clásica francesa.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Contenido Multimedia/Visual */}
                        <div className="md:w-1/2 w-full min-h-64 bg-amber-100 flex items-center justify-center p-6 md:p-10">
                            <div className="w-full">
                                <h4 className="text-xl font-semibold mb-3 text-gray-800">El Arte de la Tradición</h4>
                                <div className="relative w-full shadow-2xl rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
                                    <video
                                        className="absolute top-0 left-0 w-full h-full rounded-xl border border-gray-300 bg-black"
                                        controls
                                        preload="metadata" 
                                        loading="lazy"   
                                        muted={true} 
                                        playsInline={true}
                                    >
                                        <source 
                                            src="/videos/8626673-uhd_3840_2160_25fps.webm" 
                                            type="video/webm" 
                                        />
                                        <p className="p-4 text-white text-center">
                                            Tu navegador no soporta la reproducción de vídeo.
                                        </p>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Capítulo 3: La Primera Tienda (Ana y el Sentido del Hogar) */}
                    <section className="flex flex-col md:flex-row-reverse items-stretch bg-orange-100 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Contenido de Texto */}
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center">
                            <span className="text-lg font-sans font-semibold text-red-600 mb-2 tracking-widest border-b-2 border-red-200 w-max pb-1">
                                CAPÍTULO 3
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-4 leading-tight">
                                La Tienda de la Esquina
                            </h2>
                            <p className="text-xl font-serif italic text-orange-800 mb-6">
                                "Un lugar donde el amor hornea los sueños."
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Al volver, Mateo y su esposa Ana abrieron su primera pastelería: un pequeño local donde el aroma a mantequilla derretida y chocolate era una invitación constante. Ana aportó la calidez y el servicio personalizado, haciendo que la pastelería se convirtiera en el punto de encuentro de la comunidad, manteniendo viva la esencia de Elara.
                            </p>
                            <div className="mt-6 border-t pt-4 border-orange-200">
                                {/* StoryMilestone 2 */}
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-white hover:bg-orange-50 border border-orange-200">
                                    <div className="p-3 rounded-full bg-orange-500 text-white flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl">🍰</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-gray-900">1965: Apertura Oficial</h4>
                                        <p className="text-sm text-gray-600">Nace 'Dulces de la Esquina', con una carta reducida pero exquisita.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Contenido Multimedia/Visual */}
                        <div className="md:w-1/2 w-full min-h-64 bg-orange-50 flex items-center justify-center p-6 md:p-10">
                            <div className="w-full h-full flex items-center justify-center">
                                <p className="text-orange-900/50 font-serif text-3xl font-bold p-8 border-4 border-dashed border-orange-900/30 rounded-xl">
                                    El Secreto de la Abuela
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Capítulo 4: Fusión e Innovación (Sofia Valle) */}
                    <section className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-500">
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                            <span className="text-lg font-sans font-semibold text-red-600 mb-2 tracking-widest border-b-2 border-red-200 w-max pb-1">
                                CAPÍTULO 4
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-4 leading-tight">
                                La Ola de la Innovación
                            </h2>
                            <p className="text-xl font-serif italic text-orange-800 mb-6">
                                Tradición con mirada al futuro.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Sofía, la tercera generación, heredó la precisión de Mateo y el corazón de Ana. Ella revolucionó el obrador, incorporando técnicas de vanguardia, ingredientes exóticos y un enfoque en postres más ligeros y visualmente impactantes. 
                            </p>
                            <div className="mt-6 border-t pt-4 border-orange-200">
                                {/* StoryMilestone 3 */}
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-white hover:bg-orange-50 border border-orange-200">
                                    <div className="p-3 rounded-full bg-orange-500 text-white flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-gray-900">El Arte de la Vanguardia</h4>
                                        <p className="text-sm text-gray-600">La pastelería se convierte en una experiencia estética y de sabor.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        
                        {/* El Slot de Video Player */}
                        <div className="md:w-1/2 w-full h-auto flex items-center justify-center p-8 bg-orange-100 order-1 md:order-2">
                            <VideoPlayer 
                                videoTitle="Técnicas Modernas de Repostería"
                                posterText="Descubre las innovaciones"
                            />
                        </div>
                    </section>

                    {/* Capítulo 5: El Presente (La Casa Dulce) */}
                    <section className="flex flex-col md:flex-row items-stretch bg-amber-50 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Contenido de Texto */}
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center">
                            <span className="text-lg font-sans font-semibold text-red-600 mb-2 tracking-widest border-b-2 border-red-200 w-max pb-1">
                                CAPÍTULO 5
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-4 leading-tight">
                                La Casa Dulce, Hoy
                            </h2>
                            <p className="text-xl font-serif italic text-orange-800 mb-6">
                                "El destino se encuentra con el legado."
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Hoy, la pastelería se ha renombrado como 'La Casa Dulce', un homenaje a la calidez de su hogar y la excelencia de sus productos. La pastelería Valle es un símbolo de cómo la tradición familiar, combinada con la innovación, puede crear algo verdaderamente atemporal y delicioso. Te invitamos a ser parte de esta historia.
                            </p>
                            <div className="mt-6 border-t pt-4 border-orange-200">
                                {/* StoryMilestone 4 (Hito actual) */}
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-orange-600 text-white shadow-xl">
                                    <div className="p-3 rounded-full bg-white text-orange-600 flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl">🏭</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-white">¡El Legado Continúa!</h4>
                                        <p className="text-sm text-orange-100">Únete a nosotros y disfruta de un siglo de perfección dulce.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Contenido Multimedia/Visual */}
                        <div className="md:w-1/2 w-full min-h-64 bg-amber-100 flex items-center justify-center p-6 md:p-10">
                            <div className="w-full h-full flex items-center justify-center">
                                <p className="text-orange-900/50 font-serif text-3xl font-bold p-8 border-4 border-dashed border-orange-900/30 rounded-xl">
                                    La Receta Mágica
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
                <div className="h-20"></div>
            </div>
        );
    }
}

export default Historia;