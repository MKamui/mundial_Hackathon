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
      title: 'Bienvenido nuevamente!',
      showConfirmButton: false,
      timer: 2000
    })
    navigate('/account')
    } catch (error) {
      if (error.code === 'auth/user-not-found'){
        Swal.fire({
        icon: 'error',
        title: 'Usuario no encontrado',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/wrong-password'){
        Swal.fire({
        icon: 'error',
        title: 'Contraseña equivocada',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/internal-error'){
        Swal.fire({
        icon: 'error',
        title: 'Llena la contraseña',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/invalid-email'){
        Swal.fire({
        icon: 'error',
        title: 'Usa un email valido',
        showConfirmButton: false,
        timer: 2000
        })}
      }
  }

  return (
    <div className="general">
      <div>
        <div>
          <h1>Ingresa en tu cuenta</h1>
          <p>No tienes una cuenta aún? <Link to='/createaccount'>Crea una cuenta.</Link></p>
        </div>
        <form>
          <div>
            <label>Email:</label>
            <input name='email' onChange={handleChanges} type="email" />
          </div>
          <div>
            <label>Contraseña:</label>
            <input name='password' onChange={handleChanges} type="password" />
          </div>
        </form>
          <button onClick={handleSubmit} className='boton'>Ingresa</button>
          <Link to='/forget'><button className='boton'>Olvidaste la contraseña?</button></Link>
      </div>
    </div>
  )
}

export default SignIn