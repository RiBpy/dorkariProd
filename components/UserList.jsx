'use client'

import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@/components/ui/button'
import { deleteUser } from '@/helper/redux/user/userSlice'

export default function UserList() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.email} - {user.role}</p>
          </div>
          {user.role !== 'admin' && (
            <Button size="sm" variant="destructive" onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
          )}
        </div>
      ))}
    </div>
  )
}