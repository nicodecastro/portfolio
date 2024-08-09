import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='text-center'>
        <h2>404 - Page Not Found</h2>
        <p>This page could not be found.</p>
        <Link href="/" className='font-bold rounded-lg p-2'>Return Home</Link>
    </div>
  )
}

export default NotFound