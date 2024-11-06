
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './SimpleButtons/CustomButton';

export interface NavigationButtonProps {
    pageUrl:string;
    text?:string;
}

const NavigationButton = ({pageUrl, text}:NavigationButtonProps) => {
    const navigate = useNavigate();  // Inicializamos el hook useNavigate

    const handleButtonClick = () => {
    //   if (onClick) {
    //     onClick();  // Llamamos a la función onClick (para incrementar el contador u otra lógica)
    //   }
      navigate(pageUrl);  // Navegamos a la página que viene en la prop nextPageUrl
    };
  
    return (
        <CustomButton onClick={handleButtonClick}>
          {text}
        </CustomButton>
    );
  };

export default NavigationButton