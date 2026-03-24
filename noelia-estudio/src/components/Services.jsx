import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
    const [showCourseDetails, setShowCourseDetails] = useState(false);

    const services = [
        {
            id: "maquillaje",
            icon: <Sparkles className="w-6 h-6" />,
            title: "Maquillaje y/o Peinado",
            description: "Servicios personalizados para destacar en tu evento especial.",
            features: [
                "Novias",
                "Quinceañeras",
                "Madrinas",
                "Barra de glitter",
                "Eventos sociales"
            ],
            popular: false
        },
        {
            id: "curso-presencial",
            icon: <BookOpen className="w-6 h-6" />,
            title: "Curso automaquillaje Presencial",
            description: "Aprende a armar tu neceser y a crear un look de día impecable.",
            features: [
                "Clase práctica de 2 horas.",
                "Revisión de tu cosmetiquera",
                "Práctica guiada paso a paso"
            ],
            popular: true
        },
        {
            id: "curso-online",
            icon: <Calendar className="w-6 h-6" />,
            title: "Cursos On Line",
            description: "Técnicas avanzadas dictadas 100% online.",
            features: [],
            popular: false,
            upcoming: true
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

                            {service.id === "curso-presencial" && (
                                <div className="mb-6 flex flex-col gap-4">
                                    <button 
                                        onClick={() => setShowCourseDetails(!showCourseDetails)}
                                        className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors py-3 border-t border-b border-primary/10"
                                    >
                                        {showCourseDetails ? 'Ocultar detalles' : 'Ver detalles'}
                                        {showCourseDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </button>

                                    {showCourseDetails && (
                                        <div className="text-xs text-primary/80 bg-primary/5 p-5 animate-in fade-in slide-in-from-top-2 font-light leading-relaxed border-l-2 border-secondary overflow-hidden">
                                            <p className="font-medium mb-3 text-primary">Se trata de un curso de 1 clase de 2 horas donde te voy a enseñar:</p>
                                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                                <li>Preparación y cuidado correcto de la piel.</li>
                                                <li>Cómo elegir correctamente tu base y corrector. Formas de aplicación.</li>
                                                <li>Contornos en polvo y correcciones según tipo de rostro.</li>
                                                <li>Maquillaje en tonos neutros según tipo de ojo.</li>
                                                <li>Diseño de Cejas.</li>
                                                <li>Labios: definición y simetría.</li>
                                                <li>Transformar maquillaje de día en noche en pocos pasos.</li>
                                                <li>Asesoramiento personal e higiene de brochas.</li>
                                            </ul>
                                            <p className="mb-2 flex items-start gap-2">
                                                <span className="text-secondary mt-1">✦</span>
                                                Materiales incluidos (cremas, pinceles y maquillajes), aunque recomendamos traer los tuyos para asesorarte.
                                            </p>
                                            <p className="italic font-serif text-primary/70 mt-3 pt-3 border-t border-primary/10">Cada clase es personalizada, orientada en resaltar tus rasgos y estilo personal.</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {service.upcoming ? (
                                <span className={`w-full block text-center py-4 text-sm uppercase tracking-widest transition-colors ${service.popular
                                        ? 'bg-primary/90 text-white cursor-default'
                                        : 'border border-primary/20 text-primary/40 cursor-default bg-primary/5'
                                    }`}>
                                    Próximamente
                                </span>
                            ) : (
                                <a href="https://wa.me/5491159309893" target="_blank" rel="noopener noreferrer" className={`w-full text-center py-4 text-sm uppercase tracking-widest transition-colors ${service.popular
                                        ? 'bg-primary text-white hover:bg-black'
                                        : 'border border-primary text-primary hover:bg-primary/5'
                                    }`}>
                                    Reservar
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
