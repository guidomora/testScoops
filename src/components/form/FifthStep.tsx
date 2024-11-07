
import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import { fifthStepOptions } from "../menuOptions/fifthStep/FifthStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import FrontPage from "../ui/frontPage/FrontPage"


const FifthStep = () => {
    const { setFourthChoice, fourthChoice } = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [route, setRoute] = useState<string>("/fifth-page");
    
    useEffect(() => {
        if (fourthChoice) {
            setSelectedOption(fourthChoice);
            setRoute('/sixth-page');
        }
    }, [fourthChoice]);

    const handleSelection = (selectedOption: string) => {
        console.log(selectedOption);
        setFourthChoice(selectedOption);
        setSelectedOption(fourthChoice);
    };
    

    return (
        <div className="deskContainer">
            <FrontPage barPercent={'75vw'} />
            <div className="textContainer">
                <p className="textFifth"><strong>Ahora te vamos a sorprender... </strong>
                    ¿A cuál industria pertenece tu empresa?
                </p>
                <div className="simpleSelectionContainer" id="mobile">
                    {fifthStepOptions.map((option, index) => (
                        index === fifthStepOptions.length - 1 ? (
                            <SelectionButton 
                            isSelected={selectedOption === option}
                            onClick={() => handleSelection(option)}
                            key={option} isLast={true}>
                                {option}
                            </SelectionButton>
                        ) : (
                            <SelectionButton 
                            isSelected={selectedOption === option}
                            onClick={() => handleSelection(option)}
                            key={option}>{option}</SelectionButton>
                        )
                    ))}
                </div>
                <div className="preContainer">
                    <div className="simpleSelectionContainer" id="tabletDesk">
                        {fifthStepOptions.map((option) => (
                            <SelectionButton 
                            isSelected={selectedOption === option}
                            onClick={() => handleSelection(option)}
                            key={option}>
                                {option}
                            </SelectionButton>
                        ))}
                    </div>
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageNumber={4} pageUrl="/fourth-page" />
                    <NavigationButton pageNumber={6} text='Siguiente' pageUrl={route} />
                </div>
            </div>
        </div>
    )
}

export default FifthStep