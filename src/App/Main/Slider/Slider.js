import React from "react"
import images from './slideImage'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <section className="flat-image-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
            >
                {
                    images.map(({
                        id,
                        image,
                    }) =>
                        <SwiperSlide key={id}><div className="flat-image-slide"><img src={image} alt="logo" /></div></SwiperSlide>
                    )
                }
            
            </Swiper>
        </section>
    )
}

export default Slider