import Link from 'next/link'
import React from 'react'

export default function UserPage() {
  return (
    <div>
        <h1>Hello User</h1>
        <Link href={"/users/new"}>+New User</Link>
    </div>
  )
}
