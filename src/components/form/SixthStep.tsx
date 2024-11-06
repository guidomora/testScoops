import NavigationButton from "../ui/Buttons/NavigationButton"
import FrontPage from "../ui/frontPage/FrontPage"


const SixthStep = () => {
    return (
        <div>
            <FrontPage barPercent={'100vw'} />
            <div className="lastTextContainer">
                <div>
                    <h1>Muchas gracias</h1>
                    <h2>por querer ser parte <br /> de la familia Scoopers.</h2>
                    <p>Nos vemos pronto!</p>
                    <NavigationButton text='Finalizar' isFinal pageUrl='/seventh-page' />
                </div>
            </div>
        </div>
    )
}

export default SixthStep