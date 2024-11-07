
import { useNavigate } from 'react-router-dom';

import { NavigationButtonProps } from './NavigationButton';
import { CustomBackButton } from './SimpleButtons/CustomBackButton';
import BackArrow from '../../../assets/svgs/BackArrow';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';


const NavigationBackButton = ({pageUrl, pageNumber}:NavigationButtonProps) => {
  const {setPage} = useContext(AppContext)
    const navigate = useNavigate();

    const handleButtonClick = () => {
      // decrementPage();
      setPage(pageNumber!);
      navigate(pageUrl); 
    };
  
    return (
        <CustomBackButton onClick={handleButtonClick}>
          <BackArrow />
        </CustomBackButton>
    );
  };

export default NavigationBackButton