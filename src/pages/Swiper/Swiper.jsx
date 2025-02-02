import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SwiperP = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className={"swiper-home"}>
            <h2 className={"swiper-title"}>
                ПОЗНАКОМЬТЕСЬ С ИНФРАСТРУКТУРОЙ NC
            </h2>
            <img className={"swiper-home-before"} src="https://nomad.iuk.kg/wp-content/uploads/2022/07/nomad-logo-4-333.png" alt=""/>
            <img className={"swiper-home-before"} src="https://nomad.iuk.kg/wp-content/uploads/2022/07/nomad-logo-3.png" alt=""/>
            <div className="display">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-6.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-7.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-8.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-1.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-2.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-3.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-4.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-5.jpg"/>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction={"vertical"}
                    spaceBetween={5}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-6-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-7-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-8-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-1-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-2-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-3-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-4-140x80.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/Interer-Nomad-Kolledzh-5-140x80.jpg"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

    );
};

export default SwiperP;