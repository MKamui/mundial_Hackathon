import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2"

const CreateAccount = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if(user !== undefined){
    await createUser(user?.email, user?.password)
    Swal.fire({
      icon: 'success',
      title: 'Welcome to Sneaker Paradise!',
      showConfirmButton: false,
      timer: 2000
    })
    navigate('/')
    window.location.reload()
  }
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/email-already-in-use'){
        Swal.fire({
        icon: 'error',
        title: 'Email already in use',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/weak-password'){
        Swal.fire({
        icon: 'error',
        title: 'The Password should be at least 6 characters',
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
        <h1>Create an account</h1>
        <p>Already have an account? <Link to='/signin'>Sign in.</Link></p>
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
        <button>Create account</button>
        <Link to='/'><button>Back SignIn</button></Link>
      </form>
    </div>
  )
}

export default CreateAccount