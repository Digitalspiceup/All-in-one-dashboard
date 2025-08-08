'use client'
import AppCard from '@/components/AppCard'
import DoughnutChart from '@/components/DoughnutChart'
import ExpenseChart from '@/components/ExpenseChart'
import GraphCard from '@/components/GraphCard'
import Header from '@/components/Header'
import LineChart from '@/components/LineChart'
import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import { IoDocumentText, IoPeople } from 'react-icons/io5'
import { PiBagBold } from 'react-icons/pi'
import JobApplChart from './JobApplChart'
import NewJoiners from './NewJoiners'

const page = () => {
  return (
    <>
      <Header  menu='hrms' submenu='Dashboard'/>
      <div className='p-4 flex flex-wrap gap-3 max-sm:flex-col'>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Total Employees" content={241} type="number" percentageChange={42} Logo={IoIosPeople} logoBack='bg-blue-100' logoColor='#002a5f'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Job Applications" content={1123} type="number" percentageChange={16} Logo={PiBagBold} logoBack='bg-green-100' logoColor='#125f00'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="New Projects" content={21} type="number" percentageChange={5} Logo={IoDocumentText} logoBack='bg-orange-100' logoColor='#c58000'/>
        <AppCard classes='p-4 w-1/3 max-sm:w-[100%] max-md:w-[48%] lg:w-[24.2%]' title="Clients" content={31} type="number" percentageChange={-22} Logo={IoPeople} logoBack='bg-purple-100' logoColor='#330081'/>
        <GraphCard classes='p-4 w-[40%] max-sm:w-[100%]' title='Projects Status'>
          <DoughnutChart />
        </GraphCard>
        <GraphCard classes='p-4 w-[58.8%] max-sm:w-[100%]' title='Job Statistics'>
          <JobApplChart />
        </GraphCard>
        <NewJoiners />
      </div>
    </>
  )
}

export default page