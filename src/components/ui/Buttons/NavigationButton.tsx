
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './SimpleButtons/CustomButton';
import { PageContext } from '../../../context/PageContext';
import { useContext } from 'react';

export interface NavigationButtonProps {
    pageUrl:string;
    text?:string;
    isFinal?:boolean;
}

const NavigationButton = ({pageUrl, text, isFinal}:NavigationButtonProps) => {
  const {incrementPage} = useContext(PageContext)
    const navigate = useNavigate();  // Inicializamos el hook useNavigate

    const handleButtonClick = () => {
      incrementPage();  
      navigate(pageUrl);  // Navegamos a la página que viene en la prop nextPageUrl
    };
  
    return (
        <CustomButton isFinal={isFinal} onClick={handleButtonClick}>
          {text}
        </CustomButton>
    );
  };

export default NavigationButton