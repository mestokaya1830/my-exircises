import React, { useState } from 'react'

export const AuthContext = React.createContext(null)

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

