import './styles/hero.css';


function Hero() {
    return (
        <div className='hero-container'>
            <nav>
                <h4>Druss Gym</h4>
            </nav>
            <header>
                <div>
                    <h1>BE YOUR <span>BEST</span></h1>
                    <div className='call-to-action'><a href="#">Join Now</a></div>
                </div>
            </header>
        </div>
    )
}

export default Hero;