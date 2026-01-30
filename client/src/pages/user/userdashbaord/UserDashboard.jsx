import React from 'react'
import UserLeftBar from '../../../components/userleftbar/UserLeftBar'
import UserRightBar from '../../../components/userrightbar/UserRightBar'

const UserDashboard = () => {
  return (
    <div className='d-flex w-full'>
        <UserLeftBar/>
        <UserRightBar>
            this
        </UserRightBar>
    </div>
  )
}

export default UserDashboard