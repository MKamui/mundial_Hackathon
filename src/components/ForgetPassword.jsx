import React, {useState} from 'react'
import {sendPasswordResetEmail} from 'firebase/auth'
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const ForgetPassword = () => {
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  const handleChanges = (e) => {
    setEmail( e.target.value );
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await sendPasswordResetEmail(auth, email)
      Swal.fire({
      icon: 'success',
      title: 'Email send',
      showConfirmButton: false,
      timer: 2000
      })
    navigate('/account')
    } catch (error) {
      if (error.code === 'auth/user-not-found'){
        Swal.fire({
        icon: 'error',
        title: 'User not found',
        showConfirmButton: false,
        timer: 2000
        })}
    }
}
  return (
    <div>
      <div>
        <div>
          <h1>Recover your password</h1>
        </div>
        <form>
          <div>
            <label>Email Address:</label>
            <input name='email' onChange={handleChanges} type="email" />
          </div>
          <button onClick={handleSubmit}>Send Email</button>
        </form>
        <Link to='/signin'><button>Back SignIn</button></Link>
      </div>
    </div>
  )
}

export default ForgetPassword