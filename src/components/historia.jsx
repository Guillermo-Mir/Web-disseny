import React from "react";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import Gallery from "./Gallery"; 

class Historia extends React.Component {
    render() {

        const historiaAudioSources = [
            { url: "/audios/Historia del postre _Tiramisú_. [5a2YGKLeXu4].mp3", type: "audio/mpeg" },
        ];

        return (
            <div className="flex-1 flex flex-col items-center min-h-screen pb-20" style={{ backgroundColor: "#fef3c7" }}>

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

                <div className="flex flex-col gap-24 max-w-7xl w-full px-4 md:px-6">

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

                        <Gallery>
                            <article className="flex flex-col items-center p-2">
                                <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-2xl transition duration-500 transform hover:scale-[1.03]">
                                    <img
                                        src="/historia/Miel-y-alimentacion-en-egipto.webp"
                                        className="w-full h-full object-cover"
                                        alt="El Primer Horno"
                                        loading="lazy"  
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 right-0 text-center p-4 text-2xl font-serif font-bold text-white tracking-wider drop-shadow-xl">El Primer Horno</h4>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-gray-700 text-base font-medium">El Primer Horno</p>
                                    <p className="text-gray-500 text-sm italic leading-snug max-w-xs">El horno de leña, donde todo comenzó, fuente de los primeros aromas dulces.</p>
                                </div>
                            </article>

                            <article className="flex flex-col items-center p-2">
                                <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-2xl transition duration-500 transform hover:scale-[1.03]">
                                    <img
                                        src="/historia/queso-grecia-clasica.webp"
                                        className="w-full h-full object-cover"
                                        alt="Los Bizcochos de Elara"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 right-0 text-center p-4 text-2xl font-serif font-bold text-white tracking-wider drop-shadow-xl">Los Bizcochos de Elara</h4>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-gray-700 text-base font-medium">Los Bizcochos de Elara</p>
                                    <p className="text-gray-500 text-sm italic leading-snug max-w-xs">Recetas simples pero perfectas: el inicio del legado Valle.</p>
                                </div>
                            </article>

                            <article className="flex flex-col items-center p-2">
                                <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-2xl transition duration-500 transform hover:scale-[1.03]">
                                    <img
                                        src="/historia/antillas.webp"
                                        className="w-full h-full object-cover"
                                        alt="El Viaje del Azúcar"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <h4 className="absolute bottom-0 left-0 right-0 text-center p-4 text-2xl font-serif font-bold text-white tracking-wider drop-shadow-xl">El Viaje del Azúcar</h4>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-gray-700 text-base font-medium">El Viaje del Azúcar</p>
                                    <p className="text-gray-500 text-sm italic leading-snug max-w-xs">La primera vez que Elara consiguió azúcar refinado, un lujo transformador.</p>
                                </div>
                            </article>
                            <article className="flex flex-col items-center p-2">
                                <div className="relative h-64 w-full flex items-center justify-center overflow-hidden rounded-3xl bg-amber-50 shadow-inner transition duration-500 transform hover:shadow-xl">
                                    <img
                                        src="/historia/1280px-Ramses_III_bakery.webp"
                                        className="w-full h-full object-cover"
                                        alt="El Viaje del Azúcar"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff7ed/d97706?text=Legado+Visual'; }}
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-gray-700 text-base font-medium">La Fuente de la Masa</p>
                                    <p className="text-gray-500 text-sm italic leading-snug max-w-xs">Slot reservado para imágenes de campos de trigo o molienda de harina antigua.</p>
                                </div>
                            </article>
                        </Gallery>
                    </section>

                    <section className="flex flex-col md:flex-row items-stretch bg-amber-50 rounded-3xl shadow-2xl overflow-hidden">
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center items-start">
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
                            <div className="mt-6 border-t pt-4 border-orange-200 w-full">
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

                        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-10 bg-amber-100">
                            <div className="w-full h-full flex items-center justify-center">
                                <AudioPlayer
                                    title="Historia del Tiramisu"
                                    sources={historiaAudioSources}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row-reverse items-stretch bg-orange-100 rounded-3xl shadow-2xl overflow-hidden">
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center items-start">
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
                            <div className="mt-6 border-t pt-4 border-orange-200 w-full">
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-white hover:bg-orange-50 border border-orange-200">
                                    <div className="p-3 rounded-full bg-orange-500 text-white flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl"></span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-gray-900">1965: Apertura Oficial</h4>
                                        <p className="text-sm text-gray-600">Nace 'Dulces de la Esquina', con una carta reducida pero exquisita.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-10 bg-orange-50">
                            <div className="w-full">
                                <VideoPlayer
                                    videoTitle="El Secreto de la Abuela"
                                    preferredFormat="webm"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-500">
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center items-start order-2 md:order-1">
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
                            <div className="mt-6 border-t pt-4 border-orange-200 w-full">
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

                        <div className="md:w-1/2 w-full h-auto flex items-center justify-center p-8 bg-orange-100 order-1 md:order-2">
                            <VideoPlayer
                                videoTitle="Técnicas Modernas de Repostería"
                                posterText="Descubre las innovaciones"
                                preferredFormat="mp4"
                            />
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-stretch bg-amber-50 rounded-3xl shadow-2xl overflow-hidden">
                        <article className="p-8 md:p-16 md:w-1/2 flex flex-col justify-center items-start">
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
                            <div className="mt-6 border-t pt-4 border-orange-200 w-full">
                                <div className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 bg-orange-600 text-white shadow-xl">
                                    <div className="p-3 rounded-full bg-white text-orange-600 flex items-center justify-center w-12 h-12">
                                        <span className="text-2xl"></span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-white">¡El Legado Continúa!</h4>
                                        <p className="text-sm text-orange-100">Únete a nosotros y disfruta de un siglo de perfección dulce.</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-10 bg-amber-100">
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