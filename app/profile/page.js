'use client'

import withAuth from '@/components/withAuth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAuth } from '@/hooks/useAuth'

const ProfilePage = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        {user && (
          <div className="space-y-4">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Role:</span> {user.role}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default withAuth(ProfilePage, ['admin', 'editor'])
