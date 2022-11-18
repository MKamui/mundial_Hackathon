import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2"
import '../css/login.css'

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
      title: 'Bienvenido a Prode Mundial!',
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
        title: 'El email ya ha sido usado',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/weak-password'){
        Swal.fire({
        icon: 'error',
        title: 'La contraseña debe ser de mínimo 6 caracteres',
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
    <div className='general'>
      <div>
        <h1>Crea una cuenta</h1>
        <p>Ya posees una cuenta? <Link to='/signin'>Ingresa.</Link></p>
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
      <button onClick={handleSubmit} className="boton">Crea una cuenta</button>
      <Link to='/'><button className="boton">Home</button></Link>
    </div>
  )
}

export default CreateAccount