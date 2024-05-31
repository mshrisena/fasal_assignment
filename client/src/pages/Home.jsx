import Moviecard from '@/components/Moviecard'
import React from 'react'

function Home() {


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-[10px] bg-gray-700'>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
    </div>
  )
}

export default Home