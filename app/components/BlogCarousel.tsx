
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { blogPosts } from "../data/dataBlog";

export default function BlogCarousel() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={28}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {blogPosts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <article className="pb-8">
                            <img
                                src={post.imagem}
                                alt={post.alt}
                                className="w-full h-36 sm:h-40 object-cover rounded-md"
                            />

                            <p className="text-xs text-blue-600 font-medium mt-3">
                                {post.categoria}
                            </p>

                            <h2 className="text-sm font-semibold text-gray-900 mt-1 leading-snug">
                                {post.titulo}
                            </h2>

                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                                <span>▦ {post.data}</span>
                                <span>◉ {post.comentarios}</span>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
