import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from '@/lib/utils'

const GraphCard = ({classes, title, children}:{classes: string, title: string, children: React.ReactNode}) => {
  return (
    <Card className={cn('shadow-md', classes)}>
        <CardHeader className='p-0 flex gap-1 items-center justify-between w-full'>
            {title}
        </CardHeader>
        <CardContent className='p-0'>
            {children}
        </CardContent>
    </Card>
  )
}

export default GraphCard