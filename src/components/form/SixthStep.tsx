import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import FrontPage from "../ui/frontPage/FrontPage"


const SixthStep = () => {
    const {userName, firstChoice, secondChoice, thirdChoice, fourthChoice} = useContext(AppContext);

    console.log("User:", userName,
        "Opcion 1:", firstChoice,
        "Opcion 2:", secondChoice,
        "Opcion 3:", thirdChoice,
        "Opcion 4:", fourthChoice);
    
    return (
        <div className="deskContainer" id="last">
            <FrontPage barPercent={'100vw'} />
            <div className="lastTextContainer">
                <div className="lastText">
                    <h1>Muchas gracias</h1>
                    <h2>por querer ser parte <br /> de la familia Scoopers.</h2>
                    <p>Nos vemos pronto!</p>
                    <button className="finalButton">
                        <a target="blank" href="https://www.customerscoops.com/">Finalizar</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SixthStep