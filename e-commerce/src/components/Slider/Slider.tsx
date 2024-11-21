// Import Swiper components
import { Swiper, SwiperProps } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
// Import styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
//Import React components
import { ReactNode } from 'react';

interface SliderProps{
    settings : SwiperProps
    children : ReactNode
}

export default function Slider({settings, children}: SliderProps) {
    return <Swiper modules={[Navigation, Pagination, A11y]} {... settings}>
        {children}
    </Swiper>;

}

