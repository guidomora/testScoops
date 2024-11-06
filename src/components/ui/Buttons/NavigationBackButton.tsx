
import { useNavigate } from 'react-router-dom';

import { NavigationButtonProps } from './NavigationButton';
import { CustomBackButton } from './SimpleButtons/CustomBackButton';
import BackArrow from '../../../assets/svgs/BackArrow';
import { PageContext } from '../../../context/PageContext';
import { useContext } from 'react';


const NavigationBackButton = ({pageUrl}:NavigationButtonProps) => {
  const {decrementPage} = useContext(PageContext)
    const navigate = useNavigate();

    const handleButtonClick = () => {
      decrementPage();
      navigate(pageUrl); 
    };
  
    return (
        <CustomBackButton onClick={handleButtonClick}>
          <BackArrow />
        </CustomBackButton>
    );
  };

export default NavigationBackButton