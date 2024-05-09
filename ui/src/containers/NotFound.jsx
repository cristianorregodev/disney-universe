import React from 'react'
import { Button } from '../components/Button'

export const NotFound = () => {
    return (
        <div className="grid items-center justify-center min-h-[600px]">
            <img src="/404.svg" alt="Page Not Found" width={400} />
            <Button type={'anchor'} link={'/'}>
                Go Home
            </Button>
        </div>
    )
}
