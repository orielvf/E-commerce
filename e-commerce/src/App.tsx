//Import styles
import './App.css'
//Import Swiper components
import Slider from './components/Slider/Slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
//Import React components
import Header from './components/Header';
import Container from './components/Container/container';
import Item from './components/Item/Item';
import Banner from './components/Banner/Banner';



export default function App() {
  const settings: SwiperProps = {
    slidesPerView: 4,
    spaceBetween: 130,
    loop: true,
    //pagination: false,// {clickable: true},
    pagination: { clickable: true },
    navigation: true,
    //a11y :true,
  };

  return (
    <div>
      <Banner />
    </div>

  )
}