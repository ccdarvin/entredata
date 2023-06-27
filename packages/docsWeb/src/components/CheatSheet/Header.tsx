import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function Header({
  children,
}:{
  children: React.ReactNode
}) {
  return <h2 className={clsx(styles.header)}>
    {children}
  </h2>
}