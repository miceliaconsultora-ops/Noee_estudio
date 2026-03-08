import React from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Nunca me había sentido tan segura en una fiesta. El maquillaje duró intacto hasta la madrugada.",
            author: "María F.",
            role: "Clienta de evento"
        },
        {
            quote: "El curso de automaquillaje me cambió la vida. Ahora me arreglo en 15 minutos y me veo increíble.",
            author: "Lucía Gómez",
            role: "Alumna"
        },
        {
            quote: "Noelia entendió perfecto que quería algo natural pero elegante. La recomiendo a ojos cerrados.",
            author: "Valentina R.",
            role: "Clienta frecuente"
        }
    ];

    return (
        <section className="py-24 bg-[#f4f2ea] relative overflow-hidden" id="testimonios">
            {/* Fondo texturizado suave */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-primary/60">Casos Reales</h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                            Lo que dicen<br />quienes confían en nosotros.
                        </h3>

                        <div className="flex gap-4 items-center pt-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#f4f2ea] overflow-hidden bg-primary/10">
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="Cliente"
                                            className="w-full h-full object-cover grayscale mix-blend-multiply"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col ml-4">
                                <span className="font-serif text-2xl text-primary font-bold">+500</span>
                                <span className="text-sm font-sans uppercase tracking-wider text-primary/60">Clientas Recurrentes</span>
                            </div>
                        </div>
                    </div>

                    {/* Carrusel estático / Grilla */}
                    <div className="grid gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 md:p-10 shadow-sm border border-primary/5 relative group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="text-secondary/30 text-6xl font-serif absolute top-4 left-6 user-select-none">"</div>
                                <p className="font-serif text-lg md:text-xl text-primary/80 relative z-10 mb-6 italic leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-[1px] bg-secondary" />
                                    <div>
                                        <h5 className="font-sans font-medium text-primary text-sm uppercase tracking-wider">{testimonial.author}</h5>
                                        <p className="text-primary/50 text-sm mt-1">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
