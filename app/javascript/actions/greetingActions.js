import axios from 'axios'

export const getGreeting = () => {
  return dispatch => {
    axios.get('/api/messages/random')
      .then(response => {
        dispatch({
          type: 'GET_GREETING',
          payload: response.data
        })
      })
  }
}
