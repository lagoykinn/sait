import { NavigateFunction, useNavigate } from "react-router-dom";

export const History: { navigate: any; push: (page: string, ...rest: any[]) => void } = {
    navigate: null,
    push: (page, ...rest) => History.navigate!(page, ...rest),
  };
  
  const NavigateSetter = () => {
    History.navigate = useNavigate();
  
    return null;
  };
  
export default NavigateSetter;


