import Image from './Image';
import './styles/offer.css';
import addImage1 from './images/additional image 1.png';
import addImage2 from './images/additional image 2.png';
import addImage3 from './images/additional image 3.png';

export function Offer() {
    return (
        <div className="offer">
            <h2>WHAT WE OFFER</h2>
            <p>We're committed to bringing you the best workout experience.</p>
            <div className='additional-images'>
                <Image image={ addImage1 } />
                <Image image={ addImage2 } />
                <Image image={ addImage3 } />
            </div>
        </div>
    )
}