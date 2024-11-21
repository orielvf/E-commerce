//Import styles
import './App.css'
//Import React components
import Banner from './components/Banner';
import Header from './components/Header';
//Import Swiper components
import Slider from './components/Slider/Slider';
import {SwiperProps, SwiperSlide} from 'swiper/react';


export default function App() {
  const settings : SwiperProps= {
    slidesPerView :1,
    spaceBetween :30,
    loop :true,
    //pagination: false,// {clickable: true},
    pagination: {clickable: true},
    navigation :true, 
    //a11y :true,
  };

  return (
    <div>
      <Header/>
      <Banner/>
      <Slider settings = {settings}>
        <SwiperSlide>
          <h1>teste 1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>teste 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>teste 3</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>teste 4</h1>
        </SwiperSlide>
    </Slider>
    </div>
    
  )
}