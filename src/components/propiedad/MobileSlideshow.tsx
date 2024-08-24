'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import './slideshow.css'

interface Props {
    images: string[];
    title: string;
    className?: string
}

export const MobileSlideshow = ({ images, title, className }: Props) => {
    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px'
                }}
                pagination
                autoplay={{ delay: 2500 }}
                modules={[FreeMode, Pagination, Autoplay,]}
                className='mySwiper2'
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/propiedades/${image}`}
                                alt={title}
                                width={600}
                                height={500}
                                priority
                                className='object-fill w-auto h-auto'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
