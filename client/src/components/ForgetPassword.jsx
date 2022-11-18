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
      title: 'Email enviado',
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
    }
}
  return (
    <div className='general'>
      <div>
        <div>
          <h1>Recupera tu contraseña</h1>
        </div>
        <form>
          <div>
            <label>Email:</label>
            <input name='email' onChange={handleChanges} type="email" />
          </div>
        </form>
        <button onClick={handleSubmit} className="boton">Envia Email</button>
        <Link to='/signin'><button className="boton">Regresa a Ingresar</button></Link>
      </div>
    </div>
  )
}

export default ForgetPassword