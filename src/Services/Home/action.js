import {DISPLAY_DATA} from './constant';

export const getdata = () => dispatch => {
  fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=820016b7116f872f5f27bf56f9fdfb66',
    {
      method: 'GET',
      
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
       
      dispatch({
        type: DISPLAY_DATA,
        data: responseJson,
        
      });
    });
};