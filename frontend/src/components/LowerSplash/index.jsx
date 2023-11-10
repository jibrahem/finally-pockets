import './LowerSplash.css'
import women2 from '../../assets/women2.jpg'
import men2 from '../../assets/men2.jpg'

const LowerSplash = () => {
    return(
        <>
            <div className='low-splash-wrapper'>
                    <img id="women2-image" src={women2} alt="women2" />
                    <img id="men2-image" src={men2} alt="men2" />
            </div>
        </>
    )
}

export default LowerSplash;
