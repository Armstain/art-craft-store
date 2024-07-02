import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';

const Banner = () => {
    return (

        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                loop={true}

                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/ckkBzZ5/kym-mackinnon-9k-TK2xd-Do6k-unsplash.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Lampworking </h2>
                        <p className="text-lg text-center mt-5">"Create unique lighting with our lampworking supplies.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/vv57Z4c/vecteezy-ai-generated-textures-textures-background-wallpaper-40173967.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Paper Quilling & Origami</h2>
                        <p className="text-lg text-center mt-5">Explore the art of paper folding with our paper quilling and origami kits.  </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className='w-full h-[100vh] object-cover rounded-box filter brightness-75' src="https://i.ibb.co/F7dt9rZ/elena-mozhvilo-JP787-C1n5-JQ-unsplash.jpg" alt="" />
                    <div className="absolute inset-0 bg-black/40 rounded-box"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-5xl font-bold">Scrapbooking</h2>
                        <p className="text-lg text-center mt-5">Preserve your memories with our scrapbooking supplies.</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );

};

export default Banner;