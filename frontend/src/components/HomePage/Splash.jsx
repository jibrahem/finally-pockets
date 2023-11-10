import pocket from '../../assets/pocket.jpg'

const Splash = () => {
    return (
        <>
            <div id="splash-wrapper">
                <img id="splash-image" src={pocket} alt="pocket" />
                <div id="splash-text-wrapper">
                        <div id="splash-header">FINALLY POCKETS</div>
                        <div id="splash-body">Empowering athletes</div>
                        <div id="splash-body-2">One pocket at a time</div>
                </div>
            </div>
        </>
    )
}

export default Splash;
