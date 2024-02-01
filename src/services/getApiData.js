const getApiData = ( setLoading) => {

    const url = `https://norma.nomoreparties.space/api/ingredients`;

    fetch(url)
    .then(response => { 
      if (!response.ok) 
      {
        throw new Error('Server returned ' + response.status);
      }
      return response.json()
    })
    .then( obj => obj.data )
    // .then( () => setLoading(false) )
    .catch(err => {
      alert('При загрузке списка ингредиентов возникла ошибка: ', err);
      return []
    })
  
  
  }

export default getApiData;


// Предыдущая версия getApiData

/* 
  const getApiData = (setIngredients, setLoading) => {

  const url = `https://norma.nomoreparties.space/api/ingredients`;

  fetch(url)
  .then(response => { 
    if (!response.ok) 
    {
      throw new Error('Server returned ' + response.status);
    }
    return response.json()
  })
  .then( obj => setIngredients(obj.data) )
  .then( () => setLoading(false) )
  .catch(error => {
    alert('При загрузке списка ингредиентов возникла ошибка: ', error);
    return []
  })

*/


// }

// export default getApiData;