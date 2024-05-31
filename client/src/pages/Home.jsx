import Moviecard from '@/components/Moviecard'
import React from 'react'

function Home() {


  return (
    <div className='grid grid-cols-3 gap-2 pt-[20px]'>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
    </div>
  )
}

export default Home