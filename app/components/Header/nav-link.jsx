'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./header.module.scss";

const NavLiink = ({href, children}) => {
    const path = usePathname()


  return (
    <Link className={path.startsWith(href) ? styles.active : undefined} href={href}>{children}</Link>
  )
}

export default NavLiink
