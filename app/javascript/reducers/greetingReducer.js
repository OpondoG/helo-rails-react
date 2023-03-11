const initialState = {
  content: ''
}

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return {
        content: action.payload.content
      }
    default:
      return state
  }
}

export default greetingReducer
