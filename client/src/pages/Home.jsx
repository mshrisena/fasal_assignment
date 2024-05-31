import React from 'react'

function Home() {

    if(!localStorage.getItem('token')){
        window.location.href = '/about'
    }
  return (
    <div>Home
    </div>
  )
}

export default Home