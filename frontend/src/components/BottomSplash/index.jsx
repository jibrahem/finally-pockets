import './BottomSplash.css'
import bottomsplash from '../../assets/bottomsplash.jpg'

const BottomSplash = () => {
    return (
        <>
            <>
                <div className='bottom-splash-wrapper'>
                    <img id="bottom-splash-image" src={bottomsplash} alt="bottomsplash" />
                    <div className='bottom-text-wrapper'>
                        <div className='left-text'>
                            <div className='top-left-text'>SPECIAL THANKS TO</div>
                            <div className='bottom-left-text'>UCSD Basement and Blackstone LaunchPad</div>
                        </div>
                        <div className='right-text'>
                            <div className='top-right-text'>Join Team Pockets!</div>
                            <div className='bottom-right-text'>For more updates and surprise events</div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
export default BottomSplash;
