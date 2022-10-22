import React from 'react'
import UserProfile from './userProfile'

const UserData = ({ data }) => {
  return (
    <section className='section-user'>
      <article className='user-info-wrapper'>

        {data.map((users, i) => {
          console.log(users)
          return (
            <div className='user-info' key={i}>
              <div className='user-image'>
                <img src={users.picture.medium} alt='' />
              </div>
              <h3 className='heading-alt'> User {i + 1}</h3>
              <h3 className='text'>Name: {users.name.first} {users.name.last} </h3>
              <h3 className='text'>Gender: {users.gender} </h3>
              <h3 className='text'>Email: {users.email}</h3>
            </div>

          )
        })}
      </article>
    </section>

  )
}

export default UserData