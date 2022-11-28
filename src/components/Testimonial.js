import Image from "./Image";
import './styles/testmonial.css';


export function Testimonial({arr}) {
    return (
        <div className="container">
            <h2>BEFORE AND AFTER</h2>
            <div className="wrapper">
                {arr.map((image, idx) => (
                    <Image key={idx} image={image} />
                ))}
            </div>
        </div>
    )
}