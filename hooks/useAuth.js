'use client'

import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext()

const hardcodedUsers = {
  'admin@gmail.com': { password: '123456', role: 'admin' },
  'editor@gmail.com': { password: '123456', role: 'editor' },
}

// In a real app, use a library like jose or jsonwebtoken
const createToken = (user) => btoa(JSON.stringify(user));
const decodeToken = (token) => JSON.parse(atob(token));

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      try {
        const decodedUser = decodeToken(token);
        setUser(decodedUser)
      } catch (error) {
        console.error("Failed to decode token", error);
        localStorage.removeItem('authToken');
      }
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const foundUser = hardcodedUsers[email]
    if (foundUser && foundUser.password === password) {
      const userData = { email, role: foundUser.role, name: email.split('@')[0] }
      const token = createToken(userData);
      setUser(userData)
      localStorage.setItem('authToken', token)
      setIsLoginModalOpen(false)
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoginModalOpen, setIsLoginModalOpen, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
