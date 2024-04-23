import { getUserData } from '../utils/api';
import { setUser } from '../redux/actions/userActions';
import { AppDispatch } from '../index';

export const getUser = 
() => 
    {
        return async (dispatch: AppDispatch) => 
        {
            const res = await getUserData();
            
                dispatch(setUser(res.user));
            
        };
    };


export const checkUserAuth = 
    () => 
    {
        return (dispatch: AppDispatch) => {
            
            if (localStorage.getItem("accessToken")) 
            {
                dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser({name: '', email: '', password: ''}));
                })

            } 

        };
    };


