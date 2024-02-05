const getApiData = () => {

  const url = `https://norma.nomoreparties.space/api/ingredients`;

  return fetch( url )
            .then( response => { 
                if ( !response.ok ) 
                {
                  throw new Error('Server returned ' + response.status);
                }
                return response.json()
            })
            .then( obj => obj.data )
            .catch( err => {
                alert('При загрузке списка ингредиентов возникла ошибка: ', err);
                return []
            })
  
  
}

export default getApiData;