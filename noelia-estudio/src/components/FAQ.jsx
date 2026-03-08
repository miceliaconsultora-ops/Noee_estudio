import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: "¿Los cursos incluyen materiales?",
            answer: "Sí, todos los cursos y perfeccionamientos incluyen el uso de nuestros productos premium durante la clase. Te ayudamos a armar tu propio neceser para el futuro."
        },
        {
            question: "¿Con cuánto tiempo debo reservar mi cita para un evento?",
            answer: "Sugerimos reservar con al menos 3 semanas de anticipación para asegurar disponibilidad, especialmente en temporada alta de bodas o fiestas de fin de año."
        },
        {
            question: "¿Realizan maquillaje a domicilio?",
            answer: "Ofrecemos servicio a domicilio para novias y madrinas. Para eventos sociales, los servicios se realizan en el confort de nuestro estudio privado."
        },
        {
            question: "¿Tengo que tener conocimientos previos para el curso?",
            answer: "No, nuestros cursos de automaquillaje básico están diseñados para empezar desde cero. Avanzaremos a tu ritmo asegurándonos de que adquieras las técnicas correctas."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white relative" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-primary/60 mb-4">Dudas Comunes</h2>
                    <h3 className="font-serif text-3xl md:text-5xl text-primary mb-6">Preguntas Frecuentes</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-primary/10 transition-all duration-300 ${openIndex === index ? 'pb-6' : 'pb-4'}`}
                        >
                            <button
                                className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-secondary' : 'text-primary group-hover:text-primary/70'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary/40 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-secondary' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-primary/70 font-light pr-8 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
