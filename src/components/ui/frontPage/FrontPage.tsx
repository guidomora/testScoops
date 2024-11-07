import CustomerScoopsLogo from '../../../assets/svgs/CustomerScoopsLogo'
import '../../../styles/ui/frontPage.css'
import Group1x from '../../../../assets/imgs/Group1741x.png'
import Group2x from '../../../../assets/imgs/Group1752X.png'
import Group3x from '../../../../assets/imgs/Group1753X.png'
import GroupDesk1x from '../../../../assets/imgs/Group1741x.png'
import GroupDesk2x from '../../../../assets/imgs/Group1742x.png'
import GroupDesk3x from '../../../../assets/imgs/Group1743x.png'
import { StatusBar } from '../StatusBar/StatusBar'
import { AppContext } from '../../../context/AppContext'
import { useContext } from 'react'

const FrontPage = ({ barPercent = '54px' }: { barPercent?: string }) => {
    const { pageNumber } = useContext(AppContext)

    return (
        <div className='container'>
            <StatusBar width={barPercent} />
            <img
                id='imgMobTablet'
                className='imgGroup'
                src={Group1x}
                srcSet={`${Group1x} 1x, ${Group2x} 2x, ${Group3x} 3x`}
                alt="Descripción de la imagen"
            />
            <img
                id='imgDesktop'
                className='imgGroup'
                src={GroupDesk1x}
                srcSet={`${GroupDesk1x} 1x, ${GroupDesk2x} 2x, ${GroupDesk3x} 3x`}
                alt="Descripción de la imagen"
            />
            <CustomerScoopsLogo className='logoContainer' />
            <div className='numberPage'>
                <span>{pageNumber}</span>
                <span></span>
                <span>06</span>
            </div>
        </div>
    )
}




export default FrontPage

