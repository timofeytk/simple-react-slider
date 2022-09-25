import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'


const Slider = () => {

    const [slideX, setSlideX] = useState(0);
    const imagesArray = [img1,img2,img3,img4];

    const toLeft = () => {  
        slideX === 0 ? setSlideX(-100 * (imagesArray.length-1)) : setSlideX(slideX + 100)
    }

    const toRight = () => {
        slideX === -100 * (imagesArray.length-1) ? setSlideX(0) : setSlideX(slideX - 100)
    }

    return(
        <div className='slider'>
            {
                imagesArray.map((item, index)=>{
                    return(
                        <div className='slide' key={index} style={{transform: `translateX(${slideX}%)`}}>
                            <img src={item} alt="slide" />
                        </div>
                    )
                })
            }
            <div className='to-left' onClick={toLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className='to-right' onClick={toRight}><FontAwesomeIcon icon={faChevronRight} /></div>
        </div>
    )
    
}

export default Slider;