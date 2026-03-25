import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronRight, Fingerprint } from 'lucide-react';

const galleries = [
    {
        id: "producciones",
        title: "Producciones",
        description: "Estilismos creativos orientados al mundo editorial y audiovisual.",
        cover: "/portfolio/Producciones/3bbe4441-3bee-49e6-b0d8-71fd28f3ba53_Original.JPG",
        items: [
            { type: "image", src: "/portfolio/Producciones/00f557ca-1a2d-4cac-aefe-ce05b73f9614.jpg" },
            { type: "image", src: "/portfolio/Producciones/3bbe4441-3bee-49e6-b0d8-71fd28f3ba53_Original.JPG" },
            { type: "image", src: "/portfolio/Producciones/IMG_0534.PNG" },
            { type: "image", src: "/portfolio/Producciones/IMG_2454.PNG" },
        ]
    },
    {
        id: "quinceaneras",
        title: "Quinceañeras",
        description: "Looks deslumbrantes diseñados para que brilles en tu gran noche.",
        cover: "/portfolio/Quinceañeras/IMG_2445.PNG",
        items: [
            { type: "image", src: "/portfolio/Quinceañeras/5b0d310b-1fb9-4da0-88b1-d8b3ba253a0a.jpg" },
            { type: "image", src: "/portfolio/Quinceañeras/IMG_2445.PNG" },
            { type: "image", src: "/portfolio/Quinceañeras/IMG_2453.PNG" },
            { type: "image", src: "/portfolio/Quinceañeras/IMG_9921.JPG" },
        ]
    },
    {
        id: "eventos-sociales",
        title: "Sociales",
        description: "Elegancia y perfección para cualquier ocasión especial.",
        cover: "/portfolio/Eventos Sociales/IMG_4412.JPG",
        items: [
            { type: "image", src: "/portfolio/Eventos Sociales/IMG_2449.PNG" },
            { type: "image", src: "/portfolio/Eventos Sociales/IMG_4410.JPG" },
            { type: "image", src: "/portfolio/Eventos Sociales/IMG_4411.JPG" },
            { type: "image", src: "/portfolio/Eventos Sociales/Msrtu1.jpg" },
        ]
    },
    {
        id: "novias",
        title: "Novias",
        description: "El día más especial requiere de una atención perfecta a cada detalle.",
        cover: "/portfolio/Novias/IMG_3108.JPG",
        items: [
            { type: "image", src: "/portfolio/Novias/a5d24534-a1b0-4c96-8d61-ef74cd27f064.jpg" },
            { type: "video", src: "/portfolio/Novias/IMG_3052.mp4" },
            { type: "video", src: "/portfolio/Novias/F5CF5A5D-AB82-4841-89B3-DCA0BAD34672.mp4" },
            { type: "image", src: "/portfolio/Novias/IMG_3107.JPG" },
        ]
    },
    {
        id: "madrinas",
        title: "Madrinas",
        description: "Maquillaje elegante y distinguido, priorizando la durabilidad y sofisticación.",
        cover: "/portfolio/Madrinas/Facetune_09-04-2024-13-58-03.jpg",
        items: [
            { type: "image", src: "/portfolio/Madrinas/Facetune_09-04-2024-13-58-03.jpg" },
            { type: "image", src: "/portfolio/Madrinas/IMG_2448.PNG" },
            { type: "image", src: "/portfolio/Madrinas/madrina3.jpeg" },
        ]
    },
    {
        id: "peinados",
        title: "Peinados",
        description: "Estructuras clásicas o descontracturadas para coronar tu estilismo.",
        cover: "/portfolio/Peinados/0b505bd8-7170-4d8b-b8cd-46e69ff35e8d.jpg",
        items: [
            { type: "image", src: "/portfolio/Peinados/0b505bd8-7170-4d8b-b8cd-46e69ff35e8d.jpg" },
            { type: "image", src: "/portfolio/Peinados/2CB9EC20-B015-4910-84D7-3A2DD307D749.jpg" },
            { type: "image", src: "/portfolio/Peinados/IMG_2457.PNG" },
            { type: "image", src: "/portfolio/Peinados/IMG_2459.PNG" },
        ]
    },
    {
        id: "automaquillaje",
        title: "Automaquillaje",
        description: "Aprende las mejores técnicas para resaltar tus rasgos naturales día a día.",
        cover: "/portfolio/Automaquillaje/IMG_1210.jpg",
        items: [
            { type: "image", src: "/portfolio/Automaquillaje/IMG_1207.jpg" },
            { type: "video", src: "/portfolio/Automaquillaje/IMG_1200.mp4" },
            { type: "image", src: "/portfolio/Automaquillaje/IMG_1211.jpg" },
            { type: "image", src: "/portfolio/Automaquillaje/IMG_1292.PNG" },
        ]
    }
];

const GalleryCarousel = ({ gallery, onClose }) => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Permitir scroll horizontal con la rueda del mouse vertical y arrastre
    useEffect(() => {
        const handleWheel = (e) => {
            if (scrollContainerRef.current) {
                e.preventDefault();
                scrollContainerRef.current.scrollLeft += e.deltaY;
            }
        };
        const ref = scrollContainerRef.current;
        if (ref) {
            ref.addEventListener('wheel', handleWheel, { passive: false });
        }
        return () => {
            if (ref) {
                ref.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeaveDrag = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMoveDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2.5; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Parallax suave en la imagen interna
    const handleItemMouseMove = (e, itemRef) => {
        if (!itemRef.current || isDragging) return;
        const rect = itemRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        const media = itemRef.current.querySelector('.media-item');
        if (media) media.style.transform = `perspective(1000px) rotateX(${-yPct * 10}deg) rotateY(${xPct * 10}deg) scale(1.05)`;
    };

    const handleItemMouseLeave = (itemRef) => {
        if (!itemRef.current) return;
        const media = itemRef.current.querySelector('.media-item');
        if (media) media.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <div className="w-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 h-[65vh] min-h-[500px]">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-6">
                <div>
                    <h3 className="font-serif text-3xl md:text-5xl text-white mb-2">{gallery.title}</h3>
                    <p className="text-white/60 font-light max-w-xl">{gallery.description}</p>
                </div>
                <button 
                    onClick={onClose}
                    className="group flex items-center gap-3 px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 uppercase tracking-widest text-xs flex-shrink-0 rounded-full"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Volver a las Colecciones
                </button>
            </div>

            <div 
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveDrag}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMoveDrag}
                className="w-full flex-grow flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Ocultar barra de scroll en webkit */}
                <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />

                {gallery.items.map((item, idx) => {
                    const itemRef = useRef(null);
                    return (
                        <div 
                            key={idx} 
                            ref={itemRef}
                            className="relative h-full aspect-[4/5] md:aspect-[3/4] snap-center overflow-hidden bg-[#111] flex-shrink-0 shadow-2xl rounded-sm pointer-events-auto"
                            onMouseMove={(e) => handleItemMouseMove(e, itemRef)}
                            onMouseLeave={() => handleItemMouseLeave(itemRef)}
                            style={{pointerEvents: isDragging ? 'none' : 'auto'}} // disable item interaction while dragging
                        >
                            <div className="absolute inset-0 transition-transform duration-700 ease-out media-item">
                                {item.type === 'video' ? (
                                    <video 
                                        src={item.src} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="w-full h-full object-cover select-none pointer-events-none"
                                    />
                                ) : (
                                    <img 
                                        src={item.src} 
                                        alt={`${gallery.title} ${idx + 1}`} 
                                        className="w-full h-full object-cover select-none pointer-events-none"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/30 text-[10px] tracking-widest uppercase">
                <Fingerprint className="w-3 h-3" />
                Desliza horizontalmente
            </div>
        </div>
    );
};

export default function Portfolio() {
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <section className="py-20 md:py-24 bg-black relative selection:bg-secondary/40" id="portfolio">
            <div className="container mx-auto px-6 max-w-7xl">
                {!selectedGallery && (
                    <div className="animate-in fade-in duration-700">
                        <div className="text-center mb-10 md:mb-14">
                            <h2 className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-secondary mb-3">Las Colecciones</h2>
                            <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-4">Nuestro Arte</h3>
                            <p className="max-w-2xl mx-auto text-white/60 font-light text-sm md:text-base mb-8">
                                Explora la dedicación detrás de cada look editorial y social.
                            </p>
                            
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors rounded-full text-xs tracking-[0.2em] uppercase font-medium"
                            >
                                {isExpanded ? 'Ocultar Galerías' : 'Ver Galerías'}
                            </button>
                        </div>

                        {/* Mosaico Colapsable Sin Scroll Vertical */}
                        <div className={`transition-all duration-[1.5s] ease-in-out overflow-hidden ${isExpanded ? 'opacity-100 max-h-[1000px] mt-4' : 'opacity-0 max-h-0 mt-0 pointer-events-none'}`}>
                            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2 md:gap-4 h-[65vh] min-h-[450px] max-h-[800px]">
                            {galleries.map((gallery, index) => {
                                // En desktop (lg): 4 columnas x 2 filas = 8 espacios. 
                                // Ocupamos 1 espacio por foto excepto la primera que ocupa 2 = 8 slots llenos perfectos.
                                const isWide = index === 0;

                                return (
                                    <div 
                                        key={gallery.id}
                                        onClick={() => setSelectedGallery(gallery)}
                                        className={`group relative cursor-pointer overflow-hidden bg-white/5 rounded-sm ${
                                            isWide ? 'col-span-2 row-span-2 lg:row-span-1' : 'col-span-1 row-span-1'
                                        }`}
                                    >
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-[1.5s]" />
                                        <img 
                                            src={gallery.cover} 
                                            alt={gallery.title} 
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                        
                                        <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <h4 className="text-white font-serif text-lg md:text-2xl mb-1">{gallery.title}</h4>
                                            <div className="flex items-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                <span className="text-[10px] font-sans tracking-[0.2em] uppercase mr-2 text-white/80">Ver Galería</span>
                                                <ChevronRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                )}

                {selectedGallery && (
                    <GalleryCarousel 
                        gallery={selectedGallery} 
                        onClose={() => setSelectedGallery(null)} 
                    />
                )}
            </div>
        </section>
    );
}
