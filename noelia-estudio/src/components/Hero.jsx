import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const [currentAsset, setCurrentAsset] = useState(0);
    const assets = [
        { type: 'image', src: '/portada.jpg' },
        { type: 'video', src: '/capsula1.mp4' },
        { type: 'image', src: '/IMG_8326.jpg' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentAsset((prev) => (prev + 1) % assets.length);
        }, 5000); // 5 segundos por asset
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Elementos decorativos de fondo sutiles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Contenido Texto */}
                <div className="w-full md:w-1/2 flex flex-col items-start pt-20 md:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/20 bg-background/50 backdrop-blur-sm rounded-full">
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-sans tracking-widest uppercase text-primary/80">Más de 15 años de experiencia.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance leading-[1.1]">
                        TU MEJOR VERSIÓN, diseñada para el día a día o tu evento más especial.
                    </h1>

                    <ul className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl font-light leading-relaxed space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="mt-3 w-4 h-[1px] bg-secondary shrink-0"></div>
                            <span><strong className="font-bold text-primary">Maquillaje</strong> y <strong className="font-bold text-primary">peinado profesional</strong> de alta gama.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-3 w-4 h-[1px] bg-secondary shrink-0"></div>
                            <span><strong className="font-bold text-primary">Cursos</strong> exclusivos para que aprendas a potenciar tu belleza tú misma.</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="https://wa.me/5491159309893" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                            Reservar Cita
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#cursos" className="btn-secondary">
                            Ver Cursos
                        </a>
                    </div>
                </div>

                {/* Imagen Editorial / Carrete */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto">
                        {/* Sombra dura arquitectónica típica del estilo */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/5" />
                        
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
                            {assets.map((asset, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === currentAsset ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                >
                                    {asset.type === 'image' ? (
                                        <img
                                            src={asset.src}
                                            alt="Contenido editorial Noelia Escamez"
                                            className="w-full h-full object-cover object-[center_35%] sepia-[.1] hue-rotate-[-10deg] saturate-[.85]"
                                        />
                                    ) : (
                                        <video
                                            src={asset.src}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover object-[center_35%] sepia-[.1] hue-rotate-[-10deg] saturate-[.85]"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Badge Flotante */}
                        <div className="absolute -left-8 md:-left-12 top-1/4 bg-white/95 backdrop-blur-sm p-6 shadow-xl z-20 min-w-[160px] transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-default">
                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-widest text-primary/60 font-medium group-hover:text-primary/80 transition-colors duration-300 mb-1">Cientos de</div>
                                <div className="text-2xl md:text-3xl font-serif text-secondary transition-colors duration-300 group-hover:text-primary leading-tight">CLIENTAS<br />SATISFECHAS</div>
                            </div>
                            {/* Accent line on hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 ease-out group-hover:w-full"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
