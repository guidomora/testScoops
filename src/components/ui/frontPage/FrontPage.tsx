import CustomerScoopsLogo from '../../../assets/svgs/CustomerScoopsLogo'
import '../../../styles/ui/frontPage.css'
import Guy1X from '../../../assets/imgs/laughing-happy-guy-0.png'
import Guy2X from '../../../assets/imgs/laughing-happy-guy-1.png'
import Guy3X from '../../../assets/imgs/laughing-happy-guy- 2.png'
import ScoopsEyes from '../../../assets/svgs/ScoopsEyes'
import Rectangle from '../../../assets/imgs/Rectangle.png'
import { StatusBar } from '../StatusBar/StatusBar'
import { PageContext } from '../../../context/PageContext'
import { useContext } from 'react'

const FrontPage = ({ barPercent = '54px' }: { barPercent?: string }) => {
    const { pageNumber } = useContext(PageContext)

    return (
        <div className='container'>
            <StatusBar width={barPercent} />
            <div style={{ paddingLeft: '1rem' }}>
                <img className='colorSvg' src={Rectangle} alt="a man smiling to his phone" />
            </div>
            <img
                className='imgGuy'
                src={Guy1X}
                srcSet={`${Guy1X} 1x, ${Guy2X} 2x, ${Guy3X} 3x`}
                alt="Descripción de la imagen"
            />
            <ScoopsEyes className='eyes' />
            <CustomerScoopsLogo className='logoContainer' />
            <div className='numberPage'>
                <span>{pageNumber}</span>
                <span></span>
                <span>08</span>
            </div>
        </div>
    )
}

export default FrontPage

