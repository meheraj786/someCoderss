import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import logo from "../public/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 mb-6">
      <Image src={logo} alt="Logo" width={200} height={200} />
      
    </Link>
  )
}

export default Logo