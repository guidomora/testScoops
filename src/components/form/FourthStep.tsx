import { fourthStepOptions } from "../menuOptions/fourthStep/FourthStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import FrontPage from "../ui/frontPage/FrontPage"


const FourthStep = () => {
    return (
        <div>
            <FrontPage barPercent={'55vw'} />
            <div className="textContainer">
                <p>¿Cuál CRM están utilizando en tu empresa? CRM:</p>
                <div className="simpleSelectionContainer">
                    {fourthStepOptions.map((option, index) => (
                        index === fourthStepOptions.length - 1 ? (
                            <SelectionButton key={option} isLast>
                                {option}
                            </SelectionButton>
                        ) : (
                            <SelectionButton key={option}>{option}</SelectionButton>
                        )
                    ))}
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageUrl="/third-page" />
                    <NavigationButton text='Siguiente' pageUrl='/fifth-page' />
                </div>
            </div>
        </div>
    )
}

export default FourthStep