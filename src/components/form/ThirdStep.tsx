import { thirdStepOptions } from "../menuOptions/thirdStep/thirdStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { LongSelectionButton } from "../ui/Buttons/SimpleButtons/LongSelectionButtons"
import FrontPage from "../ui/frontPage/FrontPage"


const ThirdStep = () => {
    return (
        <div>
            <FrontPage barPercent={'37vw'} />
            <div className="textContainer">
                <p>¿Cuáles son tus principales desafíos para 2024?</p>
                {/* TODO: */}
                <div style={{display:"flex", flexDirection:"column"}}>
                    {thirdStepOptions.map(option => (
                        <LongSelectionButton key={option.option}>
                            <span className="option">{option.option}</span>
                            <div className="flexOne"></div>
                            {option.value}
                            <div className="flexOne"></div>
                            </LongSelectionButton>
                    ))}
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageUrl="/" />
                    <NavigationButton text='Siguiente' pageUrl='/fourth-page' />
                </div>
            </div>
        </div>
    )
}

export default ThirdStep