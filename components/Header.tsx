import React from 'react'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from './ui/breadcrumb'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const Header = ({submenu, menu}:{submenu: string, menu: string}) => {
  return (
    <div className="py-2 px-4 text-2xl font-semibold w-full border bg-white sticky top-0 z-10">
      <Breadcrumb className='h-full my-auto py-2'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${menu}`} className='text-base'>{menu}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator><FaChevronRight /></BreadcrumbSeparator>
         <BreadcrumbItem>
          <BreadcrumbPage className='text-lg font-medium text-green-600'>{submenu}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}

export default Header