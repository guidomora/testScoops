
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './SimpleButtons/CustomButton';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';

export interface NavigationButtonProps {
  pageUrl: string;
  text?: string;
  isFinal?: boolean;
  pageNumber?: number;
  hidden?: boolean;
}

const NavigationButton = ({ pageUrl, text, isFinal, pageNumber, hidden }: NavigationButtonProps) => {
  const { setPage } = useContext(AppContext)
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setPage(pageNumber!);
    navigate(pageUrl);
  };

  return (
    <CustomButton hidden={hidden} isFinal={isFinal} onClick={handleButtonClick}>
      {text}
    </CustomButton>
  );
};

export default NavigationButton