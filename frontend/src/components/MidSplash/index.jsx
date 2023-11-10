import './Midsplash.css'
import women from '../../assets/women.jpg'
import men from '../../assets/men.jpg'
import { Link } from 'react-router-dom'

const MidSplash = () => {
    return (
        <>
            <div className='mid-splash-wrapper'>
                <img id="women-image" src={women} alt="women" />
                <img id="men-image" src={men} alt="men" />
                {/* <div className='mid-text-wrapper'> */}
                <Link to='/women' id='women-text-wrapper'>
                    <div id='women-header'>Women</div>
                    <div id='women-body'>tri-suit</div>
                </Link>
                <Link to='/men' id='men-text-wrapper'>
                    <div id='men-header'>Men</div>
                    <div id='men-body'>tri-suit</div>
                </Link>
                {/* </div> */}
            </div>
        </>
    )
}

export default MidSplash;
