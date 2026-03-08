import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
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
                        <span className="text-xs font-sans tracking-widest uppercase text-primary/80">+10 años de experiencia transformando miradas</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance leading-[1.1]">
                        Tu mejor versión, diseñada para el día a día o tu evento más especial.
                    </h1>

                    <p className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl font-light leading-relaxed">
                        Maquillaje y peinado profesional de alta gama + Cursos exclusivos para que aprendas a potenciar tu belleza tú misma.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#contacto" className="btn-primary group">
                            Reservar Cita
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#cursos" className="btn-secondary">
                            Ver Cursos
                        </a>
                    </div>
                </div>

                {/* Imagen Editorial */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto">
                        {/* Sombra dura arquitectónica típica del estilo */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/5" />
                        <img
                            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Maquillaje editorial elegante realizado por Noelia Escamez"
                            className="relative z-10 w-full h-full object-cover shadow-2xl sepia-[.1] hue-rotate-[-10deg] saturate-[.85]"
                        />
                        {/* Badge Flotante para dinamismo con efecto CSS */}
                        <div className="absolute -left-8 md:-left-12 top-1/4 bg-white/95 backdrop-blur-sm p-6 shadow-xl z-20 min-w-[160px] transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-default">
                            <div className="relative z-10">
                                <div className="text-4xl font-serif text-secondary mb-1 transition-colors duration-300 group-hover:text-primary">Cientos</div>
                                <div className="text-xs uppercase tracking-widest text-primary/60 font-medium group-hover:text-primary/80 transition-colors duration-300">De clientas<br />satisfechas</div>
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
