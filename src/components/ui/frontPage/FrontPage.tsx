import CustomerScoopsLogo from '../../../assets/svgs/CustomerScoopsLogo'
import '../../../styles/ui/frontPage.css'
import Group1x from '../../../assets/imgs/Group1751x.png'
import Group2x from '../../../assets/imgs/Group1752X.png'
import Group3x from '../../../assets/imgs/Group1753X.png'
import { StatusBar } from '../StatusBar/StatusBar'
import { PageContext } from '../../../context/PageContext'
import { useContext } from 'react'

const FrontPage = ({ barPercent = '54px' }: { barPercent?: string }) => {
    const { pageNumber } = useContext(PageContext)

    return (
        <div className='container'>
            <StatusBar width={barPercent} />
            <img
                className='imgGroup'
                src={Group1x}
                srcSet={`${Group1x} 1x, ${Group2x} 2x, ${Group3x} 3x`}
                alt="Descripción de la imagen"
            />

            <CustomerScoopsLogo className='logoContainer' />
            <div className='numberPage'>
                <span>{pageNumber}</span>
                <span></span>
                <span>08</span>
            </div>
        </div>
    )
}

// TODO:
{/* 
            <div style={{ paddingLeft: '1rem' }}>
                <img className='colorSvg' src={Rectangle} alt="a man smiling to his phone" />
            </div>
            <img
                className='imgGuy'
                src={Guy1X}
                srcSet={`${Guy1X} 1x, ${Guy2X} 2x, ${Guy3X} 3x`}
                alt="Descripción de la imagen"
            />
            <ScoopsEyes className='eyes' />*/}

export default FrontPage

