import FrontPage from "../ui/frontPage/FrontPage"
import '../../styles/form/form.css'
import NavigationButton from "../ui/Buttons/NavigationButton"
import NavigationBackButton from "../ui/Buttons/NavigationBackButton"
import { SelectionButton } from "../ui/Buttons/SimpleButtons/SelectionButton"
import { secondStepoptions } from "../menuOptions/secondStep/SecondStepOptions"
import { AppContext } from "../../context/AppContext"
import { useContext, useEffect, useState } from "react"


const SecondStep = () => {
    const { userName, setFirstChoice, firstChoice } = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [route, setRoute] = useState<string>("/second-page");
    
    useEffect(() => {
        if (firstChoice) {
            setSelectedOption(firstChoice); // Si hay una opción guardada, establecerla en el estado
            setRoute('/third-page');
        }
    }, [firstChoice]);

    const handleSelection = (selectedOption: string) => {
        console.log(selectedOption);
        setFirstChoice(selectedOption);
        setSelectedOption(firstChoice);
    };
    
    return (
        <div className="deskContainer">
            <FrontPage barPercent={'20vw'} />
            <div className='textContainer'>
                <p><strong>Genial {userName},</strong> ahora nos gustaría tener
                    cierta info para diseñar una gran propuesta de valor para ti:</p>
                <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>
                <div>
                </div>
                <div className="preContainer">
                    <div className="simpleSelectionContainer">
                        {secondStepoptions.map(option => (
                            <SelectionButton
                            isSelected={selectedOption === option}
                            onClick={() => handleSelection(option)} 
                            key={option}>{option}</SelectionButton>
                        ))}
                    </div>
                </div>
                <div className="buttonsContainer">
                    <NavigationBackButton pageNumber={1} pageUrl="/" />
                    <NavigationButton pageNumber={3} text='Siguiente' pageUrl={route} />
                </div>
            </div>
        </div>
    )
}

export default SecondStep