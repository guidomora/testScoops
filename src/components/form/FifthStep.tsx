
import { fifthStepOptions } from "../menuOptions/fifthStep/FifthStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import FrontPage from "../ui/frontPage/FrontPage"


const FifthStep = () => {

  return (
    <div>
        <FrontPage barPercent={'75vw'} />
        <div className="textContainer">
                <p className="textFifth"><strong>Ahora te vamos a sorprender... </strong>
                    ¿A cuál industria pertenece tu empresa?
                </p>
                <div className="simpleSelectionContainer">
                    {fifthStepOptions.map((option, index) => (
                        index === fifthStepOptions.length - 1 ? (
                            <SelectionButton key={option} isLast>
                                {option}
                            </SelectionButton>
                        ) : (
                            <SelectionButton key={option}>{option}</SelectionButton>
                        )
                    ))}
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageUrl="/fourth-page" />
                    <NavigationButton text='Siguiente' pageUrl='/sixth-page' />
                </div>
            </div>
    </div>
  )
}

export default FifthStep