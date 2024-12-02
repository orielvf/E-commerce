import './Banner.css';
import mock from '../../../components-mock.json'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Banner() {

    /*const settings: SwiperProps = {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        //pagination: false,// {clickable: true},
        pagination: { clickable: true },
        navigation: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
        //a11y :true,
    };
    settings={settings}
*/
    return (
        <div id="Banner">
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {mock.banersMock.map((item, index) => (
                    <SwiperSlide key={index} className='item'>
                        <img src={item.endereco} alt="banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}