import { getUserData } from '../utils/api';
import { setUser, userAuthRequest } from '../redux/actions/userActions';


export const getUser = () => {
	return (dispatch) => {
	  return getUserData()
            .then( res => {
              console.log('getUserData res', res)
		          dispatch(setUser(res.user));
	          });
	};
};


export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) 
        {
            dispatch(getUser())
              .catch(() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  dispatch(setUser(null));
               })
              .finally(() => dispatch(userAuthRequest(true)));
        } 
        else 
        {
            dispatch(userAuthRequest(true));
        }
    };
};


