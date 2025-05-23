import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav>
        <ul className='flex justify-center gap-10 items-center text-white p-4  bg-blue-600 '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/dashboard">Admin</Link></li>
        </ul>
    </nav>
  )
}

export default navbar