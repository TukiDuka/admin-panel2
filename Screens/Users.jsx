import React from 'react'
import Header from '../components/HeaderProduct'
import UserTable from '../components/UserTable'

export default function Users() {
  return (
    <div className='padding px-30 py-10 bg-gray-100 min-h-screen'>
    <Header/>
    <UserTable/>
    </div>
  )
}
