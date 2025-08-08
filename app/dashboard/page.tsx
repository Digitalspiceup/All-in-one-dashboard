'use client'
import AppCard from '@/components/AppCard'
import ExpenseChart from '@/components/ExpenseChart'
import GraphCard from '@/components/GraphCard'
import Header from '@/components/Header'
import React from 'react'
import { BsBuildingCheck } from 'react-icons/bs'
import { FaRegHandshake, FaRupeeSign } from 'react-icons/fa'
import { HiOutlineBuildingOffice, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { MdOutlineAttachMoney } from 'react-icons/md'

const page = () => {
  return (
    <>
      {/* <Header name='Dashboard'/> */}
      <div className='p-4 flex flex-wrap gap-3 max-sm:flex-col'>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Properties Managed" content={241} type="number" percentageChange={42} Logo={HiOutlineBuildingOffice} logoBack='bg-blue-100' logoColor='#002a5f'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Total Sales" content={1123800} type="price" percentageChange={16} Logo={FaRupeeSign} logoBack='bg-green-100' logoColor='#125f00'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="New Clients" content={21} type="number" percentageChange={5} Logo={FaRegHandshake} logoBack='bg-orange-100' logoColor='#c58000'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Properties Sold" content={201} type="number" percentageChange={-22} Logo={BsBuildingCheck} logoBack='bg-cyan-100' logoColor='#002555'/>
        <GraphCard classes='p-4 w-1/2 max-sm:w-[100%]' title='Expense Overview'>
          <ExpenseChart />
        </GraphCard>
      </div>
    </>
    
  )
}

export default page