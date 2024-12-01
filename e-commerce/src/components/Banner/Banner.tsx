import { SwiperProps, SwiperSlide } from 'swiper/react';
import Slider from '../Slider/Slider';
import mock from '../../../components-mock.json'


export default function Banner() {

    const settings: SwiperProps = {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        //pagination: false,// {clickable: true},
        pagination: { clickable: true },
        navigation: true,
        //a11y :true,
    };

    return (
        <div id="Banner">
            <Slider settings={settings}>
                {mock.banersMock.map((item, index) => (
                    <SwiperSlide key={index} className='item'>
                        <img src={item.endereco} alt="Banner" />
                    </SwiperSlide>
                ))}
            </Slider>
        </div>
    )
}