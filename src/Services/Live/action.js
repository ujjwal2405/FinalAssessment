import {DISPLAY_DATA} from './constant';

export const getlivedata = () => dispatch => {
  fetch(
    'https://api.jsonbin.io/b/5eac0b7b07d49135ba48c062',
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