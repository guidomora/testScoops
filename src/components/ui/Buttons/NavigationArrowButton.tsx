
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';
import NextArrow from '../../../assets/svgs/NextArrow';
import { CustomButtonNextArrow } from './SimpleButtons/CustomButtonNextArrow';

export interface NavigationButtonProps {
    pageUrl: string;
    text?: string;
    isFinal?: boolean;
    pageNumber?: number;
    hidden?: boolean;
}

const NavigationArrowButton = ({ pageUrl, text, isFinal, pageNumber, hidden }: NavigationButtonProps) => {
    const { setPage } = useContext(AppContext)
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setPage(pageNumber!);
        navigate(pageUrl);
    };

    return (
        <CustomButtonNextArrow hidden={hidden} isFinal={isFinal} onClick={handleButtonClick}>
            {text}
            <NextArrow />
        </CustomButtonNextArrow>
    );
};

export default NavigationArrowButton