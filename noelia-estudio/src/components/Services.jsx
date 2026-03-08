import React from 'react';
import { Sparkles, Calendar, BookOpen } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Maquillaje Social & Eventos",
            description: "Para novias, invitadas, madrinas o fiestas de egresados.",
            features: [
                "Duración extendida garantizada",
                "Diseño acorde al vestuario",
                "Pestañas postizas incluidas"
            ],
            popular: false
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Automaquillaje Básico",
            description: "Aprende a armar tu neceser y a crear un look de día impecable.",
            features: [
                "Revisión de tu cosmetiquera",
                "Rutina de Skincare ágil",
                "Práctica guiada paso a paso"
            ],
            popular: true
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Perfeccionamiento",
            description: "Transforma tu look de día a noche con técnicas avanzadas.",
            features: [
                "Smokey eyes profesionales",
                "Delineado perfecto",
                "Piel luminosa (Glass skin)"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-24 bg-background relative" id="servicios">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-primary/60 mb-4">Lo que hacemos</h2>
                    <h3 className="font-serif text-3xl md:text-5xl text-primary mb-6">Servicios & Cursos</h3>
                    <p className="max-w-2xl mx-auto text-primary/70 font-light">
                        Elegí la opción que mejor se adapte a tus necesidades. Todos los servicios incluyen un asesoramiento previo completo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 md:p-10 border transition-all duration-300 hover:shadow-2xl ${service.popular
                                    ? 'border-secondary bg-[#fefdfb] transform md:-translate-y-4 z-10'
                                    : 'border-primary/10 bg-white hover:border-primary/30'
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-sans uppercase tracking-[0.2em] px-4 py-1">
                                    Más Elegido
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-full mb-8 flex items-center justify-center ${service.popular ? 'bg-secondary/10 text-secondary' : 'bg-primary/5 text-primary/70'
                                }`}>
                                {service.icon}
                            </div>

                            <h4 className="font-serif text-2xl text-primary mb-3">{service.title}</h4>
                            <p className="font-light text-primary/70 mb-8 flex-grow">{service.description}</p>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-primary/80">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contacto" className={`w-full text-center py-4 text-sm uppercase tracking-widest transition-colors ${service.popular
                                    ? 'bg-primary text-white hover:bg-black'
                                    : 'border border-primary text-primary hover:bg-primary/5'
                                }`}>
                                {service.title.includes("Curso") ? "Ver Curso" : "Reservar Cita"}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
