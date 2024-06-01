import React from 'react'

function Logout() {
    const handleLogout = ()=>{
      localStorage.removeItem("token")
    localStorage.removeItem("username")
    window.location.reload()
    }
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
