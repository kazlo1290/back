import React from 'react'

function UserPublic({user}) {
    return (
        <div className='user'>
            <h3>{user && user.name}</h3>
        </div>
    )
}
export default UserPublic