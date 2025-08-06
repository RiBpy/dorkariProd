'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const withAuth = (WrappedComponent, allowedRoles) => {
  const AuthComponent = (props) => {
    const { user, loading, setIsLoginModalOpen } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        setIsLoginModalOpen(true)
      } else if (!loading && user && allowedRoles && !allowedRoles.includes(user.role)) {
        router.push('/') // Or a dedicated unauthorized page
      }
    }, [user, loading, router, setIsLoginModalOpen])

    if (loading) {
      return <div>Loading...</div> // Or a spinner component
    }

    if (user && allowedRoles && allowedRoles.includes(user.role)) {
      return <WrappedComponent {...props} />
    }

    return null
  }

  // Set display name for better debugging
  AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;


  return AuthComponent
}

export default withAuth
