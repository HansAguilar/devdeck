import { cn } from '@/utils/cn'
import React from 'react'
export default function Skeleton({ className }: { className: string }) {
    return (
        <div className={cn("animate-pulse bg-zinc-700", className)}></div>
    )
}