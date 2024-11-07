import { useContext, useEffect, useState } from "react"
import { fourthStepOptions } from "../menuOptions/fourthStep/FourthStepOptions"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import NavigationButton from "../ui/Buttons/NavigationButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import FrontPage from "../ui/frontPage/FrontPage"
import { AppContext } from "../../context/AppContext"


const FourthStep = () => {
    const { setThirdChoice, thirdChoice } = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [route, setRoute] = useState<string>("/fourth-page");
    
    useEffect(() => {
        if (thirdChoice) {
            setSelectedOption(thirdChoice);
            setRoute('/fifth-page');
        }
    }, [thirdChoice]);

    const handleSelection = (selectedOption: string) => {
        console.log(selectedOption);
        setThirdChoice(selectedOption);
        setSelectedOption(thirdChoice);
    };
    

    return (
        <div className="deskContainer">
            <FrontPage barPercent={'55vw'} />
            <div className="textContainer">
                <p>¿Cuál CRM están utilizando en tu empresa? CRM:</p>
                <div className="simpleSelectionContainer" id="mobile">
                    {fourthStepOptions.map((option, index) => (
                        index === fourthStepOptions.length - 1 ? (
                            <SelectionButton
                            onClick={() => handleSelection(option)} 
                            isSelected={selectedOption === option}
                            key={option} isLast={true}>
                                {option}
                            </SelectionButton>
                        ) : (
                            <SelectionButton
                            onClick={() => handleSelection(option)}
                            isSelected={selectedOption === option}
                            key={option}>{option}</SelectionButton>
                        )
                    ))}
                </div>
                <div className="preContainer">
                    <div className="simpleSelectionContainer" id="tabletDesk">
                        {fourthStepOptions.map((option) => (
                            <SelectionButton 
                            onClick={() => handleSelection(option)} 
                            isSelected={selectedOption === option}
                            key={option}>
                                {option}
                            </SelectionButton>
                        ))}
                    </div>
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageNumber={3} pageUrl="/third-page" />
                    <NavigationButton pageNumber={5} text='Siguiente' pageUrl={route} />
                </div>
            </div>
        </div>
    )
}

export default FourthStep