import { getUserData } from '../utils/api';
import { setUser } from '../redux/actions/userActions';
import { AppThunk, AppDispatch } from '../index';

export const getUser: AppThunk = 
() => 
{
	return (dispatch: AppDispatch) => 
    {
	  return getUserData()
            .then( res => {
                dispatch(setUser(res.user));
	          });
	};
};


export const checkUserAuth: AppThunk = 
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


