import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2";
import "../css/login.css";

const SignIn = () => {
  const [userAccount, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const {signIn} = UserAuth()
  const handleChanges = (e) => {
    setUser({ ...userAccount, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
    await signIn(userAccount.email, userAccount.password)
    Swal.fire({
      icon: 'success',
      title: 'Welcome again!',
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
      if (error.code === 'auth/wrong-password'){
        Swal.fire({
        icon: 'error',
        title: 'Wrong Password',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/internal-error'){
        Swal.fire({
        icon: 'error',
        title: 'Fill the password',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/invalid-email'){
        Swal.fire({
        icon: 'error',
        title: 'Use a valid email',
        showConfirmButton: false,
        timer: 2000
        })}
      }
  }

  return (
    <div className="general">
      <div>
        <div>
          <h1>Sign in to your profile</h1>
          <p>Don't have an account yet? <Link to='/createaccount'>Create account.</Link></p>
        </div>
        <form>
          <div>
            <label>Email Address:</label>
            <input name='email' onChange={handleChanges} type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input name='password' onChange={handleChanges} type="password" />
          </div>
        </form>
          <button onClick={handleSubmit} className='boton'>Sign In</button>
          <Link to='/forget'><button className='boton'>Forget password?</button></Link>
      </div>
    </div>
  )
}

export default SignIn