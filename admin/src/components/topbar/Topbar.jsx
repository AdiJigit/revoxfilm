import React from 'react'
import './topbar.css'
import { MdOutlineNotifications } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdOutlineNotifications size={25} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage size={25} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoIosSettings size={25} />
          </div>
          <img src="https://wallpaper.dog/large/20542508.png" alt="" className="topAvatar" />
            <FiLogOut size={20} className='topLogout' onClick={handleLogout} />
        </div>
      </div>
    </div>
  )
}
