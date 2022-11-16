import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2";
import {MdEmail, MdPerson} from 'react-icons/md'
import { updateProfile } from 'firebase/auth'

const Account = () => {
  const {user, logout} = UserAuth()
  const navigate = useNavigate()
  const [name, setName] = useState()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      Swal.fire({
        icon: 'success',
        title: 'See you later!',
        showConfirmButton: false,
        timer: 2000
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleName = async (e) => {
    setName( e.target.value )
  }

  const changeName = async () => {
    try {
      updateProfile(user, {displayName: name})
      Swal.fire({
        icon: 'success',
        title: 'Name Updated',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <h1>{user?.displayName}</h1>
      </div>
      <div>
        <div>
          <h2>Account</h2>
          <div>
            <label>Email</label>
            <MdEmail/>
            <input
              type="email"
              placeholder={user && user.email}
              disabled
            />
          </div>
        </div>
      </div>
      <hr/>
      <div>
        <h2>Personal info</h2>
        <div>
          <div>
            <label>Display name</label>
            <div>
              <MdPerson/>
              <input
                type="text"
                placeholder={user?.displayName}
                onChange={handleName}
              />
            </div>
            <button onClick={changeName}>Update Display name</button>
          </div>
        </div>
      </div>
      <hr/>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <Link to='/'><button>Back Home</button></Link>
      </div>
    </div>
  )
}

export default Account