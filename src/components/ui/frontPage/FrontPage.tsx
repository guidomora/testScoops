import ColorSvg from '../../../assets/svgs/ColorSvg'
import CustomerScoopsLogo from '../../../assets/svgs/CustomerScoopsLogo'
import '../../../styles/ui/frontPage.css'
import Guy1X from '../../../assets/imgs/laughing-happy-guy-0.png'
import Guy2X from '../../../assets/imgs/laughing-happy-guy-1.png'
import Guy3X from '../../../assets/imgs/laughing-happy-guy- 2.png'
import ScoopsEyes from '../../../assets/svgs/ScoopsEyes'
import { StatusBar } from '../StatusBar/StatusBar'

const FrontPage = ({ barPercent = '54px' }: { barPercent?: string }) => {

    return (
        <div>
            <StatusBar width={barPercent}/>
            <div className='logoContainer'>
            </div>
            <div className='imgContainer'>
                <ScoopsEyes className='eyes' />
                <img
                    className='imgGuy'
                    src={Guy1X}
                    srcSet={`${Guy1X} 1x, ${Guy2X} 2x, ${Guy3X} 3x`}
                    alt="Descripción de la imagen"
                />
            </div>
            <div className="container">
                <CustomerScoopsLogo className='logoContainer' />
                <ColorSvg />
                <div className='numberPage'>
                    <span>01</span>
                    <span></span>
                    <span>08</span>
                </div>
            </div>
        </div>
    )
}

export default FrontPage