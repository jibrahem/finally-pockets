import women3 from '../../assets/women3.jpg'
import './WomenPage.css'

const WomenPage = () => {
    return (
        <>
            <div className="women-top-wrapper">
                <img id="women-page-image" src={women3} alt="women3" />
                <div id="women-page-text-wrapper">
                    <div className='top-women-page'>
                        <div id="women-page-header">FINALLY POCKETS</div>
                        <div id="women-page-body">Introducing</div>
                        <div id="women-page-body-1">Triathlon Suit</div>
                    </div>
                    <div id="women-body-1">U.S Patent Pending</div>
                    <div id="women-body-2">Experience the convenience of thoughtfully place pockets</div>
                    <div id="women-body-2">that provide easy access to your essentials, while enjoying</div>
                    <div id="women-body-2">the comfort and durability of high-quality fabric.</div>
                    <div id="women-body-3">Prepare to take your triathlon experience to new heights</div>
                    <div id="women-body-4">with our game changing suit</div>
                </div>
            </div>
        </>
    )
}

export default WomenPage
