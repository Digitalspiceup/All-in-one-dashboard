import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from '@/lib/utils'
import CountUp from 'react-countup';
import { IconType } from 'react-icons';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { log } from 'console';

const AppCard = ({ classes, title, content, type, percentageChange, Logo, logoBack, logoColor}: { classes: string, title: string, content: any, type: string, percentageChange: number | null, Logo: IconType, logoBack: string, logoColor: string }) => {
    let insightText = "";
    console.log(percentageChange);
    if (percentageChange === null) {
        insightText = "No subscriptions activity yet";
    } else if (percentageChange === 0) {
        insightText = "You have spent the same as last month.";
        // "You started spending on subscriptions this month";
    } else {
        insightText = ' than last month';
    }
    console.log("insightText", insightText);
    
    return (
        <Card className={cn('shadow-md border-0', classes)}>
            <CardHeader className='p-0 flex gap-1 items-center justify-between w-full'>
               {title}
               <div className={`rounded-full ${logoBack} p-2`}><Logo color={logoColor} size={30}/></div>
            </CardHeader>
            <CardContent className='p-0'>
                <p className='text-4xl font-bold text-green-700 mt-0 mr-2'>
                    <CountUp prefix={type === 'price' ? '&#8377;' : ''} end={content} />
                    {/* {content} */}
                </p>
                <div className='flex items-center mt-4'>{percentageChange && percentageChange < 0 ? <TrendingDown className='text-red-500 mr-1 text-sm' /> : (percentageChange && percentageChange > 0 && <TrendingUp className='text-green-500 mr-1 text-sm' />)}
                {<span className={cn('text-xs text-stone-500 mb-1 mr-1',
                        percentageChange !== null &&
                        percentageChange !== 100 &&
                        (percentageChange > 0 ? 'text-green-500' : (percentageChange < 0 ? 'text-red-500' : '')))}>{percentageChange!==null && percentageChange}%</span>}
                    <span className='text-xs text-stone-500 mb-1'>{insightText}</span></div>
            </CardContent>
        </Card>
    )
}

export default AppCard
