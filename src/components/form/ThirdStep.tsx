import { useContext, useEffect, useState } from "react"
import { thirdStepOptions } from "../menuOptions/thirdStep/thirdStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { LongSelectionButton } from "../ui/Buttons/SimpleButtons/LongSelectionButtons"
import FrontPage from "../ui/frontPage/FrontPage"
import { AppContext } from "../../context/AppContext"


const ThirdStep = () => {
    const { setSecondChoice, secondChoice } = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [route, setRoute] = useState<string>("/third-page");
    
    useEffect(() => {
        if (secondChoice) {
            setSelectedOption(secondChoice);
            setRoute('/fourth-page');
        }
    }, [secondChoice]);

    const handleSelection = (selectedOption: string) => {
        console.log(selectedOption);
        setSecondChoice(selectedOption);
        setSelectedOption(secondChoice);
    };
    

    return (
        <div className="deskContainer">
            <FrontPage barPercent={'37vw'} />
            <div className="textContainer">
                <p>¿Cuáles son tus principales desafíos para 2024?</p>
                <div className="preContainer">
                    <div className="longSelectionContainer">
                        {thirdStepOptions.map(option => (
                            <LongSelectionButton
                            isSelected={selectedOption === option.value}
                            onClick={() => handleSelection(option.value)}
                            key={option.option}>
                                <span className="option">{option.option}</span>
                                <div className="flexOne"></div>
                                <span className="optionValue">{option.value}</span>
                                <div className="flexOne"></div>
                            </LongSelectionButton>
                        ))}
                    </div>
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageNumber={2} pageUrl={'/second-page'} />
                    <NavigationButton pageNumber={4} text='Siguiente' pageUrl={route} />
                </div>
            </div>
        </div>
    )
}

export default ThirdStep