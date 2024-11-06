
import { useNavigate } from 'react-router-dom';

import { NavigationButtonProps } from './NavigationButton';
import { CustomBackButton } from './SimpleButtons/CustomBackButton';
import BackArrow from '../../../assets/svgs/BackArrow';


const NavigationBackButton = ({pageUrl}:NavigationButtonProps) => {
    const navigate = useNavigate();  // Inicializamos el hook useNavigate

    const handleButtonClick = () => {
    //   if (onClick) {
    //     onClick();  // Llamamos a la función onClick (para incrementar el contador u otra lógica)
    //   }
      navigate(pageUrl);  // Navegamos a la página que viene en la prop nextPageUrl
    };
  
    return (
        <CustomBackButton onClick={handleButtonClick}>
          <BackArrow />
        </CustomBackButton>
    );
  };

export default NavigationBackButton