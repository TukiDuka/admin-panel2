import React from 'react'
import Sidebar from '../components/Sidebar'
import UserTable from '../components/UserTable'
import ProductTable from '../components/ProductTable'
import CategoryTable from '../components/CategoryTable'
import ModeratorDetails from '../components/ModeratorDetails'
import CompanyInfo from '../components/CompanyInfo'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="font-roboto bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="container mx-auto p-4">
            <Header />
            <UserTable />
            <ProductTable />
            <CategoryTable/>
            <ModeratorDetails/>
            <CompanyInfo/>
         
            
          </div>
        </div>
      </div>
    </div>
  )
}
