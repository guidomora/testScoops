import '../../styles/form/form.css'
import NavigationButton from '../ui/Buttons/NavigationButton'
import FrontPage from "../ui/frontPage/FrontPage"


const FirstStep = () => {
    return (
        <div>
            <FrontPage />
            <div className='textContainer'>
                <p>Muchas gracias por tu interés en conocer <strong>customerScoops,</strong> que a través de Formularios Conversacionales Inteligente te ayudamos
                    a aumentar el revenue y rentabilidad
                    de tu negocio.</p>
                <p>
                    Queremos conocerte, ¿cuál es tu nombre?
                </p>
                <div className='inputContainer'>
                    <input type="text" placeholder='Nombre' />
                    <NavigationButton text='Comenzar' pageUrl='/second-page' />
                </div>
            </div>
        </div>
    )
}

export default FirstStep