import { createContext, useContext, useReducer } from "react"

export const ACTIONS = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  EDDIT_REQUEST: 'EDDIT_REQUEST',
  EDDIT_SUCCESS: 'EDDIT_SUCCESS',
}

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const AuthContext = createContext(initialState)

export const reducer = (state = initialState, action) => {

  // console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, user: action.payload, error: null };

    case ACTIONS.LOGIN_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false, error: action.payload };

    case ACTIONS.LOGOUT:
      return { ...state, isLoading: false, isLoggedIn: false, user: null, error: null, };

    case ACTIONS.REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTIONS.REGISTER_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, user: action.payload, error: null };

    case ACTIONS.REGISTER_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false, error: action.payload };

    case ACTIONS.EDDIT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTIONS.EDDIT_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, user: action.payload, error: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [authed, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={[authed, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = () => useContext(AuthContext)