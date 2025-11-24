import React from "react";
import VideoPlayer from "./VideoPlayer";

const HistoriaModuloSimple = ({ tituloPrincipal, tituloSecundario, descripcion, children, isLeft = true }) => {

    const flexClass = isLeft ? 'md:flex-row' : 'md:flex-row-reverse';

    return (
        <div className={`flex flex-col ${flexClass} items-center bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden`}>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <span className="text-xl font-serif font-extrabold text-orange-600 mb-2 border-b-2 border-orange-200 w-max pb-1">
                    {tituloPrincipal}
                </span>
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                    {tituloSecundario}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    {descripcion}
                </p>
                {children} 
            </div>
            <div className={`md:w-1/2 w-full h-64 md:h-auto ${isLeft ? 'bg-amber-100' : 'bg-orange-100'} flex items-center justify-center p-8`}>
                <p className="text-orange-900 font-serif text-2xl font-bold opacity-70">
                    {isLeft ? 'Sabores Antiguos' : 'Legado Dulce'}
                </p>
            </div>
        </div>
    );
};



const HistoriaVideoModulo = ({ isLeft = true }) => {
    const flexClass = isLeft ? 'md:flex-row' : 'md:flex-row-reverse';

    return (
        <div className={`flex flex-col ${flexClass} items-center bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden`}>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <span className="text-xl font-serif font-extrabold text-orange-600 mb-2 border-b-2 border-orange-200 w-max pb-1">
                    Siglo XX y XXI
                </span>
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                    Fusión e Innovación Global
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    La pastelería se globalizó, incorporando sabores de todo el mundo. Técnicas modernas y el enfoque en diseño, ligereza y salud marcan la pauta actual. Chefs como Pierre Hermé marcan tendencia en la alta repostería moderna.
                </p>
                <div className="flex flex-col gap-3">
                    <HitoCard
                        siglo="Siglo XXI"
                        titulo="La Pastelería como Arte"
                        descripcion="La precisión y la estética se combinan para crear postres que son verdaderas obras de arte comestibles."
                        boton="Ver Tendencias"
                    />
                </div>
            </div>
            

            <div className={`md:w-1/2 w-full h-auto flex items-center justify-center p-8 bg-gray-100`}>
                <VideoPlayer 
                    posterText="Innovación Global" 
                />
            </div>
        </div>
    );
};



const AntiguedadModulo = () => (
    <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
            <span className="text-xl font-serif font-extrabold text-orange-600 mb-2 border-b-2 border-orange-200 w-max pb-1 inline-block">
                Antigüedad
            </span>
            <h3 className="text-3xl font-serif font-bold text-gray-800">
                Los Primeros Bocados Dulces
            </h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
            La historia de la pastelería se remonta al antiguo Egipto y Roma, donde ya se elaboraban panes endulzados con miel y frutas. Los egipcios fueron pioneros en técnicas de fermentación, mientras que los romanos desarrollaron las primeras tortas y postres a base de queso y harina.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImagenCard src="/historia/Miel-y-alimentacion-en-egipto.webp" titulo="Egipto: Panes y Miel" />
            <ImagenCard src="/historia/queso-grecia-clasica.webp" titulo="Roma: Postres con Queso" />
            <ImagenCard src="/historia/antillas.webp" titulo="Asia: Descubrimiento del Azúcar" />
        </div>
    </div>
);


const ImagenCard = ({ src, titulo }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-amber-100 overflow-hidden">

        <img 
            src={src || "https://placehold.co/600x400/fff7ed/d97706?text=Sin+Imagen"} 
            className="w-full h-52 object-cover" 
            alt={titulo} 
            loading="lazy"
        />
        <div className="p-3 text-center">
            <h4 className="font-serif font-semibold text-gray-800">{titulo}</h4>
        </div>
    </div>
);


const HitoCard = ({ siglo, titulo, descripcion, boton }) => (
    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500 mt-4 shadow-sm">
        <span className="text-sm font-bold text-orange-700 block">{siglo}</span>
        <h4 className="text-lg font-serif font-bold text-gray-800">{titulo}</h4>
        <p className="text-gray-600 text-sm mb-3">{descripcion}</p>
        <button className="bg-orange-500 text-white font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-orange-600 transition duration-300">
            {boton}
        </button>
    </div>
);


class Historia extends React.Component {
    render() {
        return (
            <div className="flex-1 flex flex-col items-center" style={{ backgroundColor: "#F9F7F5" }}>

                <div
                    className="w-full max-w-7xl h-96 flex items-center justify-center text-white p-8 mb-20 rounded-b-3xl overflow-hidden shadow-2xl"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5), 0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <div className="text-center max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] font-extrabold mb-4 text-shadow-xl tracking-tight">
                            Un Viaje Dulce
                        </h1>
                        <p className="text-xl md:text-2xl font-light font-serif">
                            Descubre los orígenes y la evolución del arte de la repostería.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-16 max-w-6xl w-full px-4 md:px-0">

                    <AntiguedadModulo />

                    <HistoriaModuloSimple
                        tituloPrincipal="Edad Media y Renacimiento"
                        tituloSecundario="Guardianes del Sabor"
                        descripcion="Durante la Edad Media, los conventos y monasterios preservaron recetas dulces. Con la llegada del azúcar a Europa y el Renacimiento, surgieron las primeras pastelerías profesionales en Italia y Francia, donde la presentación se convirtió en arte."
                        isLeft={false}
                    />

                    <HistoriaModuloSimple
                        tituloPrincipal="Siglo XVII - XVIII"
                        tituloSecundario="Pastelería de la Haute Cuisine"
                        descripcion="En la corte francesa, chefs como François Pierre de La Varenne y Marie-Antoine Carême codificaron recetas y técnicas que definieron la pastelería clásica europea, estableciendo bases de decoración, hojaldres y pasteles elegantes."
                        isLeft={true}
                    >
                        <HitoCard
                            siglo="Siglo XVII"
                            titulo="Carême y la Haute Cuisine"
                            descripcion="Marie-Antoine Carême elevó la pastelería a un arte, inventando recetas y técnicas que aún se usan en la repostería profesional."
                            boton="Más sobre Carême"
                        />
                    </HistoriaModuloSimple>


                    <HistoriaModuloSimple
                        tituloPrincipal="Siglo XIX"
                        tituloSecundario="Producción en Masa"
                        descripcion="La Revolución Industrial permitió producir ingredientes a gran escala, haciendo que los postres se popularizaran entre clases medias y trabajadoras. Surgieron hornos mecánicos, moldes estandarizados y confiterías comerciales."
                        isLeft={false}
                    >
                        <HitoCard
                            siglo="Siglo XIX"
                            titulo="Avances Tecnológicos"
                            descripcion="El acceso a azúcar y chocolate a menor costo permitió la expansión de pastelerías y dulcerías urbanas."
                            boton="Ver detalles"
                        />
                    </HistoriaModuloSimple>

                    <HistoriaVideoModulo isLeft={true} />

                </div>
                <div className="h-20"></div>
            </div>
        );
    }
}

export default Historia;