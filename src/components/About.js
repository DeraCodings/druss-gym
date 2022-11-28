import firstImage from './images/girl with ropes.png';
import secondImage from './images/boy-boxing.png';
import Image from './Image';
import './styles/about.css';

export const About = () => {
    return (
        <div className="about-page">
            <Text />
            <div className="images">
                <Image image={ secondImage } />
                <Image image={ firstImage } />
            </div>
        </div>
    )
}

export function Text() {
    return (
        <div className="text">
            <h2>ABOUT OUR FIT <br />FAMILY</h2>
            <p>
                Astraeus was founded in 2001 by a husband and wife team, Bobby and Dora Graff.
                Since then, we have expanded to over 115 locations nationwide!
            </p>
            <a>Learn More</a>
        </div>
    )
}