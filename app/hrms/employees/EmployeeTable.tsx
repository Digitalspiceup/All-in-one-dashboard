'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDebounce } from '@/custom-hooks/useDebounce'
import { allemployees } from '@/lib/dummyData'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { LuSearch } from 'react-icons/lu'

const EmployeeTable = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchVal, setSearchVal] = useState("")
    const [departmentName, setDepartmentName] = useState('')
    const [filteredEmployees, setFilteredEmployees] = useState(allemployees)
    const limit = 10;
    const pages = Math.ceil(filteredEmployees.length / 10);
    const pagesArr = new Array(pages).fill(0);
    const debouncedSearch = useDebounce(searchVal, 300);
    const goBack = () => {
        if (currentPage <= 1) return;
        else setCurrentPage(currentPage - 1)
    }
    const goNext = () => {
        if (currentPage == pages) return;
        else setCurrentPage(currentPage + 1)
    }
    useEffect(() => {
        let filtered = allemployees;
        if(debouncedSearch){
            filtered = filtered.filter(employee => employee.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
        }
        if(departmentName){
            filtered = departmentName === 'All' ? filtered : filtered.filter(employee => employee.department === departmentName)
        }
        setFilteredEmployees(filtered);
    }, [debouncedSearch, allemployees, departmentName]);
    const departments = ['All', ...new Set(allemployees.map(employee => employee.department))]; 
    // const handleFilterSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchVal(e.target.value)
    //     const filteredEmp = useDebounce(allemployees.filter(employee => employee.name.includes(e.target.value)), 300)
    //     setFilteredEmployees(filteredEmp)
    // }
    return (
        <div className='w-full rounded-lg p-4 shadow-md border bg-white'>
            <div className="flex justify-between mb-2">
                <p className='mb-2 text-lg font-medium'>Employees Directory</p>
                <div className="flex gap-2">
                    <Select value={departmentName} onValueChange={(selection) => setDepartmentName(selection)}>
                        <SelectTrigger className="w-52">
                            <SelectValue placeholder="Department" />
                        </SelectTrigger>
                        <SelectContent>
                            {departments.map((department, d) => (
                                <SelectItem value={department} key={d}>{department}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className='p-2 border rounded-md flex gap-2 items-center'>
                        <LuSearch />
                        <input type="search" placeholder='Search employee...' className='text-sm outline-0 border-0 w-52' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                    </div>
                </div>

            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        {Object.keys(allemployees[0]).filter(item => item !== 'avatar').map((item, i) => (
                            <TableHead key={i} className='text-base'>{item[0].toLocaleUpperCase() + item.slice(1)}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className='text-xs'>
                    {filteredEmployees.slice((currentPage - 1) * limit, currentPage * limit).map((employee) => (
                        <TableRow key={employee.id} className='hover:bg-zinc-200'>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell className='flex gap-2 items-center'>
                                <Image src={employee.avatar} width={24} height={24} alt='emp'/>{employee.name}
                            </TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.role}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.phone}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                            <TableCell>{employee.joinedOn}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='flex gap-2 items-center m-auto w-fit mt-4'>
                <button className=' p-1 rounded-sm cursor-pointer transition duration-300' onClick={goBack}><FaChevronLeft /></button>
                {pagesArr.map((_, i) => (
                    <button key={i + 1} className={cn('border-black border w-6 h-6 rounded-sm cursor-pointer hover:bg-black hover:text-white transition duration-300', currentPage === i + 1 && 'bg-black text-white')} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                ))}
                <button className=' p-1 rounded-sm cursor-pointer transition duration-300' onClick={goNext}><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default EmployeeTable