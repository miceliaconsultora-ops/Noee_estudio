import React from 'react';
import { ArrowRight, Instagram, Mail, MapPin } from 'lucide-react';

export default function CTA() {
    return (
        <section className="bg-primary text-background relative overflow-hidden" id="contacto">
            {/* Círculo sutil de fondo */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-secondary/30 scale-150 md:scale-100" />
            </div>

            <div className="container mx-auto px-6 py-24 max-w-4xl text-center relative z-10">
                <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-secondary mb-6">Tu momento es ahora</h2>
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                    Descubre el poder de un<br />maquillaje que te represente.
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <a href="https://wa.me/5491159309893" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-secondary text-primary font-medium uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:-translate-y-1 inline-flex items-center justify-center group">
                        Reservar mi cita
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#cursos" className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-medium uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 inline-flex items-center justify-center">
                        Comprar curso
                    </a>
                </div>
                <p className="mt-8 text-white/40 text-sm font-light">Reserva en línea en solo 30 segundos. Sin compromiso previo.</p>
            </div>

            {/* Footer minimalista */}
            <footer className="border-t border-white/10 bg-black/20 relative z-10 py-12">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h4 className="font-serif text-2xl text-white mb-2">Noelia Escamez</h4>
                            <p className="text-white/50 text-sm font-light max-w-xs">
                                Estudio de maquillaje profesional y academia de perfeccionamiento.
                            </p>
                        </div>

                        <div className="col-span-1">
                            <h5 className="text-sm uppercase tracking-widest text-secondary mb-4">Contacto</h5>
                            <ul className="space-y-3">
                                <li className="text-white/50 text-sm hover:text-white transition-colors">
                                    <a href="https://instagram.com/noee_estudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Instagram className="w-4 h-4" /> @noee_estudio
                                    </a>
                                </li>
                                <li className="text-white/50 text-sm hover:text-white transition-colors">
                                    <a href="mailto:noeliae.makeup@gmail.com" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" /> noeliae.makeup@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-white/50 text-sm cursor-default">
                                    <MapPin className="w-4 h-4" /> Nuñez, CABA
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h5 className="text-sm uppercase tracking-widest text-secondary mb-4">Legal</h5>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p>IA based design and development by MicelIA Consultora</p>
                        <p>Designed in Luxury Editorial Style</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
