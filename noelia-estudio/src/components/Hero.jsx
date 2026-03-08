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
                            alt="Maquillaje elegante y profesional"
                            className="relative z-10 w-full h-full object-cover shadow-2xl sepia-[.1] hue-rotate-[-10deg] saturate-[.85]"
                        />
                        {/* Badge Flotante para dinamismo */}
                        <div className="absolute -left-8 md:-left-12 top-1/4 bg-white p-4 shadow-xl z-20 animate-[bounce_10s_ease-in-out_infinite]">
                            <div className="text-3xl font-serif text-secondary mb-1">Cientos</div>
                            <div className="text-xs uppercase tracking-widest text-primary/60">De clientas<br />satisfechas</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
