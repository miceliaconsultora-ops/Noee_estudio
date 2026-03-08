import React from 'react';
import { X, Check } from 'lucide-react';

export default function ProblemSolution() {
    const problems = [
        "¿No sabés qué tonos te favorecen realmente?",
        "¿Tu maquillaje de evento no dura toda la noche intacto?",
        "¿Sentís que los tutoriales no se adaptan a tus facciones?"
    ];

    const solutions = [
        "Estudio personalizado de tu piel y rostro para destacar lo mejor de vos.",
        "Productos de primera línea (Kryolan, Mac, Dior) para una fijación extrema.",
        "Técnicas que resaltan tus rasgos sin que te sientas disfrazada."
    ];

    return (
        <section className="py-24 bg-primary text-background relative overflow-hidden">
            {/* Detalle Arquitectónico Decorativo */}
            <div className="absolute top-0 right-0 w-[1px] h-32 bg-secondary/30 hidden md:block" />
            <div className="absolute top-16 right-0 w-32 h-[1px] bg-secondary/30 hidden md:block" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-secondary mb-4">El Enfoque Noelia Escamez</h2>
                    <p className="font-serif text-3xl md:text-5xl max-w-3xl mx-auto leading-tight text-white/90">
                        Descubrí la diferencia de un servicio diseñado exclusivamente para vos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">

                    {/* Línea divisoria en desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

                    {/* Columna Problemas */}
                    <div className="space-y-8 animate-[fade-in-up_1s_ease-out]">
                        <h3 className="font-serif text-2xl mb-8 text-white/50 border-b border-white/10 pb-4">Lo que suele pasar</h3>
                        <ul className="space-y-6">
                            {problems.map((prob, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                        <X className="w-3 h-3 text-white/40" />
                                    </div>
                                    <p className="text-white/70 font-light text-lg">{prob}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna Soluciones */}
                    <div className="space-y-8 animate-[fade-in-up_1s_ease-out_0.2s]">
                        <h3 className="font-serif text-2xl mb-8 text-secondary border-b border-secondary/20 pb-4">Nuestra Propuesta</h3>
                        <ul className="space-y-6">
                            {solutions.map((sol, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-secondary" />
                                    </div>
                                    <p className="text-white/90 font-light text-lg">{sol}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
