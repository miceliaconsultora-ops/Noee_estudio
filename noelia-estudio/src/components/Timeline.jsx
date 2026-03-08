import React from 'react';

export default function Timeline() {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico y Estilo",
            description: "Evaluamos tu tipo de piel, tus gustos personales y el tipo de evento al que asistes, para diseñar un look a tu medida."
        },
        {
            number: "02",
            title: "Ejecución Profesional",
            description: "Creamos un maquillaje y peinado impecable, con productos premium que aseguran un acabado luminoso y duradero."
        },
        {
            number: "03",
            title: "Aprende el Arte (Cursos)",
            description: "Sesiones personalizadas 1 a 1 donde te enseño a replicar tus looks favoritos en casa, paso a paso y sin secretos."
        }
    ];

    return (
        <section className="py-24 bg-background relative" id="como-funciona">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-primary/60 mb-4">El Proceso</h2>
                    <h3 className="font-serif text-3xl md:text-5xl text-primary mb-8">Cómo Funciona</h3>
                    <div className="w-16 h-[1px] bg-secondary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative pt-8">
                    {/* Línea conectora entre números en desktop */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-primary/10 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-background border border-primary/20 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-secondary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                <span className="font-serif text-2xl text-primary">{step.number}</span>
                            </div>

                            <h4 className="font-serif text-xl mb-4 text-primary">{step.title}</h4>
                            <p className="text-primary/70 font-light leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
