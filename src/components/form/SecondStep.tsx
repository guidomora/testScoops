import FrontPage from "../ui/frontPage/FrontPage"
import '../../styles/form/form.css'
import NavigationButton from "../ui/Buttons/NavigationButton"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import { secondStepoptions } from "../menuOptions/secondStep/SecondStepOptions"

const SecondStep = () => {
    return (
        <div>
            <FrontPage barPercent={'20vw'} />
            <div className='textContainer'>
                <p><strong>Genial Juan,</strong> ahora nos gustaría tener
                    cierta info para diseñar una gran propuesta de valor para ti:</p>
                <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>
                <div>
                </div>
                <div className="simpleSelectionContainer">
                    {secondStepoptions.map(option => (
                        <SelectionButton key={option}>{option}</SelectionButton>
                    ))}
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageUrl="/"/>
                    <NavigationButton text='Siguiente' pageUrl='/third-page' />
                </div>
            </div>
        </div>
    )
}

export default SecondStep