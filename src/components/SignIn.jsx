import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2";

const SignIn = () => {
  const [userAccount, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const {signIn} = UserAuth()
  const {googleSignIn} = UserAuth()
  const handleChanges = (e) => {
    setUser({ ...userAccount, [e.target.name]: e.target.value });
  }

  const handleGoogleSignIn = async () => {
    try {
      await Swal.fire({
        icon: 'success',
        title: 'Welcome Google User!',
        showConfirmButton: false,
        timer: 2000
      })
      await googleSignIn()
      navigate('/account')
    } catch (error) {
      console.log(error)
    }
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
    <div>
      <div>
        <div>
          <h1>Sign in to your profile</h1>
          <p>Don't have an account yet? <Link to='/createaccount'>Create account.</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address:</label>
            <input name='email' onChange={handleChanges} type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input name='password' onChange={handleChanges} type="password" />
          </div>
          <button className='w-full py-4 my-2'>Sign In</button>
          <Link to='/forget'><button>Forget password?</button></Link>
        </form>
        <button onClick={handleGoogleSignIn} >Google Sign In</button>
      </div>
    </div>
  )
}

export default SignIn