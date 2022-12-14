import React, { useState, createContext, useContext } from 'react'

const UserContext = createContext({
  isUser: false,
})

export const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false)

  const value = {
    isUser,
    setIsUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
