import './styles/image_div.css';

function Image(props) {
    const { image } = props;
    return (
        <div className="div-image">
            <img src={image} alt="boxing_image" />
        </div>
    )
}

export default Image;