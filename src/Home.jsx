import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="p-10" style={{ backgroundColor: "#F3E9DC" }}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                            Noticia {'→'}
                        </button>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                            Noticia {'→'}
                        </button>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
                            Noticia {'→'}
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
