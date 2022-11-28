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
                    <div className='call-to-action'><a href="http://www.nowhere.com" target='_blank' rel='noreferrer'>Join Now</a></div>
                </div>
            </header>
        </div>
    )
}

export default Hero;