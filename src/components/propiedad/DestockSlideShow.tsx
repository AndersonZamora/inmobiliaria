'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './slideshow.css'

interface Props {
    images: string[];
    title: string;
    className?: string
}

export const DestockSlideShow = ({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                spaceBetween={10}
                navigation={true}
                autoplay={{ delay: 3500 }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className='mySwiper2'
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/propiedades/${image}`}
                                alt={title}
                                width={2000}
                                height={2000}
                                priority
                                className='rounded-lg object-fill w-auto h-auto'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/propiedades/${image}`}
                                alt={title}
                                width={300}
                                height={300}
                                priority
                                className='rounded-lg object-fill w-auto h-auto'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
