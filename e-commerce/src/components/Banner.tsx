//icones
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
//imagens
import  bannerImage  from '../assets/image01.gif';

function Banner() {
    return(
    <>
    <GrFormPreviousLink style={{
        color:"black"        
        }}/>

    <GrFormNextLink style={{
        color:"black"}}/>
    <div style={{
            display: 'flex', 
            justifyContent: 'center', // Centraliza horizontalmente
            //alignItems: 'center',     // Centraliza verticalmente
        }}>
            <img src={bannerImage} alt="Banner" />
        </div>

    </>
    
)}
    
export default Banner