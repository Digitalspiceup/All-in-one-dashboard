import React from 'react'
import { Table, TableBody, TableCell, TableHeader,TableHead, TableRow } from '@/components/ui/table'
import { recentlyJoinedEmployees } from '@/lib/dummyData'


const NewJoiners = () => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Permanent':
                return 'w-fit rounded-full px-2 py-1 h-fit bg-yellow-100 text-yellow-600'
                break;
            case 'On Leave':
                return 'w-fit rounded-full px-2 py-1 h-fit bg-orange-200 text-orange-600'
                break;
            case 'Contract':
                return 'w-fit rounded-full px-2 py-1 h-fit bg-blue-300 text-blue-800'
                break;
            default:
                break;
        }
    }
  return (
    <div className='w-full rounded-lg p-4 shadow-md border'>
        <p className='mb-2'>Recently Joined Employees</p>
        <Table>
            <TableHeader>
                <TableRow>
                    {Object.keys(recentlyJoinedEmployees[0]).map((item, i) => (
                        <TableHead key={i}>{item[0].toLocaleUpperCase() + item.slice(1)}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className='text-xs'>
                {recentlyJoinedEmployees.map((employee) => (
                    <TableRow key={employee.id} className='hover:bg-zinc-200'>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell><p className={getStatusColor(employee.status)}>{employee.status}</p></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default NewJoiners