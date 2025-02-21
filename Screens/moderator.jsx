import React from 'react'
import ModeratorTable from '../components/ModeratorDetails'
import Header from '../components/HeaderProduct'

export default function moderator() {
  return (
    <div className='padding px-30 py-10 bg-gray-100 min-h-screen'><Header/><ModeratorTable/></div>
  )
}
