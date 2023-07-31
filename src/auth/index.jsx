import { createContext, useContext, useReducer } from "react"

const initialState = { user: 0, auth: false }
export const AuthContext = createContext(initialState)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: 2, auth: true}
    case 'LOGOUT':
      return { ...state, user: 0, auth: false }
    default:
      return state
  }
}

export const AuthProvider = ({children}) => {
  const [authed, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={[authed, dispatch]}>
        {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = () => useContext(AuthContext)