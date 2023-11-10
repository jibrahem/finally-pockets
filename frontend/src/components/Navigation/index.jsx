import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <nav>
                <div className='navigation-bar'>
                    <div className='left-nav'>
                        <Link to='/'>FINALLY POCKETS</Link>
                    </div>
                    <div className='right-nav'>
                        <Link to='/women'>WOMEN</Link>
                        <Link to='/men'>MEN</Link>
                        <Link to='/about'>ABOUT US</Link>
                        <Link to='/blog'>BLOG</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
