import { getUserData } from '../utils/api';
import { setUser } from '../redux/actions/userActions';


export const getUser = 
() => 
{
	return (dispatch) => 
    {
	  return getUserData()
            .then( res => {
                dispatch(setUser(res.user));
	          });
	};
};


export const checkUserAuth = 
    () => 
    {
        return (dispatch) => {
            
            if (localStorage.getItem("accessToken")) 
            {
                dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser(null));
                })

            } 

        };
    };


