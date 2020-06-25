import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useToken = () => {
    const [token, setToken] = useState('');
    const history = useHistory();

    const validToken = () => {
        setToken(localStorage.getItem('token'))
        if(token === null){
            history.push('/login');
        }
    }
    
    return { token, validToken }
}

export default useToken;