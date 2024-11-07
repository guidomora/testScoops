import { useContext, useState } from 'react'
import '../../styles/form/form.css'
import NavigationButton from '../ui/Buttons/NavigationButton'
import FrontPage from "../ui/frontPage/FrontPage"
import { AppContext } from '../../context/AppContext'


const FirstStep = () => {
    const { userName, setUserName } = useContext(AppContext);
    const [route, setRoute] = useState<string>("/");

    const validate = () => {
        if (userName != '') {
            setRoute('/second-page');
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        validate();
    };


    return (
        <div className='deskContainer'>
            <FrontPage />
            <div className='textContainer'>
                <p>Muchas gracias por tu interés en conocer <strong>customerScoops,</strong> que a través de Formularios Conversacionales Inteligente te ayudamos
                    a aumentar el revenue y rentabilidad
                    de tu negocio.</p>
                <p>
                    Queremos conocerte, ¿cuál es tu nombre?
                </p>
                <div className='inputContainer'>
                    <input
                        value={userName}
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Nombre' />
                    <NavigationButton
                        text='Comenzar'
                        pageUrl={route} />
                </div>
            </div>
        </div>
    )
}

export default FirstStep