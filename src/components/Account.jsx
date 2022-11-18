import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2";
import {MdEmail, MdPerson, MdFlag} from 'react-icons/md'
import {GiPodiumWinner} from 'react-icons/gi'
import { updateProfile } from 'firebase/auth'
import '../css/login.css'

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
        title: 'Nos vemos luego!',
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
        title: 'Nombre actualizado',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='general'>
      <div>
        <h1>Cuenta</h1>
      </div>
      <div>
        <div>
          <h2>{user?.displayName}</h2>
          <div className='accountdiv'>
            <label>Email:</label>
            <MdEmail size={25} className="icon"/>
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
        <h2>Información personal</h2>
        <div>
          <div className='accountdiv'>
            <label>Nombre de Usuario:</label>
            <div>
              <MdPerson size={25} className="icon"/>
              <input
                type="text"
                placeholder={user?.displayName}
                onChange={handleName}
              />
            </div>
            <button onClick={changeName} className="boton">Actualiza tu nombre</button>
          </div>
          <div className='accountdiv'>
            <label>Equipo favorito:</label>
            <div>
              <MdFlag size={25} className="icon"/>
              <select
                type="select"
              />
            </div>
          </div>
          <div className='accountdiv'>
            <label>Éxito en pronóstico:</label>
            <div>
              <GiPodiumWinner size={25} className="icon"/>
              <input
                type="text"
                placeholder='Porcentaje'
              />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div>
        <button onClick={handleLogout}  className="boton">Logout</button>
        <Link to='/'><button  className="boton">Home</button></Link>
      </div>
    </div>
  )
}

export default Account