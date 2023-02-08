import { useState } from "react";

export const useTogglePasswordVisibility = () => {
    const [paswordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if(rightIcon === 'eye') {
            setRightIcon('eye-off')
            setPasswordVisibility(!paswordVisibility)
        }else if (rightIcon === 'eye-off') {
            setRightIcon('eye')
            setPasswordVisibility(!paswordVisibility)
        }
    }
    return {
        paswordVisibility,
        rightIcon,
        handlePasswordVisibility
    }
}

