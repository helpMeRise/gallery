import { setToken } from '../../api/token';


const initialState = {
  token: '',
};

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = token => ({
  type: DELETE_TOKEN,
  token,
});

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    console.log(action);
    setToken(action.token);
  }

  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken('');
      localStorage.setItem('bearer', '');
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
