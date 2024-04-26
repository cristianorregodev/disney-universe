import { createContext, useState } from 'react'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const user = window.sessionStorage.getItem('authenticatedUser')
    return JSON.parse(user)
  })

  const activateAuth = (authenticatedUser) => {
    window.sessionStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser))
    const user = window.sessionStorage.getItem('authenticatedUser')

    setIsAuth(JSON.parse(user))
  }

  const removeAuth = () => {
    window.sessionStorage.removeItem('authenticatedUser')
    setIsAuth(false)
  }
  return <AuthContext.Provider value={{ isAuth, activateAuth, removeAuth }}>{children}</AuthContext.Provider>
}
export { AuthProvider, AuthContext }
