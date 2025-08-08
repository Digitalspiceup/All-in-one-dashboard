import Header from '@/components/Header'
import React from 'react'
import EmployeeTable from './EmployeeTable'

const page = () => {
  return (
    <>
        <Header menu='hrms' submenu='employees'/>
        <div className="p-4">
            <EmployeeTable />
        </div>
    </>
  )
}

export default page