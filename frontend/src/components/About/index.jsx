import './About.css'
import about1 from '../../assets/about1.jpg'

const About = () => {
    return (
        <>
            <div id="about-wrapper">
                <img id="about-image" src={about1} alt="about" />
                <div id="about-text-wrapper">
                    <div id="about-header">FINALLY POCKETS</div>
                    <div id="about-body">Our Story</div>
                </div>
            </div>
        </>
    )
}

export default About
